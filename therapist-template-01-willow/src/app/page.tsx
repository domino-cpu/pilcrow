import type { Metadata } from "next";
import { StructuredData } from "@/components/StructuredData";
import { HeroWillow } from "@/components/sections/HeroWillow";
import { ApproachIntro } from "@/components/sections/ApproachIntro";
import { SpecialtiesGrid } from "@/components/sections/SpecialtiesGrid";
import { CredentialsBar } from "@/components/sections/CredentialsBar";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { BookingCTA } from "@/components/sections/BookingCTA";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <HeroWillow />
      <ApproachIntro />
      <SpecialtiesGrid />
      <CredentialsBar />
      <AboutPreview />
      <BookingCTA />
    </>
  );
}
