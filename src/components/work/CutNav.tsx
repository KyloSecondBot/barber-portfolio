import Image from "next/image";
import Link from "next/link";
import type { Cut } from "@/content/site";

function NavLink({ cut, dir, dark }: { cut: Cut; dir: "prev" | "next"; dark: boolean }) {
  const photo = cut.images[0];
  const isNext = dir === "next";
  return (
    <Link
      href={`/work/${cut.slug}`}
      aria-label={`${isNext ? "Next" : "Previous"} cut: ${cut.name}`}
      className={`group flex min-h-24 items-center gap-4 rounded-xl border p-3 transition-colors ${
        dark ? "border-line-dark hover:border-cream/40" : "border-line-light hover:border-ink/40"
      } ${
        isNext ? "flex-row-reverse text-right" : ""
      }`}
    >
      <span className="relative h-20 w-16 shrink-0 overflow-hidden rounded-md bg-ink-2">
        <Image src={photo.src} alt="" aria-hidden="true" fill sizes="64px" className="film object-cover transition-transform duration-500 group-hover:scale-105" />
      </span>
      <span className="min-w-0 flex-1">
        <span className={`label block ${dark ? "text-muted" : "text-muted-2"}`}>{isNext ? "Next cut →" : "← Previous cut"}</span>
        <span className="headline mt-1 block text-lg sm:text-xl">{cut.name}</span>
      </span>
    </Link>
  );
}

/** Previous / next cut, wrapping around. Light = for cream sections, dark = for ink sections. */
export function CutNav({ prev, next, tone = "light" }: { prev: Cut; next: Cut; tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  if (prev.slug === next.slug) {
    // Only two cuts in total: one link is enough.
    return (
      <nav aria-label="More cuts" className="grid gap-3">
        <NavLink cut={next} dir="next" dark={dark} />
      </nav>
    );
  }
  return (
    <nav aria-label="More cuts" className="grid gap-3 sm:grid-cols-2">
      <NavLink cut={prev} dir="prev" dark={dark} />
      <NavLink cut={next} dir="next" dark={dark} />
    </nav>
  );
}
