import type { Metadata, Viewport } from "next";
import { Archivo, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Providers } from "@/components/Providers";
import { barber, shop, hours } from "@/content/site";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
  display: "swap",
});
const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["italic", "normal"],
  display: "swap",
});
const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(barber.siteUrl),
  title: {
    default: `${barber.name} — Barber di ${shop.name}`,
    template: `%s — ${barber.name}`,
  },
  description: `${barber.tagline} Booking via WhatsApp.`,
  openGraph: {
    type: "website",
    siteName: `${barber.name} Barber`,
    locale: "id_ID",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#121110",
  width: "device-width",
  initialScale: 1,
};

const dayMap: Record<string, string> = {
  Mon: "Monday", Tue: "Tuesday", Wed: "Wednesday", Thu: "Thursday",
  Fri: "Friday", Sat: "Saturday", Sun: "Sunday",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${barber.siteUrl}/#person`,
      name: barber.name,
      alternateName: barber.fullName,
      jobTitle: "Barber",
      url: barber.siteUrl,
      sameAs: [barber.instagram],
      worksFor: { "@id": `${barber.siteUrl}/#shop` },
    },
    {
      "@type": "HairSalon",
      "@id": `${barber.siteUrl}/#shop`,
      name: shop.name,
      sameAs: [shop.instagram],
      address: { "@type": "PostalAddress", addressLocality: barber.city, addressCountry: "ID" },
      telephone: `+${barber.whatsapp}`,
      priceRange: "Rp 90.000 – Rp 350.000",
      openingHoursSpecification: hours
        .filter((h) => !h.closed)
        .map((h) => {
          // Shown as "10.00 – 20.00"; schema.org wants "10:00".
          const [opens, closes] = h.open.replaceAll(".", ":").split(" – ");
          return {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: dayMap[h.day],
            opens,
            closes,
          };
        }),
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${archivo.variable} ${instrument.variable} ${jetbrains.variable} antialiased`}
    >
      <body className="min-h-dvh flex flex-col bg-ink text-cream">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-brass focus:text-ink focus:px-4 focus:py-2 focus:rounded-md"
        >
          Langsung ke konten
        </a>
        <Providers>
          <Header />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
          <FloatingWhatsApp />
        </Providers>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
