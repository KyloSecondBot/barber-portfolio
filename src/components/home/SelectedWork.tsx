import { CutCard } from "@/components/CutCard";
import { Reveal } from "@/components/Reveal";
import { Container, SectionLabel } from "@/components/ui";
import { cuts } from "@/content/site";
import { ArrowLink } from "./ArrowLink";

// Client favorites first, then the rest, nine in total (deterministic).
const picks = [...cuts.filter((c) => c.favorite), ...cuts.filter((c) => !c.favorite)].slice(0, 9);

export function SelectedWork() {
  return (
    <section className="bg-ink text-cream">
      <Container className="py-16 sm:py-24 lg:py-32">
        <Reveal>
          <SectionLabel n="01">Karya pilihan</SectionLabel>
          <div className="mt-4 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="headline max-w-4xl text-[clamp(2.75rem,8vw,6.5rem)]">
              Hasil dari <em>kursiku.</em>
            </h2>
            <p className="max-w-xs text-cream/70">
              Ketuk salah satu foto buat lihat detail dan tekniknya.
            </p>
          </div>
        </Reveal>
        <Reveal className="mt-10 sm:mt-14">
          {/* Editorial grid: the first piece runs large, the rest follow. */}
          <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
            {picks.map((cut, i) => (
              <li
                key={cut.slug}
                className={
                  i === 0 ? "col-span-2 lg:row-span-2 lg:[&>a]:aspect-auto lg:[&>a]:h-full" : undefined
                }
              >
                <CutCard
                  cut={cut}
                  priority={i === 0}
                  sizes={
                    i === 0
                      ? "(max-width: 1024px) 100vw, 50vw"
                      : "(max-width: 1024px) 50vw, 25vw"
                  }
                />
              </li>
            ))}
          </ul>
          <div className="mt-10 flex justify-center sm:mt-14">
            <ArrowLink href="/work" className="text-[0.9rem]">
              Lihat semua karya
            </ArrowLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
