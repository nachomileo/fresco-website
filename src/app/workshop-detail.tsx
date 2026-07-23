import Image from "next/image";
import Link from "next/link";
import type { WorkshopEntry } from "./workshop-data";
import { FrescaFixedMark } from "./fresca-fixed-mark";

const excludedWorkshopImages = new Set([
  "/images/program/paginas/ese instante de luz/DSC03015.JPG",
  "/images/program/paginas/ese instante de luz/Taller rayogramas_Fresca. La nave_ana Paes3.jpg",
  "/images/program/paginas/bodegones en ceramica/Bodegones en cerámica_Sophie Aguilera19.jpeg",
  "/images/program/paginas/bodegones en ceramica/Bodegones en cerámica_Sophie Aguilera20.jpeg",
  "/images/program/paginas/bodegones en ceramica/Bodegones en cerámica_Sophie Aguilera27.jpeg",
  "/images/program/paginas/bodegones en ceramica/Bodegones en cerámica_Sophie Aguilera38.jpeg",
  "/images/program/paginas/del papel a la cerámica/Taller del papel a la ceramica_Fresca la nave_Ana Cano7.jpeg",
]);

const tutorLinks: Record<string, { web?: string; instagram?: string }> = {
  "Ana Paes": { web: "https://www.manoloeirin.com/ana-paes", instagram: "https://www.instagram.com/ana__paes/" },
  "Luka Andeyro": { instagram: "https://www.instagram.com/luka.andeyro/" },
  "Brenda Ranieri": { web: "https://brendaranieri.art/", instagram: "https://www.instagram.com/brendaranieri.studio/" },
  "Alejandra Díaz-Guerra": { web: "https://es.linkedin.com/in/alejandradiaz-guerra", instagram: "https://www.instagram.com/alejandradiazguerra/" },
  "Cecilia Czornogas": { web: "https://ra.co/dj/cecz", instagram: "https://www.instagram.com/c_e_c_z/" },
  "Ana Cano Brookbank": { web: "https://www.anacanobrookbank.com/", instagram: "https://www.instagram.com/anacanobrookbank/" },
  "Sophie Aguilera": { web: "https://www.sophieaguilera.com/", instagram: "https://www.instagram.com/sophiaguilera/" },
};

const sophieWorksBase = "/images/program/paginas/bodegones en ceramica/obra-sophie-aguilera";
const sophieWorks = [
  { image: "naranjas-y-limones.jpg", title: "Naranjas y limones" },
  { image: "mientras-dure.jpg", title: "Mientras dure" },
  { image: "jarron-sobre-pano-y-taburetes.jpg", title: "Jarrón sobre paño y taburetes" },
  { image: "accidente-domestico.jpg", title: "Accidente doméstico" },
  { image: "la-vida-es-domingo.jpg", title: "La vida es domingo" },
  { image: "bajo-las-margaritas.jpg", title: "Bajo las margaritas" },
];

