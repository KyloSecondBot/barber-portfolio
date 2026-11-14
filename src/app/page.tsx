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
  title: { absolute: `${barber.name} — Barber di Dibawah Pohon` },
  description: `${barber.name}, barber di ${barber.city} dengan ${barber.yearsCutting} tahun pengalaman. Lihat hasil potongan asli, cek layanan, dan booking lewat WhatsApp.`,
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
