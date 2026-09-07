import type { Metadata } from "next";
import { Inter, Playfair_Display, Noto_Sans_Tamil } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/data/siteConfig";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const notoSansTamil = Noto_Sans_Tamil({
  variable: "--font-tamil",
  subsets: ["tamil"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mezin Food Products | Spices & Traditional Flours",
  description:
    "Mezin Food Products (MFP) offers freshly ground spices, flours, and traditional food products prepared with care in Saravanampatti, Coimbatore.",
  keywords: [
    "Mezin Food Products",
    "MFP",
    "MFP Food Product",
    "Chilli Powder",
    "மிளகாய் தூள்",
    "Sambar Powder",
    "சாம்பார் தூள்",
    "Idli Podi",
    "இட்லி பொடி",
    "Ragi Flour",
    "ராகி மாவு",
    "Mappillai Samba Puttu Flour",
    "மாப்பிள்ளை சம்பா புட்டு மாவு",
    "Coimbatore food products",
    "Saravanampatti spice mill",
  ],
  authors: [{ name: "Mezin Food Products" }],
  metadataBase: new URL("https://mezinfood.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mezin Food Products | Spices & Traditional Flours",
    description:
      "Mezin Food Products (MFP) offers freshly ground spices, flours, and traditional food products prepared with care in Saravanampatti, Coimbatore.",
    url: "https://mezinfood.com",
    siteName: "Mezin Food Products",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/mfp-logo.png",
        width: 500,
        height: 500,
        alt: "Mezin Food Products (MFP) - Healthy and Tasty",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLdLocalBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_CONFIG.brandName,
  alternateName: SITE_CONFIG.brandAbbreviation,
  image: "https://mezinfood.com/mfp-logo.png",
  telephone: SITE_CONFIG.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${SITE_CONFIG.address.line1}, ${SITE_CONFIG.address.line2}`,
    addressLocality: `${SITE_CONFIG.address.area}, ${SITE_CONFIG.address.city}`,
    addressRegion: "Tamil Nadu",
    postalCode: SITE_CONFIG.address.postalCode,
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE_CONFIG.mapLocation.lat,
    longitude: SITE_CONFIG.mapLocation.lng,
  },
  hasMap: SITE_CONFIG.mapLocation.directUrl,
  priceRange: "₹",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${notoSansTamil.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }}
        />
      </head>
      <body className="bg-ivory text-chocolate selection:bg-olive selection:text-ivory flex flex-col min-h-screen">
        {children}
      </body>
    </html>
  );
}
