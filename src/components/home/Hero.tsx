import Image from "next/image";
import { Button, Container } from "@/components/ui";
import { barber, cuts, shop, styleLabels } from "@/content/site";

const heroChips = ["Fade", "Taper", "Crop", "Buzz", "Jenggot"];

const cards = [
  // left
  {
    cut: cuts[1],
    wrap: "left-0 bottom-0 z-10 w-[34vw] max-w-[200px] lg:max-w-[240px]",
    tilt: "-6deg",
    delay: "-1.5s",
    priority: false,
    sizes: "(max-width: 1024px) 34vw, 240px",
  },
  // middle
  {
    cut: cuts[0],
    wrap: "left-1/2 top-0 z-20 w-[44vw] max-w-[300px] -translate-x-1/2",
    tilt: "0deg",
    delay: "0s",
    priority: true,
    sizes: "(max-width: 1024px) 44vw, 300px",
  },
  // right
  {
    cut: cuts[4],
    wrap: "right-0 bottom-0 z-10 w-[34vw] max-w-[200px] lg:max-w-[240px]",
    tilt: "6deg",
    delay: "-3s",
    priority: false,
    sizes: "(max-width: 1024px) 34vw, 240px",
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-cream">
      {/* soft brass glow behind the cards */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 h-[520px] w-[900px] max-w-none -translate-x-1/2 translate-y-1/4 rounded-full bg-[radial-gradient(closest-side,rgba(200,162,74,0.22),transparent)]"
      />
      <Container className="relative flex min-h-[calc(100dvh-4rem)] flex-col justify-between gap-10 pb-12 pt-12 sm:pt-16 lg:gap-6 lg:pb-16 lg:pt-20">
        <div className="relative">
          <div className="text-center">
            <p className="label text-brass">Portofolio · {shop.name}</p>
            <h1 className="headline mt-5 text-[clamp(4rem,17vw,9.5rem)] lg:text-[clamp(5rem,9vw,9.5rem)]">
              Karya
              <br />
              <em>{barber.firstName}.</em>
            </h1>
            <p className="mx-auto mt-6 max-w-md text-[clamp(1rem,2.4vw,1.2rem)] text-cream/70">
              Kumpulan potongan yang pernah aku kerjain, difoto dari depan, samping, sampai belakang.
            </p>
            <ul className="mt-6 flex flex-wrap justify-center gap-2 text-cream/70" aria-label="Gaya">
              {heroChips.map((c) => (
                <li key={c} className="chip">
                  {c}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex justify-center">
              <Button href="/work">Lihat galeri</Button>
            </div>
          </div>
        </div>

        {/* floating tilted cut cards */}
        <div className="relative mx-auto h-[250px] w-full max-w-[720px] sm:h-[380px] lg:h-[430px]">
          {cards.map(({ cut, wrap, tilt, delay, priority, sizes }) => (
            <div key={cut.slug} className={`absolute ${wrap}`}>
              <div
                className="animate-float relative aspect-[4/5] overflow-hidden rounded-xl border border-cream/15 bg-ink-2 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.8)]"
                style={{ "--tilt": tilt, animationDelay: delay } as React.CSSProperties}
              >
                <Image
                  src={cut.images[0].src}
                  alt={cut.images[0].alt}
                  fill
                  sizes={sizes}
                  priority={priority}
                  className="film object-cover"
                />
                <span className="label absolute left-2 top-2 rounded-md bg-black/55 px-2 py-1 text-[0.6rem] text-cream backdrop-blur-sm">
                  {styleLabels[cut.style]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
