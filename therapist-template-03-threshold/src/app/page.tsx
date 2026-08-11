import type { Metadata } from "next";
import { StructuredData } from "@/components/StructuredData";
import { HeroThreshold } from "@/components/sections/HeroThreshold";
import { TheWorkIntro } from "@/components/sections/TheWorkIntro";
import { ApproachThreeColumn } from "@/components/sections/ApproachThreeColumn";
import { FeaturedInBar } from "@/components/sections/FeaturedInBar";
import { IsThisYouColumns } from "@/components/sections/IsThisYouColumns";
import { WritingPreview } from "@/components/sections/WritingPreview";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { site } from "@content/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <HeroThreshold />
      <TheWorkIntro />
      <ApproachThreeColumn />
      <FeaturedInBar />
      <IsThisYouColumns limit={3} showLink eyebrow="Is this the fit?" />
      {site.showWriting && <WritingPreview />}
      <BookingCTA />
    </>
  );
}
