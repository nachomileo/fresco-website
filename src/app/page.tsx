import Image from "next/image";
import Link from "next/link";
import { featuredArchiveLinks } from "./archive-index-data";
import { programGroups } from "./program-data";
import { ProgramSlider } from "./program-slider";
import { ScrollEffects } from "./scroll-effects";

const heroImages = [
  { src: "/images/home/Taller arcillas_paisaje urbano_lab4.jpeg", alt: "Exploración de arcillas y materiales del paisaje urbano" },
  { src: "/images/home/Fresca. La nave_creacion contemporanea_Carabanchel_taller_37.png", alt: "Archivo y materiales de trabajo en Fresca La Nave" },
  { src: "/images/home/Arcilla y paisaje urbano_Brenda Ranieri_Luka Andeyro_33.png", alt: "Materiales y procesos de un laboratorio de arcillas urbanas" },
  { src: "/images/home/Taller Rayogramas_fresca la nave_Carabanchel.JPG", alt: "Registro de una deriva para producir rayogramas" },
  { src: "/images/home/Rayogramas_Taller Ana Paes_Fresca_16.jpeg", alt: "Rayograma producido durante un taller de experimentación" },
  { src: "/images/home/Taller criaturas elementales_Cecz_Fresca la nave6.jpeg", alt: "Proceso colectivo de dibujo, escritura y acuarela" },
  { src: "/images/home/Taller arcillas_paisaje urbano_lab1.jpeg", alt: "Muestras de arcilla recogidas en el territorio" },
  { src: "/images/home/Fresca. La nave_creacion contemporanea_Carabanchel_taller_28.png", alt: "Vista interior de Fresca La Nave en Carabanchel" },
];

