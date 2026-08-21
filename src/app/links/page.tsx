import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const description = "Programa 2026–2027 de Fresca. La Nave: talleres, seminarios, música, openings, newsletter e inscripciones.";

export const metadata: Metadata = {
  title: { absolute: "Enlaces y programa | fresco." },
  description,
  alternates: { canonical: "/links" },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "/links",
    siteName: "fresco.",
    title: "Enlaces y programa | fresco.",
    description,
    images: [{ url: "/opengraph-image", alt: "fresco. Programa para la creación contemporánea" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enlaces y programa | fresco.",
    description,
    images: ["/opengraph-image"],
  },
};

type LinkItem = {
  number: string;
  title: string;
  description: string;
  href: string;
  emphasis?: "primary" | "newsletter";
};

const links: LinkItem[] = [
  { number: "01", title: "Programa 2026–2027", description: "Programa completo e inscripciones", href: "/#programa", emphasis: "primary" },
  { number: "02", title: "Seminarios", description: "Procesos de acompañamiento para desarrollar proyectos propios", href: "/seminarios" },
  { number: "03", title: "Derivas materiales", description: "Talleres de investigación material y creación contemporánea", href: "/talleres" },
  { number: "04", title: "Derivas sonoras", description: "Investigación, creación y encuentro musical", href: "/musica" },
  { number: "05", title: "Openings", description: "Exposiciones, puertas abiertas y programa público", href: "/openings" },
  { number: "06", title: "Co-working de cerámica", description: "Solicitud de incorporación · Fresca. La Nave", href: "https://docs.google.com/forms/d/e/1FAIpQLSex9F4fcJsvLSL7Wv05l1zhs2N5mSxINLcvk7eT6lrbgBh3Hg/viewform?usp=sharing" },
  { number: "07", title: "Archivo", description: "Procesos, artistas y experiencias compartidas desde 2021", href: "/archivo" },
  { number: "08", title: "Quiero estar al tanto del programa", description: "Te invitamos a investigar, producir, aprender y crear comunidad.", href: "/#contacto", emphasis: "newsletter" },
  { number: "09", title: "Contacto", description: "Información e inscripciones", href: "mailto:info@fresco.art" },
];

export default function LinksPage() {
  const renderLink = (item: LinkItem) => {
    const className = [
      "links-page-link",
      item.emphasis === "primary" ? "links-page-link-primary" : "",
      item.emphasis === "newsletter" ? "links-page-link-newsletter" : "",
    ].filter(Boolean).join(" ");

    const content = (
      <>
        <span className="links-page-number" aria-hidden="true">{item.number}</span>
        <span className="links-page-link-copy">
          <strong>{item.title}</strong>
          <span>{item.description}</span>
        </span>
        <span className="links-page-arrow" aria-hidden="true">↗</span>
      </>
    );

    return item.href.startsWith("mailto:")
      ? <a className={className} href={item.href} key={item.number}>{content}</a>
      : <Link className={className} href={item.href} key={item.number}>{content}</Link>;
  };

  return (
    <main className="links-page">
      <div className="links-page-inner">
        <header className="links-page-header">
          <Link className="links-page-wordmark" href="/" aria-label="fresco., ir a la página principal">
            <Image src="/branding/fresco-wordmark-black.png" alt="fresco." fill sizes="132px" priority />
          </Link>
          <p className="links-page-location">Fresca. La Nave · Carabanchel, Madrid</p>
          <h1>Programa para la creación contemporánea.</h1>
          <p className="links-page-intro">Talleres, seminarios, música y encuentros para investigar, crear y poner los procesos en común.</p>
          <Link className="links-page-full-site" href="/">Explorar fresco <span aria-hidden="true">↗</span></Link>
        </header>

        <nav className="links-page-nav" aria-label="Programa, actividades y contacto">
          {links.slice(0, 5).map(renderLink)}
          <div className="links-page-nav-group">
            <p>Más sobre fresco.</p>
            {links.slice(5, 7).map(renderLink)}
          </div>
          {links.slice(7).map(renderLink)}
        </nav>

        <footer className="links-page-footer">
          <nav aria-label="Newsletter, redes sociales y correo">
            <Link href="/#contacto">Newsletter · Quiero estar al tanto del programa <span aria-hidden="true">↗</span></Link>
            <a href="https://www.instagram.com/fresca.lanave/" target="_blank" rel="noreferrer" aria-label="@fresca.lanave en Instagram, abre en una pestaña nueva">@fresca.lanave <span aria-hidden="true">↗</span></a>
            <a href="https://www.instagram.com/fresco.arte/" target="_blank" rel="noreferrer" aria-label="@fresco.arte en Instagram, abre en una pestaña nueva">@fresco.arte <span aria-hidden="true">↗</span></a>
            <a href="mailto:info@fresco.art">info@fresco.art</a>
          </nav>
          <span>© 2026</span>
        </footer>
      </div>
    </main>
  );
}
