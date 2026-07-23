import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "fresco. — Programa para la creación contemporánea",
    short_name: "fresco.",
    description: "Talleres, seminarios, música e investigación artística en Carabanchel, Madrid.",
    start_url: "/",
    display: "standalone",
    background_color: "#181817",
    theme_color: "#181817",
    lang: "es",
    icons: [
      {
        src: "/branding/fresco-logo.png",
        sizes: "500x500",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
