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

// `day` stays in English for Google's structured data; `label` is what visitors see.
// PLACEHOLDER — confirm his real hours.
export const hours = [
  { day: "Mon", label: "Senin", short: "Sen", open: "Tutup", closed: true },
  { day: "Tue", label: "Selasa", short: "Sel", open: "10.00 – 20.00", closed: false },
  { day: "Wed", label: "Rabu", short: "Rab", open: "10.00 – 20.00", closed: false },
  { day: "Thu", label: "Kamis", short: "Kam", open: "10.00 – 20.00", closed: false },
  { day: "Fri", label: "Jumat", short: "Jum", open: "10.00 – 21.00", closed: false },
  { day: "Sat", label: "Sabtu", short: "Sab", open: "09.00 – 21.00", closed: false },
  { day: "Sun", label: "Minggu", short: "Min", open: "09.00 – 18.00", closed: false },
];

export type Service = {
  name: string;
  price: number; // in Rupiah
  duration: number; // minutes
  description: string;
};

// PLACEHOLDER — confirm his real prices.
export const services: Service[] = [
  { name: "Signature Cut", price: 150000, duration: 45, description: "Konsultasi, potong, keramas, dan styling. Bisa fade, taper, atau gunting." },
  { name: "Skin Fade", price: 175000, duration: 60, description: "Fade dari botak sampai panjang, finishing pakai pisau cukur, line-up detail." },
  { name: "Potong + Jenggot", price: 225000, duration: 75, description: "Signature Cut plus rapihin jenggot, handuk hangat, dan garis tepi pakai pisau." },
  { name: "Rapihin Jenggot", price: 100000, duration: 30, description: "Bentuk, line-up, dan handuk hangat. Ditutup pakai beard oil." },
  { name: "Buzz + Line-up", price: 90000, duration: 25, description: "Satu ukuran sisir rata, garis rambut tegas, tengkuk bersih." },
  { name: "Potong Anak (di bawah 12)", price: 100000, duration: 30, description: "Sabar, cepat, nggak pakai nangis. Detailnya sama kayak orang dewasa." },
  { name: "Warna / Bleaching", price: 350000, duration: 120, description: "Bleaching penuh, platinum, atau warna berani. Konsultasi dulu ya." },
];

export const serviceNotes = [
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
  { name: "Reza M.", cut: "Buzz + line-up", text: "Buzz cut biasa aja kerasa detail. Garisnya bersih, tengkuknya rapi, harganya masuk." },
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
