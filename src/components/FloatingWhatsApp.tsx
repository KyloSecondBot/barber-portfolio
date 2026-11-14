import { whatsappLink } from "@/lib/booking";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      data-track="book"
      aria-label="Book on WhatsApp"
      className="label fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 flex items-center gap-2 rounded-full bg-cream px-5 py-3.5 font-medium text-ink shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-transform hover:-translate-y-0.5 sm:right-6 sm:bottom-6"
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#25D366]" />
      </span>
      WhatsApp
    </a>
  );
}
