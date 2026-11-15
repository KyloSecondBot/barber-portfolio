// All site content lives here until Sanity is added (see PRD "Simpler start").
// Everything marked PLACEHOLDER must be replaced with the barber's real details.
// Copy is in casual Indonesian: Cuplis talking to a client ("aku" / "kamu").

export const barber = {
  name: "Cuplis",
  fullName: "Yusuf Alansyah",
  firstName: "Cuplis",
  handle: "@cuplisalbern",
  instagram: "https://www.instagram.com/cuplisalbern/",
  whatsapp: "62895405518530", // international format, no "+"
  // Set NEXT_PUBLIC_SITE_URL once he has his own domain. Until then Vercel's
  // production address is used, and localhost during development.
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
  tagline: "Barber spesialis fade dan taper.",
};

// "Where to find me now" — the shop is a location, not the brand.
// No public map listing, so we point to the shop's Instagram and WhatsApp for directions.
export const shop = {
  name: "Dibawah Pohon Barber",
  handle: "@dibawahpohon_",
  instagram: "https://www.instagram.com/dibawahpohon_/",
  directions: "Mau mampir? Chat aku di WhatsApp buat minta pin lokasinya.",
};

// Pure portfolio: no booking, prices, hours, services, reviews or achievements on the site.

// His own story, from his message on 2026-11-15. Keep it in his words; don't add facts.
export const story = {
  since: "Sejak kelas 3 SMP",
  paragraphs: [
    "Aku bisa sampai di titik ini awalnya cuma karena iseng. Waktu kelas 3 SMP, aku mulai nyukurin teman-teman pakai alat seadanya.",
    "Aku juga sering lihat barber-barber di media sosial, dan hasil potongan mereka keren-keren. Dari situ aku makin tertarik dan mulai coba serius.",
    "Itu yang aku jalanin sampai sekarang, di Dibawah Pohon Barber.",
  ],
};

// Filter order in the gallery. Styles with no cuts are hidden, so add new ones freely.
export const styles = ["warrior", "taper", "fringe", "short", "fade", "crop", "buzz", "long", "beard", "color"] as const;
export type Style = (typeof styles)[number];

/** Visible names for each style (filter chips and card tags). */
export const styleLabels: Record<Style, string> = {
  warrior: "Warrior Cut",
  fringe: "Fringe",
  short: "Pendek",
  fade: "Fade",
  taper: "Taper",
  crop: "Crop",
  buzz: "Buzz",
  long: "Rambut panjang",
  beard: "Jenggot",
  color: "Warna",
};

export type Cut = {
  slug: string;
  name: string;
  style: Style;
  images: { src: string; alt: string; angle: string }[];
  favorite?: boolean;
};

export { cuts } from "./cuts";
