import Image from "next/image";
import { Marquee } from "@/components/Marquee";
import { cuts } from "@/content/site";

const words = ["Fade", "Taper", "Crop", "Beard", "Buzz", "Color", "Texture"];

/** Two moving strips on cream: cut thumbnails, then big style words (reverse). */
export function Strips() {
  return (
    <section className="overflow-hidden bg-cream py-10 text-ink sm:py-14" aria-label="Styles and recent cuts">
      <Marquee duration={60}>
        {cuts.map((cut) => (
          <figure key={cut.slug} className="mr-3 w-28 shrink-0 sm:mr-4 sm:w-40">
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-ink-2">
              <Image
                src={cut.images[0].src}
                alt={cut.images[0].alt}
                fill
                sizes="(max-width: 640px) 112px, 160px"
                className="film object-cover"
              />
            </div>
            <figcaption className="label mt-2 text-[0.65rem] text-muted-2">{cut.style}</figcaption>
          </figure>
        ))}
      </Marquee>

      <Marquee duration={45} reverse className="mt-8 sm:mt-12">
        {words.map((w) => (
          <span
            key={w}
            className="headline flex items-center whitespace-nowrap text-[clamp(2.5rem,8vw,5.5rem)]"
          >
            {w}
            <span aria-hidden="true" className="mx-5 text-[0.55em] text-brass sm:mx-8">
              ✦
            </span>
          </span>
        ))}
      </Marquee>
    </section>
  );
}
