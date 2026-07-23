import Image from "next/image";
import Link from "next/link";
import { FrescaFixedMark } from "./fresca-fixed-mark";

const base = "/images/program/procesos cuatrimestrales/seminario-autoedicion";

const gallery = [
  { image: "Open Studio_Libros a la fresca_34.png", layout: "portrait" },
  { image: "Open Studio_Libros a la fresca_2.png", layout: "portrait" },
  { image: "Open Studio_Libros a la fresca_83.png", layout: "portrait" },
  { image: "Open Studio_Libros a la fresca_14.png", layout: "landscape" },
  { image: "Open Studio_Libros a la fresca_21.png", layout: "landscape" },
  { image: "Open Studio_Libros a la fresca_23.png", layout: "landscape" },
  { image: "Open Studio_Libros a la fresca_30.png", layout: "landscape" },
  { image: "Open Studio_Libros a la fresca_32.png", layout: "landscape" },
  { image: "Open Studio_Libros a la fresca_36.png", layout: "landscape" },
  { image: "Open Studio_Libros a la fresca_38.png", layout: "landscape" },
  { image: "Open Studio_Libros a la fresca_39.png", layout: "landscape" },
  { image: "Open Studio_Libros a la fresca_43.png", layout: "landscape" },
  { image: "Open Studio_Libros a la fresca_44.png", layout: "landscape" },
  { image: "Open Studio_Libros a la fresca_78.png", layout: "landscape" },
  { image: "Open Studio_Libros a la fresca_85.png", layout: "landscape" },
  { image: "Open Studio_Libros a la fresca_88.png", layout: "landscape" },
  { image: "Open Studio_Libros a la fresca_89.png", layout: "landscape" },
];

const artistWorksBase = `${base}/obra ana-bustelo`;
const artistWorks = [
  "A veces_ las cosas no salen como una espera.Edición de 250 copias en offset, firmadas y numeradas.jpg",
  "A_ veces las´ cosas no salen como una espera.Edición de 250 copias en offset, firmadas y numeradas.jpg",
  "El tiempo se escapa como una nube, como las naves, como una sombra._Edición en riso por les veci.jpg",
  "Esta es una de mis piezas favoritas de loderoma, con una compo en espiral inspirada en el juego .jpg",
  "Fresco.jpg",
  "Museo ABC Ana Bustelo.jpeg",
  "Penélope e Ítaca...Penélope, además de llorar y rezar por el regreso de su esposo, engaña a los .jpg",
  "ana bustelo.jpeg",
  "ervilha_1. El dibujo a línea con pilot_2. La compo de stencils con lápices_3. El dibujo editado .jpg",
  "images.jpeg",
  "ñ1. El dibujo a línea con pilot_2. La compo de stencils con lápices_3. El dibujo editado y public.jpg",
];

const steps = [
  { title: "Taller intensivo", text: "Un fin de semana de 14 horas para abrir referencias y posibilidades editoriales, activar el proyecto mediante ejercicios de narrativa y exploración formal y plantear una primera maqueta." },
  { title: "Tiempo de trabajo", text: "Un intervalo para que cada participante desarrolle su propuesta y llegue a la primera revisión con materiales, pruebas y preguntas concretas." },
  { title: "Sesión de apoyo 01", text: "Tres horas de revisión y seguimiento para leer el estado de cada proyecto, desbloquear decisiones y orientar los siguientes pasos." },
  { title: "Sesión de apoyo 02", text: "Tres horas centradas en la producción: formatos, recursos gráficos, pruebas de estado y avances de la maqueta o display." },
  { title: "Sesión de apoyo 03", text: "Tres horas de revisión individual para editar contenidos, resolver acabados y preparar la publicación para su presentación." },
  { title: "Open studio", text: "Una apertura pública en Fresca. La Nave para compartir los procesos y las publicaciones producidas durante el programa." },
];

