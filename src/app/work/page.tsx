import type { Metadata } from "next";
import { Suspense } from "react";
import { Container, SectionLabel } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { BookCTA } from "@/components/BookCTA";
import { WorkGrid, WorkGridSkeleton } from "@/components/work/WorkGrid";
import { cuts } from "@/content/site";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Fades, tapers, crops, buzz cuts, long hair, beards and color. Every cut photographed from the front, side and back.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <section className="bg-ink text-cream">
        <Container className="pt-12 pb-8 sm:pt-20 sm:pb-12">
          <Reveal>
            <SectionLabel>Work · {cuts.length} cuts</SectionLabel>
            <h1 className="headline mt-4 max-w-4xl text-[clamp(2.75rem,9vw,7rem)]">
              Every cut, <em>on record.</em>
            </h1>
            <p className="mt-6 max-w-xl text-base text-cream/70 sm:text-lg">
              Front, side and back, shot in the same light. Pick a style, open a cut and book it in one tap.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-ink pb-20 text-cream sm:pb-28">
        <Suspense fallback={<WorkGridSkeleton />}>
          <WorkGrid />
        </Suspense>
      </section>

      <BookCTA />
    </>
  );
}
