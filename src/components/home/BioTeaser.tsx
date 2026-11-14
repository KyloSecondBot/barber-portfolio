import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { Container, SectionLabel } from "@/components/ui";
import { barber, story } from "@/content/site";
import { barberPhotos } from "@/content/cuts";
import { ArrowLink } from "./ArrowLink";

export function BioTeaser() {
  return (
    <section className="bg-cream text-ink">
      <Container className="grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-xl bg-ink-2 lg:max-w-none">
            <Image
              src={barberPhotos.portrait}
              alt={`Portrait of ${barber.name}, barber in ${barber.city}`}
              fill
              sizes="(max-width: 1024px) 90vw, 40vw"
              className="film object-cover"
            />
          </div>
        </Reveal>
        <Reveal className="lg:col-span-7" delay={0.1}>
          <SectionLabel n="02" className="text-ink">
            About
          </SectionLabel>
          <h2 className="headline mt-4 text-[clamp(2.5rem,6.5vw,5rem)]">
            Garage clippers, <em>real craft.</em>
          </h2>
          <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-muted-2">{story.start}</p>
          <p className="mt-4 max-w-xl text-[1.05rem] leading-relaxed text-muted-2">{story.approach}</p>
          <blockquote className="mt-8 border-l-2 border-brass pl-5 font-serif text-[clamp(1.75rem,4vw,2.75rem)] italic leading-tight">
            “{story.quote}”
          </blockquote>
          <div className="mt-8">
            <ArrowLink href="/about">More about {barber.firstName}</ArrowLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
