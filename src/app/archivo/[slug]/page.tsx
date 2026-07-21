import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { archiveEntries, getArchiveEntry } from "../../archive-data";

function ArchiveHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Fresco, inicio"><Image src="/branding/fresco-wordmark-black.png" alt="fresco." fill sizes="96px" priority /></Link>
      <nav className="desktop-nav" aria-label="Navegación principal"><Link href="/#programa">Programa</Link><Link href="/#archivo">Archivo</Link><Link href="/#la-nave">La Nave</Link></nav>
      <Link className="header-cta" href="/#contacto">ME SUMO <span aria-hidden="true">↘</span></Link>
    </header>
  );
}

function ArchiveFooter() {
  return <footer className="site-footer"><Link className="brand" href="/"><Image src="/branding/fresco-wordmark-black.png" alt="fresco." fill sizes="96px" /></Link><div><a href="https://www.instagram.com/fresca.lanave/" target="_blank" rel="noreferrer">Fresca. La Nave ↗</a><a href="https://www.instagram.com/fresco.arte/" target="_blank" rel="noreferrer">fresco. arte ↗</a><a href="mailto:info@fresco.art">info@fresco.art</a><span>© 2026</span></div></footer>;
}

function LosBravuPage() {
  return (
    <main>
      <ArchiveHeader />
      <article className="archive-story">
        <header className="archive-story-hero">
          <div className="archive-story-image"><Image src="/images/archive/los-bravu/hero.jpg" alt="Taller de Los Bravú con participantes trabajando en el espacio" fill sizes="100vw" priority /></div>
          <div className="archive-story-shade" />
          <div className="archive-story-title"><p className="meta-label">Archivo 08 · Taller · 2022</p><h1>Los<br />Bravú</h1><span>Práctica artística compartida</span></div>
        </header>

        <section className="archive-story-intro">
          <p className="eyebrow">La experiencia</p>
          <div><h2>Dibujar, pintar y construir imágenes en compañía.</h2><p>Una experiencia del archivo de Fresco dedicada a compartir herramientas, referencias y procesos de creación junto a Los Bravú.</p></div>
        </section>

        <section className="archive-story-grid">
          <figure className="archive-story-process"><Image src="/images/archive/los-bravu/process-01.jpg" alt="Participante trabajando sobre una imagen durante el taller" fill sizes="(max-width: 760px) 100vw, 58vw" /><figcaption>Proceso · Taller Los Bravú</figcaption></figure>
          <aside className="archive-story-facts"><div><span>Formato</span><strong>Taller</strong></div><div><span>Prácticas</span><strong>Dibujo y pintura</strong></div><div><span>Año</span><strong>2022</strong></div><div><span>Archivo</span><strong>Experiencia 08</strong></div></aside>
          <figure className="archive-story-portrait"><Image src="/images/archive/los-bravu/portrait.jpg" alt="Retrato de Los Bravú" fill sizes="(max-width: 760px) 100vw, 34vw" /><figcaption>Los Bravú</figcaption></figure>
          <figure className="archive-story-work"><Image src="/images/archive/los-bravu/work-01.jpg" alt="Obra de Los Bravú" fill sizes="(max-width: 760px) 100vw, 34vw" /><figcaption>Imagen y referencia</figcaption></figure>
        </section>

        <section className="archive-story-quote"><p>El archivo no conserva solo resultados: reúne gestos, conversaciones, pruebas y formas de hacer juntos.</p></section>

        <section className="archive-story-pair">
          <figure><Image src="/images/archive/los-bravu/process-02.jpg" alt="Conversación colectiva alrededor de trabajos en proceso" fill sizes="(max-width: 760px) 100vw, 58vw" /></figure>
          <figure><Image src="/images/archive/los-bravu/work-02.jpg" alt="Pintura presentada como referencia durante el taller" fill sizes="(max-width: 760px) 100vw, 38vw" /></figure>
        </section>

        <div className="archive-story-back"><Link className="text-link" href="/#archivo">← Volver al archivo</Link></div>
      </article>
      <ArchiveFooter />
    </main>
  );
}

export const generateStaticParams = () => archiveEntries.map(({ slug }) => ({ slug }));

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const entry = getArchiveEntry(slug);
  return entry ? { title: `${entry.name} — Archivo Fresco`, description: entry.summary } : {};
}

export default async function ArchiveEntryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getArchiveEntry(slug);
  if (!entry) notFound();
  if (entry.slug === "los-bravu") return <LosBravuPage />;

  return (
    <main>
      <ArchiveHeader />

      <article className="archive-entry-page">
        <div className="archive-entry-index"><span>Archivo de experiencias</span><span>{entry.period}</span></div>
        <div className="archive-entry-heading"><p>{entry.type}</p><h1>{entry.name}</h1></div>
        <div className="archive-entry-summary"><p>{entry.summary}</p><p>Esta ficha forma parte de la memoria viva de Fresco. Próximamente reunirá imágenes, materiales y registros de la experiencia.</p></div>
        <Link className="text-link" href="/#archivo">← Volver al archivo</Link>
      </article>

      <nav className="archive-entry-nav" aria-label="Otras experiencias">
        {archiveEntries.filter((item) => item.slug !== entry.slug).map((item) => <Link href={`/archivo/${item.slug}`} key={item.slug}><span>{item.period}</span>{item.name}<span aria-hidden="true">↗</span></Link>)}
      </nav>

      <ArchiveFooter />
    </main>
  );
}
