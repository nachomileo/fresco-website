import type { Metadata } from "next";
import { WorkshopDetail } from "../../workshop-detail";
import { getWorkshop } from "../../workshop-data";

const workshop = getWorkshop("arcillas-silvestres-y-paisaje-urbano")!;

export const metadata: Metadata = {
  title: `${workshop.title} — Derivas materiales`,
  description: workshop.intro,
};

export default function ArcillasSilvestresPage() {
  return <WorkshopDetail workshop={workshop} />;
}
