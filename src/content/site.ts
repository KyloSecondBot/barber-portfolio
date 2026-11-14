// All site content lives here until Sanity is added (see PRD "Simpler start").
// Everything marked PLACEHOLDER must be replaced with the barber's real details.

export const barber = {
  name: "Cuplis",
  fullName: "Yusuf Alansyah",
  firstName: "Cuplis",
  handle: "@cuplisalbern",
  instagram: "https://www.instagram.com/cuplisalbern/",
  whatsapp: "62895405518530", // international format, no "+"
  city: "Jakarta", // PLACEHOLDER — confirm his city
  yearsCutting: 8, // PLACEHOLDER
  cutsCount: "2,000+", // PLACEHOLDER
  specialty: "Fades & tapers",
  siteUrl: "https://cuplis.barber", // PLACEHOLDER — real domain
  tagline: "Sharp fades. Clean tapers. Cut by hand.",
};

// "Where to find me now" — the shop is a location, not the brand.
// No public map listing, so we point to the shop's Instagram and WhatsApp for directions.
export const shop = {
  name: "Dibawah Pohon Barber",
  handle: "@dibawahpohon_",
  instagram: "https://www.instagram.com/dibawahpohon_/",
  directions: "Message me on WhatsApp for the exact location and directions.",
};

export const hours = [
  { day: "Mon", open: "Closed" },
  { day: "Tue", open: "10:00 – 20:00" },
  { day: "Wed", open: "10:00 – 20:00" },
  { day: "Thu", open: "10:00 – 20:00" },
  { day: "Fri", open: "10:00 – 21:00" },
  { day: "Sat", open: "09:00 – 21:00" },
  { day: "Sun", open: "09:00 – 18:00" },
];

export type Service = {
  name: string;
  price: number; // in Rupiah
  duration: number; // minutes
  description: string;
};

export const services: Service[] = [
  { name: "Signature Cut", price: 150000, duration: 45, description: "Consult, cut, wash and style. Fade, taper or scissor work." },
  { name: "Skin Fade", price: 175000, duration: 60, description: "Bald-to-length fade with a razor finish and detailed line-up." },
  { name: "Cut + Beard", price: 225000, duration: 75, description: "Signature Cut plus beard shape, hot towel and razor edges." },
  { name: "Beard Sculpt", price: 100000, duration: 30, description: "Shape, line-up and hot towel. Beard oil to finish." },
  { name: "Buzz & Line-up", price: 90000, duration: 25, description: "One guard all over, sharp edges and a clean neckline." },
  { name: "Kids Cut (under 12)", price: 100000, duration: 30, description: "Patient, quick, no tears. Same detail as the grown-ups." },
  { name: "Color / Bleach", price: 350000, duration: 120, description: "Full bleach, platinum or a bold color. Consult first." },
];

export const serviceNotes = [
  { title: "Walk-ins", body: "Welcome when the chair is free, but booked clients come first. Message first to check." },
  { title: "Running late", body: "Over 15 minutes late and we may need to shorten the cut or move you to the next free slot." },
  { title: "Payment", body: "Cash, QRIS, debit and all major e-wallets (GoPay, OVO, DANA)." },
  { title: "Cancelling", body: "Please give at least 3 hours' notice on WhatsApp so someone else can take the slot." },
];

export type Review = { name: string; text: string; cut: string };

// PLACEHOLDER — replace with real reviews he is allowed to quote.
export const reviews: Review[] = [
  { name: "Dimas R.", cut: "Skin fade", text: "Best fade I've had in Jakarta. He actually listens to what you want and the line-up lasts for weeks." },
  { name: "Kevin T.", cut: "Textured crop", text: "Showed him a photo, walked out with exactly that. Booking again before I even left the chair." },
  { name: "Arya P.", cut: "Cut + beard", text: "Calm, fast, no small talk unless you want it. The beard work is next level." },
  { name: "Bayu S.", cut: "Low taper", text: "Been going to him for three years and followed him to the new shop. That says enough." },
  { name: "Reza M.", cut: "Buzz & line-up", text: "Even a simple buzz feels detailed. Clean edges, sharp neckline, fair price." },
];

export const visitSteps = [
  { n: "01", tag: "Book", title: "Message on WhatsApp", body: "Pick a time, send a photo of the cut you want. You get a reply the same day." },
  { n: "02", tag: "Consult", title: "Five minutes of talk", body: "Your hair type, how you style it, how often you cut. Then we agree on the plan." },
  { n: "03", tag: "Cut & finish", title: "Done properly", body: "Cut, wash, style and a tip on keeping it sharp at home. Next booking if you want it." },
];

export const highlights = [
  { year: "2024", title: "Finalist, Jakarta Barber Battle", body: "Top 8 in the fade category." }, // PLACEHOLDER
  { year: "2023", title: "Guest educator, Barber Academy ID", body: "Taught a fade fundamentals class." }, // PLACEHOLDER
  { year: "2022", title: "Grooming partner, local streetwear brand", body: "Cuts for two lookbook shoots." }, // PLACEHOLDER
  { year: "2018", title: "Started cutting", body: "Trained in Bandung, first chair in South Jakarta." }, // PLACEHOLDER
];

export const story = {
  // PLACEHOLDER — write up from his voice note.
  start:
    "I started cutting my friends' hair in my parents' garage in Bandung with a pair of clippers I bought second-hand. Most of those cuts were bad. Some of them were good enough that people came back.",
  training:
    "In 2018 I did a full course at a barber academy in Bandung, then spent two years as a junior in a busy shop in South Jakarta, doing thirty cuts a day and learning from barbers who had been at it for twenty years.",
  approach:
    "I don't do a cut I can't explain. Before the clippers come out, we talk about how your hair grows, how you style it in the morning and how long you go between cuts. A good fade should still look right on day fourteen, not just when you leave the chair.",
  quote: "A good cut should still look right on day fourteen.",
};

export const styles = ["fade", "taper", "crop", "buzz", "long", "beard", "color"] as const;
export type Style = (typeof styles)[number];

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
