import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { SelectedWork } from "@/components/home/SelectedWork";
import { BioTeaser } from "@/components/home/BioTeaser";
import { Reveal } from "@/components/Reveal";
import { Container } from "@/components/ui";
import { barber, shop } from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: `${barber.name} — Portofolio Barber` },
  description: `Portofolio ${barber.name}, barber di ${shop.name}. Kumpulan potongan yang pernah dia kerjain, dari warrior cut sampai taper.`,
  alternates: { canonical: "/" },
};

const closingLinks = [
  { href: "/work", label: "Galeri" },
  { href: "/about", label: "Tentang" },
  { href: "/contact", label: "Kontak" },
];

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <BioTeaser />

      <section className="bg-ink text-cream">
        <Container className="py-20 text-center sm:py-28 lg:py-36">
          <Reveal>
            <h2 className="headline mx-auto max-w-4xl text-[clamp(2.75rem,9vw,7rem)]">
              Terima kasih <em>sudah mampir.</em>
            </h2>
            <nav aria-label="Jelajahi" className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-2">
              {closingLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="label inline-flex min-h-11 items-center text-cream/70 underline decoration-cream/30 underline-offset-4 transition-colors hover:text-cream"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
