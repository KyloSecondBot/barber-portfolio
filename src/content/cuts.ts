import type { Cut } from "./site";

// PREVIEW photos: AI-generated (ChatGPT) stand-ins, files in /public/images/cuts.
// Replace every one with Cuplis's own photos before launch: a portfolio has to show his real work.
// Real cuts should have 3–5 angles (front, side, back) in the same light.

/**
 * `angle` is an internal key (the before/after slider looks for "Before");
 * show visitors `angleLabels[angle]` instead.
 */
export const angleLabels: Record<string, string> = {
  Front: "Depan",
  Side: "Samping",
  Back: "Belakang",
  Detail: "Detail",
  Before: "Sebelum",
};

type Angle = "Front" | "Side" | "Back" | "Detail" | "Before";
const ANGLE_ALT: Record<Angle, string> = {
  Front: "tampak depan",
  Side: "tampak samping",
  Back: "tampak belakang",
  Detail: "detail",
  Before: "sebelum dipotong",
};
const FILE: Record<Angle, string> = { Front: "front", Side: "side", Back: "back", Detail: "detail", Before: "before" };

/** Photos live at /images/cuts/<slug>-<angle>.webp. `desc` is the description without the angle. */
const shots = (slug: string, desc: string, angles: Angle[]) =>
  angles.map((angle) => ({
    src: `/images/cuts/${slug}-${FILE[angle]}.webp`,
    angle,
    alt: `${desc}, ${ANGLE_ALT[angle]}`,
  }));

export const cuts: Cut[] = [
  {
    slug: "low-taper-side-part",
    name: "Low Taper Belah Samping",
    style: "taper",
    favorite: true,
    images: shots("low-taper-side-part", "Low taper dengan belah samping", ["Front", "Back"]),
    technique: "Taper dibuat rendah, cuma di pelipis dan tengkuk. Samping dirapikan pakai teknik gunting di atas sisir, garis belahan dibuat tipis pakai trimmer.",
    tags: ["low taper", "belah samping", "klasik"],
  },
  {
    slug: "french-crop-mid-fade",
    name: "French Crop + Mid Fade",
    style: "crop",
    favorite: true,
    images: shots("french-crop-mid-fade", "French crop dengan mid fade", ["Front", "Side"]),
    technique: "Mid fade dimulai dari garis tulang kepala. Poni pendek dipotong lurus, terus dipecah pakai point cutting biar nggak kaku.",
    tags: ["crop", "mid fade", "poni"],
  },
  {
    slug: "platinum-buzz",
    name: "Buzz Cut Platinum",
    style: "color",
    favorite: true,
    images: shots("platinum-buzz", "Buzz cut warna pirang platinum", ["Side", "Back"]),
    technique: "Bleaching dua tahap sampai kuning pucat, terus di-toning jadi platinum. Dipotong buzz setelah diwarnai biar warnanya rata.",
    tags: ["bleaching", "platinum", "buzz"],
  },
  {
    slug: "textured-crop-drop-fade",
    name: "Crop Bertekstur + Drop Fade",
    style: "crop",
    images: shots("textured-crop-drop-fade", "Crop bertekstur dengan drop fade", ["Side", "Back"]),
    technique: "Fade-nya turun di belakang telinga, ngikutin bentuk kepala. Atasnya banyak tekstur dengan poni sedikit ke depan.",
    tags: ["drop fade", "crop", "tekstur"],
  },
  {
    slug: "beard-sculpt-taper",
    name: "Rapihin Jenggot + Taper",
    style: "beard",
    favorite: true,
    images: shots("beard-sculpt-taper", "Jenggot yang dibentuk dengan potongan taper", ["Side", "Detail"]),
    technique: "Jenggot di-taper nyambung ke cambang, jadi nggak ada garis kasar antara rambut dan jenggot. Garis pipi dibentuk pakai pisau cukur setelah handuk hangat.",
    tags: ["jenggot", "pisau cukur", "handuk hangat"],
  },
  {
    slug: "burst-fade-curls",
    name: "Burst Fade Rambut Keriting",
    style: "fade",
    images: shots("burst-fade-curls", "Burst fade dengan rambut keriting di bagian atas", ["Side"]),
    technique: "Fade melingkar di sekitar telinga, belakangnya dibiarkan lebih panjang. Keritingnya dipotong kering satu per satu, biar jatuhnya natural.",
    tags: ["burst fade", "rambut keriting", "potong kering"],
  },
  {
    slug: "buzz-cut-line-up",
    name: "Buzz Cut + Line-up",
    style: "buzz",
    images: shots("buzz-cut-line-up", "Buzz cut dengan garis rambut tegas", ["Side"]),
    technique: "Sisir nomor 2 rata, dipotong melawan arah tumbuh. Garis depan dibuat kotak, tengkuk di-taper biar tumbuhnya tetap rapi.",
    tags: ["buzz", "line-up", "gampang dirawat"],
  },
  {
    slug: "long-layers-flow",
    name: "Layer Rambut Panjang",
    style: "long",
    images: shots("long-layers-flow", "Rambut panjang berlapis", ["Side"]),
    technique: "Panjang dijaga sampai kerah, layer di dalam buat ngurangin berat. Samping bisa diselipin ke belakang telinga tanpa garis kelihatan.",
    tags: ["rambut panjang", "layer", "gunting"],
  },
  {
    slug: "high-taper-pompadour",
    name: "High Taper + Pompadour",
    style: "taper",
    images: shots("high-taper-pompadour", "High taper dengan pompadour", ["Side"]),
    technique: "High taper biar kontras, atasnya dibiarkan cukup panjang buat di-blow ke belakang. Finishing pakai pomade biar mengkilap.",
    tags: ["high taper", "pompadour", "mengkilap"],
  },
  {
    slug: "full-beard-shape",
    name: "Rapihin Jenggot",
    style: "beard",
    images: shots("full-beard-shape", "Jenggot penuh dengan garis tepi rapi", ["Front", "Side"]),
    technique: "Panjangnya dipertahankan, volume di pipi dikurangi biar rahangnya kelihatan. Kumis dirapikan di atas garis bibir.",
    tags: ["jenggot penuh", "bentuk", "kumis"],
  },
  {
    slug: "mid-fade-quiff",
    name: "Mid Fade + Quiff",
    style: "fade",
    images: shots("mid-fade-quiff", "Mid fade dengan quiff", ["Side"]),
    technique: "Mid fade di-blend ke potongan gunting di atas, bagian depan dibiarkan paling panjang buat quiff yang naik.",
    tags: ["mid fade", "quiff", "volume"],
  },
];


/** Real photos of Cuplis (supplied 2026-11-14). Both are 900×1600 portrait. */
export const barberPhotos = {
  // Mirror selfie at the shop, denim jacket.
  portrait: "/images/cuplis/cuplis-shop.jpg",
  portraitAlt: "Cuplis berfoto di cermin Dibawah Pohon Barber, pakai jaket denim",
  // Overhead shot lying on the pavement, white shirt.
  street: "/images/cuplis/cuplis-street.jpg",
  streetAlt: "Cuplis rebahan di trotoar dengan kemeja putih, difoto dari atas",
  // Kept for the home bio teaser / about until a real at-work photo exists.
  atWork: "/images/cuplis/cuplis-shop.jpg",
};

export function getCut(slug: string) {
  return cuts.find((c) => c.slug === slug);
}
