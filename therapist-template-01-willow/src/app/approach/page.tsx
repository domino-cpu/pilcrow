import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { practitioner } from "@content/practitioner";
import { modalities, sessionWalkthrough } from "@content/approach";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "How I work: the modalities I draw on (EMDR, IFS, attachment-based, CBT, somatic awareness) explained in plain language, and what a session actually looks like.",
  alternates: { canonical: "/approach" },
};

export default function ApproachPage() {
  return (
    <>
      <PageHero
        eyebrow="My Approach"
        title="How I work, in plain language."
        intro="No jargon, no mystery. Here is what I draw on, why, and what it actually feels like to sit in the room together."
      />

      {/* Philosophy */}
      <section className="py-16 lg:py-24">
        <Container>
          <Reveal className="mx-auto max-w-2xl space-y-6">
            {practitioner.approach.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-[var(--color-ink)]">
                {p}
              </p>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* Modalities */}
      <section className="bg-[var(--color-bg-alt)] py-16 lg:py-24">
        <Container>
          <Reveal className="mb-12 max-w-2xl">
            <p className="eyebrow mb-4">The Tools</p>
            <h2 className="h2-section text-[var(--color-ink)]">The modalities I use.</h2>
          </Reveal>
          <div className="grid gap-px overflow-hidden border border-[var(--color-border)] bg-[var(--color-border)] md:grid-cols-2">
            {modalities.map((m, i) => (
              <Reveal
                key={m.name}
                delay={(i % 2) * 80}
                className="flex flex-col bg-[var(--color-surface)] p-8 lg:p-10"
              >
                <div className="mb-4 flex items-baseline gap-3">
                  <span className="font-display text-sm text-[var(--color-terracotta)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-2xl text-[var(--color-ink)]">{m.name}</h3>
                </div>
                <p className="leading-relaxed text-[var(--color-ink-muted)]">{m.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* What a session looks like */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
            <Reveal>
              <p className="eyebrow mb-4">In the Room</p>
              <h2 className="h2-section text-[var(--color-ink)]">
                What a session looks like.
              </h2>
              <p className="mt-5 leading-relaxed text-[var(--color-ink-muted)]">
                {sessionWalkthrough.intro}
              </p>
            </Reveal>
            <div className="space-y-8">
              {sessionWalkthrough.steps.map((step, i) => (
                <Reveal
                  key={step.title}
                  delay={i * 80}
                  className="flex gap-6 border-b border-[var(--color-border)] pb-8 last:border-0 last:pb-0"
                >
                  <span className="font-display text-3xl text-[var(--color-terracotta)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="h3-sub mb-2 text-[var(--color-ink)]">{step.title}</h3>
                    <p className="leading-relaxed text-[var(--color-ink-muted)]">{step.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <BookingCTA />
    </>
  );
}
