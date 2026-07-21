export type ArchiveEntry = {
  slug: string;
  name: string;
  type: string;
  period: string;
  summary: string;
};

export const archiveEntries: ArchiveEntry[] = [
  { slug: "ana-bustelo", name: "Ana Bustelo", type: "Seminario · Autoedición", period: "2025—2026", summary: "Procesos de investigación, edición y producción de una publicación personal." },
  { slug: "nacho-martin-silva", name: "Nacho Martín Silva", type: "Seminario · Práctica artística", period: "2025—2026", summary: "Un proceso sostenido de acompañamiento, conversación crítica y producción de obra." },
  { slug: "sophie-aguilera", name: "Sophie Aguilera", type: "Taller · Cerámica contemporánea", period: "2023—2024", summary: "Una experiencia de creación alrededor de la pintura, el volumen y la porcelana." },
  { slug: "nicolas-romero", name: "Nicolás Romero", type: "Taller · Pintura", period: "2022", summary: "Investigación pictórica, herramientas de trabajo y práctica compartida." },
  { slug: "mercedes-bellido", name: "Mercedes Bellido", type: "Taller · Pintura", period: "2022", summary: "Un espacio de experimentación para desarrollar imágenes y procesos pictóricos." },
  { slug: "pablo-merchante", name: "Pablo Merchante", type: "Residencia y taller", period: "2022", summary: "Residencia artística, producción de obra y apertura del proceso al encuentro." },
  { slug: "laura-lopez-balza", name: "Laura López Balza", type: "Taller · Pintura", period: "2022", summary: "Una experiencia para investigar la pintura desde el color, el gesto y la observación." },
  { slug: "los-bravu", name: "Los Bravú", type: "Taller · Práctica artística", period: "2022", summary: "Procesos colectivos de dibujo, pintura y construcción de imágenes." },
];

export const getArchiveEntry = (slug: string) => archiveEntries.find((entry) => entry.slug === slug);
