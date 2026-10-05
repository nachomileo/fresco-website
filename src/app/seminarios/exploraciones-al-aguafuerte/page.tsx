import type { Metadata } from "next";
import { AguafuerteDetail } from "../../aguafuerte-detail";

export const metadata: Metadata = {
  title: "Exploraciones al aguafuerte — Paula Cid Cerezo",
  description: "Seminario presencial de dibujo y grabado al aguafuerte con Paula Cid Cerezo en Carabanchel, Madrid. Febrero de 2027.",
  keywords: ["seminario de grabado Madrid", "aguafuerte Madrid", "curso de aguafuerte", "dibujo y grabado", "Paula Cid Cerezo", "grabado Carabanchel"],
  authors: [{ name: "Fresca. La Nave", url: "https://fresco.art" }],
  alternates: { canonical: "/seminarios/exploraciones-al-aguafuerte" },
  openGraph: {
    title: "Exploraciones al aguafuerte — Paula Cid Cerezo",
    description: "Seminario presencial de dibujo y grabado al aguafuerte en Carabanchel, Madrid. Febrero de 2027.",
    url: "/seminarios/exploraciones-al-aguafuerte",
    type: "article",
    locale: "es_ES",
    siteName: "fresco.",
    images: [{ url: "/images/program/procesos cuatrimestrales/exploraciones-al-aguafuerte/aguafuerte-estampas-en-proceso.jpg", alt: "Exploraciones al aguafuerte con Paula Cid Cerezo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Exploraciones al aguafuerte — Paula Cid Cerezo",
    description: "Seminario presencial de dibujo y grabado al aguafuerte en Carabanchel, Madrid.",
    images: ["/images/program/procesos cuatrimestrales/exploraciones-al-aguafuerte/aguafuerte-estampas-en-proceso.jpg"],
  },
};

const seminarSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Exploraciones al aguafuerte",
  description: "Seminario presencial de dibujo y grabado al aguafuerte con Paula Cid Cerezo.",
  inLanguage: "es",
  image: "https://fresco.art/images/program/procesos%20cuatrimestrales/exploraciones-al-aguafuerte/aguafuerte-estampas-en-proceso.jpg",
  provider: {
    "@type": "ArtsOrganization",
    name: "Fresca. La Nave",
    url: "https://fresco.art",
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "Presencial",
    startDate: "2027-02-13",
    endDate: "2027-02-27",
    location: {
      "@type": "Place",
      name: "Taller de grabado de Paula Cid Cerezo",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Madrid",
        addressRegion: "Comunidad de Madrid",
        addressCountry: "ES",
      },
    },
  },
  offers: {
    "@type": "Offer",
    price: "460",
    priceCurrency: "EUR",
    url: "https://fresco.art/seminarios/exploraciones-al-aguafuerte",
  },
};

export default function AguafuertePage() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seminarSchema).replace(/</g, "\\u003c") }} />
    <AguafuerteDetail />
  </>;
}
