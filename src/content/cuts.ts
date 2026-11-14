import type { Cut } from "./site";

// PLACEHOLDER photos (Unsplash) until Cuplis's own cuts are shot.
// Each real cut should have 3–5 angles (front, side, back) in the same light.
const u = (id: string) => `https://images.unsplash.com/${id}`;
// All IDs checked (HTTP 200) on 2026-11-13.
const IMG = {
  fade1: u("photo-1568339434343-2a640a1a9946"),
  fade2: u("photo-1635273051839-003bf06a8751"),
  taper1: u("photo-1735150950233-d8d10d5926a8"),
  taper2: u("photo-1593702275687-f8b402bf1fb5"),
  crop1: u("photo-1640301133543-41fe25ad6450"),
  crop2: u("photo-1790270492178-fd5024dcf03e"),
  buzz1: u("photo-1772442088712-df1780cbb709"),
  long1: u("photo-1697667242943-780e9ff0cc34"),
  beard1: u("photo-1629189784191-9afdcbcb0398"),
  beard2: u("photo-1630827020718-3433092696e7"),
  color1: u("photo-1643191834226-ba266bf480bb"),
  color2: u("photo-1636369410360-c0ddc1714c24"),
};

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

const ANGLES = ["Front", "Side", "Back", "Detail", "Before"];
const ANGLE_ALT = ["tampak depan", "tampak samping", "tampak belakang", "detail", "sebelum dipotong"];

/** `desc` is the photo description without the angle, e.g. "Skin fade dengan rambut bagian atas bertekstur". */
const shots = (desc: string, srcs: string[]) =>
  srcs.map((src, i) => ({
    src,
    angle: ANGLES[i] ?? "Detail",
    alt: `${desc}, ${ANGLE_ALT[i] ?? "detail"}`,
  }));

export const cuts: Cut[] = [
  {
    slug: "skin-fade-textured-top",
    name: "Skin Fade dengan Atas Bertekstur",
    style: "fade",
    favorite: true,
    images: shots("Skin fade dengan rambut bagian atas bertekstur", [IMG.fade1, IMG.fade2, IMG.taper1]),
    technique: "Bagian bawah dibotakin pakai foil shaver, terus di-blend naik dari sisir 0,5 sampai 2. Atasnya di-point cut biar ada tekstur dan gerak waktu ditata pakai matte paste.",
    tags: ["skin fade", "tekstur", "hasil matte"],
  },
  {
    slug: "low-taper-side-part",
    name: "Low Taper Belah Samping",
    style: "taper",
    favorite: true,
    images: shots("Low taper dengan belah samping", [IMG.taper1, IMG.taper2, IMG.fade2]),
    technique: "Taper dibuat rendah, cuma di pelipis dan tengkuk. Samping dirapikan pakai teknik gunting di atas sisir, garis belahan dibuat tipis pakai trimmer.",
    tags: ["low taper", "belah samping", "klasik"],
  },
  {
    slug: "french-crop-mid-fade",
    name: "French Crop + Mid Fade",
    style: "crop",
    images: shots("French crop dengan mid fade", [IMG.crop1, IMG.crop2, IMG.fade1]),
    technique: "Mid fade dimulai dari garis tulang kepala. Poni pendek dipotong lurus, terus dipecah pakai point cutting biar nggak kaku.",
    tags: ["crop", "mid fade", "poni"],
  },
  {
    slug: "buzz-cut-line-up",
    name: "Buzz Cut + Line-up",
    style: "buzz",
    images: shots("Buzz cut dengan garis rambut tegas", [IMG.buzz1, IMG.fade2, IMG.taper1]),
    technique: "Sisir nomor 2 rata, dipotong melawan arah tumbuh. Garis depan dibuat kotak, tengkuk di-taper biar tumbuhnya tetap rapi.",
    tags: ["buzz", "line-up", "gampang dirawat"],
  },
  {
    slug: "beard-sculpt-taper",
    name: "Rapihin Jenggot + Taper",
    style: "beard",
    favorite: true,
    images: shots("Jenggot yang dibentuk dengan potongan taper", [IMG.beard1, IMG.beard2, IMG.taper2]),
    technique: "Jenggot di-taper nyambung ke cambang, jadi nggak ada garis kasar antara rambut dan jenggot. Garis pipi dibentuk pakai pisau cukur setelah handuk hangat.",
    tags: ["jenggot", "pisau cukur", "handuk hangat"],
  },
  {
    slug: "textured-crop-drop-fade",
    name: "Crop Bertekstur + Drop Fade",
    style: "crop",
    images: shots("Crop bertekstur dengan drop fade", [IMG.crop2, IMG.crop1, IMG.fade1]),
    technique: "Fade-nya turun di belakang telinga, ngikutin bentuk kepala. Atasnya banyak tekstur dengan poni sedikit ke depan.",
    tags: ["drop fade", "crop", "tekstur"],
  },
  {
    slug: "burst-fade-curls",
    name: "Burst Fade Rambut Keriting",
    style: "fade",
    images: shots("Burst fade dengan rambut keriting di bagian atas", [IMG.fade2, IMG.fade1, IMG.crop1]),
    technique: "Fade melingkar di sekitar telinga, belakangnya dibiarkan lebih panjang. Keritingnya dipotong kering satu per satu, biar jatuhnya natural.",
    tags: ["burst fade", "rambut keriting", "potong kering"],
  },
  {
    slug: "platinum-buzz",
    name: "Buzz Cut Platinum",
    style: "color",
    favorite: true,
    images: shots("Buzz cut warna pirang platinum", [IMG.color1, IMG.color2, IMG.buzz1]),
    technique: "Bleaching dua tahap sampai kuning pucat, terus di-toning jadi platinum. Dipotong buzz setelah diwarnai biar warnanya rata.",
    tags: ["bleaching", "platinum", "buzz"],
  },
  {
    slug: "long-layers-flow",
    name: "Layer Rambut Panjang",
    style: "long",
    images: shots("Rambut panjang berlapis", [IMG.long1, IMG.taper2, IMG.crop2]),
    technique: "Panjang dijaga sampai kerah, layer di dalam buat ngurangin berat. Samping bisa diselipin ke belakang telinga tanpa garis kelihatan.",
    tags: ["rambut panjang", "layer", "gunting"],
  },
  {
    slug: "high-taper-pompadour",
    name: "High Taper + Pompadour",
    style: "taper",
    images: shots("High taper dengan pompadour", [IMG.taper2, IMG.taper1, IMG.beard2]),
    technique: "High taper biar kontras, atasnya dibiarkan cukup panjang buat di-blow ke belakang. Finishing pakai pomade biar mengkilap.",
    tags: ["high taper", "pompadour", "mengkilap"],
  },
  {
    slug: "full-beard-shape",
    name: "Rapihin Jenggot",
    style: "beard",
    images: shots("Jenggot penuh dengan garis tepi rapi", [IMG.beard2, IMG.beard1, IMG.fade1]),
    technique: "Panjangnya dipertahankan, volume di pipi dikurangi biar rahangnya kelihatan. Kumis dirapikan di atas garis bibir.",
    tags: ["jenggot penuh", "bentuk", "kumis"],
  },
  {
    slug: "mid-fade-quiff",
    name: "Mid Fade + Quiff",
    style: "fade",
    images: shots("Mid fade dengan quiff", [IMG.fade1, IMG.taper2, IMG.crop1]),
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
