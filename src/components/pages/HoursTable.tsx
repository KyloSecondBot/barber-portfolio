import { hours } from "@/content/site";

/** Opening hours as a definition list. tone="light" is for cream sections. */
export function HoursTable({ tone = "light", className = "" }: { tone?: "light" | "dark"; className?: string }) {
  const line = tone === "light" ? "border-line-light" : "border-line-dark";
  const dayCls = tone === "light" ? "text-muted-2" : "text-muted";
  return (
    <dl className={`border-t ${line} ${className}`}>
      {hours.map((h) => (
        <div key={h.day} className={`flex items-baseline justify-between gap-4 border-b ${line} py-3`}>
          <dt className={`label ${dayCls}`}>{h.label}</dt>
          <dd className={h.closed ? `${dayCls}` : "font-medium"}>{h.open}</dd>
        </div>
      ))}
    </dl>
  );
}
