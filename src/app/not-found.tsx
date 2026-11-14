import { Button, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="flex min-h-[70dvh] flex-col justify-center py-24">
      <p className="label text-muted">404</p>
      <h1 className="headline mt-4 text-[clamp(3rem,12vw,8rem)]">
        Salah <em>kursi.</em>
      </h1>
      <p className="mt-6 max-w-md text-lg text-cream/70">
        Halaman ini nggak ada. Tapi potongan-potongannya ada, kok.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href="/work">Lihat galeri</Button>
        <Button href="/" variant="outline-dark">Beranda</Button>
      </div>
    </Container>
  );
}
