import type { MetadataRoute } from "next";
import { allArchiveLinks } from "./archive-index-data";
import { programGroups } from "./program-data";
import { workshops } from "./workshop-data";

const siteUrl = "https://fresco.art";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: siteUrl, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/links`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/archivo`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/seminarios/en-obra`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/seminarios/autoedicion`, changeFrequency: "monthly", priority: 0.9 },
  ];

  const programPages: MetadataRoute.Sitemap = programGroups.map(({ slug }) => ({
    url: `${siteUrl}/${slug}`,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const workshopPages: MetadataRoute.Sitemap = workshops.map(({ slug }) => ({
    url: `${siteUrl}/talleres/${slug}`,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const archivePages: MetadataRoute.Sitemap = [...new Set(allArchiveLinks.map(({ href }) => href))]
    .filter((href) => href.startsWith("/archivo/"))
    .map((href) => ({
      url: `${siteUrl}${href}`,
      changeFrequency: "yearly",
      priority: 0.6,
    }));

  return [...staticPages, ...programPages, ...workshopPages, ...archivePages];
}
