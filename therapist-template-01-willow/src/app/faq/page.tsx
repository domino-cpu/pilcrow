import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { Accordion } from "@/components/ui/Accordion";
import { faqs } from "@content/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Common questions about getting started, insurance and fees, how I work, and logistics.",
  alternates: { canonical: "/faq" },
};

// Preserve category order as first seen in content/faq.ts.
const categories = Array.from(new Set(faqs.map((f) => f.category)));

// FAQPage structured data for rich results.
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHero
        eyebrow="Questions"
        title="The things people ask."
        intro="If your question isn't here, reach out. I'm happy to answer before you decide anything."
      />

      <section className="py-12 lg:py-20">
        <Container>
          <div className="mx-auto max-w-3xl space-y-16">
            {categories.map((category) => (
              <Reveal key={category}>
                <h2 className="eyebrow mb-6 border-l-2 border-[var(--color-terracotta)] pl-4">
                  {category}
                </h2>
                <Accordion items={faqs.filter((f) => f.category === category)} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <BookingCTA />
    </>
  );
}
