import { schedule } from "@/content/site";
import { whatsappLink } from "@/lib/booking";

/**
 * Stands in for opening hours: his schedule follows the shop, so we send people to WhatsApp.
 * tone="light" is for cream sections.
 */
export function ScheduleNote({ tone = "light", className = "" }: { tone?: "light" | "dark"; className?: string }) {
  const box = tone === "light" ? "border-line-light bg-card text-ink" : "border-line-dark bg-ink-2 text-cream";
  const muted = tone === "light" ? "text-muted-2" : "text-cream/70";
  return (
    <div className={`rounded-xl border p-6 sm:p-8 ${box} ${className}`}>
      <p className={`label ${muted}`}>Jadwal</p>
      <p className="headline mt-3 text-2xl sm:text-3xl">
        Chat dulu, <em>biar nggak nunggu.</em>
      </p>
      <p className={`mt-3 ${muted}`}>{schedule.note}</p>
      <a
        href={whatsappLink(schedule.askMessage)}
        target="_blank"
        rel="noopener noreferrer"
        data-track="book"
        className="headline mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-brass bg-brass px-6 text-sm tracking-normal text-ink transition-colors hover:bg-brass-hover"
      >
        Cek jadwal kosong ↗
      </a>
    </div>
  );
}
