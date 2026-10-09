import Image from "next/image";
import Link from "next/link";
import { FrescaFixedMark } from "./fresca-fixed-mark";

const base = "/images/program/procesos cuatrimestrales/exploraciones-al-aguafuerte";
const gallery = [
  { image: "prensa-de-grabado-en-el-taller.jpg", layout: "landscape" },
  { image: "plancha-de-cobre-aguafuerte.jpg", layout: "portrait" },
  { image: "paula-cid-cerezo-mostrando-estampa.jpg", layout: "portrait" },
  { image: "bocetos-para-aguafuerte.jpg", layout: "portrait" },
  { image: "plancha-de-aguafuerte.jpg", layout: "portrait" },
  { image: "aguafuerte-estampas-sobre-mesa.jpg", layout: "landscape" },
  { image: "paula-cid-cerezo-en-su-taller.jpg", layout: "portrait" },
  { image: "taller-de-grabado-carabanchel.jpg", layout: "landscape" },
  { image: "aguafuerte-estampas-en-proceso.jpg", layout: "landscape" },
  { image: "paula-cid-cerezo-en-el-taller.jpg", layout: "landscape" },
  { image: "paula-cid-cerezo-proceso-de-grabado.jpg", layout: "landscape" },
  { image: "matriz-de-cobre-aguafuerte.jpg", layout: "portrait" },
  { image: "cuaderno-de-dibujo-y-grabado.jpg", layout: "landscape" },
  { image: "cuaderno-de-trabajo-aguafuerte.jpg", layout: "landscape" },
];

const artistWorks = [
  "obra-paula-cid-cerezo-01.jpg",
  "obra-paula-cid-cerezo-03.jpg",
  "obra-paula-cid-cerezo-02.jpg",
  "obra-paula-cid-cerezo-04.jpg",
  "obra-paula-cid-cerezo-05.jpg",
  "obra-paula-cid-cerezo-06.jpg",
  "obra-paula-cid-cerezo-07.jpg",
  "obra-paula-cid-cerezo-08.jpg",
  "obra-paula-cid-cerezo-09.jpg",
  "obra-paula-cid-cerezo-10.jpg",
  "obra-paula-cid-cerezo-11.jpg",
  "obra-paula-cid-cerezo-12.jpg",
  "obra-paula-cid-cerezo-13.jpg",
  "obra-paula-cid-cerezo-14.jpg",
];

const steps = [
  { title: "Dibujar, dibujar", text: "Ejercicios de dibujo creativo y desinhibido para perder el miedo, soltar la mano y encontrar imágenes a través del juego, la observación y el trazo libre." },
  { title: "Preparar la plancha de grabado", text: "Desengrasar y barnizar las planchas de cobre; seleccionar un dibujo y trasladarlo a la matriz como punto de partida del proceso gráfico." },
  { title: "Estampar, estampar, estampar", text: "Experimentar con estampación monocroma y policroma, reservas, plantillas, monograbado, chine collé, sobreimpresión y gofrado." },
  { title: "Hacia la edición gráfica", text: "Revisar las posibilidades de cada proyecto y pensar la edición de obra gráfica a partir de sus pruebas, variaciones y hallazgos." },
  { title: "Compartir", text: "Presentación de los procesos de trabajo realizados en un Open Studio en Fresca. La Nave." },
];

