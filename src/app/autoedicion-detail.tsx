import Image from "next/image";
import Link from "next/link";
import { FrescaFixedMark } from "./fresca-fixed-mark";

const base = "/images/program/procesos cuatrimestrales/seminario-autoedicion-web";

const gallery = [
  { image: "gallery-01.jpg", layout: "portrait" },
  { image: "gallery-02.jpg", layout: "portrait" },
  { image: "gallery-03.jpg", layout: "portrait" },
  { image: "gallery-04.jpg", layout: "landscape" },
  { image: "gallery-05.jpg", layout: "landscape" },
  { image: "gallery-06.jpg", layout: "landscape" },
  { image: "gallery-07.jpg", layout: "landscape" },
  { image: "gallery-08.jpg", layout: "landscape" },
  { image: "gallery-09.jpg", layout: "landscape" },
  { image: "gallery-10.jpg", layout: "landscape" },
  { image: "gallery-11.jpg", layout: "landscape" },
  { image: "gallery-12.jpg", layout: "landscape" },
  { image: "gallery-13.jpg", layout: "landscape" },
  { image: "gallery-14.jpg", layout: "landscape" },
  { image: "gallery-15.jpg", layout: "landscape" },
  { image: "gallery-16.jpg", layout: "landscape" },
  { image: "gallery-17.jpg", layout: "landscape" },
];

const artistWorksBase = `${base}/obra-ana-bustelo`;
const artistWorks = [
  "obra-01.jpg",
  "obra-02.jpg",
  "obra-03.jpg",
  "obra-04.jpg",
  "obra-05.jpg",
  "obra-06.jpg",
  "obra-07.jpg",
  "obra-08.jpg",
  "obra-09.jpg",
  "obra-10.jpg",
];

