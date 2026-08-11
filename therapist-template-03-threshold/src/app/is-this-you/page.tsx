import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { IsThisYouColumns } from "@/components/sections/IsThisYouColumns";
import { BookingCTA } from "@/components/sections/BookingCTA";

export const metadata: Metadata = {
  title: "Is this you?",
  description:
    "An honest look at who this trauma work is for, and who might be better served elsewhere. The right fit matters more than anything.",
  alternates: { canonical: "/is-this-you" },
};

export default function IsThisYouPage() {
  return (
    <>
      <PageHero
        eyebrow="Is this you?"
        title="The right fit is everything."
        intro="Trauma work is deep, specific, and not for every moment or every person. Here's an honest look at who this is for, and who I'd lovingly point elsewhere."
      />
      <IsThisYouColumns eyebrow="Signs, honestly" showReferral />
      <BookingCTA />
    </>
  );
}
