import type { Metadata } from "next";
import { Suspense } from "react";
import { Container, SectionLabel } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { WorkGrid, WorkGridSkeleton } from "@/components/work/WorkGrid";
import { cuts } from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: "Galeri Potongan — Cuplis" },
  description:
    "Galeri potongan Cuplis: fade, taper, crop, buzz cut, rambut panjang, jenggot, dan warna.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <section className="bg-ink text-cream">
        <Container className="pt-12 pb-8 sm:pt-20 sm:pb-12">
          <Reveal>
            <SectionLabel>Galeri · {cuts.length} potongan</SectionLabel>
            <h1 className="headline mt-4 max-w-4xl text-[clamp(2.75rem,9vw,7rem)]">
              Galeri <em>potongan.</em>
            </h1>
            <p className="mt-6 max-w-xl text-base text-cream/70 sm:text-lg">
              Semua hasil potonganku ada di sini. Buka salah satu buat lihat dari sisi lain.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-ink pb-20 text-cream sm:pb-28">
        <Suspense fallback={<WorkGridSkeleton />}>
          <WorkGrid />
        </Suspense>
      </section>
    </>
  );
}
