import type { Metadata } from "next";
import { StructuredData } from "@/components/StructuredData";
import { HeroTender } from "@/components/sections/HeroTender";
import { IfYoureHere } from "@/components/sections/IfYoureHere";
import { HowThisWorks } from "@/components/sections/HowThisWorks";
import { TrainingApproachSplit } from "@/components/sections/TrainingApproachSplit";
import { OutsideTheRoom } from "@/components/sections/OutsideTheRoom";
import { ContactCTATender } from "@/components/sections/ContactCTATender";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <HeroTender />
      <IfYoureHere />
      <HowThisWorks />
      <TrainingApproachSplit />
      <OutsideTheRoom />
      <ContactCTATender />
    </>
  );
}