export function AutoedicionDetail() {
  return (
    <main>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Fresco, inicio"><Image src="/branding/fresco-wordmark-black.png" alt="fresco." fill sizes="96px" priority /></Link>
        <nav className="desktop-nav" aria-label="Navegación principal"><Link href="/#programa">Programa</Link><Link href="/#la-nave">La Nave</Link><Link href="/#archivo">Archivo</Link></nav>
        <Link className="header-cta" href="#inscripcion">ME SUMO <span aria-hidden="true">↘</span></Link>
      </header>

      <article className="workshop-page seminar-page">
        <header className="workshop-hero">
          <div className="workshop-hero-image"><Image src={`${base}/Open Studio_Libros a la fresca_42.png`} alt="Publicación desarrollada en el seminario de autoedición" fill sizes="(max-width: 760px) 100vw, 44vw" priority /></div>
          <div className="workshop-hero-copy">
            <p className="meta-label">Procesos cuatrimestrales · SE—02</p>
            <div className="workshop-title-stack"><h1>Autoedición.</h1><p>Herramientas para crear y producir una publicación.</p><span>Con Ana Bustelo · Febrero—mayo 2027<br />II edición</span></div>
            <div className="workshop-hero-action" id="inscripcion">
              <dl><div><dt>Fecha</dt><dd>Febrero—mayo 2027</dd></div><div><dt>Lugar</dt><dd>Carabanchel, Madrid</dd></div><div><dt>Duración</dt><dd>23 horas + open studio</dd></div><div><dt>Precio</dt><dd>420 €</dd></div></dl>
              <Link href="mailto:info@fresco.art">Me apunto <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </header>

        <section className="workshop-question"><p className="eyebrow">El seminario</p><h2>Ilustración y dibujo como herramientas narrativas para imaginar, producir y editar una publicación propia.</h2></section>

        <section className="workshop-overview">
          <div className="workshop-overview-image"><Image src={`${base}/Open Studio_Libros a la fresca_13.png`} alt="Publicaciones y procesos editoriales desplegados sobre una mesa" fill sizes="(max-width: 760px) 100vw, 48vw" /></div>
          <div className="workshop-overview-copy"><p className="eyebrow">Autoedición</p><p className="workshop-overview-lead">Sesiones prácticas que combinan referentes, recursos y técnicas para idear, desarrollar y presentar una edición contemporánea.</p><div className="workshop-overview-body"><p>A lo largo del seminario se abordan todas las fases del proceso creativo —investigación, boceto, color, producción y acabados— aplicadas a proyectos editoriales o autoediciones.</p><p>Ana Bustelo acompaña el proceso creativo y productivo de cada participante, compartiendo consejos profesionales, referencias y un modelo de trabajo completo para dar forma a una publicación personal.</p></div></div>
        </section>

        <section className="workshop-journey">
          <header><p className="eyebrow">El formato</p><h2>Un comienzo intensivo y tres revisiones para acompañar el proyecto hasta su presentación.</h2><Link href="mailto:info@fresco.art">Quiero más info <span aria-hidden="true">↗</span></Link></header>
          <ol>{steps.map((step, index) => <li key={step.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></li>)}</ol>
        </section>

        <section className="workshop-info">
          <div><p className="eyebrow workshop-info-eyebrow">23 horas presenciales + open studio</p><h2>Un proyecto editorial desarrollado entre sesiones de trabajo y revisión.</h2><Link href="mailto:info@fresco.art">Me apunto <span aria-hidden="true">↗</span></Link></div>
          <dl>
            <div><dt>Fechas</dt><dd>Febrero—mayo 2027</dd></div>
            <div><dt>Horario</dt><dd>Sábado y domingo de 11 a 19 h · Con pausa para comer</dd></div>
            <div><dt>Formato</dt><dd>Taller intensivo de 14 horas y tres sesiones de seguimiento de 3 horas · 23 horas presenciales</dd></div>
            <div><dt>Open studio</dt><dd>Presentación colectiva de fin de semana en Fresca. La Nave</dd></div>
            <div><dt>Precio</dt><dd>420 €</dd></div>
            <div><dt>Pago</dt><dd>Reserva de plaza: 130 € + dos pagos de 150 €</dd></div>
            <div><dt>Dirigido a</dt><dd>Personas interesadas en la ilustración, el dibujo y la edición de una publicación personal</dd></div>
          </dl>
        </section>

        <section className="workshop-gallery workshop-gallery-autoedicion">{gallery.map((item) => <figure className={`workshop-gallery-${item.layout}`} key={item.image}><Image src={`${base}/${item.image}`} alt="Proceso y publicaciones del seminario de autoedición" fill sizes={item.layout === "landscape" ? "(max-width: 760px) 100vw, 50vw" : "(max-width: 760px) 100vw, 33vw"} /></figure>)}</section>

        <section className="workshop-tutors"><p className="eyebrow">Imparte</p><div><article><span>01</span><div className="workshop-tutor-heading"><h2>Ana Bustelo</h2><nav aria-label="Enlaces de Ana Bustelo"><a href="https://anabustelo.es/" target="_blank" rel="noreferrer">Web ↗</a><a href="https://www.instagram.com/ana_bustelo/" target="_blank" rel="noreferrer">Instagram ↗</a></nav></div><div className="workshop-tutor-bio"><p>Ana Bustelo (Palencia, 1982) es artista e ilustradora madrileña. Su trabajo combina dos de sus pasiones: dibujar y leer. Desde su estudio desarrolla proyectos para revistas, periódicos, editoriales y campañas de comunicación, colaborando con clientes como el Centro Dramático Nacional, Planeta, Vives, <em>El País</em> y <em>El Mundo</em>.</p><p>Su obra ha recibido reconocimiento internacional en certámenes como Communication Arts, la Bienal portuguesa Ilustrarte, la Feria Infantil del Libro de Bolonia y la Academia de España en Roma, donde desarrolló su primer libro autoeditado. Compagina la ilustración profesional con proyectos experimentales, colaboraciones con galerías en Bogotá y Portugal y la exploración de la autopublicación.</p><p>Actualmente prepara la edición de su libro <em>Amuleto</em> con Anoche Press y una exposición retrospectiva en el Museo ABC de Madrid.</p></div></article></div></section>

        <section className="artist-work-section">
          <header className="artist-work-heading-single"><p className="eyebrow">Obra de la artista</p></header>
          <div>{artistWorks.map((image, index) => <figure className={index % 4 === 0 ? "artist-work-wide" : ""} key={image}><Image src={`${artistWorksBase}/${image}`} alt="Obra editorial e ilustración de Ana Bustelo" fill sizes="(max-width: 760px) 100vw, 50vw" /></figure>)}</div>
        </section>

        <nav className="workshop-back"><Link href="/seminarios">← Volver a Seminarios</Link><Link href="mailto:info@fresco.art">Consultar inscripción ↗</Link></nav>
      </article>

      <footer className="site-footer"><Link className="brand" href="/"><Image src="/branding/fresco-wordmark-black.png" alt="fresco." fill sizes="96px" /></Link><div><a href="https://www.instagram.com/fresca.lanave/" target="_blank" rel="noreferrer">Fresca. La Nave ↗</a><a href="https://www.instagram.com/fresco.arte/" target="_blank" rel="noreferrer">fresco. arte ↗</a><a href="mailto:info@fresco.art">info@fresco.art</a><span>© 2026</span></div></footer>
      <FrescaFixedMark />
    </main>
  );
}
