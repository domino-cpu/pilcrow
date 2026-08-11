import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { PopulationCard } from "@/components/ui/PopulationCard";
import { ScopeLimitsNote } from "@/components/ui/ScopeLimitsNote";
import { ContactCTATender } from "@/components/sections/ContactCTATender";
import { populations } from "@content/populations";

export const metadata: Metadata = {
  title: "Who I work with",
  description:
    "The people I'm drawn to work with, why, and an honest note on who might be better served elsewhere.",
  alternates: { canonical: "/who-i-work-with" },
};

export default function WhoIWorkWithPage() {
  return (
    <>
      <PageHero
        eyebrow="Who I work with"
        title="Who this work is for."
        intro="I don't work with everyone, and I think that's a good thing. Here are the people I'm drawn to, and the work we tend to do together."
      />

      <section className="py-8 lg:py-12">
        <Container>
          <div className="reading mx-auto lg:max-w-none">
            {populations.map((p, i) => (
              <PopulationCard key={p.slug} population={p} index={i} />
            ))}
          </div>
        </Container>
      </section>

      {/* Honest "might not be the right fit" note */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="reading mx-auto">
            <ScopeLimitsNote
              title="Who I might not be the right fit for"
              items={[
                "If you're in active crisis and need daily or urgent support, you deserve more than weekly sessions can offer. Please reach out to 988 or a higher level of care.",
                "If you're looking for very structured, short-term coaching toward a single concrete goal, another practitioner may be a better match than my slower, relational style.",
                "If we meet and it isn't clicking, I'll help you find someone who fits. You can also browse Psychology Today to search therapists by specialty and approach.",
              ]}
            />
            <Reveal className="mt-6">
              <p className="text-sm leading-relaxed text-[var(--color-ink-muted)]">
                A good fit matters more than almost anything else in therapy. I would always rather
                help you find the right person than have you settle.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <ContactCTATender />
    </>
  );
}
