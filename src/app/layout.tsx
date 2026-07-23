import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://fresco.art";
const siteDescription = "Programa para la creación contemporánea en Carabanchel, Madrid: talleres, seminarios, música, investigación y encuentros en Fresca. La Nave.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "fresco. | Programa para la creación contemporánea",
    template: "%s | fresco.",
  },
  description: siteDescription,
  applicationName: "fresco.",
  authors: [{ name: "Fresca. La Nave", url: siteUrl }],
  creator: "Fresca. La Nave",
  publisher: "Fresca. La Nave",
  category: "Arte y cultura",
  keywords: ["creación contemporánea", "arte contemporáneo Madrid", "talleres de arte Madrid", "Carabanchel", "cerámica contemporánea", "seminarios de arte", "Fresca La Nave"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteUrl,
    siteName: "fresco.",
    title: "fresco. | Programa para la creación contemporánea",
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "fresco. | Programa para la creación contemporánea",
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/branding/fresco-logo.png",
    apple: "/branding/fresco-logo.png",
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#181817",
  colorScheme: "dark",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ArtsOrganization",
      "@id": `${siteUrl}/#organization`,
      name: "Fresca. La Nave",
      alternateName: "fresco.",
      url: siteUrl,
      logo: `${siteUrl}/branding/fresco-logo.png`,
      email: "info@fresco.art",
      foundingDate: "2021",
      description: siteDescription,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Calle Salvador Alonso 12",
        addressLocality: "Madrid",
        addressCountry: "ES",
      },
      sameAs: [
        "https://www.instagram.com/fresca.lanave/",
        "https://www.instagram.com/fresco.arte/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "fresco.",
      description: siteDescription,
      inLanguage: "es",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}
