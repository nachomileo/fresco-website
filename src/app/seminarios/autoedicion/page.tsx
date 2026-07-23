import type { Metadata } from "next";
import { AutoedicionDetail } from "../../autoedicion-detail";

export const metadata: Metadata = {
  title: "Autoedición — Seminario con Ana Bustelo",
  description: "Seminario cuatrimestral para diseñar, producir y presentar una publicación propia con Ana Bustelo en Carabanchel, Madrid.",
  alternates: { canonical: "/seminarios/autoedicion" },
  openGraph: {
    title: "Autoedición — Seminario con Ana Bustelo | fresco.",
    description: "Seminario cuatrimestral para diseñar, producir y presentar una publicación propia con Ana Bustelo.",
    url: "/seminarios/autoedicion",
    type: "article",
    images: [{ url: "/images/program/procesos cuatrimestrales/seminario-autoedicion-web/hero.jpg", alt: "Seminario de Autoedición con Ana Bustelo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Autoedición — Seminario con Ana Bustelo | fresco.",
    description: "Seminario cuatrimestral para diseñar, producir y presentar una publicación propia con Ana Bustelo.",
    images: ["/images/program/procesos cuatrimestrales/seminario-autoedicion-web/hero.jpg"],
  },
};

export default function AutoedicionPage() {
  return <AutoedicionDetail />;
}
