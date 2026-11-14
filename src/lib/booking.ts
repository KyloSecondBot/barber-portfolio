import { barber } from "@/content/site";

/** wa.me click-to-chat link with a pre-filled message. */
export function whatsappLink(message?: string) {
  const text =
    message ?? `Halo, ${barber.firstName}! Aku mau booking potong rambut. Kapan ada jadwal kosong?`;
  return `https://wa.me/${barber.whatsapp}?text=${encodeURIComponent(text)}`;
}

/** Pre-fills the style name so the barber knows which cut the client wants. */
export function bookCutLink(cutName: string, url?: string) {
  const msg = `Halo, ${barber.firstName}! Aku mau booking model ini: ${cutName}${
    url ? ` (${url})` : ""
  }. Kapan ada jadwal kosong?`;
  return whatsappLink(msg);
}

export function formatRupiah(n: number) {
  return "Rp " + n.toLocaleString("id-ID");
}
