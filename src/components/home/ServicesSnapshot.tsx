import { Reveal } from "@/components/Reveal";
import { Container, SectionLabel } from "@/components/ui";
import { services } from "@/content/site";
import { formatRupiah } from "@/lib/booking";
import { ArrowLink } from "./ArrowLink";

export function ServicesSnapshot() {
  return (
    <section className="bg-cream text-ink">
      <Container className="py-16 sm:py-24">
        <Reveal>
          <SectionLabel n="03" className="text-ink">
            Layanan
          </SectionLabel>
          <h2 className="headline mt-4 max-w-3xl text-[clamp(2.5rem,7vw,5.5rem)]">
            Harga jelas, <em>dari awal.</em>
          </h2>
        </Reveal>
        <Reveal className="mt-10">
          <ul className="border-b border-line-light">
            {services.slice(0, 4).map((s) => (
              <li
                key={s.name}
                className="flex items-baseline justify-between gap-4 border-t border-line-light py-5 sm:py-6"
              >
                <div className="min-w-0">
                  <p className="headline text-[clamp(1.25rem,3vw,2rem)]">{s.name}</p>
                  <p className="label mt-2 text-muted-2">{s.duration} menit</p>
                </div>
                <p className="shrink-0 font-mono text-[clamp(1rem,2.4vw,1.5rem)]">{formatRupiah(s.price)}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <ArrowLink href="/services">Semua layanan &amp; harga</ArrowLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
