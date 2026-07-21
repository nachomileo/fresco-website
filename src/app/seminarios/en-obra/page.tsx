import type { Metadata } from "next";
import { EnObraDetail } from "../../seminar-detail";

export const metadata: Metadata = {
  title: "En obra — Seminario con Nacho Martín Silva",
  description: "Seminario cuatrimestral de acompañamiento, crítica y producción de un proyecto artístico con Nacho Martín Silva.",
};

export default function EnObraPage() {
  return <EnObraDetail />;
}
