import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { archiveEntries, getArchiveEntry, type ArchiveEntry } from "../../archive-data";
import { allArchiveLinks, getArchiveIndexEntry, type ArchiveIndexEntry } from "../../archive-index-data";
import { archiveMedia } from "../../archive-media-data";
import { archiveWorkshopAlbums } from "../../archive-workshop-data";
import { FrescaFixedMark } from "../../fresca-fixed-mark";

function ArchiveHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Fresco, inicio"><Image src="/branding/fresco-wordmark-black.png" alt="fresco." fill sizes="96px" priority /></Link>
      <nav className="desktop-nav" aria-label="Navegación principal"><Link href="/#programa">Programa</Link><Link href="/#la-nave">La Nave</Link><Link href="/#archivo">Archivo</Link></nav>
      <Link className="header-cta" href="/#contacto">ME SUMO <span aria-hidden="true">↘</span></Link>
    </header>
  );
}

function ArchiveFooter() {
  return <footer className="site-footer"><Link className="brand" href="/"><Image src="/branding/fresco-wordmark-black.png" alt="fresco." fill sizes="96px" /></Link><div><a href="https://www.instagram.com/fresca.lanave/" target="_blank" rel="noreferrer">Fresca. La Nave ↗</a><a href="https://www.instagram.com/fresco.arte/" target="_blank" rel="noreferrer">fresco. arte ↗</a><a href="mailto:info@fresco.art">info@fresco.art</a><span>© 2026</span></div></footer>;
}

function WorkshopHistory({ entry, slug }: { entry?: ArchiveIndexEntry; slug: string }) {
  if (!entry?.workshops?.length) return null;
  const albums = archiveWorkshopAlbums[slug];

  if (albums) return <section className="archive-albums"><p className="eyebrow">Talleres y ediciones</p><div className="archive-albums-list">{albums.map((album) => <article className="archive-album" key={album.date}><div className="archive-album-copy"><span>{album.period}</span><h2>{album.title}</h2><p>{album.description}</p></div><div className="archive-album-images">{album.images.map((src, imageIndex) => <figure key={src}><Image src={src} alt={`${album.title}, imagen ${imageIndex + 1}`} fill sizes="(max-width: 760px) 50vw, 24vw" /></figure>)}</div></article>)}</div></section>;

  return <section className="archive-workshops"><p className="eyebrow">Talleres y ediciones</p><div>{entry.workshops.map((workshop) => <article key={`${workshop.date}-${workshop.title}`}><span>{workshop.period}</span><div><h2>{workshop.title}</h2>{workshop.credits !== entry.artist && <p>Con {workshop.credits}</p>}</div></article>)}</div></section>;
}

function ArchiveStory({ entry, index, indexEntry }: { entry: ArchiveEntry; index: number; indexEntry?: ArchiveIndexEntry }) {
  const archiveNumber = String(index + 1).padStart(2, "0");

  return (
    <article className="archive-story">
      <header className="archive-story-hero">
        <div className="archive-story-title"><p>Archivo {archiveNumber} · {entry.type} · {entry.period}</p><h1 className={entry.name.length > 18 ? "archive-story-heading-long" : undefined}>{entry.name}</h1><span>{entry.title}</span></div>
      </header>

      <section className="archive-story-intro">
        <p className="eyebrow">La experiencia</p>
        <div><h2>{entry.tagline}</h2><p>{entry.summary}</p><p className="archive-story-description">{entry.description}</p></div>
      </section>

      <WorkshopHistory entry={indexEntry} slug={entry.slug} />

      <section className="archive-story-grid">
        <figure className="archive-story-process"><Image src={entry.images.process} alt={`Proceso de trabajo durante ${entry.title}`} fill sizes="(max-width: 760px) 100vw, 58vw" /><figcaption>Proceso · {entry.title}</figcaption></figure>
        <aside className="archive-story-facts"><div><span>Taller / experiencia</span><strong>{entry.title}</strong></div><div><span>Prácticas</span><strong>{entry.practices}</strong></div><div><span>Cuándo</span><strong>{entry.period}</strong></div><div><span>Dónde</span><strong>{entry.place}</strong></div></aside>
        <figure className="archive-story-portrait"><Image src={entry.images.portrait} alt={`Registro de ${entry.name} y la experiencia`} fill sizes="(max-width: 760px) 100vw, 34vw" /><figcaption>{entry.name}</figcaption></figure>
        <figure className="archive-story-work"><Image src={entry.images.closing} alt={`Obras y procesos de ${entry.title}`} fill sizes="(max-width: 760px) 100vw, 34vw" /><figcaption>Obras y procesos</figcaption></figure>
      </section>

      <section className="archive-story-quote"><p>El archivo reúne las pruebas, los gestos y las conversaciones que hicieron posible cada experiencia.</p></section>
      <div className="archive-story-back"><Link className="text-link" href="/#archivo">← Volver al archivo</Link></div>
    </article>
  );
}

