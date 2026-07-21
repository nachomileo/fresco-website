import Image from "next/image";
import Link from "next/link";
import { FrescaFixedMark } from "./fresca-fixed-mark";

const base = "/images/program/procesos cuatrimestrales/seminario en obra";
const archiveBase = `${base}/obra-archivo`;

const gallery = [
  { image: "C4D2EB42-27FD-417A-9559-82F1944F4D48.jpg", layout: "portrait" },
  { image: "IMG_7121.jpeg", layout: "landscape" },
  { image: "c01e848e-68eb-46c6-bf99-bde9deec625b.jpg", layout: "portrait" },
  { image: "E5126AC0-6753-4A96-B37E-4ABEFD082FC2_1_105_c.jpeg", layout: "portrait" },
  { image: "IMG_2984.jpeg", layout: "portrait" },
  { image: "IMG_5898.jpeg", layout: "landscape" },
  { image: "IMG_2652 2.jpeg", layout: "portrait" },
  { image: "A73A5B96-7AA3-486F-882D-DD0105AD3A4F.jpg", layout: "portrait" },
  { image: "IMG_5004.jpeg", layout: "portrait" },
  { image: "AAA62B03-2127-431B-B2DA-E14AA09217C5.jpg", layout: "portrait" },
  { image: "67320f73-e8c2-48f7-b863-bdaedad55a95.jpg", layout: "landscape" },
  { image: "IMG_6218.jpeg", layout: "portrait" },
  { image: "D833109B-99A2-4524-8DE8-15D4A38134D1_1_105_c.jpeg", layout: "portrait" },
  { image: "IMG_7063.jpeg", layout: "portrait" },
  { image: "IMG_5845.jpeg", layout: "portrait" },
  { image: "B72C56F8-FCEF-4968-B9D0-01266483A445.jpg", layout: "portrait" },
  { image: "IMG_3252.jpeg", layout: "landscape" },
  { image: "IMG_3260.jpeg", layout: "portrait" },
  { image: "IMG_7185.jpeg", layout: "landscape" },
  { image: "IMG_3824.jpeg", layout: "portrait" },
  { image: "IMG_3234.jpeg", layout: "landscape" },
  { image: "IMG_3248.JPG", layout: "portrait" },
  { image: "IMG_7592.jpeg", layout: "landscape" },
];

const artistWorks = [
  `${base}/Nacho Martin Silva _CAB-38.jpg`,
  `${base}/Nacho Martin Silva _CAB-52.jpg`,
  `${base}/Nacho Martin Silva _CAB-63.jpg`,
  `${archiveBase}/nacho-silva-obra-01.jpg`,
  `${archiveBase}/nacho-silva-obra-02.jpg`,
  `${archiveBase}/nacho-silva-obra-03.jpg`,
  `${archiveBase}/nacho-silva-obra-04.jpg`,
];

const steps = [
  { title: "Situar", text: "Presentar las prácticas, preguntas y materiales de cada participante para reconocer el punto de partida del proyecto personal." },
  { title: "Sesiones de lectura y conversación", text: "Referencias, casos de estudio y herramientas para situar el trabajo en el arte contemporáneo." },
  { title: "Visitas y contexto", text: "Salidas a exposiciones, estudios o actividades de la agenda local que ayuden a abrir preguntas sobre la producción y la puesta en público de los proyectos." },
  { title: "Probar", text: "Explorar formatos y probar materiales en las instancias de producción, conversación y crítica de obra." },
  { title: "Decidir", text: "Analizar y encontrar las formas materiales, discursivas y expositivas que cada propuesta necesita." },
  { title: "Compartir", text: "Presentar los avances al grupo y contrastar decisiones a través de la conversación y la crítica de obra." },
  { title: "Preparar", text: "Cerrar la selección de obra, resolver las necesidades técnicas y preparar el montaje, la mediación y la comunicación de cara a la exposición." },
  { title: "Open studio", text: "Exposición colectiva de fin de semana en Fresca. La Nave durante marzo de 2027." },
];

