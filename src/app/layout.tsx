import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Playfair_Display, Noto_Sans_Tamil } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { siteUrl, configuredSiteUrl, hasConfiguredSiteUrl } from "@/config/env";
import { LanguageProvider } from "@/context/LanguageContext";
import { EnquiryProvider } from "@/context/EnquiryContext";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const fontSerif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["500", "600", "700"],
});

const fontTamil = Noto_Sans_Tamil({
  subsets: ["tamil"],
  variable: "--font-tamil",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FAF7F2",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Mezin Food Products | Traditional Food Products in Coimbatore",
  description:
    "Explore Mezin Food Products in Saravanampatti, Coimbatore. Discover our range of spice powders, flour products and traditional food offerings.",
  authors: [{ name: "Mezin Food Products" }],
  // TODO: Replace icon.jpg with transparent PNG/SVG favicon once provided by owner
  icons: {
    icon: "/icon.jpg",
  },
  openGraph: {
    title: "Mezin Food Products | Saravanampatti, Coimbatore",
    description:
      "Local food-processing business in Saravanampatti, Coimbatore. We grind spices and flour, prepare batter and pack selected raw ingredients.",
    type: "website",
    locale: "en_IN",
    siteName: "Mezin Food Products",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Verified JSON-LD structured data (no unsupplied facts like ratings, hours, etc.)
  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    telephone: `+${siteConfig.rawPhone}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
      addressLocality: "Saravanampatti, Coimbatore",
      addressRegion: "Tamil Nadu",
      postalCode: siteConfig.address.pincode,
      addressCountry: "IN",
    },
    description:
      "Local food-processing business in Saravanampatti, Coimbatore. We grind spices and flour, prepare batter and pack selected raw ingredients.",
  };

  // Only include external URL and image when a production domain is configured
  if (hasConfiguredSiteUrl && configuredSiteUrl) {
    jsonLd.url = configuredSiteUrl;
    jsonLd.image = `${configuredSiteUrl}/images/mfp-logo.jpg`;
  }

  return (
    <html lang="en" className={`${fontSans.variable} ${fontSerif.variable} ${fontTamil.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-cream font-sans text-brown antialiased selection:bg-gold-100 selection:text-brown-900 pb-16 md:pb-0">
        <LanguageProvider>
          <EnquiryProvider>{children}</EnquiryProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
