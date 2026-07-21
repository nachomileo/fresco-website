export type ArchiveIndexEntry = {
  date: string;
  period: string;
  artist: string;
  workshop: string;
  href: string;
  featured?: boolean;
  workshops?: Array<{ date: string; period: string; title: string; credits: string }>;
};

const items: ArchiveIndexEntry[] = [
  { date: "2022-06-04", period: "JUN 2022", artist: "Pablo Merchante", workshop: "Introducción a lo profundo de la pintura", href: "/archivo/pablo-merchante-introduccion" },
  { date: "2022-06-11", period: "11—12 JUN 2022", artist: "Laura López Balza", workshop: "Pintar para ver", href: "/archivo/laura-lopez-balza", featured: true },
  { date: "2022-06-25", period: "JUN 2022", artist: "Ignacio Rivas", workshop: "Caos, intuición y juego", href: "/archivo/ignacio-rivas" },
  { date: "2022-07-01", period: "2022 · ED. I", artist: "Santiago Picatoste", workshop: "Fábrica de deseos", href: "/archivo/santiago-picatoste-edicion-1" },
  { date: "2022-07-15", period: "2022 · ED. II", artist: "Santiago Picatoste", workshop: "Fábrica de deseos", href: "/archivo/santiago-picatoste-edicion-2" },
  { date: "2022-09-17", period: "17—18 SEP 2022", artist: "Nicolás Romero Escalada", workshop: "Naturalezas muertas y cultura pop", href: "/archivo/nicolas-romero", featured: true },
  { date: "2022-10-01", period: "1—2 OCT 2022", artist: "Mercedes Bellido", workshop: "Paisajes oníricos", href: "/archivo/mercedes-bellido" },
  { date: "2022-11-05", period: "5—6 NOV 2022", artist: "Laura López Balza + Guadalupe Ramón", workshop: "Movimiento, cuerpo y pintura", href: "/archivo/movimiento-cuerpo-pintura" },
  { date: "2023-01-01", period: "2023 · ED. II", artist: "Pablo Merchante", workshop: "Introducción a lo profundo de la pintura", href: "/archivo/pablo-merchante-edicion-2" },
  { date: "2023-03-11", period: "11—12 MAR 2023", artist: "Ampparito", workshop: "Hackear la norma", href: "/archivo/ampparito", featured: true },
  { date: "2023-03-18", period: "18—19 MAR 2023", artist: "Laura López Balza + Guadalupe Ramón", workshop: "Movimiento, cuerpo y pintura · Ed. II", href: "/archivo/movimiento-cuerpo-pintura-edicion-2" },
  { date: "2023-03-25", period: "25—26 MAR 2023", artist: "Los Bravú", workshop: "Escenas de un banquete", href: "/archivo/los-bravu", featured: true },
  { date: "2023-05-06", period: "6—7 MAY 2023", artist: "Multiple Editions · Diego Mena", workshop: "Revelando las capas de la imagen", href: "/archivo/multiple-editions", featured: true },
  { date: "2023-05-20", period: "20—21 MAY 2023", artist: "Rosh", workshop: "Lenguaje urbano, digital y pictórico", href: "/archivo/rosh", featured: true },
  { date: "2023-06-02", period: "2—5 JUN 2023", artist: "Pablo Merchante", workshop: "Naturaleza para la pintura", href: "/archivo/pablo-merchante", featured: true },
  { date: "2023-09-23", period: "23 SEP 2023", artist: "Justine Menard", workshop: "Aire, fuego e intuición", href: "/archivo/justine-menard", featured: true },
  { date: "2023-10-01", period: "2023", artist: "Guido Sarli", workshop: "Bailar lo liminal", href: "/archivo/guido-sarli" },
  { date: "2023-10-08", period: "2023", artist: "Javier Ruiz", workshop: "La pintura tras bambalinas", href: "/archivo/javier-ruiz" },
  { date: "2023-10-15", period: "2023", artist: "Catalina Romero", workshop: "Cómo fotografiar obras de arte", href: "/archivo/catalina-romero" },
  { date: "2023-11-01", period: "2023", artist: "Juan Narowé", workshop: "Narrativas del dibujo contemporáneo", href: "/archivo/juan-narowe" },
  { date: "2024-01-01", period: "2024 · ED. II", artist: "Justine Menard", workshop: "Aire, fuego e intuición", href: "/archivo/justine-menard-edicion-2" },
  { date: "2024-02-01", period: "2024", artist: "Nacho Martín Silva", workshop: "Relatos fragmentados", href: "/archivo/nacho-martin-silva" },
  { date: "2024-03-01", period: "2024", artist: "Sophie Aguilera", workshop: "Naturalezas muertas", href: "/archivo/sophie-aguilera" },
  { date: "2024-03-15", period: "2024", artist: "Jan Monclús", workshop: "Sobre lo absurdo", href: "/archivo/jan-monclus", featured: true },
  { date: "2024-07-01", period: "2024", artist: "Julio Galindo", workshop: "Figuras en cerámica", href: "/archivo/julio-galindo", featured: true },
  { date: "2024-11-30", period: "30 NOV—1 DIC 2024", artist: "Paula Cid Cerezo", workshop: "Registros de lo invisible", href: "/archivo/paula-cid-cerezo", featured: true },
  { date: "2025-01-01", period: "2025", artist: "Sophie Aguilera", workshop: "Escultura floral en porcelana", href: "/archivo/sophie-aguilera-flores" },
  { date: "2025-02-15", period: "15—16 FEB 2025", artist: "Miguel Gómez Losada", workshop: "Acercamiento a la voz propia", href: "/archivo/miguel-gomez-losada", featured: true },
  { date: "2025-03-29", period: "29—30 MAR 2025", artist: "Eloy Arribas", workshop: "El collar de perlas", href: "/archivo/eloy-arribas", featured: true },
  { date: "2025-04-01", period: "2025", artist: "Carla Souto", workshop: "Modelado en cera para joyería", href: "/archivo/carla-souto" },
  { date: "2026-05-13", period: "13 MAY 2026", artist: "Brenda Ranieri + Belén Arnedo", workshop: "Bendita la mesa", href: "/archivo/bendita-la-mesa", featured: true },
  { date: "2026-01-01", period: "2026", artist: "Julio Galindo", workshop: "Figuras en cerámica", href: "/archivo/julio-galindo", featured: true },
  { date: "2026-06-19", period: "19—21 JUN 2026", artist: "Nicolás Romero Escalada", workshop: "Lumbre — Ensayos sobre el bodegón y la Vanitas", href: "/archivo/nicolas-romero", featured: true },
  { date: "2026-03-01", period: "MAR 2026 · FECHAS A CONFIRMAR", artist: "Brenda Ranieri + Chantal Douer", workshop: "Joyería en cerámica y metal", href: "/archivo/joyeria-ceramica-metal", featured: true },
];

