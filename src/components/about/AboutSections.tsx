import Link from "next/link";
import { PhotoSwap } from "@/components/PhotoSwap";
import { Reveal } from "@/components/Reveal";
import { Button, Container, SectionLabel } from "@/components/ui";
import { SectionTag } from "@/components/pages/SectionTag";
import { cuplisPhotos } from "@/content/cuts";
import { shop, story } from "@/content/site";

/** His story, with his two personal photos taking turns beside it. */
export function AboutStory({ n = "01" }: { n?: string }) {
  return (
    <section className="border-t border-line-dark bg-ink text-cream">
      <Container className="grid items-center gap-10 py-20 sm:py-28 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-7">
          <SectionLabel n={n}>Ceritaku</SectionLabel>
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
        <Reveal className="lg:col-span-5" delay={0.1}>
          <PhotoSwap
            photos={cuplisPhotos}
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="mx-auto w-full max-w-sm lg:max-w-none"
          />
        </Reveal>
      </Container>
    </section>
  );
}

export function AboutLocation({ n = "02" }: { n?: string }) {
  return (
    <section className="bg-cream text-ink">
      <Container className="py-20 sm:py-28">
        <Reveal className="max-w-3xl">
          <SectionTag n={n}>Lokasi</SectionTag>
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
  );
}

export function AboutClosing() {
  return (
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
  );
}