export function WorkshopDetail({ workshop }: { workshop: WorkshopEntry }) {
  const images = workshop.images.filter((image) => !excludedWorkshopImages.has(image));
  const imageSource = (image: string) => {
    if (image === "/images/program/paginas/ese instante de luz/Rayogramas_Taller Ana Paes_Fresca_22.jpeg") return "/images/program/derivas materiales/paginas/ese instante de luz/Rayogramas_Taller Ana Paes_Fresca_22.png";
    if (image.startsWith("/images/program/paginas/")) return image.replace("/images/program/paginas/", "/images/program/derivas materiales/paginas/");
    return image;
  };

  return (
    <main>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Fresco, inicio"><Image src="/branding/fresco-wordmark-black.png" alt="fresco." fill sizes="96px" priority /></Link>
        <nav className="desktop-nav" aria-label="Navegación principal"><Link href="/#programa">Programa</Link><Link href="/#la-nave">La Nave</Link><Link href="/#archivo">Archivo</Link></nav>
        <Link className="header-cta" href="#inscripcion">ME SUMO <span aria-hidden="true">↘</span></Link>
      </header>

      <article className={`workshop-page workshop-page-${workshop.slug}`}>
        <header className="workshop-hero">
          <div className="workshop-hero-image"><Image src={imageSource(workshop.heroImage)} alt={workshop.cardTitle} fill sizes="(max-width: 760px) 100vw, 44vw" priority /></div>
          <div className="workshop-hero-copy">
            <p className="meta-label">Derivas materiales · {workshop.number}</p>
            <div className="workshop-title-stack"><h1>{workshop.title}</h1><p>{workshop.byline}</p>{workshop.edition && <span>{workshop.edition}</span>}</div>
            <div className="workshop-hero-action" id="inscripcion">
              <dl><div><dt>Fecha</dt><dd>{workshop.date}</dd></div><div><dt>Lugar</dt><dd>Carabanchel, Madrid</dd></div><div><dt>Duración</dt><dd>{workshop.duration}</dd></div><div><dt>Precio</dt><dd>{workshop.price}</dd></div></dl>
              <Link href="mailto:info@fresco.art">Me apunto <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </header>

        <section className="workshop-question"><p className="eyebrow">La pregunta</p><h2>{workshop.question}</h2></section>

        <section className="workshop-overview">
          <div className="workshop-overview-image"><Image src={imageSource(images[0])} alt="Proceso del taller" fill sizes="(max-width: 760px) 100vw, 48vw" /></div>
          <div className="workshop-overview-copy"><p className="eyebrow">El taller</p><p className="workshop-overview-lead">{workshop.intro}</p><div className="workshop-overview-body"><p>{workshop.context}</p></div></div>
        </section>

        <section className="workshop-journey">
          <header><p className="eyebrow">El recorrido</p><h2>{workshop.steps.map((step) => step.title).join(", ")}.</h2></header>
          <ol>{workshop.steps.map((step, index) => <li key={step.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></li>)}</ol>
        </section>

        <section className="workshop-info">
          <div>{workshop.edition && <p className="eyebrow">{workshop.edition}</p>}<h2>{workshop.duration} en Fresca. La Nave.</h2><Link href="mailto:info@fresco.art">Me apunto <span aria-hidden="true">↗</span></Link></div>
          <dl><div><dt>Fecha</dt><dd>{workshop.date}</dd></div><div><dt>Horario</dt><dd>{workshop.schedule}</dd></div><div><dt>Lugar</dt><dd>{workshop.place}</dd></div><div><dt>Plazas</dt><dd>{workshop.group}</dd></div><div><dt>Precio</dt><dd>{workshop.price}<br />{workshop.includes}</dd></div></dl>
        </section>

        <section className="workshop-gallery workshop-gallery-masonry">{images.slice(1).map((image) => <figure key={image}><Image src={imageSource(image)} alt={`Proceso de ${workshop.cardTitle}`} width={0} height={0} sizes="(max-width: 760px) 100vw, 33vw" /></figure>)}</section>

        <section className="workshop-tutors"><p className="eyebrow">Imparten</p><div>{workshop.tutors.map((tutor, index) => { const links = tutorLinks[tutor.name]; return <article key={tutor.name}><span>{String(index + 1).padStart(2, "0")}</span><div className="workshop-tutor-heading"><h2>{tutor.name}</h2>{links && <nav aria-label={`Enlaces de ${tutor.name}`}>{links.web && <a href={links.web} target="_blank" rel="noreferrer">Web ↗</a>}{links.instagram && <a href={links.instagram} target="_blank" rel="noreferrer">Instagram ↗</a>}</nav>}</div><div className="workshop-tutor-bio"><p>{tutor.text}</p></div></article>; })}</div></section>

        {workshop.slug === "bodegones-en-porcelana" && <section className="artist-work-section">
          <header className="artist-work-heading-single"><p className="eyebrow">Obra de la artista</p></header>
          <div>{sophieWorks.map((work, index) => <figure className={index % 4 === 0 ? "artist-work-wide" : ""} key={work.image}><Image src={`${sophieWorksBase}/${work.image}`} alt={`${work.title}, obra de Sophie Aguilera`} fill sizes="(max-width: 760px) 100vw, 50vw" /><figcaption>{work.title} · Sophie Aguilera</figcaption></figure>)}</div>
        </section>}

        <nav className="workshop-back"><Link href="/talleres">← Volver a Derivas materiales</Link><Link href="mailto:info@fresco.art">Consultar inscripción ↗</Link></nav>
      </article>
      <footer className="site-footer"><Link className="brand" href="/"><Image src="/branding/fresco-wordmark-black.png" alt="fresco." fill sizes="96px" /></Link><div><a href="https://www.instagram.com/fresca.lanave/" target="_blank" rel="noreferrer">Fresca. La Nave ↗</a><a href="https://www.instagram.com/fresco.arte/" target="_blank" rel="noreferrer">fresco. arte ↗</a><a href="mailto:info@fresco.art">info@fresco.art</a><span>© 2026</span></div></footer>
      <FrescaFixedMark />
    </main>
  );
}
