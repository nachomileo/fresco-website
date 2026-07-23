import type { Metadata } from "next";
import { EnObraDetail } from "../../seminar-detail";

export const metadata: Metadata = {
  title: "En obra — Seminario con Nacho Martín Silva",
  description: "Seminario cuatrimestral de acompañamiento, crítica y producción de un proyecto artístico con Nacho Martín Silva.",
  alternates: { canonical: "/seminarios/en-obra" },
  openGraph: {
    title: "En obra — Seminario con Nacho Martín Silva | fresco.",
    description: "Seminario cuatrimestral de acompañamiento, crítica y producción de un proyecto artístico con Nacho Martín Silva.",
    url: "/seminarios/en-obra",
    type: "article",
    images: [{ url: "/images/program/procesos cuatrimestrales/seminario en obra/IMG_6709.jpeg", alt: "Seminario En obra con Nacho Martín Silva" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "En obra — Seminario con Nacho Martín Silva | fresco.",
    description: "Seminario cuatrimestral de acompañamiento, crítica y producción de un proyecto artístico con Nacho Martín Silva.",
    images: ["/images/program/procesos cuatrimestrales/seminario en obra/IMG_6709.jpeg"],
  },
};

export default function EnObraPage() {
  return <EnObraDetail />;
}
