import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Button, Container, SectionLabel } from "@/components/ui";
import { SectionTag } from "@/components/pages/SectionTag";
import { barberPhotos } from "@/content/cuts";
import { barber, highlights, shop, story } from "@/content/site";

export const metadata: Metadata = {
  title: "Tentang",
  description: `Tentang ${barber.name}, barber ${barber.specialty.toLowerCase()} di ${barber.city}. Cerita dan cara kerjanya.`,
  alternates: { canonical: "/about" },
};

const principles = [
  {
    n: "01",
    title: "Ngobrol dulu",
    body: "Lima menit ngobrol sebelum clipper nyala. Arah tumbuh rambutmu, cara kamu styling, dan seberapa sering kamu potong.",
  },
  {
    n: "02",
    title: "Rapi sampai dua minggu",
    body: "Aku motong dengan mikirin tumbuhnya rambut, jadi fade-nya tetap rapi dua minggu kemudian.",
  },
  {
    n: "03",
    title: "Finishing bersih",
    body: "Garis tepi pakai pisau cukur, keramas yang bener, dan tips styling di rumah, biar besok pagi kamu bisa nata sendiri.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink text-cream">
        <Container className="grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <SectionLabel n="00">Tentang</SectionLabel>
            <h1 className="headline mt-5 text-[clamp(2.75rem,9vw,7rem)]">
              Halo, aku <em>{barber.firstName}.</em>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-cream/70">
              Barber di {shop.name}, {barber.city}. Aku paling sering ngerjain fade dan taper.
            </p>
            <p className="label mt-8 text-muted">
              {barber.specialty} · {barber.city}
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

      {/* Founder note */}
      <section className="border-t border-line-dark bg-ink text-cream">
        <Container className="py-20 sm:py-28">
          <Reveal>
            <SectionLabel n="01">Ceritaku</SectionLabel>
            <h2 className="headline mt-5 text-[clamp(2.25rem,6vw,4.5rem)]">
              Catatan dari <em>{barber.firstName}.</em>
            </h2>
            <div className="mt-10 max-w-2xl space-y-6 text-lg leading-relaxed text-cream/80">
              <p>{story.start}</p>
              <p>{story.training}</p>
              <p>{story.approach}</p>
            </div>
            <blockquote className="mt-14 max-w-4xl border-l-2 border-brass pl-6 sm:pl-8">
              <p className="font-serif text-[clamp(2rem,5.5vw,4rem)] italic leading-[1.05]">
                &ldquo;{story.quote}&rdquo;
              </p>
              <footer className="label mt-5 text-brass">{barber.name}</footer>
            </blockquote>
          </Reveal>
        </Container>
      </section>

      {/* Approach */}
      <section className="bg-cream text-ink">
        <Container className="py-20 sm:py-28">
          <Reveal>
            <SectionTag n="02">Cara kerjaku</SectionTag>
            <h2 className="headline mt-5 max-w-3xl text-[clamp(2.25rem,6vw,4.5rem)]">
              Yang selalu <em>aku lakuin.</em>
            </h2>
          </Reveal>
          <ul className="mt-12 grid gap-4 md:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal as="li" key={p.n} delay={i * 0.08} className="rounded-xl bg-card p-6 sm:p-8">
                <p className="label text-muted-2">{p.n}</p>
                <h3 className="headline mt-6 text-2xl sm:text-3xl">{p.title}</h3>
                <p className="mt-4 text-muted-2">{p.body}</p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Highlights */}
      <section className="bg-ink text-cream">
        <Container className="py-20 sm:py-28">
          <Reveal>
            <SectionLabel n="03">Pencapaian</SectionLabel>
            <h2 className="headline mt-5 max-w-3xl text-[clamp(2.25rem,6vw,4.5rem)]">
              Perjalanan <em>sejauh ini.</em>
            </h2>
          </Reveal>
          <ol className="mt-12 border-t border-line-dark">
            {highlights.map((h) => (
              <li key={h.year + h.title} className="grid gap-2 border-b border-line-dark py-7 sm:grid-cols-[8rem_1fr] sm:gap-8 sm:py-9">
                <p className="label text-brass">{h.year}</p>
                <div>
                  <h3 className="headline text-xl sm:text-3xl">{h.title}</h3>
                  <p className="mt-3 max-w-2xl text-cream/70">{h.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Two photos: off the clock + in the chair. Source files are 9:16, so crop to 4:5 to keep the corner watermark out of frame. */}
      <section className="bg-ink text-cream">
        <Container className="pb-20 sm:pb-28">
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-3 sm:gap-6">
            <figure>
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-ink-2">
                <Image
                  src={barberPhotos.street}
                  alt={barberPhotos.streetAlt}
                  fill
                  sizes="(min-width: 896px) 432px, 50vw"
                  className="film object-cover object-center"
                />
              </div>
              <figcaption className="label mt-3 text-muted">Di luar jam kerja</figcaption>
            </figure>
            <figure>
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-ink-2">
                <Image
                  src={barberPhotos.portrait}
                  alt={barberPhotos.portraitAlt}
                  fill
                  sizes="(min-width: 896px) 432px, 50vw"
                  className="film object-cover object-center"
                />
              </div>
              <figcaption className="label mt-3 text-muted">Di kursi · {shop.name}</figcaption>
            </figure>
          </div>
        </Container>
      </section>

      {/* Where I cut now */}
      <section className="bg-cream text-ink">
        <Container className="py-20 sm:py-28">
          <Reveal className="max-w-3xl">
            <SectionTag n="04">Lokasi</SectionTag>
            <h2 className="headline mt-5 text-[clamp(2.25rem,6vw,4.5rem)]">
              Tempat aku <em>motong sekarang.</em>
            </h2>
            <address className="mt-8 not-italic">
              <p className="text-lg text-muted-2">Sekarang aku motong di</p>
              <p className="headline mt-1 text-2xl sm:text-3xl">{shop.name}</p>
              <p className="mt-3 max-w-xl text-lg text-muted-2">{shop.directions}</p>
            </address>
            <div className="mt-8">
              <Button href={shop.instagram} external variant="outline-light" className="w-full sm:w-auto">
                Instagram Dibawah Pohon {shop.handle} ↗
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Quiet closing */}
      <section className="bg-ink text-cream">
        <Container className="py-16 sm:py-24">
          <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/work"
              className="headline inline-flex min-h-12 items-center text-[clamp(2rem,6vw,3.5rem)] transition-colors hover:text-brass"
            >
              Lihat <em>karyaku</em>&nbsp;&rarr;
            </Link>
            <Link href="/contact" className="label inline-flex min-h-12 items-center text-muted transition-colors hover:text-cream">
              Mau ngobrol? Kontak &rarr;
            </Link>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
