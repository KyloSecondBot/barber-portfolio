import Link from "next/link";
import { barber, shop, hours } from "@/content/site";
import { whatsappLink } from "@/lib/booking";

export function Footer() {
  return (
    <footer className="border-t border-line-dark bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="headline text-[clamp(2.5rem,9vw,7rem)]">
          See you in <em>the chair.</em>
        </p>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="label text-muted">Book</p>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" data-track="book" className="mt-3 block text-lg hover:text-brass">
              WhatsApp ↗
            </a>
            <a href={barber.instagram} target="_blank" rel="noopener noreferrer" className="mt-1 block text-lg hover:text-brass">
              Instagram {barber.handle} ↗
            </a>
          </div>

          <div>
            <p className="label text-muted">Where to find me now</p>
            <p className="mt-3 leading-relaxed text-cream/80">{shop.name}</p>
            <p className="mt-1 text-sm text-cream/60">{shop.directions}</p>
            <a href={shop.instagram} target="_blank" rel="noopener noreferrer" className="label mt-3 inline-block text-brass">
              Shop Instagram {shop.handle} ↗
            </a>
          </div>

          <div>
            <p className="label text-muted">Hours</p>
            <dl className="mt-3 grid grid-cols-[3rem_1fr] gap-y-1 text-sm text-cream/80">
              {hours.map((h) => (
                <div key={h.day} className="contents">
                  <dt className="font-mono text-muted">{h.day}</dt>
                  <dd>{h.open}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <p className="label text-muted">Pages</p>
            <ul className="mt-3 space-y-1 text-cream/80">
              {[
                ["/work", "Work"],
                ["/about", "About"],
                ["/services", "Services & prices"],
                ["/book", "Book & contact"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-brass">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-line-dark pt-6 pb-16 text-xs text-muted sm:flex-row sm:justify-between md:pb-0">
          <p className="label">© {barber.name} · Barber · {barber.city}</p>
          <p className="label">Client photos shown with permission</p>
        </div>
      </div>
    </footer>
  );
}
