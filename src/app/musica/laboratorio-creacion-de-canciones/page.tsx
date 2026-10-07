import type { Metadata } from "next";
import { LaichaDetail } from "../../laicha-detail";

const title = "Laboratorio de creación de canciones con laicHa";
const description = "Taller presencial de composición y experimentación colectiva con laicHa en Fresca. La Nave, Carabanchel, Madrid. 20 de noviembre de 2026.";
const image = "/images/program/derivas-sonoras/laboratorio-laicha/laicha-retrato-horizontal.jpg";

export const metadata: Metadata = {
  title,
  description,
  keywords: ["taller de composición Madrid", "laboratorio de canciones", "laicHa", "Derivas sonoras", "música en Carabanchel"],
  alternates: { canonical: "/musica/laboratorio-creacion-de-canciones" },
  openGraph: { title, description, url: "/musica/laboratorio-creacion-de-canciones", type: "article", locale: "es_ES", siteName: "fresco.", images: [{ url: image, alt: "Laboratorio de creación de canciones con laicHa" }] },
  twitter: { card: "summary_large_image", title, description, images: [image] },
};

const eventSchema = {
  "@context": "https://schema.org",
  "@type": "EducationEvent",
  name: title,
  description,
  startDate: "2026-11-20T18:30:00+01:00",
  endDate: "2026-11-20T21:00:00+01:00",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  image: `https://fresco.art${image}`,
  url: "https://fresco.art/musica/laboratorio-creacion-de-canciones",
  location: { "@type": "Place", name: "Fresca. La Nave", address: { "@type": "PostalAddress", streetAddress: "Calle Salvador Alonso 12", addressLocality: "Madrid", addressCountry: "ES" } },
  organizer: { "@type": "ArtsOrganization", name: "Fresca. La Nave", url: "https://fresco.art" },
  performer: { "@type": "Person", name: "laicHa" },
  offers: { "@type": "Offer", price: "40", priceCurrency: "EUR", availability: "https://schema.org/InStock", url: "https://fresco.art/musica/laboratorio-creacion-de-canciones" },
};

export default function LaichaPage() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema).replace(/</g, "\\u003c") }} /><LaichaDetail /></>;
}
