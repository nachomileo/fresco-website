import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { archiveEntries, getArchiveEntry, type ArchiveEntry } from "../../archive-data";

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

function ArchiveStory({ entry, index }: { entry: ArchiveEntry; index: number }) {
  const archiveNumber = String(index + 1).padStart(2, "0");

  return (
    <article className="archive-story">
      <header className="archive-story-hero">
        <div className="archive-story-image"><Image src={entry.images.hero} alt={`Registro de ${entry.title} con ${entry.name}`} fill sizes="100vw" priority /></div>
        <div className="archive-story-shade" />
        <div className="archive-story-title"><p>Archivo {archiveNumber} · {entry.type} · {entry.period}</p><h1>{entry.name}</h1><span>{entry.title}</span></div>
      </header>

      <section className="archive-story-intro">
        <p className="eyebrow">La experiencia</p>
        <div><h2>{entry.tagline}</h2><p>{entry.summary}</p><p className="archive-story-description">{entry.description}</p></div>
      </section>

      <section className="archive-story-grid">
        <figure className="archive-story-process"><Image src={entry.images.process} alt={`Proceso de trabajo durante ${entry.title}`} fill sizes="(max-width: 760px) 100vw, 58vw" /><figcaption>Proceso · {entry.title}</figcaption></figure>
        <aside className="archive-story-facts"><div><span>Formato</span><strong>{entry.type}</strong></div><div><span>Prácticas</span><strong>{entry.practices}</strong></div><div><span>Cuándo</span><strong>{entry.period}</strong></div><div><span>Dónde</span><strong>{entry.place}</strong></div></aside>
        <figure className="archive-story-portrait"><Image src={entry.images.portrait} alt={`Registro de ${entry.name} y la experiencia`} fill sizes="(max-width: 760px) 100vw, 34vw" /><figcaption>{entry.name}</figcaption></figure>
        <figure className="archive-story-work"><Image src={entry.images.closing} alt={`Obras y procesos de ${entry.title}`} fill sizes="(max-width: 760px) 100vw, 34vw" /><figcaption>Obras y procesos</figcaption></figure>
      </section>

      <section className="archive-story-quote"><p>El archivo reúne las pruebas, los gestos y las conversaciones que hicieron posible cada experiencia.</p></section>
      <div className="archive-story-back"><Link className="text-link" href="/#archivo">← Volver al archivo</Link></div>
    </article>
  );
}

export const generateStaticParams = () => archiveEntries.map(({ slug }) => ({ slug }));

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const entry = getArchiveEntry(slug);
  return entry ? { title: `${entry.title} — Archivo Fresco`, description: entry.summary } : {};
}

export default async function ArchiveEntryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getArchiveEntry(slug);
  if (!entry) notFound();
  const index = archiveEntries.findIndex((item) => item.slug === entry.slug);

  return (
    <main>
      <ArchiveHeader />
      <ArchiveStory entry={entry} index={index} />
      <nav className="archive-entry-nav" aria-label="Otras experiencias">
        {archiveEntries.filter((item) => item.slug !== entry.slug).map((item) => <Link href={`/archivo/${item.slug}`} key={item.slug}><span>{item.period}</span><span className="archive-entry-nav-name"><small>{item.title}</small>{item.name}</span><span aria-hidden="true">↗</span></Link>)}
      </nav>
      <ArchiveFooter />
    </main>
  );
}
