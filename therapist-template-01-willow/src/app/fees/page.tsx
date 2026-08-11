import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { fees } from "@content/fees";

export const metadata: Metadata = {
  title: "Fees & Insurance",
  description:
    "Transparent session fees, accepted insurance, out-of-network reimbursement, sliding scale, and your Good Faith Estimate rights.",
  alternates: { canonical: "/fees" },
};

export default function FeesPage() {
  return (
    <>
      <PageHero
        eyebrow="Fees & Insurance"
        title="Clear about cost, on purpose."
        intro="You should know what therapy costs before you commit to anything. No hidden fees, no 'call for pricing.' Here is everything, plainly."
      />

      <section className="py-12 lg:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
            {/* Left: the numbers */}
            <div className="space-y-10">
              <Reveal>
                <div className="border border-[var(--color-border)] bg-[var(--color-surface)] p-8 lg:p-10">
                  <p className="eyebrow mb-3">Individual Session</p>
                  <p className="font-display text-5xl text-[var(--color-ink)]">
                    ${fees.sessionRate}
                  </p>
                  <p className="mt-2 text-[var(--color-ink-muted)]">
                    per {fees.sessionLength} session
                  </p>
                  {fees.consultationFree && (
                    <p className="mt-6 flex items-center gap-2 border-t border-[var(--color-border)] pt-6 text-sm text-[var(--color-ink)]">
                      <Check className="h-4 w-4 text-[var(--color-accent-deep)]" aria-hidden="true" />
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
                <h2 className="h3-sub mb-3 text-[var(--color-ink)]">Cancellation policy</h2>
                <p className="leading-relaxed text-[var(--color-ink-muted)]">
                  {fees.cancellationPolicy}
                </p>
              </Reveal>
            </div>

            {/* Right: insurance + legal */}
            <div className="space-y-10">
              <Reveal>
                <h2 className="h3-sub mb-4 text-[var(--color-ink)]">Insurance accepted</h2>
                <ul className="flex flex-wrap gap-2">
                  {fees.insuranceAccepted.map((plan) => (
                    <li
                      key={plan}
                      className="border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-sm text-[var(--color-ink)]"
                    >
                      {plan}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 leading-relaxed text-[var(--color-ink-muted)]">
                  {fees.outOfNetworkNote}
                </p>
                {fees.superbillAvailable && (
                  <p className="mt-3 text-sm text-[var(--color-ink-muted)]">
                    A monthly superbill is available for out-of-network reimbursement.
                  </p>
                )}
              </Reveal>

              <Reveal delay={80} className="border-l-2 border-[var(--color-accent)] bg-[var(--color-bg-alt)] p-6">
                <h2 className="eyebrow mb-3">Your Right to a Good Faith Estimate</h2>
                <p className="text-sm leading-relaxed text-[var(--color-ink-muted)]">
                  {fees.goodFaithEstimateNote}
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <BookingCTA />
    </>
  );
}
