export type ArchiveEntry = {
  slug: string;
  name: string;
  title: string;
  type: string;
  period: string;
  date: string;
  tagline: string;
  summary: string;
  description: string;
  practices: string;
  place: string;
  images: {
    hero: string;
    process: string;
    portrait: string;
    closing: string;
  };
};

// Orden cronológico: la fecha ISO gobierna tanto el índice como la navegación.
const entries: ArchiveEntry[] = [
  {
    slug: "laura-lopez-balza", name: "Laura López Balza", title: "Pintar para ver", type: "Taller intensivo", period: "11—12 JUN 2022", date: "2022-06-11",
    tagline: "Técnicas mixtas de pintura expresionista.", summary: "Un fin de semana para relacionarse con la pintura desde el color, el gesto, la imaginación y el disfrute.",
    description: "Laura López Balza propuso utilizar distintos materiales pictóricos para construir imágenes más allá de la representación literal. Entre referencias, demostraciones y ejercicios personales, el grupo trabajó desde la intuición y el libre juego entre naturaleza, memoria y mundos posibles.", practices: "Pintura, collage y dibujo", place: "Madrid · Marqués de Vadillo",
    images: { hero: "/images/archive/laura-lopez-balza/hero.jpg", process: "/images/archive/laura-lopez-balza/process-01.jpeg", portrait: "/images/archive/laura-lopez-balza/portrait.jpeg", closing: "/images/archive/laura-lopez-balza/process-02.jpeg" },
  },
  {
    slug: "nicolas-romero", name: "Nicolás Romero", title: "Naturalezas muertas", type: "Taller intensivo", period: "SEP 2022", date: "2022-09-01",
    tagline: "La cultura popular atravesada por el bodegón.", summary: "Una investigación pictórica sobre el bodegón como dispositivo para reunir símbolos, objetos cotidianos y cultura popular.",
    description: "El taller recorrió las posibilidades contemporáneas de la naturaleza muerta junto a Nicolás Romero Escalada. El grupo trabajó la selección de objetos, la composición y el valor simbólico de cada elemento para desarrollar una escena personal desde la pintura.", practices: "Pintura y composición", place: "Madrid",
    images: { hero: "/images/archive/nicolas-romero/hero.jpg", process: "/images/archive/nicolas-romero/process-01.png", portrait: "/images/archive/nicolas-romero/process-02.png", closing: "/images/archive/nicolas-romero/process-03.png" },
  },
  {
    slug: "mercedes-bellido", name: "Mercedes Bellido", title: "Paisajes oníricos", type: "Taller intensivo", period: "1—2 OCT 2022", date: "2022-10-01",
    tagline: "Evocando la belleza oculta.", summary: "Dos jornadas para ensayar texturas, ampliar el lenguaje pictórico e imaginar universos ocultos detrás de lo visible.",
    description: "Partiendo de la libreta de artista, Mercedes Bellido compartió su proceso de experimentación con lápices de colores, acuarelas y pasteles. Esos primeros ensayos se trasladaron después a la pintura de un paisaje onírico, atendiendo a la composición, la textura y la imaginación.", practices: "Dibujo, acuarela y pintura", place: "Madrid · Marqués de Vadillo",
    images: { hero: "/images/archive/mercedes-bellido/hero.png", process: "/images/archive/mercedes-bellido/process-01.png", portrait: "/images/archive/mercedes-bellido/process-02.png", closing: "/images/archive/mercedes-bellido/process-03.png" },
  },
  {
    slug: "los-bravu", name: "Los Bravú", title: "Escenas de un banquete", type: "Taller intensivo", period: "NOV 2022", date: "2022-11-01",
    tagline: "Festín contemporáneo.", summary: "Procesos colectivos de dibujo, pintura y construcción de imágenes alrededor de la mesa y el banquete.",
    description: "Los Bravú compartieron referencias y herramientas para componer escenas donde conviven personajes, objetos, gestos y relatos. El taller fue una práctica artística en compañía: observar, dibujar, pintar y construir imágenes desde una conversación común.", practices: "Dibujo y pintura", place: "Madrid",
    images: { hero: "/images/archive/los-bravu/hero.jpg", process: "/images/archive/los-bravu/process-01.jpg", portrait: "/images/archive/los-bravu/portrait.jpg", closing: "/images/archive/los-bravu/process-02.jpg" },
  },
  {
    slug: "pablo-merchante", name: "Pablo Merchante", title: "Naturaleza para la pintura", type: "Residencia artística", period: "2—5 JUN 2023", date: "2023-06-02",
    tagline: "Ritual, vigor e intuición.", summary: "Cuatro días de investigación pictórica, intercambio artístico y trabajo en contacto con la naturaleza.",
    description: "La residencia reunió trabajo de campo, demostraciones, mentorías individuales y conversaciones colectivas. Junto a Pablo Merchante, cada participante revisó su proceso creativo y ensayó formas de hacer donde lo ritual, lo manual y la intuición pudieran sostener una investigación pictórica propia.", practices: "Pintura e investigación", place: "Navalcarnero · Madrid",
    images: { hero: "/images/archive/pablo-merchante/hero.jpg", process: "/images/archive/pablo-merchante/process-01.jpg", portrait: "/images/archive/pablo-merchante/portrait.jpg", closing: "/images/archive/pablo-merchante/process-02.jpg" },
  },
  {
    slug: "nacho-martin-silva", name: "Nacho Martín Silva", title: "Relatos fragmentados", type: "Taller intensivo", period: "2024", date: "2024-01-01",
    tagline: "Entre la abstracción y la figuración.", summary: "Una práctica pictórica para trabajar la imagen desde el fragmento, la superposición y la tensión entre lenguajes.",
    description: "Nacho Martín Silva acompañó un proceso de observación y producción que puso en relación imágenes de distinta procedencia. A través del montaje, la pintura y la conversación crítica, el taller exploró cómo un relato puede aparecer sin cerrarse por completo.", practices: "Pintura y montaje de imágenes", place: "Fresca. La Nave · Madrid",
    images: { hero: "/images/archive/nacho-martin-silva/hero.jpeg", process: "/images/archive/nacho-martin-silva/process-01.jpg", portrait: "/images/archive/nacho-martin-silva/process-02.jpg", closing: "/images/archive/nacho-martin-silva/process-03.jpg" },
  },
  {
    slug: "sophie-aguilera", name: "Sophie Aguilera", title: "Naturalezas muertas", type: "Taller intensivo", period: "2024", date: "2024-02-01",
    tagline: "Escenarios contemporáneos en cerámica.", summary: "Una experiencia para construir bodegones cerámicos entre pintura, volumen, composición y porcelana.",
    description: "Sophie Aguilera propuso llevar la naturaleza muerta al volumen. El grupo investigó la relación entre piezas, color, escala y espacio para componer pequeños escenarios contemporáneos, poniendo en diálogo los procedimientos de la cerámica con una mirada pictórica.", practices: "Cerámica, porcelana y color", place: "Fresca. La Nave · Madrid",
    images: { hero: "/images/archive/sophie-aguilera/hero.jpeg", process: "/images/archive/sophie-aguilera/process-01.jpg", portrait: "/images/archive/sophie-aguilera/process-02.jpg", closing: "/images/archive/sophie-aguilera/process-03.jpg" },
  },
  {
    slug: "ana-bustelo", name: "Ana Bustelo", title: "Libros a la fresca", type: "Seminario de autoedición", period: "2025—2026", date: "2025-10-01",
    tagline: "Idear, editar y producir una publicación personal.", summary: "Un proceso cuatrimestral para transformar una investigación en una publicación y compartirla públicamente.",
    description: "El seminario acompañó cada proyecto desde la investigación y el boceto hasta las decisiones de edición, producción y acabados. Las sesiones combinaron referencias, herramientas prácticas, tutorías y conversación colectiva, culminando en un open studio dedicado a los libros realizados.", practices: "Edición, diseño y publicación", place: "Fresca. La Nave · Madrid",
    images: { hero: "/images/program/procesos cuatrimestrales/seminario-autoedicion/Open Studio_Libros a la fresca_42.png", process: "/images/program/procesos cuatrimestrales/seminario-autoedicion/Open Studio_Libros a la fresca_37.png", portrait: "/images/program/procesos cuatrimestrales/seminario-autoedicion/Open Studio_Libros a la fresca_23.png", closing: "/images/program/procesos cuatrimestrales/seminario-autoedicion/Open Studio_Libros a la fresca_44.png" },
  },
];

export const archiveEntries = [...entries].sort((a, b) => a.date.localeCompare(b.date));
export const getArchiveEntry = (slug: string) => archiveEntries.find((entry) => entry.slug === slug);
