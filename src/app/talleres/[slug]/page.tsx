import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WorkshopDetail } from "../../workshop-detail";
import { getWorkshop, workshops } from "../../workshop-data";

type Props = { params: Promise<{ slug: string }> };

export const generateStaticParams = () => workshops.filter(({ slug }) => slug !== "arcillas-silvestres-y-paisaje-urbano").map(({ slug }) => ({ slug }));

const metadataImage = (image: string) => {
  if (image.includes("/del papel a la cerámica/")) return image.replace("/images/program/paginas/del papel a la cerámica/", "/images/program/derivas materiales/paginas/ana-cano-grafica-ceramica/");
  if (image.includes("/bodegones en ceramica/Bodegones en cerámica_Sophie Aguilera")) return image.replace("/images/program/paginas/bodegones en ceramica/Bodegones en cerámica_Sophie Aguilera", "/images/program/derivas materiales/paginas/bodegones en ceramica/sophie-");
  if (image.startsWith("/images/program/paginas/")) return image.replace("/images/program/paginas/", "/images/program/derivas materiales/paginas/");
  return image;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const workshop = getWorkshop((await params).slug);
  if (!workshop) return {};
  const image = metadataImage(workshop.heroImage);
  return {
    title: workshop.title,
    description: workshop.intro,
    alternates: { canonical: `/talleres/${workshop.slug}` },
    openGraph: {
      title: `${workshop.title} | fresco.`,
      description: workshop.intro,
      url: `/talleres/${workshop.slug}`,
      type: "article",
      images: [{ url: image, alt: `${workshop.title}, taller de Derivas materiales` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${workshop.title} | fresco.`,
      description: workshop.intro,
      images: [image],
    },
  };
}

export default async function WorkshopPage({ params }: Props) {
  const workshop = getWorkshop((await params).slug);
  if (!workshop) notFound();
  return <WorkshopDetail workshop={workshop} />;
}
