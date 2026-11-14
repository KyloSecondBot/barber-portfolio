"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { barber } from "@/content/site";

const nav = [
  { href: "/work", label: "Galeri" },
  { href: "/about", label: "Tentang" },
  { href: "/contact", label: "Kontak" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    // Close on Escape, and when the window grows past the mobile breakpoint
    // (the menu is hidden there, so the page would stay scroll-locked).
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const wide = window.matchMedia("(min-width: 768px)");
    const onWide = () => wide.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    wide.addEventListener("change", onWide);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      wide.removeEventListener("change", onWide);
    };
  }, [open]);

  return (
    <>
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-ink/90 backdrop-blur-md border-b border-line-dark"
          : "bg-ink border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="headline text-lg tracking-tight sm:text-xl" aria-label={`Beranda ${barber.name}`}>
          {barber.firstName}
          <span className="text-brass">.</span>
          <span className="label ml-2 align-middle text-[0.6rem] text-muted">barber</span>
        </Link>

        <nav aria-label="Navigasi utama" className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              aria-current={pathname.startsWith(n.href) ? "page" : undefined}
              className={`text-sm transition-colors hover:text-cream ${
                pathname.startsWith(n.href) ? "text-cream" : "text-cream/65"
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={barber.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="label hidden min-h-11 items-center rounded-md border border-line-dark px-4 text-cream/80 transition-colors hover:border-cream/50 hover:text-cream sm:inline-flex"
          >
            {barber.handle} ↗
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            className="grid h-11 w-11 place-items-center rounded-md border border-line-dark md:hidden"
          >
            <span className="relative block h-3 w-5">
              <span className={`absolute left-0 h-0.5 w-5 bg-cream transition-transform ${open ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 h-0.5 w-5 bg-cream transition-transform ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>
      </div>
    </header>

      {/* Outside <header>: its backdrop-blur would trap a fixed child inside the 64px bar. */}
      {open && (
        <div id="mobile-menu" className="fixed inset-x-0 top-16 bottom-0 z-40 bg-ink px-4 pt-6 md:hidden">
          <nav aria-label="Navigasi seluler" className="flex flex-col">
            {nav.map((n, i) => (
              <Link
                key={n.href}
                href={n.href}
                className="flex items-baseline gap-4 border-b border-line-dark py-5"
              >
                <span className="label text-muted">0{i + 1}</span>
                <span className="headline text-4xl">{n.label}</span>
              </Link>
            ))}
          </nav>
          <a
            href={barber.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="label mt-8 inline-block text-muted"
          >
            Instagram {barber.handle} ↗
          </a>
        </div>
      )}
    </>
  );
}
