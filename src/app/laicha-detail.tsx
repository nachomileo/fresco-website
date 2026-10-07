import Image from "next/image";
import Link from "next/link";
import { FrescaFixedMark } from "./fresca-fixed-mark";

const base = "/images/program/derivas-sonoras/laboratorio-laicha";

const steps = [
  { title: "Compartir", text: "Entrar en el proceso de composición de laicHa y conocer las herramientas, decisiones y preguntas que atraviesan sus canciones." },
  { title: "Desarmar", text: "Observar cómo una canción se construye para reconocer sus partes, tensiones, ritmos y posibilidades." },
  { title: "Experimentar", text: "Poner esas herramientas en juego mediante ejercicios prácticos individuales, sin exigir experiencia previa." },
  { title: "Componer en común", text: "Cruzar ideas, probarlas colectivamente y cerrar el laboratorio compartiendo lo producido durante el encuentro." },
];

const gallery = [
  { image: "laicha-retrato-vertical-01.jpg", alt: "Retrato de laicHa reflejado sobre una superficie", layout: "portrait" },
  { image: "laicha-saxofon-fotograma.jpg", alt: "Detalle de un saxofón en un fotograma audiovisual de laicHa", layout: "portrait" },
  { image: "hermoso-laicha.jpg", alt: "laicHa frente a un espejo durante la creación de Hermoso", layout: "landscape" },
  { image: "composicion-giro-fotograma.jpg", alt: "Una mano pone en movimiento una peonza", layout: "portrait" },
  { image: "desterrar-a-los-poetas.jpg", alt: "Imagen del disco Desterrar a los poetas de laicHa", layout: "landscape" },
  { image: "laicha-perfil-fotograma.jpg", alt: "Silueta de laicHa en un fotograma audiovisual", layout: "portrait" },
  { image: "laicha-retrato-vertical-02.jpg", alt: "Retrato en blanco y negro de laicHa", layout: "portrait" },
];

