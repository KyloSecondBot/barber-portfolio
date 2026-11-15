import type { Metadata } from "next";
import Image from "next/image";
import { AboutClosing, AboutLocation, AboutStory } from "@/components/about/AboutSections";
import { Reveal } from "@/components/Reveal";
import { Container, SectionLabel } from "@/components/ui";
import { workPhotos } from "@/content/cuts";
import { barber, shop } from "@/content/site";

export const metadata: Metadata = {
  title: "Tentang",
  description: `${barber.name}, barber di ${shop.name}. Mulai motong sejak kelas 3 SMP, berawal dari iseng nyukurin teman-teman.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero: the black-and-white photo fills the screen on phones and the left half on desktop */}
      <section className="relative bg-ink text-cream lg:grid lg:min-h-[calc(100dvh-4rem)] lg:grid-cols-2">
        <div className="relative h-[80svh] lg:h-auto">
          <Image
            src={workPhotos.bw.src}
            alt={workPhotos.bw.alt}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-[50%_30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-ink/50" />
        </div>
        <div className="relative -mt-44 px-4 pb-16 sm:px-6 lg:mt-0 lg:flex lg:flex-col lg:justify-center lg:px-16 xl:px-24">
          <SectionLabel n="00">Tentang</SectionLabel>
          <h1 className="headline mt-5 text-[clamp(3rem,10vw,7rem)]">
            Halo, aku <em>{barber.firstName}.</em>
          </h1>
          <p className="mt-6 max-w-md text-lg text-cream/75">
            Barber di {shop.name}. Paling sering ngerjain fade dan taper.
          </p>
        </div>
      </section>

      <AboutStory />

      {/* At work: two more photos side by side */}
      <section className="bg-ink text-cream">
        <Container className="pb-20 sm:pb-28">
          <Reveal className="grid grid-cols-2 gap-3 sm:gap-6">
            {[workPhotos.mirror, workPhotos.shop].map((p) => (
              <div key={p.src} className="relative aspect-[4/5] overflow-hidden rounded-xl bg-ink-2">
                <Image src={p.src} alt={p.alt} fill sizes="(min-width: 1280px) 600px, 50vw" className="film object-cover object-center" />
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      <AboutLocation />
      <AboutClosing />
    </>
  );
}
