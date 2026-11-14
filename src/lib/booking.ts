import { barber } from "@/content/site";

/** wa.me click-to-chat link with a pre-filled message. */
export function whatsappLink(message?: string) {
  const text =
    message ?? `Hi ${barber.firstName}, I'd like to book a cut. When are you free?`;
  return `https://wa.me/${barber.whatsapp}?text=${encodeURIComponent(text)}`;
}

/** Pre-fills the style name so the barber knows which cut the client wants. */
export function bookCutLink(cutName: string, url?: string) {
  const msg = `Hi ${barber.firstName}, I'd like to book this cut: ${cutName}${
    url ? ` (${url})` : ""
  }. When are you free?`;
  return whatsappLink(msg);
}

export function formatRupiah(n: number) {
  return "Rp " + n.toLocaleString("id-ID");
}
