import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { Button, Container, SectionLabel } from "@/components/ui";
import { BookingForm } from "@/components/pages/BookingForm";
import { SectionTag } from "@/components/pages/SectionTag";
import { HoursTable } from "@/components/pages/HoursTable";
import { barber, shop } from "@/content/site";
import { whatsappLink } from "@/lib/booking";

export const metadata: Metadata = {
  title: "Book & contact",
  description: `Book a cut with ${barber.name} at ${shop.name} on WhatsApp. Opening hours, directions and a contact for brands, shoots and education.`,
  alternates: { canonical: "/book" },
};

export default function BookPage() {
  return (
    <>
      {/* Hero + primary booking */}
      <section className="bg-ink text-cream">
        <Container className="py-16 sm:py-24">
          <SectionLabel n="00">Book</SectionLabel>
          <h1 className="headline mt-5 max-w-5xl text-[clamp(3rem,10vw,8rem)]">
            Grab <em>the chair.</em>
          </h1>
          <div className="mt-10 max-w-2xl rounded-xl border border-line-dark bg-ink-2 p-6 sm:p-8">
            <p className="label text-brass">Fastest way</p>
            <Button href={whatsappLink()} external track className="mt-5 w-full py-4 text-base sm:w-auto sm:px-10">
              Book on WhatsApp ↗
            </Button>
            <p className="mt-5 text-cream/70">
              Opens WhatsApp with a message ready to send. Add the day you want and a photo of the cut.
            </p>
          </div>
        </Container>
      </section>

      {/* Message builder */}
      <section className="bg-cream text-ink">
        <Container className="grid gap-10 py-16 sm:py-24 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <Reveal>
            <SectionTag n="01">Message builder</SectionTag>
            <h2 className="headline mt-5 text-[clamp(2.25rem,6vw,4.5rem)]">
              Say what you <em>want.</em>
            </h2>
            <p className="mt-6 max-w-md text-lg text-muted-2">
              Pick a service and a time, and we write the WhatsApp message for you. You can still edit it in
              WhatsApp before you send.
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
            <SectionTag n="02">Find the shop</SectionTag>
            <h2 className="headline mt-5 text-[clamp(2.25rem,6vw,4.5rem)]">
              Where I am <em>now.</em>
            </h2>
            <p className="headline mt-6 text-2xl">{shop.name}</p>
            <p className="mt-2 max-w-md text-lg text-muted-2">{shop.directions}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                href={whatsappLink(`Hi ${barber.firstName}, can you send me the location of ${shop.name}?`)}
                external
                variant="primary"
              >
                Ask for directions
              </Button>
              <Button href={shop.instagram} external variant="outline-light">
                Shop Instagram {shop.handle} ↗
              </Button>
            </div>
          </div>
          <div>
            <p className="label text-muted-2">Opening hours</p>
            <HoursTable tone="light" className="mt-4 max-w-md" />
          </div>
        </Container>
      </section>

      {/* Collab */}
      <section className="bg-ink text-cream">
        <Container className="py-16 sm:py-24">
          <SectionLabel n="03">Not a haircut?</SectionLabel>
          <h2 className="headline mt-5 max-w-4xl text-[clamp(2.25rem,6vw,4.5rem)]">
            Brands, shoots, <em>education.</em>
          </h2>
          <p className="mt-6 max-w-xl text-lg text-cream/70">
            For collaborations, shoots and teaching, send a DM on Instagram or a WhatsApp starting with
            &quot;Collab&quot;. Tell me what you have in mind and when.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              href={whatsappLink(`Hi ${barber.firstName}, collab request: `)}
              external
              variant="primary"
            >
              WhatsApp a collab request
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
