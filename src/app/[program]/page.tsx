import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProgramGroup, programGroups } from "../program-data";
import { ScrollEffects } from "../scroll-effects";
import { FrescaFixedMark } from "../fresca-fixed-mark";

type Props = { params: Promise<{ program: string }> };

export const generateStaticParams = () => programGroups.map(({ slug }) => ({ program: slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const group = getProgramGroup((await params).program);
  if (!group) return {};
  const description = group.pageDescription ?? group.description;
  return {
    title: group.title,
    description,
    alternates: { canonical: `/${group.slug}` },
    openGraph: {
      title: `${group.title} | fresco.`,
      description,
      url: `/${group.slug}`,
      images: [{ url: group.image, alt: `${group.title}, programa de Fresca. La Nave` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${group.title} | fresco.`,
      description,
      images: [group.image],
    },
  };
}

export default async function ProgramPage({ params }: Props) {
  const group = getProgramGroup((await params).program);
  if (!group) notFound();

  return (
    <main className={`program-page-shell program-page-${group.slug}`}>
      <ScrollEffects />
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Fresco, inicio"><Image src="/branding/fresco-wordmark-black.png" alt="fresco." fill sizes="96px" priority /></Link>
        <nav className="desktop-nav" aria-label="Navegación principal"><Link href="/#programa">Programa</Link><Link href="/#la-nave">La Nave</Link><Link href="/#archivo">Archivo</Link></nav>
        <Link className="header-cta" href="/#contacto">ME SUMO <span aria-hidden="true">↘</span></Link>
      </header>

      <section className={`program-page-hero page-${group.slug}`}>
        <div className="program-page-image"><Image src={group.image} alt="" fill priority sizes="100vw" /></div>
        <div className="program-page-shade" />
        <div className="program-page-copy">
          <p className="eyebrow">{group.number} · {group.kicker}</p>
          <h1>{group.title}</h1>
          <p>{group.statement}</p>
        </div>
      </section>

      <section className="program-manifesto" data-reveal>
        <p className="eyebrow">El programa</p>
        <div className="program-manifesto-copy">
          <p>{group.pageDescription ?? group.description}</p>
          {group.highlights && <><p className="program-highlights-label">Durante 2025—2026 compartimos</p><ul className="program-highlights">{group.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></>}
        </div>
      </section>

      <section className="section program-detail">
        <div className="section-heading" data-reveal><div><p className="eyebrow">Programa 2026—2027</p><h2>Propuestas</h2></div><p>{group.items.length} {group.items.length === 1 ? "propuesta" : "propuestas"} en esta línea.</p></div>
        <div className="program-list">
          {group.items.map((item, index) => (
            <article className={`program-card ${index % 2 ? "program-card-reverse" : ""}`} key={item.number} data-reveal>
              {item.href
                ? <Link className="program-image" href={item.href} aria-label={`Ver ${item.title}`}><Image src={item.image} alt={item.alt} fill sizes="(max-width: 760px) 100vw, 42vw" unoptimized={group.slug === "seminarios"} /></Link>
                : <div className="program-image"><Image src={item.image} alt={item.alt} fill sizes="(max-width: 760px) 100vw, 42vw" /></div>}
              <div className="program-content">
                <div className="card-meta"><span>{item.type}</span><span>{item.number}</span></div>
                <div><p className="artist">{item.artist}</p><h3>{item.title}</h3>{item.subtitle && <p className="card-subtitle">{item.subtitle}</p>}<p className="card-description">{item.description}</p></div>
                <div className="card-footer"><strong>{item.detail}</strong><Link href={group.slug === "talleres" || group.slug === "musica" ? "mailto:info@fresco.art" : item.href ?? "/#contacto"}>{group.slug === "talleres" || group.slug === "musica" ? "Consultar" : group.slug === "seminarios" ? "Me apunto" : item.href ? "Ver ficha" : "Consultar"} <span aria-hidden="true">↗</span></Link></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <nav className="program-switcher" aria-label="Otros programas">
        {programGroups.filter(({ slug }) => slug !== group.slug).map((item) => <Link href={`/${item.slug}`} key={item.slug}><span>{item.number}</span>{item.title}<span aria-hidden="true">↗</span></Link>)}
      </nav>

      <footer className="site-footer"><Link className="brand" href="/"><Image src="/branding/fresco-wordmark-black.png" alt="fresco." fill sizes="96px" /></Link><div><a href="https://www.instagram.com/fresca.lanave/" target="_blank" rel="noreferrer">Fresca. La Nave ↗</a><a href="https://www.instagram.com/fresco.arte/" target="_blank" rel="noreferrer">fresco. arte ↗</a><a href="mailto:info@fresco.art">info@fresco.art</a><span>© 2026</span></div></footer>
      <FrescaFixedMark />
    </main>
  );
}
