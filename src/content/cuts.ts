import type { Cut } from "./site";

// Cuplis's real cuts: frames taken from his videos (480×600, 4:5), added 2026-11-15 in two batches.
// Files live in /public/images/cuts as <slug>-<angle>.jpg. Clients' faces show, so only use
// photos the client has agreed to.

/**
 * `angle` is an internal key (the before/after slider looks for "Before");
 * show visitors `angleLabels[angle]` instead.
 */
export const angleLabels: Record<string, string> = {
  Front: "Depan",
  FrontAngle: "Serong depan",
  Side: "Samping",
  SideAngle: "Serong samping",
  Back: "Belakang",
  BackAngle: "Serong belakang",
  Detail: "Detail",
  AngleLeft: "Serong kiri",
  AngleRight: "Serong kanan",
  Before: "Sebelum",
};

type Angle =
  | "Front"
  | "FrontAngle"
  | "AngleLeft"
  | "AngleRight"
  | "Side"
  | "SideAngle"
  | "Back"
  | "BackAngle"
  | "Detail"
  | "Before";
const ANGLE_ALT: Record<Angle, string> = {
  Front: "tampak depan",
  FrontAngle: "tampak serong depan",
  Side: "tampak samping",
  SideAngle: "tampak serong samping",
  Back: "tampak belakang",
  BackAngle: "tampak serong belakang",
  Detail: "detail",
  AngleLeft: "tampak serong kiri",
  AngleRight: "tampak serong kanan",
  Before: "sebelum dipotong",
};
const FILE: Record<Angle, string> = {
  Front: "front",
  FrontAngle: "front-angle",
  Side: "side",
  SideAngle: "side-angle",
  Back: "back",
  BackAngle: "back-angle",
  Detail: "detail",
  AngleLeft: "angle-left",
  AngleRight: "angle-right",
  Before: "before",
};

/** The first angle is the card cover. `name` is used for the alt text, e.g. "Warrior Cut, tampak samping". */
const shots = (file: string, name: string, angles: Angle[]) =>
  angles.map((angle) => ({
    src: `/images/cuts/${file}-${FILE[angle]}.jpg`,
    angle,
    alt: `${name}, ${ANGLE_ALT[angle]}`,
  }));

export const cuts: Cut[] = [
  {
    slug: "taper-fade-curtain",
    name: "Taper Fade + Curtain",
    style: "taper",
    images: shots("taper-fade-curtain", "Taper Fade + Curtain", ["FrontAngle", "SideAngle", "BackAngle"]),
  },
  {
    slug: "warrior-cut",
    name: "Warrior Cut",
    style: "warrior",
    images: shots("warrior-cut", "Warrior Cut", ["Side", "Front", "BackAngle"]),
  },
  {
    // Name is descriptive until Cuplis confirms the model's name.
    slug: "fade-bertekstur",
    name: "Fade Bertekstur",
    style: "fade",
    images: shots("fade-bertekstur", "Fade Bertekstur", ["Side", "Back", "SideAngle", "Detail"]),
  },
  {
    slug: "wavy-fringe",
    name: "Wavy Fringe",
    style: "fringe",
    images: shots("wavy-fringe", "Wavy Fringe", ["Front", "SideAngle"]),
  },
  {
    // Descriptive name until confirmed. The cape shows another shop's logo ("nø badhair."): confirm it's his cut.
    slug: "fringe-bertekstur",
    name: "Fringe Bertekstur",
    style: "fringe",
    images: shots("fringe-bertekstur", "Fringe Bertekstur", ["Front", "AngleRight", "AngleLeft"]),
  },
  {
    // Descriptive name until confirmed.
    slug: "belah-tengah",
    name: "Belah Tengah",
    style: "taper",
    images: shots("belah-tengah", "Belah Tengah", ["Front"]),
  },
  {
    // A different client from the first Warrior Cut.
    slug: "warrior-cut-2",
    name: "Warrior Cut #2",
    style: "warrior",
    images: shots("warrior-cut-2", "Warrior Cut", ["BackAngle", "FrontAngle"]),
  },
  {
    slug: "short-cut",
    name: "Potongan Pendek", // PLACEHOLDER: ask Cuplis for the model's name
    style: "short",
    images: shots("short-cut", "Potongan pendek", ["Side"]),
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

/** Cuplis at work (supplied 2026-11-15). Clients appear in some, so keep them only with their OK. */
export const workPhotos = {
  // Black and white, cutting a client's neckline. 854×1280.
  bw: {
    src: "/images/cuplis/cuplis-cutting-bw.jpg",
    alt: "Foto hitam putih Cuplis sedang merapikan tengkuk pelanggan",
  },
  // Colour, seen in a mirror while cutting. 854×1280.
  mirror: {
    src: "/images/cuplis/cuplis-cutting-mirror.jpg",
    alt: "Cuplis memotong rambut pelanggan, terlihat dari pantulan cermin",
  },
  // In the shop, white tee, clipper in hand. 907×1600.
  shop: {
    src: "/images/cuplis/cuplis-at-shop.jpg",
    alt: "Cuplis berjalan di barbershop sambil memegang clipper",
  },
};

export function getCut(slug: string) {
  return cuts.find((c) => c.slug === slug);
}
