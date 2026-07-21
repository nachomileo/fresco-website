import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { allArchiveLinks } from "../archive-index-data";

export const metadata: Metadata = {
  title: "Archivo de experiencias — Fresco",
  description: "Talleres, residencias y procesos compartidos de Fresco desde 2022.",
};

export default function ArchivePage() {
  return (
    <main>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Fresco, inicio"><Image src="/branding/fresco-wordmark-black.png" alt="fresco." fill sizes="96px" priority /></Link>
        <nav className="desktop-nav" aria-label="Navegación principal"><Link href="/#programa">Programa</Link><Link href="/archivo">Archivo</Link><Link href="/#la-nave">La Nave</Link></nav>
        <Link className="header-cta" href="/#contacto">ME SUMO <span aria-hidden="true">↘</span></Link>
      </header>

      <section className="archive-index-hero">
        <p className="eyebrow">Memoria viva · 2022—2026</p>
        <h1>Archivo de<br />experiencias</h1>
        <p>Talleres, residencias, investigaciones y encuentros ordenados cronológicamente.</p>
      </section>

      <section className="archive-index-list" aria-label="Experiencias del archivo">
        {allArchiveLinks.map((entry, index) => {
          const external = entry.href.startsWith("http");
          return (
            <Link href={entry.href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} key={`${entry.date}-${entry.artist}-${entry.workshop}`}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span>{entry.period}</span>
              <span className="archive-index-title"><small>{entry.workshop}</small>{entry.artist}</span>
              <span aria-hidden="true">↗</span>
            </Link>
          );
        })}
      </section>

      <footer className="site-footer"><Link className="brand" href="/"><Image src="/branding/fresco-wordmark-black.png" alt="fresco." fill sizes="96px" /></Link><div><a href="https://www.instagram.com/fresca.lanave/" target="_blank" rel="noreferrer">Fresca. La Nave ↗</a><a href="https://www.instagram.com/fresco.arte/" target="_blank" rel="noreferrer">fresco. arte ↗</a><a href="mailto:info@fresco.art">info@fresco.art</a><span>© 2026</span></div></footer>
    </main>
  );
}
