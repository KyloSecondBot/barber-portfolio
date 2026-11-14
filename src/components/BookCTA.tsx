import { Button, Container } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { whatsappLink } from "@/lib/booking";
import { shop } from "@/content/site";

/** Closing booking section, reused at the bottom of most pages. Cream background. */
export function BookCTA({
  title = (
    <>
      Your next cut <em>starts here.</em>
    </>
  ),
}: {
  title?: React.ReactNode;
}) {
  return (
    <section className="bg-cream text-ink">
      <Container className="py-20 sm:py-28">
        <Reveal>
          <p className="label text-muted-2">Book · {shop.name}</p>
          <h2 className="headline mt-4 max-w-4xl text-[clamp(2.75rem,8vw,6.5rem)]">{title}</h2>
          <p className="mt-6 max-w-xl text-lg text-muted-2">
            Send a message on WhatsApp with the day you want and a photo of the cut. Reply the same day.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={whatsappLink()} external track>
              Book on WhatsApp
            </Button>
            <Button href="/services" variant="outline-light">
              See prices
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
