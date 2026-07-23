import type { Metadata } from "next";
import { WorkshopDetail } from "../../workshop-detail";
import { getWorkshop } from "../../workshop-data";

const workshop = getWorkshop("arcillas-silvestres-y-paisaje-urbano")!;

export const metadata: Metadata = {
  title: workshop.title,
  description: workshop.intro,
  alternates: { canonical: `/talleres/${workshop.slug}` },
  openGraph: {
    title: `${workshop.title} | fresco.`,
    description: workshop.intro,
    url: `/talleres/${workshop.slug}`,
    type: "article",
    images: [{ url: "/opengraph-image", alt: `${workshop.title}, taller de Derivas materiales` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${workshop.title} | fresco.`,
    description: workshop.intro,
    images: ["/opengraph-image"],
  },
};

export default function ArcillasSilvestresPage() {
  return <WorkshopDetail workshop={workshop} />;
}