export function EnObraDetail() {
  return (
    <main>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Fresco, inicio"><Image src="/branding/fresco-wordmark-black.png" alt="fresco." fill sizes="96px" priority /></Link>
        <nav className="desktop-nav" aria-label="Navegación principal"><Link href="/#programa">Programa</Link><Link href="/#archivo">Archivo</Link><Link href="/#la-nave">La Nave</Link></nav>
        <Link className="header-cta" href="#inscripcion">ME SUMO <span aria-hidden="true">↘</span></Link>
      </header>

      <article className="workshop-page seminar-page">
        <header className="workshop-hero">
          <div className="workshop-hero-image"><Image src={`${base}/IMG_6709.jpeg`} alt="Montaje colectivo de la exposición del seminario En obra" fill sizes="(max-width: 760px) 100vw, 44vw" priority /></div>
          <div className="workshop-hero-copy">
            <p className="meta-label">Procesos cuatrimestrales · SE—01</p>
            <div className="workshop-title-stack"><h1>En obra</h1><p>Acompañamiento crítico para la práctica artística</p><span>Con Nacho Martín Silva · Octubre 2026—enero 2027<br />II edición</span></div>
            <div className="workshop-hero-action" id="inscripcion">
              <dl><div><dt>Fecha</dt><dd>Octubre 2026—enero 2027</dd></div><div><dt>Lugar</dt><dd>Carabanchel, Madrid</dd></div><div><dt>Duración</dt><dd>16 encuentros · 48 horas</dd></div><div><dt>Precio</dt><dd>690 €</dd></div></dl>
              <Link href="mailto:seminario@fresco.art">Me apunto <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </header>

        <section className="workshop-question"><p className="eyebrow">El seminario</p><h2>Un espacio de acompañamiento para desarrollar, poner a prueba y compartir un proyecto artístico.</h2></section>

        <section className="workshop-overview">
          <div className="workshop-overview-image"><Image src={`${base}/IMG_5836.jpeg`} alt="Artista trabajando con su obra durante el montaje del seminario En obra" fill sizes="(max-width: 760px) 100vw, 48vw" /></div>
          <div className="workshop-overview-copy"><p className="eyebrow">En obra</p><p className="workshop-overview-lead">Un seminario cuatrimestral para artistas y creadores que estén desarrollando una investigación, un cuerpo de trabajo o un proyecto que quieran llevar más lejos.</p><div className="workshop-overview-body"><p>La mirada del seminario parte de la práctica de Martín Silva, centrada en el desarrollo de la pintura como forma de pensamiento. La pintura no se aborda como un lenguaje preconcebido, sino como una materialización cuyo propio proceso creativo funciona como eje conductor.</p><p>Desde ese marco, el seminario combina seguimiento individual con trabajo colectivo. Cada participante desarrolla su propio proyecto acompañado por el artista tutor y prepara una presentación de su proceso o de la obra resultante dentro de una exposición colectiva de fin de semana en Fresca. La Nave.</p></div></div>
        </section>

        <section className="workshop-journey">
          <header><p className="eyebrow">El recorrido</p><h2>La pintura como forma de pensamiento.<br />El proceso como eje.</h2><Link href="mailto:seminario@fresco.art">Quiero más info <span aria-hidden="true">↗</span></Link></header>
          <ol>{steps.map((step, index) => <li key={step.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></li>)}</ol>
        </section>

        <section className="workshop-info">
          <div><p className="eyebrow">Proceso cuatrimestral</p><h2>Seguimiento individual y trabajo colectivo.</h2><Link href="mailto:seminario@fresco.art">Me apunto <span aria-hidden="true">↗</span></Link></div>
          <dl>
            <div><dt>Fechas</dt><dd>Octubre 2026—enero 2027</dd></div>
            <div><dt>Horario</dt><dd>Viernes de 18 a 21 h · A confirmar con el grupo</dd></div>
            <div><dt>Formato</dt><dd>16 encuentros semanales · 48 horas lectivas</dd></div>
            <div><dt>Plazas</dt><dd>6 plazas</dd></div>
            <div><dt>Open studio</dt><dd>Exposición colectiva de fin de semana · Marzo 2027</dd></div>
            <div><dt>Precio</dt><dd>690 €</dd></div>
            <div><dt>Pago</dt><dd>Reserva de 100 € y dos pagos de 295 €</dd></div>
            <div><dt>Dirigido a</dt><dd>Artistas y creadores que quieran desarrollar una investigación, un cuerpo de trabajo o un proyecto personal</dd></div>
          </dl>
        </section>

        <section className="workshop-gallery workshop-gallery-editorial">{gallery.map((item) => <figure className={`workshop-gallery-${item.layout}`} key={item.image}><Image src={`${base}/${item.image}`} alt="Proceso y presentación del seminario En obra" fill sizes={item.layout === "landscape" ? "(max-width: 760px) 100vw, 66vw" : "(max-width: 760px) 100vw, 33vw"} /></figure>)}</section>

        <section className="workshop-tutors workshop-tutors-before-artwork">
          <p className="eyebrow">Imparte</p>
          <div><article><span>01</span><div className="workshop-tutor-heading"><h2>Nacho Martín Silva</h2><nav aria-label="Enlaces de Nacho Martín Silva"><a href="https://www.nachomartinsilva.com" target="_blank" rel="noreferrer">Web ↗</a><a href="https://www.instagram.com/nacho_martinsilva/" target="_blank" rel="noreferrer">Instagram ↗</a></nav></div><div className="workshop-tutor-bio">
            <p>Nacho Martín Silva es licenciado en Bellas Artes por la Universidad Complutense de Madrid.</p>
            <p>Entre sus proyectos individuales cabe destacar <em>Tangere</em> en La Térmica de Málaga; <em>Historia pintada de la historia de la Historia</em> en el CAB de Burgos; <em>Paraísos de papel</em> en la Galería Max Estrella de Madrid; <em>Extraño Paraíso</em> en la Galería El Apartamento de La Habana; <em>The Good, the Bad and the Ugly</em>, proyecto presentado por la Galería El Apartamento en Liste Art Fair, Basilea, en 2022; <em>Piece of Trash</em> en la Fundació Miró Mallorca; o <em>Il futuro non è ciò che era</em>, comisariado por Tolo Cañellas en Box 27, Casal Solleric, Palma.</p>
            <p>Ha participado en exposiciones colectivas en museos, galerías e instituciones internacionales como Espacio 23 en Miami; el Centro de Arte Dos de Mayo, CA2M, de Móstoles; el Patio Herreriano de Valladolid; CICA Palais El Abdelliya, Túnez; el CCEMX en Ciudad de México; Spring Break Art Show de Nueva York; Fundación Juan March de Mallorca; Espacio Odeón en Bogotá; Centro Párraga de Murcia; CentroCentro Madrid; Matadero Madrid; o el CGAC de Santiago de Compostela, entre otras.</p>
            <p>Su obra se ha mostrado en las últimas ediciones de las ferias Armory Show, Nueva York; Liste Art Fair, Basilea; Untitled, Miami; ARCO Madrid; ARCO Lisboa; y ARTBO, Bogotá, entre otras.</p>
            <p>Ha sido galardonado con el Premio Pilar Juncosa y Sotheby&apos;s a la Creación Artística, el Soporte a las Artes Visuales de la Comunidad de Madrid, el Premio Estampa–Casa de Velázquez y el Premio Absolut–Jugada a 3 Bandas.</p>
            <p>Se ha dedicado una monografía a su trabajo en <em>Pocket Series: Nacho Martín Silva</em>, de Juan Francisco Rueda, editada por Nocapaper en 2016. También ha sido incluido en el libro de David Barro <em>Antes de irse. 40 ideas sobre pintura</em>, editado por Arte Contemporáneo y Energía A.I.E. y DARDO Editorial en 2013.</p>
          </div></article></div>
        </section>

        <section className="artist-work-section">
          <header className="artist-work-heading-single"><p className="eyebrow">Obra del artista</p></header>
          <div>{artistWorks.map((image, index) => <figure className={index % 4 === 0 ? "artist-work-wide" : ""} key={index}><Image src={image} alt="Obra y vista de exposición de Nacho Martín Silva" fill sizes="(max-width: 760px) 100vw, 50vw" /></figure>)}</div>
        </section>

        <nav className="workshop-back"><Link href="/seminarios">← Volver a Seminarios</Link><Link href="mailto:seminario@fresco.art">Consultar inscripción ↗</Link></nav>
      </article>

      <footer className="site-footer"><Link className="brand" href="/"><Image src="/branding/fresco-wordmark-black.png" alt="fresco." fill sizes="96px" /></Link><div><a href="https://www.instagram.com/fresca.lanave/" target="_blank" rel="noreferrer">Fresca. La Nave ↗</a><a href="https://www.instagram.com/fresco.arte/" target="_blank" rel="noreferrer">fresco. arte ↗</a><a href="mailto:info@fresco.art">info@fresco.art</a><span>© 2026</span></div></footer>
      <FrescaFixedMark />
    </main>
  );
}
