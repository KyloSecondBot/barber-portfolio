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
  siteUrl: "https://cuplis.barber", // PLACEHOLDER — real domain
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

// Pure portfolio: no booking, prices, hours, services, reviews, story or achievements on the site.

export const styles = ["fade", "taper", "crop", "buzz", "long", "beard", "color"] as const;
export type Style = (typeof styles)[number];

/** Visible names for each style (filter chips and card tags). */
export const styleLabels: Record<Style, string> = {
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
