#!/usr/bin/env python3
"""Export public WordPress pages and posts from REST API JSON to Obsidian Markdown."""

from __future__ import annotations

import argparse
import html
import json
import re
import shutil
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse


EXCLUDED_PAGE_SLUGS = {
    "account",
    "canceled",
    "cart",
    "checkout",
    "giftcards",
    "mailing_confirmed",
    "success",
    "tienda",
}


def yaml_string(value: str) -> str:
    """JSON strings are also valid YAML strings and avoid escaping surprises."""
    return json.dumps(html.unescape(value), ensure_ascii=False)


class MarkdownParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.parts: list[str] = []
        self.skip_depth = 0
        self.list_stack: list[str] = []
        self.link_stack: list[str | None] = []

    def add(self, value: str) -> None:
        if not self.skip_depth:
            self.parts.append(value)

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        attrs_dict = dict(attrs)
        if tag in {"script", "style", "noscript", "svg"}:
            self.skip_depth += 1
            return
        if self.skip_depth:
            return
        if re.fullmatch(r"h[1-6]", tag):
            self.add("\n\n" + "#" * int(tag[1]) + " ")
        elif tag in {"p", "div", "section", "article", "header", "footer", "figure", "figcaption"}:
            self.add("\n\n")
        elif tag == "br":
            self.add("\n")
        elif tag in {"strong", "b"}:
            self.add("**")
        elif tag in {"em", "i"}:
            self.add("*")
        elif tag == "blockquote":
            self.add("\n\n> ")
        elif tag in {"ul", "ol"}:
            self.list_stack.append(tag)
            self.add("\n")
        elif tag == "li":
            indent = "  " * max(0, len(self.list_stack) - 1)
            marker = "1. " if self.list_stack and self.list_stack[-1] == "ol" else "- "
            self.add("\n" + indent + marker)
        elif tag == "a":
            href = attrs_dict.get("href")
            self.link_stack.append(href)
            self.add("[")
        elif tag == "img":
            src = attrs_dict.get("src") or attrs_dict.get("data-src")
            if src:
                alt = html.unescape(attrs_dict.get("alt") or "")
                self.add(f"\n\n![{alt}]({src})\n\n")
        elif tag == "hr":
            self.add("\n\n---\n\n")
        elif tag == "code":
            self.add("`")

    def handle_endtag(self, tag: str) -> None:
        if tag in {"script", "style", "noscript", "svg"}:
            self.skip_depth = max(0, self.skip_depth - 1)
            return
        if self.skip_depth:
            return
        if re.fullmatch(r"h[1-6]", tag) or tag in {"p", "div", "section", "article", "blockquote"}:
            self.add("\n\n")
        elif tag in {"strong", "b"}:
            self.add("**")
        elif tag in {"em", "i"}:
            self.add("*")
        elif tag in {"ul", "ol"}:
            if self.list_stack:
                self.list_stack.pop()
            self.add("\n")
        elif tag == "a":
            href = self.link_stack.pop() if self.link_stack else None
            self.add(f"]({href})" if href else "]")
        elif tag == "code":
            self.add("`")

    def handle_data(self, data: str) -> None:
        if self.skip_depth:
            return
        value = re.sub(r"[\t\r\f\v ]+", " ", data)
        self.add(value)

    def markdown(self) -> str:
        text = "".join(self.parts)
        text = text.replace("\u00a0", " ")
        text = re.sub(r"\[vc_raw_html[^\]]*\].*?\[/vc_raw_html\]", "", text, flags=re.DOTALL)
        text = re.sub(r"\[/?vc_[^\]]*\]", "", text)
        text = re.sub(r"[ \t]+\n", "\n", text)
        text = re.sub(r"\n[ \t]+", "\n", text)
        text = re.sub(r"\n{3,}", "\n\n", text)
        text = re.sub(r"(?<!!)\[\s*\]\([^)]*\)", "", text)
        return text.strip() + "\n"


def html_to_markdown(source: str) -> str:
    parser = MarkdownParser()
    parser.feed(source)
    return parser.markdown()


def safe_slug(item: dict) -> str:
    slug = item.get("slug") or str(item["id"])
    return re.sub(r"[^a-zA-Z0-9._-]+", "-", slug).strip("-")