export function AguafuerteDetail() {
  return (
    <main>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Fresco, inicio"><Image src="/branding/fresco-wordmark-black.png" alt="fresco." fill sizes="96px" priority /></Link>
        <nav className="desktop-nav" aria-label="Navegación principal"><Link href="/#programa">Programa</Link><Link href="/#la-nave">La Nave</Link><Link href="/#archivo">Archivo</Link></nav>
        <Link className="header-cta" href="/#contacto">ME SUMO <span aria-hidden="true">↘</span></Link>
      </header>

      <article className="workshop-page seminar-page">
        <header className="workshop-hero">
          <div className="workshop-hero-image"><Image src={`${base}/aguafuerte-estampas-en-proceso.jpg`} alt="Pruebas de aguafuerte en el taller de Paula Cid Cerezo" fill sizes="(max-width: 760px) 100vw, 44vw" priority /></div>
          <div className="workshop-hero-copy">
            <p className="meta-label">Seminarios · SE—03</p>
            <div className="workshop-title-stack"><h1>Exploraciones<br />al aguafuerte.</h1><p>Seminario de dibujo y grabado.</p><span>Con Paula Cid Cerezo · Febrero 2027</span></div>
            <div className="workshop-hero-action" id="inscripcion">
              <dl><div><dt>Fecha</dt><dd>13, 14, 20, 21 y 27 de febrero de 2027</dd></div><div><dt>Lugar</dt><dd>Colonia de la Prensa, Carabanchel</dd></div><div><dt>Duración</dt><dd>32 horas + open studio</dd></div><div><dt>Precio</dt><dd>460 €</dd></div></dl>
              <Link href="mailto:info@fresco.art?subject=Exploraciones%20al%20aguafuerte">Reserva plaza <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </header>

        <section className="workshop-question"><p className="eyebrow">El seminario</p><h2>Un taller experimental de investigación gráfica para explorar las capacidades del aguafuerte y expandir el dibujo.</h2></section>

        <section className="workshop-overview workshop-overview-aguafuerte">
          <div className="workshop-overview-image"><Image src={`${base}/plancha-de-aguafuerte.jpg`} alt="Plancha de aguafuerte en el taller de Paula Cid Cerezo" fill sizes="(max-width: 760px) 100vw, 48vw" /></div>
          <div className="workshop-overview-copy"><p className="eyebrow">Exploraciones al aguafuerte</p><p className="workshop-overview-lead">Explorar los límites gráficos del propio dibujo gracias a las bondades del grabado.</p><div className="workshop-overview-body"><p>Taller experimental de investigación gráfica enfocado en explorar las capacidades del aguafuerte y sus límites. A través de dinámicas de dibujo creativo orientadas a la observación desinhibida y el trazo libre, el seminario aborda el potencial contemporáneo de esta técnica calcográfica tradicional, donde el objetivo no es sólo reproducir el dibujo sino expandirlo. Lxs participantes investigarán la producción de múltiples versiones de una misma imagen, profundizando en la versatilidad plástica del dibujo y la estampación. Al finalizar el seminario, presentaremos al público los ensayos y proyectos finales.</p><h3 className="workshop-overview-subheading">¿Qué vas a aprender?</h3><p>A perder el miedo al dibujo y descubrir la vigencia del aguafuerte: una técnica histórica que se consolida como motor para la exploración gráfica contemporánea. A través de la reproducción y estampación, llevaremos una misma imagen hasta sus límites para descubrir todo el potencial expresivo que oculta la línea. No se necesita experiencia previa.</p></div></div>
        </section>

        <section className="workshop-journey">
          <header><p className="eyebrow">El recorrido</p><h2>Del trazo a la edición gráfica.</h2><p className="workshop-journey-note">Dibujo creativo y desinhibido, grabado al aguafuerte y tres sesiones de estampación experimental. Grupo reducido.</p><Link href="mailto:info@fresco.art?subject=Consulta%20Exploraciones%20al%20aguafuerte">Quiero más info <span aria-hidden="true">↗</span></Link></header>
          <ol>{steps.map((step, index) => <li key={step.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></li>)}</ol>
        </section>

        <section className="workshop-info">
          <div><p className="eyebrow">3 fines de semana</p><h2>Investigar el dibujo a través de la huella, la repetición y la materia.</h2><Link href="mailto:info@fresco.art?subject=Exploraciones%20al%20aguafuerte">Me apunto <span aria-hidden="true">↗</span></Link></div>
          <dl>
            <div><dt>Fechas</dt><dd>13 y 14 · 20 y 21 · 27 de febrero de 2027</dd></div>
            <div><dt>Horario</dt><dd>Sábados de 10 a 19 h · Domingos de 10 a 14 h</dd></div>
            <div><dt>Lugar</dt><dd>Taller profesional de grabado de Paula Cid Cerezo · Colonia de la Prensa, Carabanchel</dd></div>
            <div><dt>Formato</dt><dd>32 horas lectivas</dd></div>
            <div><dt>Open studio</dt><dd>Presentación de los procesos de trabajo realizados en Fresca. La Nave</dd></div>
            <div><dt>Precio</dt><dd>460 € · Incluye plancha, papeles, tintas y demás consumibles</dd></div>
            <div><dt>Forma de pago</dt><dd>Reserva de 100 € + dos pagos de 180 €</dd></div>
            <div><dt>Grupo</dt><dd>Grupo reducido</dd></div>
          </dl>
        </section>

        <section className="workshop-gallery workshop-gallery-autoedicion">{gallery.map((item) => <figure className={`workshop-gallery-${item.layout}`} key={item.image}><Image src={`${base}/${item.image}`} alt="Proceso de dibujo y grabado durante el seminario Exploraciones al aguafuerte" fill sizes={item.layout === "landscape" ? "(max-width: 760px) 100vw, 50vw" : "(max-width: 760px) 100vw, 33vw"} /></figure>)}</section>

        <section className="workshop-tutors workshop-tutors-before-artwork"><p className="eyebrow">Imparte</p><div><article><span>01</span><div className="workshop-tutor-heading"><h2>Paula Cid Cerezo</h2><nav aria-label="Enlaces de Paula Cid Cerezo"><a href="https://pcidcerezo.wordpress.com" target="_blank" rel="noreferrer">Web ↗</a><a href="https://www.instagram.com/paulacidcerezo/" target="_blank" rel="noreferrer">Instagram ↗</a></nav></div><div className="workshop-tutor-bio"><p>Paula Cid Cerezo es artista, grabadora y docente especializada en técnicas gráficas tradicionales y producción gráfica. Su práctica explora el grabado atendiendo especialmente al espacio, el tiempo, la materia y los rastros de lo cotidiano.</p><p>En 2019 recibió el Premio Extraordinario de la Comunidad de Madrid de Enseñanzas Artísticas Profesionales por <em>Espacios revelados</em>, un proyecto experimental que convierte registros de lo aparentemente invisible en imágenes y recuerdos mediante procesos fotográficos y gráficos. Ha ejercido como profesora en la Escuela de Arte Número Diez de Madrid e imparte talleres de grabado y estampación.</p><p>En propuestas como <em>Registros de lo invisible</em> y <em>El mundo, una matriz</em>, incorpora la deriva y la observación del entorno para trasladar texturas, arquitecturas y elementos urbanos al papel mediante técnicas como el gofrado, el frottage y el monotipo. Su metodología combina creación artística, investigación material y aprendizaje colectivo.</p></div></article></div></section>

        <section className="artist-work-section artist-work-section-paula">
          <header className="artist-work-heading-single"><p className="eyebrow">Obra de la artista</p></header>
          <div>{artistWorks.map((image) => <figure className={`${image === "obra-paula-cid-cerezo-03.jpg" ? "artist-work-feature" : ""} ${["obra-paula-cid-cerezo-07.jpg", "obra-paula-cid-cerezo-11.jpg", "obra-paula-cid-cerezo-12.jpg", "obra-paula-cid-cerezo-13.jpg"].includes(image) ? "artist-work-portrait" : "artist-work-landscape"}`} key={image}><Image src={`${base}/${image}`} alt="Obra de Paula Cid Cerezo" fill sizes={image === "obra-paula-cid-cerezo-03.jpg" ? "(max-width: 760px) 100vw, 66vw" : "(max-width: 760px) 100vw, 33vw"} /></figure>)}</div>
        </section>

        <nav className="workshop-back"><Link href="/seminarios">← Volver a Seminarios</Link><Link href="mailto:info@fresco.art?subject=Exploraciones%20al%20aguafuerte">Consultar inscripción ↗</Link></nav>
      </article>

      <footer className="site-footer"><Link className="brand" href="/"><Image src="/branding/fresco-wordmark-black.png" alt="fresco." fill sizes="96px" /></Link><div><a href="https://www.instagram.com/fresca.lanave/" target="_blank" rel="noreferrer">Fresca. La Nave ↗</a><a href="https://www.instagram.com/fresco.arte/" target="_blank" rel="noreferrer">fresco. arte ↗</a><a href="mailto:info@fresco.art">info@fresco.art</a><Link href="/politica-de-cookies">Cookies</Link><span>© 2026</span></div></footer>
      <FrescaFixedMark />
    </main>
  );
}
