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
  city: "Jakarta", // PLACEHOLDER — confirm his city
  yearsCutting: 8, // PLACEHOLDER
  cutsCount: "2.000+", // PLACEHOLDER
  specialty: "Fade & taper",
  siteUrl: "https://cuplis.barber", // PLACEHOLDER — real domain
  tagline: "Fade yang tajam. Taper yang rapi. Dipotong sepenuh hati.",
};

// "Where to find me now" — the shop is a location, not the brand.
// No public map listing, so we point to the shop's Instagram and WhatsApp for directions.
export const shop = {
  name: "Dibawah Pohon Barber",
  handle: "@dibawahpohon_",
  instagram: "https://www.instagram.com/dibawahpohon_/",
  directions: "Mau mampir? Chat aku di WhatsApp buat minta pin lokasinya.",
};

// Pure portfolio: no booking, prices, hours, services or reviews on the site.

// PLACEHOLDER — his real highlights.
export const highlights = [
  { year: "2024", title: "Finalis Jakarta Barber Battle", body: "Masuk 8 besar kategori fade." },
  { year: "2023", title: "Pengajar tamu, Barber Academy ID", body: "Ngajar kelas dasar-dasar fade." },
  { year: "2022", title: "Partner grooming brand streetwear lokal", body: "Potong rambut untuk dua sesi foto lookbook." },
  { year: "2018", title: "Mulai motong", body: "Belajar di Bandung, kursi pertama di Jakarta Selatan." },
];

export const story = {
  // PLACEHOLDER — write up from his voice note.
  start:
    "Aku mulai motong rambut teman-teman di garasi rumah, pakai clipper bekas yang aku beli murah. Kebanyakan hasilnya jelek. Tapi ada beberapa yang cukup bagus sampai mereka balik lagi.",
  training:
    "Tahun 2018 aku ambil kursus barber lengkap, terus dua tahun jadi junior di barbershop yang ramai. Tiga puluh kepala sehari, belajar langsung dari barber yang udah dua puluh tahun pegang gunting.",
  approach:
    "Aku nggak mau ngerjain potongan yang nggak bisa aku jelasin. Sebelum clipper nyala, kita ngobrol dulu: arah tumbuh rambutmu, cara kamu styling tiap pagi, dan berapa lama jarak potongnya. Fade yang bagus harus tetap kelihatan rapi di hari keempat belas, bukan cuma pas turun dari kursi.",
  quote: "Potongan yang bagus harus tetap rapi di hari keempat belas.",
};

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
  technique: string;
  tags: string[];
  favorite?: boolean;
};

export { cuts } from "./cuts";
