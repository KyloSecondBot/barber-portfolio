"use client";

import Image from "next/image";
import { useId, useState } from "react";

/**
 * Before / after comparison. A native range input drives a clip-path, so it works
 * with keyboard (arrow keys), touch and screen readers.
 */
export function BeforeAfter({
  before,
  after,
  className = "",
}: {
  before: { src: string; alt: string };
  after: { src: string; alt: string };
  className?: string;
}) {
  const id = useId();
  const [value, setValue] = useState(50);

  return (
    <figure className={className}>
      <div className="group relative aspect-[4/5] w-full overflow-hidden bg-ink-2 lg:rounded-xl has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-3 has-[:focus-visible]:outline-brass">
        <Image
          src={after.src}
          alt={after.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="film object-cover"
        />
        <Image
          src={before.src}
          alt={before.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="film object-cover"
          style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
        />
        <span className="label pointer-events-none absolute top-3 left-3 rounded-md bg-black/55 px-2 py-1 text-[0.65rem] text-cream">
          Before
        </span>
        <span className="label pointer-events-none absolute top-3 right-3 rounded-md bg-black/55 px-2 py-1 text-[0.65rem] text-cream">
          After
        </span>
        <div
          className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-cream"
          style={{ left: `${value}%` }}
          aria-hidden="true"
        >
          <span className="absolute top-1/2 left-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-cream text-ink shadow-lg">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 5l-5 5 5 5M13 5l5 5-5 5" />
            </svg>
          </span>
        </div>
        <label htmlFor={id} className="sr-only">
          Compare before and after
        </label>
        <input
          id={id}
          type="range"
          min={0}
          max={100}
          step={1}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          aria-valuetext={`${value}% before, ${100 - value}% after`}
          className="absolute inset-0 h-full w-full cursor-ew-resize touch-pan-y opacity-0"
        />
      </div>
      <figcaption className="label mt-3 px-4 text-cream/60 lg:px-0">Drag to compare</figcaption>
    </figure>
  );
}
