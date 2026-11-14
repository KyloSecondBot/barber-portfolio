import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Button, Container, SectionLabel } from "@/components/ui";
import { SectionTag } from "@/components/pages/SectionTag";
import { barberPhotos } from "@/content/cuts";
import { barber, shop } from "@/content/site";

export const metadata: Metadata = {
  title: "Tentang",
  description: `${barber.name}, barber di ${shop.name}. Paling sering ngerjain fade dan taper.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      {/* Intro */}
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
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-ink-2">
              <Image
                src={barberPhotos.portrait}
                alt={barberPhotos.portraitAlt}
                fill
                priority
                sizes="(min-width: 1024px) 560px, 100vw"
                className="film object-cover object-center"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Second photo. Source files are 9:16, so crop to 4:5 to keep the corner watermark out of frame. */}
      <section className="bg-ink text-cream">
        <Container className="pb-20 sm:pb-28">
          <figure className="mx-auto max-w-md">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-ink-2">
              <Image
                src={barberPhotos.street}
                alt={barberPhotos.streetAlt}
                fill
                sizes="(min-width: 448px) 448px, 100vw"
                className="film object-cover object-center"
              />
            </div>
            <figcaption className="label mt-3 text-muted">Di luar jam kerja</figcaption>
          </figure>
        </Container>
      </section>

      {/* Where he cuts now */}
      <section className="bg-cream text-ink">
        <Container className="py-20 sm:py-28">
          <Reveal className="max-w-3xl">
            <SectionTag n="01">Lokasi</SectionTag>
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
