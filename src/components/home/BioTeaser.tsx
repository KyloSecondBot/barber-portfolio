import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { Container, SectionLabel } from "@/components/ui";
import { barber, shop } from "@/content/site";
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
              alt={barberPhotos.portraitAlt}
              fill
              sizes="(max-width: 1024px) 90vw, 40vw"
              className="film object-cover object-center"
            />
          </div>
        </Reveal>
        <Reveal className="lg:col-span-7" delay={0.1}>
          <SectionLabel n="02" className="text-ink">
            Tentang
          </SectionLabel>
          <h2 className="headline mt-4 text-[clamp(2.5rem,6.5vw,5rem)]">
            Halo, aku <em>{barber.firstName}.</em>
          </h2>
          <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-muted-2">
            Barber di {shop.name}. Paling sering ngerjain fade dan taper.
          </p>
          <div className="mt-8">
            <ArrowLink href="/about">Profil {barber.firstName}</ArrowLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
