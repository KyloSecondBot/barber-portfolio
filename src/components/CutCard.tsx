"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Cut } from "@/content/site";

/**
 * Vertical cut card: style tag, optional "Client favorite" badge.
 * Desktop hover or phone tap-and-hold shows the second angle.
 */
export function CutCard({
  cut,
  priority = false,
  sizes = "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw",
}: {
  cut: Cut;
  priority?: boolean;
  sizes?: string;
}) {
  const [alt, setAlt] = useState(false);
  const [first, second] = cut.images;

  return (
    <Link
      href={`/work/${cut.slug}`}
      className="group relative block aspect-[4/5] overflow-hidden rounded-xl bg-ink-2"
      onMouseEnter={() => setAlt(true)}
      onMouseLeave={() => setAlt(false)}
      onTouchStart={() => setAlt(true)}
      onTouchEnd={() => setAlt(false)}
      onFocus={() => setAlt(true)}
      onBlur={() => setAlt(false)}
    >
      <Image
        src={first.src}
        alt={first.alt}
        fill
        sizes={sizes}
        priority={priority}
        className="film object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      />
      {second && (
        <Image
          src={second.src}
          alt=""
          aria-hidden="true"
          fill
          sizes={sizes}
          className={`film object-cover transition-opacity duration-500 ${alt ? "opacity-100" : "opacity-0"}`}
        />
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/0 to-black/25" />
      <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-2 p-3">
        <span className="label rounded-md bg-black/55 px-2 py-1 text-[0.6rem] text-cream backdrop-blur-sm">
          {cut.style}
        </span>
        {cut.favorite && (
          <span className="label rounded-md bg-cream px-2 py-1 text-[0.6rem] text-ink">
            Client favorite
          </span>
        )}
      </div>
      <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
        <p className="headline text-base text-cream sm:text-xl">{cut.name}</p>
      </div>
    </Link>
  );
}
