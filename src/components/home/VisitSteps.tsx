import { Reveal } from "@/components/Reveal";
import { Container, SectionLabel } from "@/components/ui";
import { visitSteps } from "@/content/site";

export function VisitSteps() {
  return (
    <section className="bg-ink text-cream">
      <Container className="py-16 sm:py-24">
        <Reveal>
          <SectionLabel>Alur datang ke kursi</SectionLabel>
          <h2 className="headline mt-4 max-w-3xl text-[clamp(2.5rem,7vw,5.5rem)]">
            Tiga langkah, <em>tanpa ribet.</em>
          </h2>
        </Reveal>
        <ol className="mt-10 grid gap-4 md:grid-cols-3 md:gap-5">
          {visitSteps.map((s, i) => (
            <li key={s.n}>
              <Reveal delay={i * 0.1} className="h-full">
                <div className="flex h-full flex-col rounded-xl bg-card p-6 text-ink sm:p-8">
                  <div className="flex items-start justify-between gap-3">
                    <span className="font-mono text-5xl leading-none text-ink/80 sm:text-6xl">{s.n}</span>
                    <span className="chip text-muted-2">✓ {s.tag}</span>
                  </div>
                  <h3 className="headline mt-10 text-[clamp(1.5rem,3vw,2rem)]">{s.title}</h3>
                  <p className="mt-3 text-muted-2">{s.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
