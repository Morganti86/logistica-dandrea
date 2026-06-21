import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "500", "700"],
});

const siteUrl = "https://www.logisticadandrea.com.ar";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Logística D'ANDREA | Almacenamiento y Distribución en AMBA",
  description:
    "Expertos en soluciones logísticas integrales en el AMBA. Servicios de almacenamiento en depósito, distribución puerta a puerta, picking y seguridad de carga con monitoreo satelital. Munro, Buenos Aires.",
  openGraph: {
    title: "Logística D'ANDREA | Almacenamiento y Distribución en AMBA",
    description:
      "Expertos en soluciones logísticas integrales en el AMBA. Almacenamiento, distribución y seguridad de carga en Buenos Aires.",
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    siteName: "Logística D'ANDREA",
    images: [
      {
        url: "/Company/Home.webp",
        width: 1200,
        height: 630,
        alt: "Logística D'ANDREA - Soluciones logísticas en AMBA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Logística D'ANDREA | Almacenamiento y Distribución en AMBA",
    description:
      "Expertos en soluciones logísticas integrales en el AMBA. Almacenamiento, distribución y seguridad de carga en Buenos Aires.",
    images: ["/Company/Home.webp"],
  },
};

export const viewport = {
  viewport: "width=device-width, initial-scale=1.0",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Logística D'ANDREA",
  description:
    "Expertos en soluciones logísticas integrales en el AMBA. Almacenamiento, distribución y seguridad de carga.",
  url: siteUrl,
  telephone: "+5411-6396-8564",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Vélez Sársfield 5780",
    addressLocality: "Munro",
    addressRegion: "Buenos Aires",
    addressCountry: "AR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -34.53643775394658,
    longitude: -58.539209725150464,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "16:00",
  },
  serviceArea: {
    "@type": "Place",
    name: "Área Metropolitana de Buenos Aires (AMBA)",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios Logísticos",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Almacenamiento en Depósitos" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Distribución Puerta a Puerta" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Seguridad y Custodia de Carga" },
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
