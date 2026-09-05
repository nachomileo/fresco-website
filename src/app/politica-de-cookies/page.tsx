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
          <p>fresco.art no utiliza actualmente cookies de analítica, publicidad, seguimiento ni personalización. Tampoco instala cookies de terceros al visitar sus páginas.</p>
        </section>
        <section>
          <h2>Preferencia técnica</h2>
          <p>Cuando cierras el aviso de cookies, guardamos en el almacenamiento local de tu navegador la preferencia <code>fresco-cookie-notice</code>. No es una cookie, no permite identificarte y se utiliza únicamente para evitar que el aviso vuelva a mostrarse durante 180 días.</p>
        </section>
        <section>
          <h2>Servicios externos</h2>
          <p>La web contiene enlaces a Instagram, Google Maps y otros sitios externos. También permite enviar una suscripción a Mailchimp. Estos servicios solo reciben información cuando decides abrir sus enlaces o enviar el formulario y aplican sus propias políticas de privacidad y cookies.</p>
        </section>
        <section>
          <h2>Cómo borrar la preferencia</h2>
          <p>Puedes eliminarla en cualquier momento desde la configuración de privacidad o los datos almacenados del navegador. Al borrarla, el aviso volverá a aparecer en tu próxima visita.</p>
        </section>
        <section>
          <h2>Cambios y contacto</h2>
          <p>Si en el futuro incorporamos herramientas que requieran consentimiento, actualizaremos esta política y solicitaremos tu elección antes de activarlas. Para cualquier consulta, escribe a <a href="mailto:info@fresco.art">info@fresco.art</a>.</p>
        </section>
        <Link className="legal-back" href="/">← Volver a fresco.</Link>
      </article>
    </main>
  );
}
