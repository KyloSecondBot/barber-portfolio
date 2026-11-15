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
  },
  {
    slug: "french-crop-mid-fade",
    name: "French Crop + Mid Fade",
    style: "crop",
    favorite: true,
    images: shots("french-crop-mid-fade", "French crop dengan mid fade", ["Front", "Side"]),
  },
  {
    slug: "platinum-buzz",
    name: "Buzz Cut Platinum",
    style: "color",
    favorite: true,
    images: shots("platinum-buzz", "Buzz cut warna pirang platinum", ["Side", "Back"]),
  },
  {
    slug: "textured-crop-drop-fade",
    name: "Crop Bertekstur + Drop Fade",
    style: "crop",
    images: shots("textured-crop-drop-fade", "Crop bertekstur dengan drop fade", ["Side", "Back"]),
  },
  {
    slug: "beard-sculpt-taper",
    name: "Rapihin Jenggot + Taper",
    style: "beard",
    favorite: true,
    images: shots("beard-sculpt-taper", "Jenggot yang dibentuk dengan potongan taper", ["Side", "Detail"]),
  },
  {
    slug: "skin-fade-textured-top",
    name: "Skin Fade dengan Atas Bertekstur",
    style: "fade",
    images: shots("skin-fade-textured-top", "Skin fade dengan rambut bagian atas bertekstur", ["Side", "Back"]),
  },
  {
    slug: "burst-fade-curls",
    name: "Burst Fade Rambut Keriting",
    style: "fade",
    images: shots("burst-fade-curls", "Burst fade dengan rambut keriting di bagian atas", ["Side", "Back"]),
  },
  {
    slug: "buzz-cut-line-up",
    name: "Buzz Cut + Line-up",
    style: "buzz",
    images: shots("buzz-cut-line-up", "Buzz cut dengan garis rambut tegas", ["Side", "Back"]),
  },
  {
    slug: "long-layers-flow",
    name: "Layer Rambut Panjang",
    style: "long",
    images: shots("long-layers-flow", "Rambut panjang berlapis", ["Side", "Detail"]),
  },
  {
    slug: "high-taper-pompadour",
    name: "High Taper + Pompadour",
    style: "taper",
    images: shots("high-taper-pompadour", "High taper dengan pompadour", ["Side", "Back"]),
  },
  {
    slug: "full-beard-shape",
    name: "Rapihin Jenggot",
    style: "beard",
    images: shots("full-beard-shape", "Jenggot penuh dengan garis tepi rapi", ["Front", "Detail"]),
  },
  {
    slug: "mid-fade-quiff",
    name: "Mid Fade + Quiff",
    style: "fade",
    images: shots("mid-fade-quiff", "Mid fade dengan quiff", ["Side", "Front"]),
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
};

/** Both photos of Cuplis, in the order they rotate (PhotoSwap). Source is 9:16; the 4:5 crop keeps the corner watermark out. */
export const cuplisPhotos = [
  { src: barberPhotos.portrait, alt: barberPhotos.portraitAlt },
  { src: barberPhotos.street, alt: barberPhotos.streetAlt },
];

export function getCut(slug: string) {
  return cuts.find((c) => c.slug === slug);
}
