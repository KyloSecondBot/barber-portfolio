import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BookCTA } from "@/components/BookCTA";
import { CutCard } from "@/components/CutCard";
import { Button, Container, SectionLabel } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { BeforeAfter } from "@/components/work/BeforeAfter";
import { CutGallery } from "@/components/work/CutGallery";
import { CutNav } from "@/components/work/CutNav";
import { bookCutLink } from "@/lib/booking";
import { barber, cuts } from "@/content/site";

// Every cut page is prerendered from generateStaticParams, so a blocking route is fine.
export const instant = false;

export function generateStaticParams() {
  return cuts.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cut = cuts.find((c) => c.slug === slug);
  if (!cut) notFound();
  const first = cut.images[0];
  return {
    title: cut.name,
    description: cut.technique,
    alternates: { canonical: `/work/${cut.slug}` },
    openGraph: {
      title: cut.name,
      description: cut.technique,
      url: `/work/${cut.slug}`,
      images: first ? [{ url: first.src, alt: first.alt }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: cut.name,
      description: cut.technique,
      images: first ? [first.src] : undefined,
    },
  };
}

export default async function CutPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = cuts.findIndex((c) => c.slug === slug);
  if (index === -1) notFound();

  const cut = cuts[index];
  const prev = cuts[(index - 1 + cuts.length) % cuts.length];
  const next = cuts[(index + 1) % cuts.length];
  const more = cuts.filter((c) => c.style === cut.style && c.slug !== cut.slug).slice(0, 3);

  // An image tagged "Before" feeds the slider; the rest are regular angles.
  const beforeShot = cut.images.find((i) => i.angle === "Before");
  const photos = cut.images.filter((i) => i.angle !== "Before");
  const afterShot = photos[0];

  return (
    <>
      <section className="bg-ink text-cream">
        <Container className="pb-16 lg:pt-10 lg:pb-24">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-12 xl:gap-16">
            {/* Mobile: full-bleed swipe gallery, photos first */}
            <div className="-mx-4 sm:-mx-6 lg:hidden">
              {beforeShot && afterShot && (
                <BeforeAfter before={beforeShot} after={afterShot} className="mb-3" />
              )}
              <CutGallery photos={photos} />
            </div>

            {/* Desktop: vertical stack */}
            <div className="hidden flex-col gap-4 lg:flex">
              {beforeShot && afterShot && <BeforeAfter before={beforeShot} after={afterShot} />}
              {photos.map((p, i) => (
                <figure key={p.src + i} className="relative aspect-[4/5] overflow-hidden rounded-xl bg-ink-2">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 1280px) 600px, 50vw"
                    priority={i === 0}
                    className="film object-cover"
                  />
                  <figcaption className="label absolute top-3 left-3 rounded-md bg-black/55 px-2 py-1 text-[0.65rem] text-cream backdrop-blur-sm">
                    {p.angle}
                  </figcaption>
                </figure>
              ))}
            </div>

            {/* Info panel */}
            <div className="pt-4 lg:sticky lg:top-24 lg:pt-0">
              <Link
                href="/work"
                className="label -ml-1 inline-flex min-h-11 items-center px-1 text-cream/70 transition-colors hover:text-cream"
              >
                ← All work
              </Link>

              <Reveal className="mt-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="chip text-cream">{cut.style}</span>
                  {cut.favorite && (
                    <span className="label rounded-md bg-brass px-2.5 py-1.5 text-[0.65rem] text-ink">
                      Client favorite
                    </span>
                  )}
                </div>

                <h1 className="headline mt-5 text-[clamp(2.5rem,7vw,4.5rem)]">{cut.name}</h1>

                <div className="mt-8 border-t border-line-dark pt-6">
                  <SectionLabel>Technique</SectionLabel>
                  <p className="mt-3 max-w-prose text-base leading-relaxed text-cream/80 sm:text-lg">
                    {cut.technique}
                  </p>
                </div>

                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tags">
                  {cut.tags.map((t) => (
                    <li key={t} className="chip text-cream/70">
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="mt-10">
                  <Button
                    href={bookCutLink(cut.name, `${barber.siteUrl}/work/${cut.slug}`)}
                    external
                    track
                    className="min-h-14 w-full text-base sm:w-auto sm:px-10"
                  >
                    Book this cut
                  </Button>
                  <p className="mt-3 text-sm text-muted">Opens WhatsApp with this style pre-filled.</p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className={more.length > 0 ? "bg-cream text-ink" : "bg-ink text-cream"}>
        <Container className="py-12 sm:py-16">
          <CutNav prev={prev} next={next} tone={more.length > 0 ? "light" : "dark"} />
        </Container>
      </section>

      {more.length > 0 && (
        <section className="bg-ink text-cream">
          <Container className="py-16 sm:py-24">
            <Reveal>
              <SectionLabel>Same style</SectionLabel>
              <h2 className="headline mt-4 text-[clamp(2rem,6vw,4rem)]">
                More <em>{cut.style}</em> cuts
              </h2>
            </Reveal>
            <ul className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
              {more.map((c) => (
                <li key={c.slug}>
                  <CutCard cut={c} sizes="(max-width: 768px) 50vw, 33vw" />
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      <BookCTA />
    </>
  );
}
