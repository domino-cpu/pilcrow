import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { ScopeLimitsNote } from "@/components/ui/ScopeLimitsNote";
import { ContactCTATender } from "@/components/sections/ContactCTATender";
import { modalities } from "@content/approach";
import { firstSession } from "@content/first-session";
import { practitioner } from "@content/practitioner";

export const metadata: Metadata = {
  title: "How I work",
  description:
    "What a first session is really like, the approaches I use (in plain language), and an honest note on what falls outside my scope.",
  alternates: { canonical: "/how-i-work" },
};

export default function HowIWorkPage() {
  return (
    <>
      <PageHero
        eyebrow="How I work"
        title="What it's actually like."
        intro="The unknown is the scariest part. So here's an honest picture of how we'd work together, from the first hello onward."
      />

      {/* What a first session looks like */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="reading mx-auto">
            <Reveal>
              <h2 className="h2-section mb-6 text-[var(--color-ink)]">Your first session</h2>
              <p className="mb-6 text-lg leading-relaxed text-[var(--color-ink-muted)]">
                {firstSession.intro}
              </p>
            </Reveal>
            <div className="space-y-5">
              {firstSession.narrative.map((p, i) => (
                <Reveal key={i} delay={i * 40}>
                  <p className="leading-relaxed text-[var(--color-ink)]">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Common fears */}
          <div className="reading mx-auto mt-14 space-y-8">
            {firstSession.fears.map((f, i) => (
              <Reveal key={i} delay={i * 60}>
                <h3 className="callout-quote mb-2 text-[var(--color-ink)]">{f.question}</h3>
                <p className="leading-relaxed text-[var(--color-ink-muted)]">{f.answer}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* The modalities I use */}
      <section className="bg-[var(--color-bg-alt)] py-16 lg:py-24">
        <Container>
          <Reveal className="mb-12 max-w-2xl">
            <p className="eyebrow mb-4">The approaches I use</p>
            <h2 className="h2-section text-[var(--color-ink)]">
              What I draw on, and why.
            </h2>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            {modalities.map((m, i) => (
              <Reveal key={m.name} delay={(i % 2) * 80}>
                <h3 className="h3-sub mb-3 text-[var(--color-ink)]">{m.name}</h3>
                <p className="leading-relaxed text-[var(--color-ink-muted)]">{m.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* What I don't do */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="reading mx-auto">
            <ScopeLimitsNote
              title="What I don't do"
              items={practitioner.whatIDontDo}
            />
          </div>
        </Container>
      </section>

      <ContactCTATender />
    </>
  );
}