export const generateStaticParams = () => allArchiveLinks.map(({ href }) => ({ slug: href.replace("/archivo/", "") }));

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const entry = getArchiveEntry(slug);
  const indexEntry = getArchiveIndexEntry(slug);
  if (entry) return {
    title: `${entry.title} — ${entry.name}`,
    description: entry.summary,
    alternates: { canonical: `/archivo/${slug}` },
    openGraph: {
      title: `${entry.title} — ${entry.name} | Archivo fresco.`,
      description: entry.summary,
      url: `/archivo/${slug}`,
      type: "article",
      images: [{ url: entry.images.hero, alt: `${entry.title} con ${entry.name}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${entry.title} — ${entry.name} | Archivo fresco.`,
      description: entry.summary,
      images: [entry.images.hero],
    },
  };
  if (indexEntry) {
    const description = `${indexEntry.workshop} con ${indexEntry.artist}. Archivo de experiencias de Fresco.`;
    return {
      title: `${indexEntry.workshop} — ${indexEntry.artist}`,
      description,
      alternates: { canonical: `/archivo/${slug}` },
      openGraph: {
        title: `${indexEntry.workshop} — ${indexEntry.artist} | Archivo fresco.`,
        description,
        url: `/archivo/${slug}`,
        type: "article",
      },
      twitter: {
        card: "summary_large_image",
        title: `${indexEntry.workshop} — ${indexEntry.artist} | Archivo fresco.`,
        description,
      },
    };
  }
  return {};
}

export default async function ArchiveEntryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getArchiveEntry(slug);
  const indexEntry = getArchiveIndexEntry(slug);
  if (!entry && !indexEntry) notFound();

  if (!entry && indexEntry) {
    const media = archiveMedia[slug];
    const index = allArchiveLinks.findIndex((item) => item.href === indexEntry.href);
    if (!media) return (
      <main><ArchiveHeader /><article className="archive-entry-page"><div className="archive-entry-index"><span>Archivo de experiencias</span><span>{indexEntry.period}</span></div><div className="archive-entry-heading"><p>{indexEntry.workshop}</p><h1>{indexEntry.artist}</h1></div><div className="archive-entry-summary"><p>{indexEntry.workshop}</p><p>Estamos preparando el relato y los materiales de esta experiencia.</p></div><Link className="text-link" href="/archivo">← Explorar todo el archivo</Link></article><ArchiveFooter /><FrescaFixedMark /></main>
    );

    return (
    <main>
      <ArchiveHeader />
      <article className="archive-story">
        <header className="archive-story-hero"><div className="archive-story-title"><p>Archivo {String(index + 1).padStart(2, "0")} · {indexEntry.period}</p><h1 className={indexEntry.artist.length > 18 ? "archive-story-heading-long" : undefined}>{indexEntry.artist}</h1><span>{indexEntry.workshop}</span></div></header>
        <section className="archive-story-intro"><p className="eyebrow">La experiencia</p><div><h2>{media.intro}</h2><p>{media.description}</p></div></section>
        <WorkshopHistory entry={indexEntry} slug={slug} />
        <section className="archive-story-grid">
          <figure className="archive-story-process"><Image src={media.images[1]} alt={`Proceso de ${indexEntry.workshop}`} fill sizes="(max-width: 760px) 100vw, 58vw" /><figcaption>Proceso · {indexEntry.workshop}</figcaption></figure>
          <aside className="archive-story-facts"><div><span>Taller / experiencia</span><strong>{indexEntry.workshop}</strong></div><div><span>Prácticas</span><strong>{media.practices}</strong></div><div><span>Cuándo</span><strong>{indexEntry.period}</strong></div><div><span>Dónde</span><strong>{media.place}</strong></div></aside>
          <figure className="archive-story-portrait"><Image src={media.images[2]} alt={`Registro de ${indexEntry.artist}`} fill sizes="(max-width: 760px) 100vw, 34vw" /><figcaption>{indexEntry.artist}</figcaption></figure>
          <figure className="archive-story-work"><Image src={media.images[0]} alt={`Obras y referencias de ${indexEntry.workshop}`} fill sizes="(max-width: 760px) 100vw, 34vw" /><figcaption>Obras y procesos</figcaption></figure>
        </section>
        <section className="archive-story-quote"><p>El archivo conserva los materiales, las decisiones y las conversaciones que atravesaron cada proceso.</p></section>
        <div className="archive-story-back"><Link className="text-link" href="/archivo">← Explorar todo el archivo</Link></div>
      </article>
      <ArchiveFooter />
      <FrescaFixedMark />
    </main>
    );
  }

  if (!entry) notFound();
  const index = archiveEntries.findIndex((item) => item.slug === entry.slug);

  return (
    <main>
      <ArchiveHeader />
      <ArchiveStory entry={entry} index={index} indexEntry={indexEntry} />
      <nav className="archive-entry-nav" aria-label="Otras experiencias">
        {archiveEntries.filter((item) => item.slug !== entry.slug).map((item) => <Link href={`/archivo/${item.slug}`} key={item.slug}><span>{item.period}</span><span className="archive-entry-nav-name"><small>{item.title}</small>{item.name}</span><span aria-hidden="true">↗</span></Link>)}
      </nav>
      <ArchiveFooter />
      <FrescaFixedMark />
    </main>
  );
}
