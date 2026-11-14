"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { angleLabels } from "@/content/cuts";

type Photo = { src: string; alt: string; angle: string };

/**
 * Mobile swipe gallery: scroll-snap slides, "1 / 3" counter, angle label and tappable dots.
 * Shown below lg only; desktop renders a vertical stack instead.
 */
export function CutGallery({ photos, className = "" }: { photos: Photo[]; className?: string }) {
  const track = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState(0);

  const onScroll = useCallback(() => {
    const el = track.current;
    if (!el || el.clientWidth === 0) return;
    setIndex(Math.min(photos.length - 1, Math.max(0, Math.round(el.scrollLeft / el.clientWidth))));
  }, [photos.length]);

  function goTo(i: number) {
    const el = track.current;
    if (!el) return;
    setIndex(i); // update dots and counter right away; the scroll catches up
    el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
  }

  return (
    <div className={className} role="region" aria-roledescription="carousel" aria-label="Foto potongan">
      <div className="relative">
        <ul
          ref={track}
          onScroll={onScroll}
          className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain"
          tabIndex={0}
          aria-label="Geser buat lihat sudut lain"
        >
          {photos.map((p, i) => (
            <li
              key={p.src + i}
              className="relative aspect-[4/5] w-full shrink-0 snap-center bg-ink-2"
              aria-roledescription="slide"
              aria-label={`${i + 1} dari ${photos.length}: ${angleLabels[p.angle] ?? p.angle}`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="100vw"
                priority={i === 0}
                className="film object-cover"
              />
            </li>
          ))}
        </ul>
        <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between p-3">
          <span className="label rounded-md bg-black/55 px-2 py-1 text-[0.65rem] text-cream backdrop-blur-sm">
            {photos[index] ? (angleLabels[photos[index].angle] ?? photos[index].angle) : null}
          </span>
          <span className="label rounded-md bg-black/55 px-2 py-1 text-[0.65rem] text-cream backdrop-blur-sm" aria-hidden="true">
            {index + 1} / {photos.length}
          </span>
        </div>
      </div>

      {photos.length > 1 && (
        <div className="flex justify-center">
          {photos.map((p, i) => (
            <button
              key={p.src + i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Tampilkan foto ${angleLabels[p.angle] ?? p.angle}`}
              aria-current={i === index}
              className="grid h-11 w-11 place-items-center"
            >
              <span
                className={`block h-2 rounded-full transition-all ${
                  i === index ? "w-6 bg-brass" : "w-2 bg-cream/30"
                }`}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