export default function Home() {
  return (
    <main>
      <ScrollEffects />
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Fresco, inicio">
          <Image src="/branding/fresco-wordmark-black.png" alt="fresco." fill sizes="96px" priority />
        </a>
        <nav className="desktop-nav" aria-label="Navegación principal">
          <a href="#programa">Programa</a>
          <a href="#la-nave">La Nave</a>
          <a href="#archivo">Archivo</a>
        </nav>
        <a className="header-cta" href="#contacto">ME SUMO <span aria-hidden="true">↘</span></a>
      </header>

      <section className="hero" id="inicio" data-hero>
        <div className="hero-stage">
          <div className="hero-grid" aria-label="Procesos y experiencias de Fresco">
            {heroImages.map((image, index) => (
              <div className={`hero-image hero-image-${index + 1}`} key={image.src}>
                <Image src={image.src} alt={image.alt} fill sizes="(max-width: 700px) 50vw, 34vw" priority={index < 4} />
              </div>
            ))}
          </div>
          <div className="hero-copy">
            <p className="meta-label">Madrid · Desde 2021</p>
            <h1 className="hero-program-title">
              <span className="hero-line">Programa para la</span>
              <span className="hero-line hero-line-muted">creación contemporánea.</span>
            </h1>
            <div className="hero-intro">
              <p>Acompañamiento, práctica, territorio y comunidad.</p>
              <a href="#programa">Ver el programa <span aria-hidden="true">↓</span></a>
            </div>
          </div>
        </div>
      </section>

      <section className="about-fresca" data-reveal>
        <p className="eyebrow">Fresca. La Nave</p>
        <p>
          <mark className="statement-highlight">Fresca. La Nave</mark> acompaña prácticas artísticas y activa una comunidad a través
          de la formación, la investigación, la producción y el encuentro alrededor de
          la materia, la imagen, la música y el territorio.
        </p>
      </section>

      <section className="section program-section" id="programa">
        <div className="section-heading" data-reveal>
          <div><p className="eyebrow">01 · Programa 2026—2027</p><h2>Programa</h2></div>
          <p>Cuatro líneas para investigar, producir, aprender y encontrarse. Carabanchel, Madrid.</p>
        </div>
        <ProgramSlider groups={programGroups} />
      </section>

      <section className="section archive-section" id="archivo">
        <div className="section-heading" data-reveal>
          <div><p className="eyebrow">05 · Memoria viva</p><h2>Archivo de experiencias</h2></div>
          <p>Procesos compartidos, aprendizajes y encuentros desde 2021.</p>
        </div>
        <div className="archive-grid" data-reveal>
          <div className="archive-image"><Image src="/images/home/Archivo.png" alt="Archivo de experiencias y procesos de Fresco" fill sizes="(max-width: 760px) 100vw, 48vw" /><span>Archivo fotográfico · 2021—26</span></div>
          <div className="archive-content">
            <div className="archive-stats"><div><strong>50</strong><span>experiencias</span></div><div><strong>30+</strong><span>artistas</span></div><div><strong>5</strong><span>años creando</span></div></div>
            <ol className="archive-list">{featuredArchiveLinks.map((entry, index) => <li key={`${entry.date}-${entry.artist}`}><Link href={entry.href} target={entry.href.startsWith("http") ? "_blank" : undefined} rel={entry.href.startsWith("http") ? "noreferrer" : undefined}><span>{String(index + 1).padStart(2, "0")}</span><span className="archive-list-name"><small>{entry.period} · {entry.workshop}</small>{entry.artist}</span><span aria-hidden="true">↗</span></Link></li>)}</ol>
            <Link className="text-link" href="/archivo">Explorar todo el archivo <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className="section studio-section" id="la-nave">
        <div className="section-heading" data-reveal>
          <div><p className="eyebrow">06 · Carabanchel, Madrid</p><h2>Fresca. La Nave</h2></div>
          <p>Una antigua imprenta transformada en espacio para la creación contemporánea.</p>
        </div>
        <div className="studio-layout" data-reveal>
          <div className="studio-mosaic" aria-label="Imágenes de Fresca. La Nave">
            <figure className="studio-photo-main"><Image src="/images/home/la nave/Fresca. La nave_creacion contemporanea_Carabanchel_taller_julio 2026.png" alt="Vista general del taller Fresca. La Nave" fill sizes="(max-width: 760px) 100vw, 50vw" /></figure>
            <figure><Image src="/images/home/la nave/Fresca. La nave_creacion contemporanea_Carabanchel_taller_1.png" alt="Zona de trabajo de Fresca. La Nave" fill sizes="(max-width: 760px) 50vw, 25vw" /></figure>
            <figure><Image src="/images/home/la nave/Fresca. La nave_creacion contemporanea_Carabanchel_taller_7.png" alt="Vista interior de Fresca. La Nave" fill sizes="(max-width: 760px) 50vw, 25vw" /></figure>
            <figure><Image src="/images/home/la nave/Fresca. La nave_creacion contemporanea_Carabanchel_taller_julio 2026_2.png" alt="Actividad dentro de Fresca. La Nave" fill sizes="(max-width: 760px) 50vw, 25vw" /></figure>
            <figure><Image src="/images/home/la nave/Fresca. La nave_creacion contemporanea_Carabanchel_taller_julio 2026_8.png" alt="Detalle del taller artístico Fresca. La Nave" fill sizes="(max-width: 760px) 50vw, 25vw" /></figure>
          </div>
          <div className="studio-info">
            <div className="studio-statement"><blockquote>Fresca. La Nave es un taller artístico en Carabanchel donde la producción cotidiana convive con talleres, seminarios, exposiciones y encuentros públicos. Un espacio para investigar materiales, sostener procesos de creación y ponerlos en común.</blockquote><div className="studio-location"><p>Creación contemporánea · Madrid</p><a href="https://www.google.com/maps/search/?api=1&query=Salvador+Alonso+12%2C+Madrid" target="_blank" rel="noreferrer">Salvador Alonso 12 <span aria-hidden="true">↗</span></a></div></div>
            <div className="studio-info-columns">
              <div className="studio-column"><p className="eyebrow">El espacio</p><ul><li>Taller artístico · 110 m²</li><li>Zona de trabajo. Horno y área especializada en cerámica</li><li>Sala expositiva</li><li>Sala para talleres y eventos</li></ul><a className="studio-mail-link" href="mailto:info@fresco.art">Escríbenos para sumarte al espacio <span aria-hidden="true">↗</span></a></div>
              <div className="studio-column"><p className="eyebrow">Líneas de trabajo</p><ul><li>Investigación matérica</li><li>Cerámica contemporánea</li><li>Pintura e imagen</li><li>Edición</li><li>Prácticas situadas y colectivas</li></ul></div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contacto" data-reveal>
        <div><p className="eyebrow">Próximas experiencias</p><h2>Quiero estar al tanto del programa.</h2></div>
        <form
          className="signup-form"
          action="https://art.us5.list-manage.com/subscribe/post?u=e9d310075dc515b605aaa6985&id=59664f4974&f_id=00509ce6f0"
          method="post"
          target="_blank"
        >
          <label htmlFor="email">Correo electrónico</label>
          <div>
            <input id="email" name="EMAIL" type="email" autoComplete="email" placeholder="tu@email.com" required />
            <button type="submit">Suscribirme <span aria-hidden="true">→</span></button>
          </div>
          <div className="signup-form-honeypot" aria-hidden="true">
            <input type="text" name="b_e9d310075dc515b605aaa6985_59664f4974" tabIndex={-1} defaultValue="" />
          </div>
          <p>Te invitamos a investigar, producir, aprender y crear comunidad.</p>
        </form>
      </section>

      <footer className="site-footer">
        <a className="brand" href="#inicio" aria-label="Fresco, volver al inicio"><Image src="/branding/fresco-wordmark-black.png" alt="fresco." fill sizes="96px" /></a>
        <div><a href="https://www.instagram.com/fresca.lanave/" target="_blank" rel="noreferrer">Fresca. La Nave ↗</a><a href="https://www.instagram.com/fresco.arte/" target="_blank" rel="noreferrer">fresco. arte ↗</a><a href="mailto:info@fresco.art">info@fresco.art</a><span>© 2026</span></div>
      </footer>
      <a className="nave-fixed-mark" href="#la-nave" aria-label="Ir a Fresca. La Nave">
        <Image src="/branding/fresca-la-nave.png" alt="" fill sizes="48px" />
      </a>
      <a className="mobile-sticky-cta" href="#programa">Ver programa <span aria-hidden="true">↗</span></a>
    </main>
  );
}
