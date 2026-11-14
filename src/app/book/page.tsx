import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { Button, Container, SectionLabel } from "@/components/ui";
import { BookingForm } from "@/components/pages/BookingForm";
import { SectionTag } from "@/components/pages/SectionTag";
import { ScheduleNote } from "@/components/pages/ScheduleNote";
import { barber, shop } from "@/content/site";
import { whatsappLink } from "@/lib/booking";

export const metadata: Metadata = {
  title: "Booking & Kontak",
  description: `Booking potong rambut sama ${barber.name} di ${shop.name} lewat WhatsApp. Cek jadwal kosong, petunjuk arah, dan kontak buat brand, pemotretan, dan kelas.`,
  alternates: { canonical: "/book" },
};

export default function BookPage() {
  return (
    <>
      {/* Hero + primary booking */}
      <section className="bg-ink text-cream">
        <Container className="py-16 sm:py-24">
          <SectionLabel n="00">Booking</SectionLabel>
          <h1 className="headline mt-5 max-w-5xl text-[clamp(3rem,10vw,8rem)]">
            Booking <em>kursinya.</em>
          </h1>
          <div className="mt-10 max-w-2xl rounded-xl border border-line-dark bg-ink-2 p-6 sm:p-8">
            <p className="label text-brass">Cara paling cepat</p>
            <Button href={whatsappLink()} external track className="mt-5 w-full py-4 text-base sm:w-auto sm:px-10">
              Booking via WhatsApp ↗
            </Button>
            <p className="mt-5 text-cream/70">
              WhatsApp kebuka dengan pesan yang udah siap kirim. Tambahin hari yang kamu mau dan foto referensi
              potongannya.
            </p>
          </div>
        </Container>
      </section>

      {/* Message builder */}
      <section className="bg-cream text-ink">
        <Container className="grid gap-10 py-16 sm:py-24 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <Reveal>
            <SectionTag n="01">Bikin pesan</SectionTag>
            <h2 className="headline mt-5 text-[clamp(2.25rem,6vw,4.5rem)]">
              Bilang aja <em>maunya.</em>
            </h2>
            <p className="mt-6 max-w-md text-lg text-muted-2">
              Pilih layanan dan jam, nanti pesan WhatsApp-nya otomatis ketulis. Sebelum dikirim, kamu masih bisa
              ngubah isinya di WhatsApp.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-xl bg-card p-5 sm:p-8">
              <BookingForm />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Where to find me (no public map listing, so Instagram + WhatsApp directions) */}
      <section className="border-t border-line-light bg-cream text-ink">
        <Container className="grid gap-10 py-16 sm:py-24 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionTag n="02">Lokasi</SectionTag>
            <h2 className="headline mt-5 text-[clamp(2.25rem,6vw,4.5rem)]">
              Aku ada <em>di sini.</em>
            </h2>
            <p className="headline mt-6 text-2xl">{shop.name}</p>
            <p className="mt-2 max-w-md text-lg text-muted-2">{shop.directions}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                href={whatsappLink(`Halo, Cuplis! Boleh minta pin lokasi ${shop.name}?`)}
                external
                variant="primary"
              >
                Minta petunjuk arah
              </Button>
              <Button href={shop.instagram} external variant="outline-light">
                Instagram Dibawah Pohon {shop.handle} ↗
              </Button>
            </div>
          </div>
          <ScheduleNote tone="light" className="self-start" />
        </Container>
      </section>

      {/* Collab */}
      <section className="bg-ink text-cream">
        <Container className="py-16 sm:py-24">
          <SectionLabel n="03">Bukan mau potong?</SectionLabel>
          <h2 className="headline mt-5 max-w-4xl text-[clamp(2.25rem,6vw,4.5rem)]">
            Brand, pemotretan, <em>kelas.</em>
          </h2>
          <p className="mt-6 max-w-xl text-lg text-cream/70">
            Buat kolaborasi, pemotretan, atau ngajar, DM aku di Instagram atau chat WhatsApp yang diawali
            &quot;Kolaborasi&quot;. Ceritain idemu dan kapan waktunya.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              href={whatsappLink("Halo, Cuplis! Aku mau ngajak kolaborasi: ")}
              external
              variant="primary"
            >
              Ajak kolaborasi via WhatsApp
            </Button>
            <Button href={barber.instagram} external variant="outline-dark">
              Instagram {barber.handle} ↗
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
