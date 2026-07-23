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
  "Alejandra Díaz-Guerra": { instagram: "https://www.instagram.com/alejandradiazguerra/" },
  "Cecilia Czornogas": { instagram: "https://www.instagram.com/c_e_c_z/" },
  "Ana Cano Brookbank": { web: "https://www.anacanobrookbank.com/", instagram: "https://www.instagram.com/anacanobrookbank/" },
  "Sophie Aguilera": { web: "https://www.sophieaguilera.com/", instagram: "https://www.instagram.com/sophiaguilera/" },
};

const sophieWorksBase = "/images/program/paginas/bodegones en ceramica/obra-sophie-aguilera";
const sophieWorks = [
  { image: "naranjas-y-limones.webp", title: "Naranjas y limones", portrait: true },
  { image: "mientras-dure.webp", title: "Mientras dure", portrait: true },
  { image: "jarron-sobre-pano-y-taburetes.webp", title: "Jarrón sobre paño y taburetes", portrait: true },
  { image: "accidente-domestico.webp", title: "Accidente doméstico", portrait: true },
  { image: "la-vida-es-domingo.webp", title: "La vida es domingo", portrait: true },
  { image: "estudio-floral.jpg", title: "Estudio floral", portrait: true },
  { image: "jarron-sobre-fondo-azul.jpg", title: "Jarrón sobre fondo azul", portrait: true },
  { image: "leda.jpg", title: "Leda", portrait: true },
  { image: "bajo-las-margaritas.webp", title: "Bajo las margaritas", portrait: false },
];

const anaCanoWorksBase = "/images/program/derivas materiales/paginas/ana-cano-grafica-ceramica/obra-ana-cano";
const anaCanoWorks = [
  { image: "stoneware-plate.jpg", title: "Plato de gres" },
  { image: "porcelain-glass.jpg", title: "Vaso de porcelana" },
  { image: "stoneware-glass.jpg", title: "Vaso de gres" },
  { image: "spoons.jpg", title: "Cucharas de paper clay y gres negro" },
  { image: "shot-glasses.jpg", title: "Vasos de porcelana" },
  { image: "composition.jpg", title: "Composición" },
];

const alejandraWorksBase = "/images/program/derivas materiales/paginas/micelo y textil/obra alejandra";
const alejandraWorks = [
  "Alejandra Diaz Guerra-micelio-oo-.jpg",
  "Alejandra_laboratorio.jpg",
  "SaveClip.App_621450717_18552499615030561_3336511676195108464_n.jpg",
  "SaveClip.App_711531952_18590077411030561_4034927005839063974_n.jpg",
  "SaveClip.App_713164236_18590077168030561_6206997300848343689_n.jpg",
];

