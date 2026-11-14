import type { Metadata } from "next";
import { BookCTA } from "@/components/BookCTA";
import { Reveal } from "@/components/Reveal";
import { Container, SectionLabel } from "@/components/ui";
import { SectionTag } from "@/components/pages/SectionTag";
import { barber, serviceNotes, services, shop } from "@/content/site";
import { whatsappLink } from "@/lib/booking";

export const metadata: Metadata = {
  title: "Layanan",
  description: `Semua layanan ${barber.name} di ${shop.name} dan berapa lama pengerjaannya. Potong rambut, fade, dan rapihin jenggot. Tanya harga lewat WhatsApp.`,
  alternates: { canonical: "/services" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: `Layanan ${barber.name}`,
  itemListElement: services.map((s) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: s.name, description: s.description },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-ink text-cream">
        <Container className="py-16 sm:py-24">
          <SectionLabel n="00">Layanan</SectionLabel>
          <h1 className="headline mt-5 max-w-5xl text-[clamp(3rem,10vw,8rem)]">
            Mau dikerjain <em>apa hari ini?</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-cream/70">
            Ini yang bisa aku kerjain dan kira-kira berapa lama. Harga ikut daftar harga {shop.name}, jadi tanya aku
            di WhatsApp ya.
          </p>
        </Container>
      </section>

      <section className="bg-cream text-ink">
        <Container className="py-16 sm:py-24">
          <SectionTag n="01">Daftar layanan</SectionTag>
          <ul className="mt-8 border-t border-line-light">
            {services.map((s) => (
              <li key={s.name} className="border-b border-line-light py-7 sm:py-8">
                <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-10">
                  <div>
                    <h2 className="headline text-2xl sm:text-4xl">{s.name}</h2>
                    <p className="mt-3 max-w-xl text-muted-2">{s.description}</p>
                  </div>
                  <div className="flex items-center justify-between gap-6 sm:flex-col sm:items-end sm:justify-start sm:gap-3 sm:text-right">
                    <p className="label text-muted-2">± {s.duration} menit</p>
                    <a
                      href={whatsappLink(`Halo, Cuplis! Aku mau booking ${s.name}. Kapan ada jadwal kosong?`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-track="book"
                      className="label inline-flex min-h-11 items-center rounded-md border border-ink/40 px-4 text-ink transition-colors hover:border-ink hover:bg-ink/5"
                    >
                      Booking<span className="sr-only"> {s.name} lewat WhatsApp</span>
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
            <SectionLabel n="02">Perlu kamu tahu</SectionLabel>
            <h2 className="headline mt-5 max-w-3xl text-[clamp(2.25rem,6vw,4.5rem)]">
              Aturan mainnya, <em>singkat aja.</em>
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
