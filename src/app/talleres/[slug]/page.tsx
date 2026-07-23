import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WorkshopDetail } from "../../workshop-detail";
import { getWorkshop, workshops } from "../../workshop-data";

type Props = { params: Promise<{ slug: string }> };

export const generateStaticParams = () => workshops.filter(({ slug }) => slug !== "arcillas-silvestres-y-paisaje-urbano").map(({ slug }) => ({ slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const workshop = getWorkshop((await params).slug);
  return workshop ? { title: `${workshop.title} — Derivas materiales`, description: workshop.intro } : {};
}

export default async function WorkshopPage({ params }: Props) {
  const workshop = getWorkshop((await params).slug);
  if (!workshop) notFound();
  return <WorkshopDetail workshop={workshop} />;
}
