import { PhotoSwap } from "@/components/PhotoSwap";
import { Reveal } from "@/components/Reveal";
import { Container, SectionLabel } from "@/components/ui";
import { barber, shop } from "@/content/site";
import { cuplisPhotos } from "@/content/cuts";
import { ArrowLink } from "./ArrowLink";

export function BioTeaser() {
  return (
    <section className="bg-cream text-ink">
      <Container className="grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <PhotoSwap
            photos={cuplisPhotos}
            sizes="(max-width: 1024px) 90vw, 40vw"
            className="mx-auto w-full max-w-sm lg:max-w-none"
          />
        </Reveal>
        <Reveal className="lg:col-span-7" delay={0.1}>
          <SectionLabel n="02" className="text-ink">
            Tentang
          </SectionLabel>
          <h2 className="headline mt-4 text-[clamp(2.5rem,6.5vw,5rem)]">
            Halo, aku <em>{barber.firstName}.</em>
          </h2>
          <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-muted-2">
            Mulai motong dari kelas 3 SMP, awalnya iseng nyukurin teman-teman. Sekarang aku barber di {shop.name}.
          </p>
          <div className="mt-8">
            <ArrowLink href="/about">Baca ceritaku</ArrowLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
