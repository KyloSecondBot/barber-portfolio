"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { motion } from "motion/react";
import { CutCard } from "@/components/CutCard";
import { Container } from "@/components/ui";
import { cuts, styleLabels, styles, type Style } from "@/content/site";

const PAGE_SIZE = 8;

function parseStyle(value: string | null): Style | null {
  return (styles as readonly string[]).includes(value ?? "") ? (value as Style) : null;
}

const counts = Object.fromEntries(
  styles.map((s) => [s, cuts.filter((c) => c.style === s).length]),
) as Record<Style, number>;

export function WorkGrid() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const active = parseStyle(searchParams.get("style"));
  const activeKey: string = active ?? "all";

  // The visible count belongs to one filter; a different filter starts over at PAGE_SIZE.
  const [loaded, setLoaded] = useState({ key: activeKey, count: PAGE_SIZE });
  const count = loaded.key === activeKey ? loaded.count : PAGE_SIZE;

  const filtered = active ? cuts.filter((c) => c.style === active) : cuts;
  const visible = filtered.slice(0, count);
  const hasMore = count < filtered.length;

  const loadMore = useCallback(() => {
    setLoaded((prev) => ({
      key: activeKey,
      count: (prev.key === activeKey ? prev.count : PAGE_SIZE) + PAGE_SIZE,
    }));
  }, [activeKey]);

  const sentinel = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = sentinel.current;
    if (!el || !hasMore) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) loadMore();
      },
      { rootMargin: "400px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [hasMore, loadMore, count]);

  function select(style: Style | null) {
    const params = new URLSearchParams(searchParams.toString());
    if (style) params.set("style", style);
    else params.delete("style");
    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  }

  const options: { value: Style | null; label: string; n: number }[] = [
    { value: null, label: "Semua", n: cuts.length },
    ...styles.map((s) => ({ value: s, label: styleLabels[s], n: counts[s] })),
  ];

  const outlineBtn =
    "headline inline-flex min-h-12 items-center justify-center rounded-md border border-cream/40 px-6 text-sm tracking-normal transition-colors hover:border-cream hover:bg-cream/5";

  return (
    <>
      <div className="sticky top-16 z-30 border-y border-line-dark bg-ink/90 backdrop-blur-md">
        <Container>
          <div
            role="group"
            aria-label="Filter berdasarkan gaya"
            className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 py-2 sm:mx-0 sm:px-0"
          >
            {options.map((o) => {
              const pressed = o.value === active;
              return (
                <button
                  key={o.label}
                  type="button"
                  aria-pressed={pressed}
                  onClick={() => select(o.value)}
                  className={`chip inline-flex min-h-11 shrink-0 items-center gap-2 transition-colors ${
                    pressed ? "bg-cream text-ink" : "text-cream/70 hover:text-cream"
                  }`}
                >
                  {o.label}
                  <span className={pressed ? "text-ink/60" : "text-cream/40"}>{o.n}</span>
                </button>
              );
            })}
          </div>
        </Container>
      </div>

      <Container className="pt-6 sm:pt-8">
        <p className="label mb-4 text-cream/60" role="status" aria-live="polite">
          Tampil {visible.length} dari {filtered.length} potongan
        </p>

        {filtered.length === 0 ? (
          <div className="rounded-xl border border-line-dark px-6 py-16 text-center">
            <p className="headline text-3xl">
              Belum ada <em>nih.</em>
            </p>
            <p className="mx-auto mt-4 max-w-sm text-cream/70">
              Belum ada potongan {active ? `gaya ${styleLabels[active]}` : "di sini"}. Coba gaya lain atau lihat semuanya.
            </p>
            <button type="button" onClick={() => select(null)} className={`${outlineBtn} mt-6`}>
              Tampilkan semua
            </button>
          </div>
        ) : (
          <ul key={activeKey} className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4">
            {visible.map((cut, i) => (
              <motion.li
                key={cut.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: (i % PAGE_SIZE) * 0.04, ease: [0.22, 1, 0.36, 1] }}
              >
                <CutCard cut={cut} priority={i < 2} />
              </motion.li>
            ))}
          </ul>
        )}

        {hasMore && (
          <div ref={sentinel} className="flex justify-center pt-10">
            <button type="button" onClick={loadMore} className={outlineBtn}>
              Lihat lebih banyak
            </button>
          </div>
        )}
      </Container>
    </>
  );
}

export function WorkGridSkeleton() {
  return (
    <div aria-hidden="true">
      <div className="sticky top-16 z-30 border-y border-line-dark bg-ink/90">
        <Container>
          <div className="no-scrollbar flex gap-2 overflow-hidden py-2">
            {Array.from({ length: 6 }, (_, i) => (
              <div key={i} className="h-11 w-20 shrink-0 animate-pulse rounded-full bg-cream/10" />
            ))}
          </div>
        </Container>
      </div>
      <Container className="pt-14 sm:pt-16">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }, (_, i) => (
            <div key={i} className="aspect-[4/5] animate-pulse rounded-xl bg-ink-2" />
          ))}
        </div>
      </Container>
    </div>
  );
}
