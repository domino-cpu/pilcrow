import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { Timeline } from "@/components/ui/Timeline";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { timeline } from "@content/timeline";

export const metadata: Metadata = {
  title: "Working together",
  description:
    "What a course of trauma treatment actually looks like: the phases, session structure, what happens between sessions, and how we end well.",
  alternates: { canonical: "/working-together" },
};

export default function WorkingTogetherPage() {
  return (
    <>
      <PageHero
        eyebrow="Working together"
        title="What the work looks like."
        intro="Trauma work has a shape. Knowing it in advance takes some of the fear out of beginning. Here's the arc of how we'd move through this."
      />

      {/* Timeline */}
      <section className="py-16 lg:py-24">
        <Container>
          <Reveal className="mb-14 max-w-2xl">
            <p className="eyebrow mb-4">The arc</p>
            <h2 className="h2-section text-[var(--color-ink)]">A typical course of treatment.</h2>
          </Reveal>
          <div className="max-w-3xl">
            <Timeline phases={timeline.phases} />
          </div>
        </Container>
      </section>

      {/* Structure details */}
      <section className="bg-[var(--color-bg-alt)] py-16 lg:py-24">
        <Container>
          <div className="grid gap-12 md:grid-cols-3 md:gap-10">
            <Reveal>
              <h3 className="h3-sub mb-3 text-[var(--color-ink)]">Session structure</h3>
              <p className="leading-relaxed text-[var(--color-ink-muted)]">
                {timeline.sessionStructure}
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h3 className="h3-sub mb-3 text-[var(--color-ink)]">Between sessions</h3>
              <p className="leading-relaxed text-[var(--color-ink-muted)]">
                {timeline.betweenSessions}
              </p>
            </Reveal>
            <Reveal delay={160}>
              <h3 className="h3-sub mb-3 text-[var(--color-ink)]">Ending well</h3>
              <p className="leading-relaxed text-[var(--color-ink-muted)]">
                {timeline.endingWellNote}
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <BookingCTA />
    </>
  );
}
