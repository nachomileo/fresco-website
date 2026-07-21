import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "fresco. — Programa para la creación contemporánea",
  description:
    "Experiencias, talleres y programas de creación contemporánea en Fresca. La Nave, Madrid.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
