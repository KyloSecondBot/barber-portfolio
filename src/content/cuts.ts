import type { Cut } from "./site";

// PLACEHOLDER photos (Unsplash) until the barber's own cuts are shot.
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
  portrait: u("photo-1635273051937-a0ddef9573b6"),
  atWork: u("photo-1599351431202-1e0f0137899a"),
  shop1: u("photo-1773904215697-e6c21fc27ac2"),
};

const shots = (name: string, srcs: string[]) =>
  srcs.map((src, i) => ({
    src,
    angle: ["Front", "Side", "Back", "Detail", "Before"][i] ?? "Detail",
    alt: `${name}, ${["front", "side", "back", "detail", "before"][i] ?? "detail"} view`,
  }));

export const cuts: Cut[] = [
  {
    slug: "skin-fade-textured-top",
    name: "Skin Fade, Textured Top",
    style: "fade",
    favorite: true,
    images: shots("Skin fade with textured top", [IMG.fade1, IMG.fade2, IMG.taper1]),
    technique: "Bald foil shaver at the bottom, blended up through 0.5 to 2 guards. Point-cut texture on top so it moves when styled with matte paste.",
    tags: ["skin fade", "texture", "matte finish"],
  },
  {
    slug: "low-taper-side-part",
    name: "Low Taper, Side Part",
    style: "taper",
    favorite: true,
    images: shots("Low taper with side part", [IMG.taper1, IMG.taper2, IMG.fade2]),
    technique: "Taper kept low at the temples and nape only. Scissor-over-comb through the sides, hard part shaved in lightly with a trimmer.",
    tags: ["low taper", "side part", "classic"],
  },
  {
    slug: "french-crop-mid-fade",
    name: "French Crop, Mid Fade",
    style: "crop",
    images: shots("French crop with mid fade", [IMG.crop1, IMG.crop2, IMG.fade1]),
    technique: "Mid fade set at the parietal ridge, short blunt fringe cut straight across then broken up with point cutting.",
    tags: ["crop", "mid fade", "fringe"],
  },
  {
    slug: "buzz-cut-line-up",
    name: "Buzz Cut & Line-up",
    style: "buzz",
    images: shots("Buzz cut with sharp line-up", [IMG.buzz1, IMG.fade2, IMG.taper1]),
    technique: "Guard 2 all over, against the grain. Hairline squared at the front and the neckline tapered so it grows out clean.",
    tags: ["buzz", "line-up", "low maintenance"],
  },
  {
    slug: "beard-sculpt-taper",
    name: "Beard Sculpt + Taper",
    style: "beard",
    favorite: true,
    images: shots("Sculpted beard with taper fade", [IMG.beard1, IMG.beard2, IMG.taper2]),
    technique: "Beard tapered into the sideburns so there's no hard line between hair and beard. Cheek line set with a straight razor after a hot towel.",
    tags: ["beard", "razor", "hot towel"],
  },
  {
    slug: "textured-crop-drop-fade",
    name: "Textured Crop, Drop Fade",
    style: "crop",
    images: shots("Textured crop with drop fade", [IMG.crop2, IMG.crop1, IMG.fade1]),
    technique: "Fade drops behind the ear to follow the head shape. Heavy texture on top with a slight forward fringe.",
    tags: ["drop fade", "crop", "texture"],
  },
  {
    slug: "burst-fade-curls",
    name: "Burst Fade, Curls",
    style: "fade",
    images: shots("Burst fade with curly top", [IMG.fade2, IMG.fade1, IMG.crop1]),
    technique: "Fade bursts around the ear, back left longer. Curls cut dry, one by one, so they sit where they naturally fall.",
    tags: ["burst fade", "curly hair", "dry cut"],
  },
  {
    slug: "platinum-buzz",
    name: "Platinum Buzz",
    style: "color",
    favorite: true,
    images: shots("Bleached platinum buzz cut", [IMG.color1, IMG.color2, IMG.buzz1]),
    technique: "Two-stage lift to pale yellow, toned to platinum. Buzzed after the color so the tone stays even.",
    tags: ["bleach", "platinum", "buzz"],
  },
  {
    slug: "long-layers-flow",
    name: "Long Layers, Flow",
    style: "long",
    images: shots("Long layered men's hair", [IMG.long1, IMG.taper2, IMG.crop2]),
    technique: "Length kept to the collar, internal layers to take weight out. Sides tucked behind the ears without a visible line.",
    tags: ["long hair", "layers", "scissor cut"],
  },
  {
    slug: "high-taper-pompadour",
    name: "High Taper, Pompadour",
    style: "taper",
    images: shots("High taper with pompadour", [IMG.taper2, IMG.taper1, IMG.beard2]),
    technique: "High taper for contrast, top left long enough to blow-dry back. Finished with pomade for shine.",
    tags: ["high taper", "pompadour", "shine"],
  },
  {
    slug: "full-beard-shape",
    name: "Full Beard Shape",
    style: "beard",
    images: shots("Full beard shaped and lined", [IMG.beard2, IMG.beard1, IMG.fade1]),
    technique: "Length kept, bulk taken out from the cheeks so the jaw shows. Moustache trimmed above the lip line.",
    tags: ["full beard", "shape", "moustache"],
  },
  {
    slug: "mid-fade-quiff",
    name: "Mid Fade, Quiff",
    style: "fade",
    images: shots("Mid fade with quiff", [IMG.fade1, IMG.taper2, IMG.crop1]),
    technique: "Mid fade blended into scissor work on top, front left longest for a quiff with lift.",
    tags: ["mid fade", "quiff", "volume"],
  },
];

export const barberPhotos = {
  portrait: IMG.portrait, // PLACEHOLDER — his portrait
  atWork: IMG.atWork, // PLACEHOLDER — him cutting
  shop: IMG.shop1, // PLACEHOLDER — the current shop
};

export function getCut(slug: string) {
  return cuts.find((c) => c.slug === slug);
}
