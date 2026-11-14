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
  description: `Book a cut with ${barber.name} on WhatsApp. Shop address, opening hours and a separate contact for brands, shoots and education.`,
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

      {/* Map */}
      <section className="border-t border-line-light bg-cream text-ink">
        <Container className="grid gap-10 py-16 sm:py-24 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionTag n="02">Find the shop</SectionTag>
            <h2 className="headline mt-5 text-[clamp(2.25rem,6vw,4.5rem)]">
              Where I am <em>now.</em>
            </h2>
            <address className="mt-6 not-italic">
              <p className="headline text-2xl">{shop.name}</p>
              <p className="mt-2 text-lg text-muted-2">
                {shop.street}
                <br />
                {shop.area} {shop.postalCode}
              </p>
            </address>
            <HoursTable tone="light" className="mt-8 max-w-md" />
            <div className="mt-8">
              <Button href={shop.mapsUrl} external variant="outline-light">
                Open in Google Maps ↗
              </Button>
            </div>
          </div>
          <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-ink/5 lg:aspect-auto lg:min-h-[28rem]">
            <iframe
              src={shop.mapEmbed}
              title={`Map showing ${shop.name}, ${shop.street}, ${shop.area}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="h-full w-full border-0"
            />
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
            For collaborations, shoots and teaching, email works better than WhatsApp. Tell me what you have in
            mind and when.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={`mailto:${barber.email}?subject=${encodeURIComponent("Collab request")}`}
              className="headline inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-brass bg-brass px-6 text-sm tracking-normal text-ink transition-colors hover:bg-brass-hover"
            >
              Email {barber.email}
            </a>
            <Button href={barber.instagram} external variant="outline-dark">
              Instagram {barber.handle} ↗
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