export function LaichaDetail() {
  return (
    <main>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Fresco, inicio"><Image src="/branding/fresco-wordmark-black.png" alt="fresco." fill sizes="96px" priority /></Link>
        <nav className="desktop-nav" aria-label="Navegación principal"><Link href="/#programa">Programa</Link><Link href="/#la-nave">La Nave</Link><Link href="/#archivo">Archivo</Link></nav>
        <Link className="header-cta" href="/#contacto">ME SUMO <span aria-hidden="true">↘</span></Link>
      </header>

      <article className="workshop-page workshop-page-laicha">
        <header className="workshop-hero">
          <div className="workshop-hero-image"><Image src={`${base}/laicha-retrato-horizontal.jpg`} alt="laicHa, cantante y compositor" fill sizes="(max-width: 760px) 100vw, 44vw" priority /></div>
          <div className="workshop-hero-copy">
            <p className="meta-label">Derivas sonoras · DS—01</p>
            <div className="workshop-title-stack"><h1>Laboratorio de creación de canciones.</h1><p>Con laicHa</p><span>20 de noviembre de 2026 · Fresca. La Nave</span></div>
            <div className="workshop-hero-action" id="inscripcion">
              <dl><div><dt>Fecha</dt><dd>20 de noviembre de 2026</dd></div><div><dt>Horario</dt><dd>18:30—21 h (+ picoteo)</dd></div><div><dt>Lugar</dt><dd>Fresca. La Nave</dd></div><div><dt>Precio</dt><dd>40 €</dd></div></dl>
              <a href="https://buy.stripe.com/5kQaEXc65dYO60M6427wA0L" target="_blank" rel="noreferrer">Me apunto <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </header>

        <section className="workshop-question"><p className="eyebrow">El laboratorio</p><h2>Las herramientas de composición del músico puestas a la experimentación colectiva.</h2></section>

        <section className="workshop-overview workshop-overview-laicha">
          <div className="workshop-overview-image"><Image src={`${base}/desterrar-a-los-poetas.jpg`} alt="Desterrar a los poetas, el nuevo disco de laicHa" fill sizes="(max-width: 760px) 100vw, 50vw" /></div>
          <div className="workshop-overview-copy"><p className="eyebrow">Abrir el proceso de una canción</p><p className="workshop-overview-lead">Desarmar la composición, compartir herramientas y seguir los desvíos que propone cada canción.</p><div className="workshop-overview-body"><p>laicHa acaba de publicar <em>Desterrar a los poetas</em>, un disco de ocho canciones que recorre paisajes de la música sudamericana como el tango, la zamba y el bolero. Este encuentro funciona como un laboratorio donde comparte su proceso creativo y las herramientas que utiliza para componer, arreglar y producir sus canciones.</p><p>A partir de ese recorrido, la propuesta es poner esas herramientas a prueba en instancias prácticas individuales y colectivas: desarmar ideas, probar caminos posibles y observar qué aparece cuando una canción comienza a construirse en común.</p></div></div>
        </section>

        <section className="workshop-journey">
          <header><p className="eyebrow">El recorrido</p><h2>De una herramienta propia a una experiencia colectiva.</h2><p className="workshop-journey-note">Un encuentro para acercarse a la composición desde la práctica, compartir recursos y ensayar nuevas formas de hacer canciones.</p><Link href="mailto:info@fresco.art?subject=Consulta%20sobre%20el%20laboratorio%20de%20laicHa">Quiero más info <span aria-hidden="true">↗</span></Link></header>
          <ol>{steps.map((step, index) => <li key={step.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></li>)}</ol>
        </section>

        <section className="workshop-info">
          <div><p className="eyebrow">Una tarde en la nave</p><h2>Escuchar, probar y componer con otras personas.</h2><a href="https://buy.stripe.com/5kQaEXc65dYO60M6427wA0L" target="_blank" rel="noreferrer">Me apunto <span aria-hidden="true">↗</span></a></div>
          <dl>
            <div><dt>Fecha</dt><dd>20 de noviembre de 2026</dd></div>
            <div><dt>Horario</dt><dd>18:30—21 h (+ picoteo)</dd></div>
            <div><dt>Lugar</dt><dd>Fresca. La Nave · Salvador Alonso 12, Carabanchel, Madrid</dd></div>
            <div><dt>Formato</dt><dd>Laboratorio presencial de creación de canciones</dd></div>
            <div><dt>Precio</dt><dd>40 € · Incluye picoteo después del cierre</dd></div>
          </dl>
        </section>

        <section className="workshop-gallery workshop-gallery-laicha">{gallery.map((item) => <figure className={`workshop-gallery-${item.layout}`} key={item.image}><Image src={`${base}/${item.image}`} alt={item.alt} fill sizes={item.layout === "landscape" ? "(max-width: 760px) 100vw, 55vw" : "(max-width: 760px) 100vw, 30vw"} /></figure>)}</section>

        <section className="workshop-tutors"><p className="eyebrow">Coordina</p><div><article><span>01</span><div className="workshop-tutor-heading"><h2>laicHa</h2><nav aria-label="Enlaces de laicHa"><a href="https://www.instagram.com/lai_cha/" target="_blank" rel="noreferrer">Instagram ↗</a><a href="https://open.spotify.com/album/0j33xRUWCG1tuUpZHjQSqU" target="_blank" rel="noreferrer">Escuchar el disco ↗</a></nav></div><div className="workshop-tutor-bio"><p>laicHa es un músico argentino radicado en Madrid desde 2009. Lleva algo así como una doble vida entre músico de jazz y cancionista. Saxofonista, multiinstrumentista, compositor y cantante, es autor de tres discos de estudio: <em>Osos Bipolares</em> (2013), <em>Emperatriz del Boulevard</em> (2018) producido junto a Toni Brunet y <em>Desterrar a los poetas</em> (2026), todos ellos compuestos, arreglados y producidos por él.</p><p>Es integrante de la inclasificable orquesta Mastretta y del trío Altagracia. Desde hace más de quince años participa en proyectos discográficos y giras nacionales e internacionales junto a artistas como Raphael, Juanito Makandé, Joaquín Cortés, Chambao, Amparanoia y Mr. Kilombo.</p><p>Como compositor y colaborador ha trabajado junto a Cande Zamar, AINDA, Francisca y Los Exploradores, Clara Presta y Lola Parda.</p><p><em>Desterrar a los poetas</em> abre una nueva etapa en la que confluyen sus dos vidas: la del cancionista y la del músico de jazz.</p></div></article></div></section>

        <aside className="sonic-program-note" aria-labelledby="derivas-sonoras-heading">
          <div className="sonic-program-note-heading"><p className="eyebrow">El programa</p><h2 id="derivas-sonoras-heading">Derivas sonoras</h2></div>
          <div className="sonic-program-note-copy"><p><em>Derivas sonoras</em> es un espacio de investigación y experimentación musical coproducido por Nina Polverino y Fresca. La Nave. A través de talleres y conciertos experimentales, el programa propone explorar la materia sonora en sus distintas etapas: composición, ensayo y puesta en escena.</p><Link href="/musica">Conocer el programa <span aria-hidden="true">↗</span></Link></div>
        </aside>

        <nav className="workshop-back"><Link href="/musica">← Volver a Derivas sonoras</Link><Link href="mailto:info@fresco.art?subject=Laboratorio%20de%20creaci%C3%B3n%20de%20canciones%20con%20laicHa">Consultar inscripción ↗</Link></nav>
      </article>

      <footer className="site-footer"><Link className="brand" href="/"><Image src="/branding/fresco-wordmark-black.png" alt="fresco." fill sizes="96px" /></Link><div><a href="https://www.instagram.com/fresca.lanave/" target="_blank" rel="noreferrer">Fresca. La Nave ↗</a><a href="https://www.instagram.com/fresco.arte/" target="_blank" rel="noreferrer">fresco. arte ↗</a><a href="mailto:info@fresco.art">info@fresco.art</a><Link href="/politica-de-cookies">Cookies</Link><span>© 2026</span></div></footer>
      <FrescaFixedMark />
    </main>
  );
}
