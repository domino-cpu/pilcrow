import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { ContactCTATender } from "@/components/sections/ContactCTATender";
import { fees } from "@content/fees";

export const metadata: Metadata = {
  title: "Fees & access",
  description:
    "What sessions cost, how I work with insurance and superbills, and what I can do to make therapy accessible.",
  alternates: { canonical: "/fees" },
};

export default function FeesPage() {
  return (
    <>
      <PageHero
        eyebrow="Fees & access"
        title="What this costs."
        intro="I know cost matters, and I'd rather be upfront about it than make you ask. Here's what things cost, and what I can do to make this accessible."
      />

      <section className="py-12 lg:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
            {/* Left */}
            <div className="space-y-10">
              <Reveal>
                <div className="border border-[var(--color-border)] bg-[var(--color-surface)] p-8 lg:p-10">
                  <p className="eyebrow mb-3">Individual session</p>
                  <p className="font-display text-5xl italic text-[var(--color-ink)]">
                    ${fees.sessionRate}
                  </p>
                  <p className="mt-2 text-[var(--color-ink-muted)]">
                    per {fees.sessionLength} session
                  </p>
                  {fees.consultationFree && (
                    <p className="mt-6 flex items-center gap-2 border-t border-[var(--color-border)] pt-6 text-sm text-[var(--color-ink)]">
                      <Check
                        className="h-4 w-4 text-[var(--color-accent-deep)]"
                        aria-hidden="true"
                      />
                      Free {fees.consultationLength} consultation to start
                    </p>
                  )}
                </div>
              </Reveal>

              {fees.slidingScale.available && (
                <Reveal delay={80}>
                  <h2 className="h3-sub mb-3 text-[var(--color-ink)]">Sliding scale</h2>
                  <p className="leading-relaxed text-[var(--color-ink-muted)]">
                    {fees.slidingScale.note}
                  </p>
                </Reveal>
              )}

              <Reveal delay={120}>
                <h2 className="h3-sub mb-3 text-[var(--color-ink)]">If you need to reschedule</h2>
                <p className="leading-relaxed text-[var(--color-ink-muted)]">
                  {fees.cancellationPolicy}
                </p>
              </Reveal>
            </div>

            {/* Right */}
            <div className="space-y-10">
              <Reveal>
                <h2 className="h3-sub mb-4 text-[var(--color-ink)]">Insurance</h2>
                <p className="leading-relaxed text-[var(--color-ink-muted)]">
                  {fees.outOfNetworkNote}
                </p>
              </Reveal>

              <Reveal delay={80} className="border-l-2 border-[var(--color-accent)] bg-[var(--color-bg-alt)] p-6">
                <h2 className="eyebrow mb-3">Your right to a Good Faith Estimate</h2>
                <p className="text-sm leading-relaxed text-[var(--color-ink-muted)]">
                  {fees.goodFaithEstimateNote}
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <ContactCTATender />
    </>
  );
}
