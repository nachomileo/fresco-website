export type ArchiveWorkshopAlbum = {
  date: string;
  period: string;
  title: string;
  description: string;
  images: string[];
};

const folder = "/images/archive/nicolas-romero";

export const archiveWorkshopAlbums: Record<string, ArchiveWorkshopAlbum[]> = {
  "nicolas-romero": [
    {
      date: "2026-06-19",
      period: "19—21 JUN 2026",
      title: "Lumbre — Ensayos sobre el bodegón y la Vanitas",
      description: "Una investigación sobre el bodegón contemporáneo y la Vanitas iniciada en el Museo del Prado. Cada participante tomó un gesto o detalle de una obra como punto de partida para desarrollar un ensayo personal mediante pintura, cerámica, escritura o investigación.",
      images: [
        `${folder}/ensayos sobre el bodegon y la vanitas/55C7F914-E564-4624-9EC5-4F76C235A883_1_105_c.jpeg`,
        `${folder}/ensayos sobre el bodegon y la vanitas/869CBA46-7B6A-4998-9239-A277356453AD_1_105_c.jpeg`,
        `${folder}/ensayos sobre el bodegon y la vanitas/A245A87D-9C5D-4888-9659-156E8D582DF5_1_105_c.jpeg`,
        `${folder}/ensayos sobre el bodegon y la vanitas/B4B26761-A9C2-4ACB-9ABD-10A4254AD600_1_105_c.jpeg`,
      ],
    },
    {
      date: "2022-09-17",
      period: "17—18 SEP 2022",
      title: "Naturalezas muertas y cultura pop",
      description: "Un taller pictórico sobre la naturaleza muerta como dispositivo para reunir objetos cotidianos, símbolos e imágenes de la cultura popular y construir una escena personal.",
      images: [
        `${folder}/naturalezas muertas y cultura pop/process-01.png`,
        `${folder}/naturalezas muertas y cultura pop/process-02.png`,
        `${folder}/naturalezas muertas y cultura pop/process-03.png`,
      ],
    },
  ],
};
