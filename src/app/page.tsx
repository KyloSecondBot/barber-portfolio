import type { Metadata } from "next";
import { BookCTA } from "@/components/BookCTA";
import { Hero } from "@/components/home/Hero";
import { Strips } from "@/components/home/Strips";
import { SelectedWork } from "@/components/home/SelectedWork";
import { BioTeaser } from "@/components/home/BioTeaser";
import { VisitSteps } from "@/components/home/VisitSteps";
import { ServicesSnapshot } from "@/components/home/ServicesSnapshot";
import { Reviews } from "@/components/home/Reviews";
import { barber } from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: `${barber.name} — Fades, Tapers & Beard Work in ${barber.city}` },
  description: `${barber.name} is a ${barber.city} barber with ${barber.yearsCutting} years behind the chair. Browse real cuts, see prices and book on WhatsApp.`,
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Strips />
      <SelectedWork />
      <BioTeaser />
      <VisitSteps />
      <ServicesSnapshot />
      <Reviews />
      <BookCTA />
    </>
  );
}
