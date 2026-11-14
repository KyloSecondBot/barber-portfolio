import { barber } from "@/content/site";

/** wa.me click-to-chat link, optionally with a pre-filled message. */
export function whatsappLink(message = `Halo, ${barber.firstName}! `) {
  return `https://wa.me/${barber.whatsapp}?text=${encodeURIComponent(message)}`;
}
