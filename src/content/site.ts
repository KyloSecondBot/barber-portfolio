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
  directions: "Chat aku di WhatsApp buat minta pin lokasi dan petunjuk arah.",
};

// No opening hours on the site: his schedule follows the shop, so clients ask on WhatsApp.
export const schedule = {
  note: "Jadwalku ikut jadwal Dibawah Pohon Barber dan bisa berubah. Chat aku di WhatsApp buat cek jam yang kosong.",
  askMessage: "Halo, Cuplis! Minggu ini ada jadwal kosong kapan aja?",
};

/** Day names for the booking message builder. */
export const days = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];

export type Service = {
  name: string;
  duration: number; // minutes
  description: string;
};

// No prices on the site: Cuplis works at Dibawah Pohon Barber, which sets the prices.
// PLACEHOLDER — confirm which services he offers and how long they take.
export const services: Service[] = [
  { name: "Signature Cut", duration: 45, description: "Konsultasi, potong, keramas, dan styling. Bisa fade, taper, atau gunting." },
  { name: "Skin Fade", duration: 60, description: "Fade dari botak sampai panjang, finishing pakai pisau cukur, line-up detail." },
  { name: "Potong + Jenggot", duration: 75, description: "Signature Cut plus rapihin jenggot, handuk hangat, dan garis tepi pakai pisau." },
  { name: "Rapihin Jenggot", duration: 30, description: "Bentuk, line-up, dan handuk hangat. Ditutup pakai beard oil." },
  { name: "Buzz + Line-up", duration: 25, description: "Satu ukuran sisir rata, garis rambut tegas, tengkuk bersih." },
  { name: "Potong Anak (di bawah 12)", duration: 30, description: "Sabar, cepat, nggak pakai nangis. Detailnya sama kayak orang dewasa." },
  { name: "Warna / Bleaching", duration: 120, description: "Bleaching penuh, platinum, atau warna berani. Konsultasi dulu ya." },
];

export const serviceNotes = [
  { title: "Harga", body: "Harga ikut daftar harga Dibawah Pohon Barber. Tanya aku di WhatsApp, nanti aku kasih tahu." },
  { title: "Datang langsung", body: "Boleh, kalau kursinya lagi kosong. Tapi yang udah booking didahulukan, jadi chat dulu buat cek." },
  { title: "Telat", body: "Lewat dari 15 menit, potongannya mungkin harus dipersingkat atau digeser ke jadwal kosong berikutnya." },
  { title: "Pembayaran", body: "Tunai, QRIS, debit, dan e-wallet (GoPay, OVO, DANA)." },
  { title: "Batal", body: "Kabarin minimal 3 jam sebelumnya lewat WhatsApp, biar slotnya bisa dipakai orang lain." },
];

export type Review = { name: string; text: string; cut: string };

// PLACEHOLDER — replace with real reviews he is allowed to quote.
export const reviews: Review[] = [
  { name: "Dimas R.", cut: "Skin fade", text: "Fade terbaik yang pernah aku dapet. Dia beneran dengerin maunya kita, dan line-up-nya awet berminggu-minggu." },
  { name: "Kevin T.", cut: "Crop bertekstur", text: "Kasih lihat satu foto, pulang persis kayak gitu. Langsung booking lagi sebelum turun dari kursi." },
  { name: "Arya P.", cut: "Potong + jenggot", text: "Santai, cepat, nggak banyak basa-basi kecuali kamu mau ngobrol. Urusan jenggot, juara." },
  { name: "Bayu S.", cut: "Low taper", text: "Udah tiga tahun langganan, sampai ikut pindah ke barbershop barunya. Itu udah cukup jelas." },
  { name: "Reza M.", cut: "Buzz + line-up", text: "Buzz cut biasa aja kerasa detail. Garisnya bersih, tengkuknya rapi, awet lama." },
];

export const visitSteps = [
  { n: "01", tag: "Booking", title: "Chat di WhatsApp", body: "Pilih jam, kirim foto model yang kamu mau. Aku balas di hari yang sama." },
  { n: "02", tag: "Konsultasi", title: "Ngobrol lima menit", body: "Jenis rambutmu, cara kamu styling, seberapa sering potong. Habis itu kita sepakat rencananya." },
  { n: "03", tag: "Potong & finishing", title: "Dikerjain beres", body: "Potong, keramas, styling, plus tips biar tetap rapi di rumah. Mau booking berikutnya juga bisa." },
];

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
