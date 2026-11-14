import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { Container, SectionLabel } from "@/components/ui";
import { SectionTag } from "@/components/pages/SectionTag";
import { whatsappLink } from "@/lib/booking";
import { barber, shop } from "@/content/site";

export const metadata: Metadata = {
  title: "Kontak",
  description: `Hubungi ${barber.name} lewat Instagram atau WhatsApp.`,
  alternates: { canonical: "/contact" },
};

const channels = [
  {
    label: "Instagram",
    value: barber.handle,
    href: barber.instagram,
    primary: true,
  },
  {
    label: "WhatsApp",
    value: "Kirim pesan",
    href: whatsappLink("Halo, Cuplis! "),
  },
  {
    label: `Instagram Dibawah Pohon`,
    value: shop.handle,
    href: shop.instagram,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink text-cream">
        <Container className="py-14 sm:py-20">
          <SectionLabel n="00">Kontak</SectionLabel>
          <h1 className="headline mt-5 text-[clamp(2.75rem,10vw,8rem)]">
            Mau <em>ngobrol?</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-cream/70">
            Buat kolaborasi, pemotretan, atau nanya soal potongan, hubungi aku lewat Instagram atau WhatsApp.
          </p>

          <ul className="mt-12 border-t border-line-dark">
            {channels.map((c) => (
              <li key={c.label} className="border-b border-line-dark">
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-16 items-center justify-between gap-4 py-6 transition-colors hover:text-brass sm:py-8"
                >
                  <span className="min-w-0">
                    <span className="label block text-muted">{c.label}</span>
                    <span
                      className={`headline mt-2 block break-words ${
                        c.primary ? "text-[clamp(1.75rem,6vw,3.5rem)]" : "text-[clamp(1.5rem,4.5vw,2.5rem)]"
                      }`}
                    >
                      {c.value}
                    </span>
                  </span>
                  <span aria-hidden className="headline shrink-0 text-2xl transition-transform group-hover:translate-x-1">
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Location + collaboration */}
      <section className="bg-cream text-ink">
        <Container className="grid gap-12 py-16 sm:py-24 md:grid-cols-2 md:gap-16">
          <Reveal>
            <SectionTag n="01">Lokasi</SectionTag>
            <address className="mt-5 not-italic">
              <p className="headline text-2xl sm:text-3xl">{shop.name}</p>
              <p className="mt-3 max-w-md text-lg text-muted-2">{shop.directions}</p>
            </address>
          </Reveal>
          <Reveal delay={0.08}>
            <SectionTag n="02">Kolaborasi</SectionTag>
            <p className="mt-5 max-w-md text-lg text-muted-2">
              Terbuka buat kerja bareng brand dan pemotretan. Ceritain singkat idenya waktu kamu hubungi aku.
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
