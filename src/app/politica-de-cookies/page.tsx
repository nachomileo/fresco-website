import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de cookies",
  description: "Información sobre el uso de cookies y almacenamiento local en fresco.art.",
  alternates: { canonical: "/politica-de-cookies" },
  robots: { index: true, follow: true },
};

export default function CookiePolicyPage() {
  return (
    <main className="legal-page">
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Fresco, inicio"><Image src="/branding/fresco-wordmark-black.png" alt="fresco." fill sizes="96px" priority /></Link>
        <nav className="desktop-nav" aria-label="Navegación principal"><Link href="/#programa">Programa</Link><Link href="/#la-nave">La Nave</Link><Link href="/#archivo">Archivo</Link></nav>
        <Link className="header-cta" href="/#contacto">ME SUMO <span aria-hidden="true">↘</span></Link>
      </header>

      <article className="legal-content">
        <p className="eyebrow">Información legal · Actualizada en septiembre de 2026</p>
        <h1>Política de cookies.</h1>
        <section>
          <h2>Uso actual</h2>
          <p>fresco.art utiliza el píxel de Meta únicamente si aceptas las cookies de publicidad. Permite comunicar visitas a Meta para medir la eficacia de nuestros anuncios. Si rechazas estas cookies, el píxel no se carga y puedes seguir utilizando la web y reservar plaza.</p>
        </section>
        <section>
          <h2>Preferencia técnica</h2>
          <p>Guardamos tu elección de aceptar o rechazar en el almacenamiento local del navegador con la clave <code>fresco-marketing-consent</code>, durante 180 días. La preferencia anterior del aviso informativo no equivale a aceptar publicidad.</p>
        </section>
        <section>
          <h2>Servicios externos</h2>
          <p>La web contiene enlaces a Instagram, Google Maps y otros sitios externos. También permite enviar una suscripción a Mailchimp. Estos enlaces y formularios se rigen por las políticas de cada servicio. Además, al aceptar publicidad, el píxel comparte con Meta información de la visita, como la dirección de la página y datos del navegador y la conexión. Meta puede utilizar cookies como _fbp y _fbc para relacionar visitas con anuncios. Consulta la <a href="https://www.facebook.com/privacy/policies/cookies/" target="_blank" rel="noreferrer">política de cookies de Meta</a>. Esta integración mide visitas; no confirma pagos de Stripe.</p>
        </section>
        <section>
          <h2>Cómo cambiar tu elección</h2>
          <p>Puedes abrir «Configurar cookies» en la web y rechazar publicidad en cualquier momento. Esto detiene el seguimiento y elimina las cookies de Meta accesibles desde nuestro dominio; no borra datos ya enviados a Meta ni cookies de otros dominios. También puedes borrar los datos del sitio desde tu navegador para volver a elegir.</p>
        </section>
        <section>
          <h2>Cambios y contacto</h2>
          <p>Si modificamos las finalidades de estas herramientas, actualizaremos esta información y solicitaremos una nueva elección cuando corresponda. Para cualquier consulta, escribe a <a href="mailto:info@fresco.art">info@fresco.art</a>.</p>
        </section>
        <Link className="legal-back" href="/">← Volver a fresco.</Link>
      </article>
    </main>
  );
}
