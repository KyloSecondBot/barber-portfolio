import { hours } from "@/content/site";

const fullDay: Record<string, string> = {
  Mon: "Monday",
  Tue: "Tuesday",
  Wed: "Wednesday",
  Thu: "Thursday",
  Fri: "Friday",
  Sat: "Saturday",
  Sun: "Sunday",
};

/** Opening hours as a definition list. tone="light" is for cream sections. */
export function HoursTable({ tone = "light", className = "" }: { tone?: "light" | "dark"; className?: string }) {
  const line = tone === "light" ? "border-line-light" : "border-line-dark";
  const dayCls = tone === "light" ? "text-muted-2" : "text-muted";
  return (
    <dl className={`border-t ${line} ${className}`}>
      {hours.map((h) => (
        <div key={h.day} className={`flex items-baseline justify-between gap-4 border-b ${line} py-3`}>
          <dt className={`label ${dayCls}`}>
            <span className="sr-only">{fullDay[h.day] ?? h.day}</span>
            <span aria-hidden="true">{h.day}</span>
          </dt>
          <dd className={h.open === "Closed" ? `${dayCls}` : "font-medium"}>{h.open}</dd>
        </div>
      ))}
    </dl>
  );
}