const steps = [
  { title: "Taller intensivo", text: "Un fin de semana de 14 horas para abrir referencias y posibilidades editoriales, activar el proyecto mediante ejercicios narrativos y de exploración formal y plantear una primera maqueta." },
  { title: "Tiempo de trabajo", text: "Un intervalo para que cada participante avance en su autoedición y llegue al primer seguimiento con materiales, pruebas y preguntas concretas." },
  { title: "Seguimiento 01", text: "Primer encuentro de tres horas para leer el estado de los proyectos, compartir ejercicios y orientar los siguientes pasos." },
  { title: "Seguimiento 02", text: "Segundo encuentro de tres horas para revisar avances, resolver decisiones y ajustar herramientas a las necesidades del grupo." },
  { title: "Seguimiento 03", text: "Tercer encuentro de tres horas para acompañar la evolución de las publicaciones y preparar su presentación." },
  { title: "Open studio", text: "Una apertura pública en Fresca. La Nave para compartir los procesos y presentar las ediciones producidas durante el seminario." },
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
          <div className="workshop-hero-image"><Image src={`${base}/hero.jpg`} alt="Publicación desarrollada en el seminario de autoedición" fill sizes="(max-width: 760px) 100vw, 44vw" priority /></div>
          <div className="workshop-hero-copy">
            <p className="meta-label">Procesos cuatrimestrales · SE—02</p>
            <div className="workshop-title-stack"><h1>Autoedición.</h1><p>Herramientas para crear y producir una publicación.</p><span>Con Ana Bustelo · Febrero—mayo 2027<br />II edición</span></div>
            <div className="workshop-hero-action" id="inscripcion">
              <dl><div><dt>Fecha</dt><dd>Febrero—mayo 2027</dd></div><div><dt>Lugar</dt><dd>Carabanchel, Madrid</dd></div><div><dt>Duración</dt><dd>23 horas lectivas + open studio</dd></div><div><dt>Precio</dt><dd>420 €</dd></div></dl>
              <Link href="mailto:info@fresco.art">Me apunto <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </header>

        <section className="workshop-question"><p className="eyebrow">El seminario</p><h2>Ilustración y dibujo como herramientas narrativas para desarrollar una publicación propia.</h2></section>

        <section className="workshop-overview workshop-overview-autoedicion">
          <div className="workshop-overview-image"><Image src={`${base}/overview.jpg`} alt="Publicaciones y procesos editoriales desplegados sobre una mesa" fill sizes="(max-width: 760px) 100vw, 48vw" /></div>
          <div className="workshop-overview-copy"><p className="eyebrow">Autoedición</p><p className="workshop-overview-lead">Un seminario práctico dirigido a personas interesadas en experimentar con la ilustración y el dibujo como herramientas narrativas y desarrollar su propia publicación.</p><div className="workshop-overview-body"><p>A lo largo del programa recorreremos <strong>todas las fases del proceso creativo: investigación, boceto, color, producción y acabados.</strong> Ana Bustelo acompañará el desarrollo creativo y productivo de cada participante, compartiendo referencias, recursos, técnicas y consejos profesionales para dar forma a una edición personal.</p><p>El seminario combinará <strong>ejercicios individuales y colectivos, tutorías y seguimiento personalizado.</strong> Cada participante trabajará en <strong>una maqueta o prueba de estado de su publicación.</strong> El proceso culminará con un <strong>open studio en Fresca. La Nave</strong>, donde se presentarán al público las ediciones producidas.</p><p>El programa consta de un <strong>taller intensivo de fin de semana</strong> y <strong>tres encuentros de seguimiento de tres horas</strong>. Estos encuentros se distribuirán de forma espaciada a lo largo de la duración total del seminario, entre febrero y mayo. El tiempo dedicado al trabajo, las tutorías y las revisiones entre cada encuentro se definirá según las necesidades del grupo y la evolución de los proyectos.</p></div></div>
        </section>

        <section className="workshop-journey">
          <header><p className="eyebrow">El formato</p><h2>Diseñar, producir y presentar tu edición.</h2><p className="workshop-journey-note">Los tres encuentros de seguimiento se distribuyen de forma espaciada entre febrero y mayo. El tiempo dedicado al trabajo, las tutorías y las revisiones entre cada encuentro se definirá según las necesidades del grupo y la evolución de los proyectos.</p><Link href="mailto:info@fresco.art">Quiero más info <span aria-hidden="true">↗</span></Link></header>
          <ol>{steps.map((step, index) => <li key={step.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></li>)}</ol>
        </section>

        <section className="workshop-info">
          <div><p className="eyebrow workshop-info-eyebrow">23 horas lectivas + open studio</p><h2>Un proyecto editorial desarrollado entre sesiones de trabajo, tutoría y revisión.</h2><Link href="mailto:info@fresco.art">Me apunto <span aria-hidden="true">↗</span></Link></div>
          <dl>
            <div><dt>Fechas</dt><dd>Febrero—mayo 2027</dd></div>
            <div><dt>Horario</dt><dd>Intensivo: sábado y domingo de 11 a 19 h, con pausa para comer · Seguimientos: tres encuentros entre semana, distribuidos de forma espaciada entre febrero y mayo</dd></div>
            <div><dt>Formato</dt><dd>Taller intensivo de fin de semana: 2 días · 14 horas<br />Tres encuentros de seguimiento: 3 horas cada uno · 9 horas<br />Total: 23 horas lectivas</dd></div>
            <div><dt>Open studio</dt><dd>Presentación pública de las ediciones producidas en Fresca. La Nave</dd></div>
            <div><dt>Precio</dt><dd>420 € · No incluye los gastos de producción</dd></div>
            <div><dt>Forma de pago</dt><dd>100 € de inscripción para reservar la plaza + 320 €, con posibilidad de dividir este importe en dos pagos de 160 €</dd></div>
            <div><dt>Dinámica</dt><dd>El tiempo dedicado al trabajo, las tutorías y las revisiones entre cada encuentro se definirá según las necesidades del grupo y la evolución de los proyectos</dd></div>
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
