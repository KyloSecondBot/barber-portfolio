import { Button, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="flex min-h-[70dvh] flex-col justify-center py-24">
      <p className="label text-muted">404</p>
      <h1 className="headline mt-4 text-[clamp(3rem,12vw,8rem)]">
        Wrong <em>chair.</em>
      </h1>
      <p className="mt-6 max-w-md text-lg text-cream/70">
        This page doesn&apos;t exist. The cuts do, though.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href="/work">See the work</Button>
        <Button href="/" variant="outline-dark">Home</Button>
      </div>
    </Container>
  );
}
