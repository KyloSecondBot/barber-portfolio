import { CutCard } from "@/components/CutCard";
import { Reveal } from "@/components/Reveal";
import { Container, SectionLabel } from "@/components/ui";
import { cuts } from "@/content/site";
import { ArrowLink } from "./ArrowLink";

// Client favorites first, then the rest, six in total (deterministic).
const picks = [...cuts.filter((c) => c.favorite), ...cuts.filter((c) => !c.favorite)].slice(0, 6);

export function SelectedWork() {
  return (
    <section className="bg-ink text-cream">
      <Container className="py-16 sm:py-24">
        <Reveal>
          <SectionLabel n="01">Potongan pilihan</SectionLabel>
          <div className="mt-4 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="headline max-w-3xl text-[clamp(2.5rem,7vw,5.5rem)]">
              Hasil nyata, <em>bukan katalog.</em>
            </h2>
            <p className="max-w-xs text-cream/70">
              Semua foto ini kepala asli dari kursiku. Tap salah satu buat lihat dari semua sisi.
            </p>
          </div>
        </Reveal>
        <Reveal className="mt-10">
          <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 lg:gap-5">
            {picks.map((cut) => (
              <li key={cut.slug}>
                <CutCard cut={cut} sizes="(max-width: 1024px) 50vw, 33vw" />
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <ArrowLink href="/work">Lihat semua galeri</ArrowLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