const canonicalArtist = (artist: string) => {
  if (artist.startsWith("Laura López Balza")) return "Laura López Balza";
  return artist;
};

const canonicalHref: Record<string, string> = {
  "Laura López Balza": "/archivo/laura-lopez-balza",
  "Pablo Merchante": "/archivo/pablo-merchante",
  "Santiago Picatoste": "/archivo/santiago-picatoste",
  "Justine Menard": "/archivo/justine-menard",
  "Sophie Aguilera": "/archivo/sophie-aguilera",
  "Nicolás Romero Escalada": "/archivo/nicolas-romero",
};

const grouped = new Map<string, ArchiveIndexEntry>();
for (const item of items) {
  const artist = canonicalArtist(item.artist);
  const workshop = { date: item.date, period: item.period, title: item.workshop, credits: item.artist };
  const current = grouped.get(artist);
  if (!current) {
    grouped.set(artist, { ...item, artist, href: canonicalHref[artist] ?? item.href, workshops: [workshop] });
    continue;
  }
  current.workshops?.push(workshop);
  current.featured ||= item.featured;
  if (item.date > current.date) {
    current.date = item.date;
    current.period = item.period;
    current.workshop = item.workshop;
  }
}

for (const item of grouped.values()) item.workshops?.sort((a, b) => b.date.localeCompare(a.date));

const archiveRoutes = [...grouped.values()].sort((a, b) => b.date.localeCompare(a.date));
export const allArchiveLinks = archiveRoutes.filter((item) => !item.artist.startsWith("Brenda Ranieri"));
export const featuredArchiveLinks = allArchiveLinks.filter((item) => item.featured);
export const getArchiveIndexEntry = (slug: string) => archiveRoutes.find((item) => item.href === `/archivo/${slug}`);