def embedded_terms(item: dict) -> tuple[list[str], list[str]]:
    categories: list[str] = []
    tags: list[str] = []
    for term_group in item.get("_embedded", {}).get("wp:term", []):
        for term in term_group:
            if term.get("taxonomy") == "category":
                categories.append(term["name"])
            elif term.get("taxonomy") == "post_tag":
                tags.append(term["name"])
    return sorted(set(categories)), sorted(set(tags))


def note(item: dict, content_type: str) -> str:
    title = html.unescape(item["title"]["rendered"]).strip()
    categories, tags = embedded_terms(item)
    frontmatter = [
        "---",
        f"title: {yaml_string(title)}",
        f"wordpress_id: {item['id']}",
        f"content_type: {content_type}",
        f"status: {yaml_string(item.get('status', 'publish'))}",
        f"published_at: {yaml_string(item.get('date', ''))}",
        f"modified_at: {yaml_string(item.get('modified', ''))}",
        f"slug: {yaml_string(item.get('slug', ''))}",
        f"source_url: {yaml_string(item.get('link', ''))}",
    ]
    if categories:
        frontmatter.append("categories: [" + ", ".join(yaml_string(v) for v in categories) + "]")
    if tags:
        frontmatter.append("tags: [" + ", ".join(yaml_string(v) for v in tags) + "]")
    frontmatter.extend(["---", ""])

    body = html_to_markdown(item.get("content", {}).get("rendered", ""))
    if not re.match(r"^#\s", body):
        body = f"# {title}\n\n{body}"
    return "\n".join(frontmatter) + body


def write_collection(items: list[dict], folder: Path, content_type: str) -> list[dict]:
    folder.mkdir(parents=True, exist_ok=True)
    written: list[dict] = []
    for item in sorted(items, key=lambda entry: (entry.get("date", ""), entry["id"])):
        path = folder / f"{safe_slug(item)}.md"
        path.write_text(note(item, content_type), encoding="utf-8")
        written.append({"title": html.unescape(item["title"]["rendered"]), "path": path, "item": item})
    return written


def write_index(output: Path, pages: list[dict], posts: list[dict]) -> None:
    lines = [
        "# Backup editorial de fresco.art",
        "",
        "Backup en Markdown del contenido público institucional y de los artículos de Enchastre.",
        "",
        "> Este material se conserva para archivo en Obsidian y no forma parte de la migración automática a la nueva web.",
        "",
        f"- Páginas editoriales: {len(pages)}",
        f"- Artículos: {len(posts)}",
        "",
        "## Páginas",
        "",
    ]
    for entry in sorted(pages, key=lambda value: value["title"].casefold()):
        relative = entry["path"].relative_to(output).with_suffix("")
        lines.append(f"- [[{relative.as_posix()}|{entry['title']}]]")
    lines.extend(["", "## Artículos de Enchastre", ""])
    for entry in sorted(posts, key=lambda value: value["item"].get("date", "")):
        relative = entry["path"].relative_to(output).with_suffix("")
        lines.append(f"- [[{relative.as_posix()}|{entry['title']}]]")
    lines.extend(
        [
            "",
            "## Criterio de exclusión",
            "",
            "No se incluyen tienda, carrito, checkout, cuenta, gift cards ni páginas de confirmación o cancelación.",
            "",
        ]
    )
    (output / "README.md").write_text("\n".join(lines), encoding="utf-8")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--pages", type=Path, required=True)
    parser.add_argument("--posts", type=Path, required=True)
    parser.add_argument("--output", type=Path, required=True)
    args = parser.parse_args()

    pages = json.loads(args.pages.read_text(encoding="utf-8"))
    posts = json.loads(args.posts.read_text(encoding="utf-8"))
    pages = [page for page in pages if page.get("slug") not in EXCLUDED_PAGE_SLUGS]

    if args.output.exists():
        shutil.rmtree(args.output)
    args.output.mkdir(parents=True)
    written_pages = write_collection(pages, args.output / "paginas", "page")
    written_posts = write_collection(posts, args.output / "articulos-enchastre", "post")
    write_index(args.output, written_pages, written_posts)

    print(f"Exported {len(written_pages)} pages and {len(written_posts)} posts to {args.output}")


if __name__ == "__main__":
    main()
