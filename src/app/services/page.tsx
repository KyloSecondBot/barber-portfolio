import type { Metadata } from "next";
import { BookCTA } from "@/components/BookCTA";
import { Reveal } from "@/components/Reveal";
import { Container, SectionLabel } from "@/components/ui";
import { SectionTag } from "@/components/pages/SectionTag";
import { barber, serviceNotes, services } from "@/content/site";
import { formatRupiah, whatsappLink } from "@/lib/booking";

export const metadata: Metadata = {
  title: "Services & prices",
  description: `Every service, how long it takes and what it costs, from ${formatRupiah(
    Math.min(...services.map((s) => s.price)),
  )}. Haircuts, fades and beard work in ${barber.city}.`,
  alternates: { canonical: "/services" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: `${barber.name} services`,
  itemListElement: services.map((s) => ({
    "@type": "Offer",
    priceCurrency: "IDR",
    price: s.price,
    itemOffered: { "@type": "Service", name: s.name, description: s.description },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-ink text-cream">
        <Container className="py-16 sm:py-24">
          <SectionLabel n="00">Services &amp; prices</SectionLabel>
          <h1 className="headline mt-5 max-w-5xl text-[clamp(3rem,10vw,8rem)]">
            Prices, <em>up front.</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-cream/70">
            What it costs and how long it takes, before you ask. All prices in Rupiah.
          </p>
        </Container>
      </section>

      <section className="bg-cream text-ink">
        <Container className="py-16 sm:py-24">
          <SectionTag n="01">The list</SectionTag>
          <ul className="mt-8 border-t border-line-light">
            {services.map((s) => (
              <li key={s.name} className="border-b border-line-light py-7 sm:py-8">
                <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-10">
                  <div>
                    <h2 className="headline text-2xl sm:text-4xl">{s.name}</h2>
                    <p className="mt-3 max-w-xl text-muted-2">{s.description}</p>
                  </div>
                  <div className="flex items-center justify-between gap-6 sm:flex-col sm:items-end sm:justify-start sm:gap-3 sm:text-right">
                    <div>
                      <p className="headline text-2xl sm:text-3xl">{formatRupiah(s.price)}</p>
                      <p className="label mt-1 text-muted-2">{s.duration} min</p>
                    </div>
                    <a
                      href={whatsappLink(`Hi ${barber.firstName}, I'd like to book a ${s.name}. When are you free?`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-track="book"
                      className="label inline-flex min-h-11 items-center rounded-md border border-ink/40 px-4 text-ink transition-colors hover:border-ink hover:bg-ink/5"
                    >
                      Book<span className="sr-only"> {s.name} on WhatsApp</span>
                      <span aria-hidden="true">&nbsp;↗</span>
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-ink text-cream">
        <Container className="py-16 sm:py-24">
          <Reveal>
            <SectionLabel n="02">Good to know</SectionLabel>
            <h2 className="headline mt-5 max-w-3xl text-[clamp(2.25rem,6vw,4.5rem)]">
              The small print, <em>made short.</em>
            </h2>
          </Reveal>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {serviceNotes.map((n, i) => (
              <Reveal as="li" key={n.title} delay={i * 0.06} className="rounded-xl border border-line-dark bg-ink-2 p-6 sm:p-8">
                <h3 className="headline text-xl sm:text-2xl">{n.title}</h3>
                <p className="mt-3 text-cream/70">{n.body}</p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <BookCTA />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
