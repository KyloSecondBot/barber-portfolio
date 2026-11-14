import type { Metadata } from "next";
import Image from "next/image";
import { BookCTA } from "@/components/BookCTA";
import { Reveal } from "@/components/Reveal";
import { Button, Container, SectionLabel } from "@/components/ui";
import { SectionTag } from "@/components/pages/SectionTag";
import { HoursTable } from "@/components/pages/HoursTable";
import { barberPhotos } from "@/content/cuts";
import { barber, highlights, shop, story } from "@/content/site";

export const metadata: Metadata = {
  title: "Tentang",
  description: `${barber.name} udah motong rambut di ${barber.city} selama ${barber.yearsCutting} tahun. Ceritanya, cara dia ngerjain fade dan taper, dan di mana kamu bisa ketemu dia sekarang.`,
  alternates: { canonical: "/about" },
};

const numberWords = ["nol", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan", "sepuluh", "sebelas", "dua belas"];
const rawYearsWord = numberWords[barber.yearsCutting] ?? String(barber.yearsCutting);
const yearsWord = rawYearsWord.charAt(0).toUpperCase() + rawYearsWord.slice(1);

const principles = [
  {
    n: "01",
    title: "Ngobrol dulu",
    body: "Lima menit ngobrol sebelum clipper nyala. Arah tumbuh rambutmu, cara kamu styling, dan seberapa sering kamu potong.",
  },
  {
    n: "02",
    title: "Potong buat hari keempat belas",
    body: "Fade yang bagus harus tetap rapi dua minggu kemudian, bukan cuma pas turun dari kursi. Aku motong dengan mikirin tumbuhnya.",
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
              {yearsWord} tahun, <em>satu kursi tiap kali.</em>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-cream/70">
              Aku {barber.firstName}. Aku motong fade dan taper di {barber.city}. Aku lebih suka ngerjain sedikit
              potongan sampai bener-bener rapi daripada banyak tapi buru-buru.
            </p>
            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-line-dark pt-6">
              {[
                ["Tahun motong", String(barber.yearsCutting)],
                ["Potongan", barber.cutsCount],
                ["Kota", barber.city],
              ].map(([k, v]) => (
                <div key={k}>
                  <dd className="headline text-2xl sm:text-4xl">{v}</dd>
                  <dt className="label mt-2 text-muted">{k}</dt>
                </div>
              ))}
            </dl>
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
              Tiga aturan, <em>tiap kursi.</em>
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
              Sepanjang <em>jalan.</em>
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

      {/* Where to find me now */}
      <section className="bg-cream text-ink">
        <Container className="grid gap-12 py-20 sm:py-28 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionTag n="04">Lokasi</SectionTag>
            <h2 className="headline mt-5 text-[clamp(2.25rem,6vw,4.5rem)]">
              Mereknya aku. <em>Barbershop-nya cuma tempatku.</em>
            </h2>
            <p className="mt-6 max-w-xl text-lg text-muted-2">
              Tempat bisa pindah, cara aku motong nggak. Sekarang kamu bisa ketemu aku di {shop.name}. Kalau suatu
              saat pindah, halaman ini dan WhatsApp-ku selalu yang paling baru.
            </p>
            <address className="mt-8 not-italic">
              <p className="headline text-2xl">{shop.name}</p>
              <p className="mt-2 text-lg text-muted-2">{shop.directions}</p>
            </address>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={shop.instagram} external variant="outline-light">
                Instagram Dibawah Pohon {shop.handle} ↗
              </Button>
              <Button href="/book" variant="primary">
                Booking jadwal
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="label text-muted-2">Jam buka</p>
            <HoursTable tone="light" className="mt-4" />
          </Reveal>
        </Container>
      </section>

      <BookCTA />
    </>
  );
}
