import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { modalities, sessionWalkthrough } from "@content/approach";
import { practitioner } from "@content/practitioner";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "The specific methods I use for trauma work, the training behind each, what a session looks like, and how we know it's working.",
  alternates: { canonical: "/approach" },
};

export default function ApproachPage() {
  return (
    <>
      <PageHero
        eyebrow="Approach"
        title="How the work is done."
        intro="Trauma work is a craft with real methods behind it. Here's what I use, the training that stands behind each, and what it feels like in the room."
      />

      {/* Modalities, full paragraphs */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="space-y-16">
            {modalities.map((m, i) => (
              <Reveal key={m.name}>
                <div className="grid gap-6 lg:grid-cols-[1fr_2fr] lg:gap-16">
                  <div>
                    <span className="font-display text-sm text-[var(--color-ochre-deep)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="mt-2 font-display text-3xl text-[var(--color-ink)]">
                      {m.name}
                    </h2>
                  </div>
                  <p className="text-lg leading-relaxed text-[var(--color-ink)]">
                    {m.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Certifications */}
          <Reveal className="mt-16 border-t border-[var(--color-border)] pt-8">
            <p className="eyebrow mb-4">Certifications &amp; training</p>
            <ul className="flex flex-wrap gap-x-8 gap-y-2">
              {practitioner.training.map((t) => (
                <li key={t.credential} className="text-sm text-[var(--color-ink-muted)]">
                  <span className="text-[var(--color-ink)]">{t.credential}</span> · {t.institution}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* What a session looks like */}
      <section className="bg-[var(--color-bg-alt)] py-16 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
            <Reveal>
              <p className="eyebrow mb-4">In the room</p>
              <h2 className="h2-section text-[var(--color-ink)]">What a session looks like.</h2>
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
                  <span className="font-display text-3xl text-[var(--color-ochre-deep)]">
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

      {/* How we measure progress */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="reading mx-auto">
            <p className="eyebrow mb-4">How we know it's working</p>
            <h2 className="h2-section mb-6 text-[var(--color-ink)]">Measuring progress.</h2>
            <p className="mb-5 leading-relaxed text-[var(--color-ink-muted)]">
              Progress in trauma work is rarely a straight line, so we track it honestly and
              together. Less time lost to flashbacks or shutdown. A wider window of tolerance before
              you get overwhelmed. Old triggers that lose their charge. More room to choose your
              response instead of being run by it.
            </p>
            <p className="leading-relaxed text-[var(--color-ink-muted)]">
              We check in regularly about what's shifting and what isn't, and we adjust. You are the
              authority on your own experience, and your sense of whether this is helping matters
              more than any measure I could impose.
            </p>
          </div>
        </Container>
      </section>

      <BookingCTA />
    </>
  );
}
