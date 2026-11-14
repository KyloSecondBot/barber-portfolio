"use client";

import { useEffect, useId, useState } from "react";
import { barber, hours, services } from "@/content/site";
import { cuts } from "@/content/cuts";
import { whatsappLink } from "@/lib/booking";

const dayNames: Record<string, string> = {
  Mon: "Monday",
  Tue: "Tuesday",
  Wed: "Wednesday",
  Thu: "Thursday",
  Fri: "Friday",
  Sat: "Saturday",
  Sun: "Sunday",
};

const openDays = hours.filter((h) => h.open !== "Closed");
const times = ["Morning", "Afternoon", "Evening"];

const field =
  "mt-2 block min-h-12 w-full rounded-md border border-ink/40 bg-card px-4 text-base text-ink placeholder:text-muted-2 focus:border-ink";

/**
 * Builds a pre-filled WhatsApp message in the browser. Nothing is stored or sent
 * anywhere except into the wa.me link the visitor chooses to open.
 */
export function BookingForm() {
  const id = useId();
  const [service, setService] = useState(services[0].name);
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [cut, setCut] = useState("");
  const [name, setName] = useState("");

  // Read ?cut=slug after mount so the page stays static (no useSearchParams).
  useEffect(() => {
    try {
      const slug = new URLSearchParams(window.location.search).get("cut");
      const match = slug ? cuts.find((c) => c.slug === slug) : undefined;
      if (match) setCut(match.name);
    } catch {
      /* ignore */
    }
  }, []);

  function buildMessage() {
    const who = name.trim();
    const parts = [`Hi ${barber.firstName}, ${who ? `this is ${who}. ` : ""}I'd like to book a ${service}.`];
    if (cut) parts.push(`The cut I like: ${cut}.`);
    if (day && time) parts.push(`I'm free on ${day} (${time.toLowerCase()}).`);
    else if (day) parts.push(`I'm free on ${day}.`);
    else if (time) parts.push(`I'm free in the ${time.toLowerCase()}.`);
    parts.push("Is that possible?");
    return parts.join(" ");
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    window.open(whatsappLink(buildMessage()), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <div className="sm:col-span-2">
        <label htmlFor={`${id}-service`} className="label text-muted-2">
          Service
        </label>
        <select id={`${id}-service`} className={field} value={service} onChange={(e) => setService(e.target.value)}>
          {services.map((s) => (
            <option key={s.name} value={s.name}>
              {s.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor={`${id}-day`} className="label text-muted-2">
          Preferred day
        </label>
        <select id={`${id}-day`} className={field} value={day} onChange={(e) => setDay(e.target.value)}>
          <option value="">Any day</option>
          {openDays.map((h) => (
            <option key={h.day} value={dayNames[h.day] ?? h.day}>
              {dayNames[h.day] ?? h.day} ({h.open})
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor={`${id}-time`} className="label text-muted-2">
          Preferred time
        </label>
        <select id={`${id}-time`} className={field} value={time} onChange={(e) => setTime(e.target.value)}>
          <option value="">Any time</option>
          {times.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor={`${id}-cut`} className="label text-muted-2">
          Cut style (optional)
        </label>
        <select id={`${id}-cut`} className={field} value={cut} onChange={(e) => setCut(e.target.value)}>
          <option value="">Not sure yet</option>
          {cuts.map((c) => (
            <option key={c.slug} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor={`${id}-name`} className="label text-muted-2">
          Your name (optional)
        </label>
        <input
          id={`${id}-name`}
          type="text"
          autoComplete="given-name"
          className={field}
          value={name}
          maxLength={60}
          placeholder="So I know who to reply to"
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="sm:col-span-2">
        <p className="label text-muted-2">Message preview</p>
        <p className="mt-2 rounded-md border border-line-light bg-cream p-4 text-base text-ink">
          {buildMessage()}
        </p>
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          data-track="book"
          className="headline inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md border border-ink bg-ink px-6 text-sm tracking-normal text-cream transition-colors hover:bg-ink-2 sm:w-auto"
        >
          Send on WhatsApp <span aria-hidden="true">↗</span>
        </button>
        <p className="mt-3 text-sm text-muted-2">
          Opens WhatsApp in a new tab. Nothing is stored or sent from this page.
        </p>
      </div>
    </form>
  );
}
