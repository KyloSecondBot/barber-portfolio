import { Reveal } from "@/components/Reveal";
import { Container, SectionLabel } from "@/components/ui";
import { reviews } from "@/content/site";

export function Reviews() {
  return (
    <section className="overflow-hidden bg-ink text-cream">
      <Container className="py-16 sm:py-24">
        <Reveal>
          <SectionLabel n="04">Clients</SectionLabel>
          <h2 className="headline mt-4 max-w-3xl text-[clamp(2.5rem,7vw,5.5rem)]">
            Don&rsquo;t take <em>my word.</em>
          </h2>
        </Reveal>
        <Reveal className="mt-10">
          <div
            role="region"
            aria-label="Client reviews"
            tabIndex={0}
            className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-5 lg:overflow-visible lg:px-0 lg:pb-0"
          >
            {reviews.map((r) => (
              <figure
                key={r.name}
                className="flex w-[85%] shrink-0 snap-center flex-col justify-between rounded-xl border border-line-dark bg-ink-2 p-6 sm:w-[60%] lg:w-auto lg:shrink lg:p-8"
              >
                <blockquote>
                  <span aria-hidden="true" className="font-serif text-5xl leading-none text-brass">
                    “
                  </span>
                  <p className="mt-2 text-[1.05rem] leading-relaxed text-cream/85">{r.text}</p>
                </blockquote>
                <figcaption className="mt-8 border-t border-line-dark pt-4">
                  <p className="headline text-lg">{r.name}</p>
                  <p className="label mt-1 text-muted">{r.cut}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
