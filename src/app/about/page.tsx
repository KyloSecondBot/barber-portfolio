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
  title: "About",
  description: `${barber.name} has been cutting hair in ${barber.city} for ${barber.yearsCutting} years. His story, his approach to fades and tapers, and where to find him now.`,
  alternates: { canonical: "/about" },
};

const numberWords = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"];
const yearsWord = numberWords[barber.yearsCutting] ?? String(barber.yearsCutting);

const principles = [
  {
    n: "01",
    title: "Consult first",
    body: "Five minutes of talk before the clippers come out. How your hair grows, how you style it, how often you cut.",
  },
  {
    n: "02",
    title: "Cut for day fourteen",
    body: "A fade should still look right two weeks later, not only when you leave the chair. I cut for the grow-out.",
  },
  {
    n: "03",
    title: "Clean finish",
    body: "Razor edges, a proper wash and a quick lesson on styling it at home, so you can repeat it tomorrow morning.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink text-cream">
        <Container className="grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <SectionLabel n="00">About</SectionLabel>
            <h1 className="headline mt-5 text-[clamp(2.75rem,9vw,7rem)]">
              {yearsWord} years, <em>one chair at a time.</em>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-cream/70">
              I&apos;m {barber.firstName}. I cut fades and tapers in {barber.city}, and I would rather do a few cuts
              properly than many quickly.
            </p>
            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-line-dark pt-6">
              {[
                ["Years cutting", String(barber.yearsCutting)],
                ["Cuts", barber.cutsCount],
                ["City", barber.city],
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
                alt={`Portrait of ${barber.name}, barber in ${barber.city}`}
                fill
                priority
                sizes="(min-width: 1024px) 560px, 100vw"
                className="film object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Founder note */}
      <section className="border-t border-line-dark bg-ink text-cream">
        <Container className="py-20 sm:py-28">
          <Reveal>
            <SectionLabel n="01">My story</SectionLabel>
            <h2 className="headline mt-5 text-[clamp(2.25rem,6vw,4.5rem)]">
              A note from <em>{barber.firstName}.</em>
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
            <SectionTag n="02">How I work</SectionTag>
            <h2 className="headline mt-5 max-w-3xl text-[clamp(2.25rem,6vw,4.5rem)]">
              Three rules, <em>every chair.</em>
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
            <SectionLabel n="03">Highlights</SectionLabel>
            <h2 className="headline mt-5 max-w-3xl text-[clamp(2.25rem,6vw,4.5rem)]">
              Along <em>the way.</em>
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

      {/* At work */}
      <section className="bg-ink text-cream">
        <figure>
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink-2 sm:aspect-[16/9] lg:aspect-[21/9]">
            <Image
              src={barberPhotos.atWork}
              alt={`${barber.firstName} working on a fade at the chair`}
              fill
              sizes="100vw"
              className="film object-cover"
            />
          </div>
          <Container>
            <figcaption className="label py-4 text-muted">
              {barber.firstName}, mid-fade · {shop.area}
            </figcaption>
          </Container>
        </figure>
      </section>

      {/* Where to find me now */}
      <section className="bg-cream text-ink">
        <Container className="grid gap-12 py-20 sm:py-28 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionTag n="04">Where to find me now</SectionTag>
            <h2 className="headline mt-5 text-[clamp(2.25rem,6vw,4.5rem)]">
              The brand is me. <em>The shop is where I am.</em>
            </h2>
            <p className="mt-6 max-w-xl text-lg text-muted-2">
              Shops change, the way I cut doesn&apos;t. Right now you&apos;ll find me at {shop.name}. If that ever
              moves, this page and my WhatsApp will always have the latest.
            </p>
            <address className="mt-8 not-italic">
              <p className="headline text-2xl">{shop.name}</p>
              <p className="mt-2 text-lg text-muted-2">
                {shop.street}
                <br />
                {shop.area} {shop.postalCode}
              </p>
            </address>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={shop.mapsUrl} external variant="outline-light">
                Open in Google Maps ↗
              </Button>
              <Button href="/book" variant="primary">
                Book a time
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="label text-muted-2">Opening hours</p>
            <HoursTable tone="light" className="mt-4" />
          </Reveal>
        </Container>
      </section>

      <BookCTA />
    </>
  );
}
