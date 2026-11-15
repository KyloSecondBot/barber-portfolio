import type { Metadata } from "next";
import Link from "next/link";
import { PhotoSwap } from "@/components/PhotoSwap";
import { Reveal } from "@/components/Reveal";
import { Button, Container, SectionLabel } from "@/components/ui";
import { SectionTag } from "@/components/pages/SectionTag";
import { cuplisPhotos } from "@/content/cuts";
import { barber, shop, story } from "@/content/site";

export const metadata: Metadata = {
  title: "Tentang",
  description: `${barber.name}, barber di ${shop.name}. Mulai motong sejak kelas 3 SMP, berawal dari iseng nyukurin teman-teman.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      {/* Intro: his two photos take turns in one frame */}
      <section className="bg-ink text-cream">
        <Container className="grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <SectionLabel n="00">Tentang</SectionLabel>
            <h1 className="headline mt-5 text-[clamp(2.75rem,9vw,7rem)]">
              Halo, aku <em>{barber.firstName}.</em>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-cream/70">
              Barber di {shop.name}. Paling sering ngerjain fade dan taper.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <PhotoSwap photos={cuplisPhotos} priority sizes="(min-width: 1024px) 560px, 100vw" />
          </div>
        </Container>
      </section>

      {/* His story, in his own words */}
      <section className="border-t border-line-dark bg-ink text-cream">
        <Container className="py-20 sm:py-28">
          <Reveal>
            <SectionLabel n="01">Ceritaku</SectionLabel>
            <h2 className="headline mt-5 text-[clamp(2.25rem,6vw,4.5rem)]">
              Berawal dari <em>iseng.</em>
            </h2>
            <p className="label mt-6 text-brass">{story.since}</p>
            <div className="mt-6 max-w-2xl space-y-5 text-lg leading-relaxed text-cream/80">
              {story.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Where he cuts now */}
      <section className="bg-cream text-ink">
        <Container className="py-20 sm:py-28">
          <Reveal className="max-w-3xl">
            <SectionTag n="02">Lokasi</SectionTag>
            <address className="mt-5 not-italic">
              <p className="headline text-[clamp(2.25rem,6vw,4.5rem)]">{shop.name}</p>
              <p className="mt-4 max-w-xl text-lg text-muted-2">{shop.directions}</p>
            </address>
            <div className="mt-8">
              <Button href={shop.instagram} external variant="outline-light" className="w-full sm:w-auto">
                Instagram Dibawah Pohon {shop.handle} ↗
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Closing */}
      <section className="bg-ink text-cream">
        <Container className="py-16 sm:py-24">
          <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/work"
              className="headline inline-flex min-h-12 items-center text-[clamp(2rem,6vw,3.5rem)] transition-colors hover:text-brass"
            >
              Lihat <em>galeri</em>&nbsp;&rarr;
            </Link>
            <Link href="/contact" className="label inline-flex min-h-12 items-center text-muted transition-colors hover:text-cream">
              Kontak &rarr;
            </Link>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
