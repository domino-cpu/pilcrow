import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { fees } from "@content/fees";

export const metadata: Metadata = {
  title: "Investment",
  description:
    "Session fees, my out-of-network philosophy, superbills and reimbursement, and equity access. Clear and matter-of-fact.",
  alternates: { canonical: "/investment" },
};

export default function InvestmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Investment"
        title="Investment."
        intro="Specialty trauma care is an investment in the one life you have. Here is what it costs, and how I work to keep it accessible, stated plainly."
      />

      <section className="py-12 lg:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
            {/* Rate */}
            <Reveal>
              <div className="border-t-2 border-[var(--color-accent)] pt-6">
                <p className="eyebrow mb-3">Individual session</p>
                <p className="font-display text-6xl text-[var(--color-ink)]">${fees.sessionRate}</p>
                <p className="mt-2 text-[var(--color-ink-muted)]">
                  {fees.sessionLength}, typically weekly
                </p>
                {fees.consultationFree && (
                  <p className="mt-6 flex items-center gap-2 border-t border-[var(--color-border)] pt-6 text-sm text-[var(--color-ink)]">
                    <Check className="h-4 w-4 text-[var(--color-accent)]" aria-hidden="true" />
                    Free {fees.consultationLength} consultation to begin
                  </p>
                )}
              </div>
            </Reveal>

            {/* Philosophy + details */}
            <div className="space-y-10">
              <Reveal>
                <h2 className="h3-sub mb-3 text-[var(--color-ink)]">On insurance</h2>
                <p className="leading-relaxed text-[var(--color-ink-muted)]">
                  {fees.outOfNetworkNote}
                </p>
              </Reveal>

              {fees.slidingScale.available && (
                <Reveal delay={80}>
                  <h2 className="h3-sub mb-3 text-[var(--color-ink)]">Equity access</h2>
                  <p className="leading-relaxed text-[var(--color-ink-muted)]">
                    {fees.slidingScale.note}
                  </p>
                </Reveal>
              )}

              <Reveal delay={120}>
                <h2 className="h3-sub mb-3 text-[var(--color-ink)]">Cancellation</h2>
                <p className="leading-relaxed text-[var(--color-ink-muted)]">
                  {fees.cancellationPolicy}
                </p>
              </Reveal>

              <Reveal delay={160} className="border-l-2 border-[var(--color-ochre-deep)] bg-[var(--color-bg-alt)] p-6">
                <h2 className="eyebrow mb-3">Your right to a Good Faith Estimate</h2>
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
