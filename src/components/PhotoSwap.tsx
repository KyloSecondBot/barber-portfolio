"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Photo = { src: string; alt: string };

/**
 * Photos stacked in one 4:5 frame that crossfade every few seconds.
 * Tapping a dot shows that photo and stops the rotation (the pause control for auto-changing content).
 * With reduced motion turned on, it stays on the first photo.
 */
export function PhotoSwap({
  photos,
  sizes,
  priority = false,
  interval = 4000,
  className = "",
}: {
  photos: Photo[];
  sizes: string;
  priority?: boolean;
  interval?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto || photos.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % photos.length), interval);
    return () => window.clearInterval(id);
  }, [auto, photos.length, interval]);

  return (
    <div className={`relative aspect-[4/5] overflow-hidden rounded-xl bg-ink-2 ${className}`}>
      {photos.map((p, i) => (
        <Image
          key={p.src}
          src={p.src}
          alt={i === index ? p.alt : ""}
          aria-hidden={i !== index}
          fill
          sizes={sizes}
          priority={priority && i === 0}
          // Above the fold, fetch the next photos now so the first swap never fades to an empty frame.
          loading={priority && i > 0 ? "eager" : undefined}
          className={`film object-cover object-center transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {photos.length > 1 && (
        <div className="absolute inset-x-0 bottom-3 flex justify-center">
          <div className="flex rounded-full bg-black/45 px-1 backdrop-blur-sm">
            {photos.map((p, i) => (
              <button
                key={p.src}
                type="button"
                onClick={() => {
                  setAuto(false);
                  setIndex(i);
                }}
                aria-label={`Tampilkan foto ${i + 1} dari ${photos.length}`}
                aria-current={i === index}
                className="grid h-11 w-9 place-items-center"
              >
                <span
                  className={`block h-2 rounded-full transition-all ${i === index ? "w-6 bg-brass" : "w-2 bg-cream/60"}`}
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