export function WorkshopDetail({ workshop }: { workshop: WorkshopEntry }) {
  const images = [...workshop.images.filter((image) => !excludedWorkshopImages.has(image)), ...(workshop.extraImages ?? [])];
  const imageSource = (image: string) => {
    if (image === "/images/program/paginas/ese instante de luz/Rayogramas_Taller Ana Paes_Fresca_22.jpeg") return "/images/program/derivas materiales/paginas/ese instante de luz/Rayogramas_Taller Ana Paes_Fresca_22.png";
    if (image.includes("/del papel a la cerámica/")) return image.replace("/images/program/paginas/del papel a la cerámica/", "/images/program/derivas materiales/paginas/ana-cano-grafica-ceramica/");
    if (image.includes("/bodegones en ceramica/Bodegones en cerámica_Sophie Aguilera")) return image.replace("/images/program/paginas/bodegones en ceramica/Bodegones en cerámica_Sophie Aguilera", "/images/program/derivas materiales/paginas/bodegones en ceramica/sophie-");
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
            <div className="workshop-title-stack"><h1>{workshop.slug === "sirviendo-un-plato-bodegon" ? <>Sirviendo.<br />Un plato-bodegón</> : workshop.title}</h1><p>{workshop.byline}</p>{workshop.edition && <span>{workshop.edition}</span>}</div>
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
          <header><p className="eyebrow">El recorrido</p><h2>{workshop.journeyTitle ?? `${workshop.steps.map((step) => step.title).join(", ")}.`}</h2></header>
          <ol>{workshop.steps.map((step, index) => <li key={step.title}><span>{step.number ?? String(index + 1).padStart(2, "0")}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></li>)}</ol>
        </section>

        <section className="workshop-info">
          <div>{workshop.edition && <p className="eyebrow">{workshop.edition}</p>}<h2>{workshop.infoTitle ?? `${workshop.duration} en Fresca. La Nave.`}</h2><Link href="mailto:info@fresco.art">Me apunto <span aria-hidden="true">↗</span></Link></div>
          <dl><div><dt>Fecha</dt><dd>{workshop.date}</dd></div><div><dt>Horario</dt><dd>{workshop.schedule}</dd></div><div><dt>Lugar</dt><dd>{workshop.place}</dd></div><div><dt>Plazas</dt><dd>{workshop.group}</dd></div><div><dt>Precio</dt><dd>{workshop.price}<br />{workshop.includes}</dd></div></dl>
        </section>

        <section className="workshop-gallery workshop-gallery-masonry">{images.slice(1).map((image) => <figure key={image}><Image src={imageSource(image)} alt={`Proceso de ${workshop.cardTitle}`} width={0} height={0} sizes="(max-width: 760px) 100vw, 33vw" /></figure>)}</section>

        <section className="workshop-tutors"><p className="eyebrow">Imparten</p><div>{workshop.tutors.map((tutor, index) => { const links = tutorLinks[tutor.name]; return <article key={tutor.name}><span>{String(index + 1).padStart(2, "0")}</span><div className="workshop-tutor-heading"><h2>{tutor.name}</h2>{links && <nav aria-label={`Enlaces de ${tutor.name}`}>{links.web && <a href={links.web} target="_blank" rel="noreferrer">Web ↗</a>}{links.instagram && <a href={links.instagram} target="_blank" rel="noreferrer">Instagram ↗</a>}</nav>}</div><div className="workshop-tutor-bio"><p>{tutor.text}</p></div></article>; })}</div></section>

        {workshop.slug === "experimentacion-pictorica-sobre-ceramica" && <section className="artist-work-section">
          <header className="artist-work-heading-single"><p className="eyebrow">Obra de la artista</p></header>
          <div>{anaCanoWorks.map((work, index) => <figure className={index % 4 === 0 ? "artist-work-wide" : ""} key={work.image}><Image src={`${anaCanoWorksBase}/${work.image}`} alt={`${work.title}, obra de Ana Cano Brookbank`} fill sizes="(max-width: 760px) 100vw, 50vw" /><figcaption>{work.title} · Ana Cano Brookbank</figcaption></figure>)}</div>
        </section>}

        {workshop.slug === "micelio-y-textil" && <section className="artist-work-section">
          <header className="artist-work-heading-single"><p className="eyebrow">Obra de la artista</p></header>
          <div>{alejandraWorks.map((image, index) => <figure className={index % 4 === 0 ? "artist-work-wide" : ""} key={image}><Image src={`${alejandraWorksBase}/${image}`} alt="Obra e investigación con micelio de Alejandra Díaz-Guerra" fill sizes="(max-width: 760px) 100vw, 50vw" /></figure>)}</div>
        </section>}

        {workshop.slug === "sirviendo-un-plato-bodegon" && <section className="artist-work-section">
          <header className="artist-work-heading-single"><p className="eyebrow">Obra de la artista</p></header>
          <div>{sophieWorks.map((work) => <figure className={work.portrait ? "artist-work-portrait" : "artist-work-wide"} key={work.image}><Image src={`${sophieWorksBase}/${work.image}`} alt={`${work.title}, obra de Sophie Aguilera`} fill sizes="(max-width: 760px) 100vw, 50vw" /><figcaption>{work.title} · Sophie Aguilera</figcaption></figure>)}</div>
        </section>}

        <nav className="workshop-back"><Link href="/talleres">← Volver a Derivas materiales</Link><Link href="mailto:info@fresco.art">Consultar inscripción ↗</Link></nav>
      </article>
      <footer className="site-footer"><Link className="brand" href="/"><Image src="/branding/fresco-wordmark-black.png" alt="fresco." fill sizes="96px" /></Link><div><a href="https://www.instagram.com/fresca.lanave/" target="_blank" rel="noreferrer">Fresca. La Nave ↗</a><a href="https://www.instagram.com/fresco.arte/" target="_blank" rel="noreferrer">fresco. arte ↗</a><a href="mailto:info@fresco.art">info@fresco.art</a><span>© 2026</span></div></footer>
      <FrescaFixedMark />
    </main>
  );
}
