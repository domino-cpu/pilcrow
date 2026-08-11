import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { practitioner } from "@content/practitioner";
import { site } from "@content/site";

export const metadata: Metadata = {
  title: "About",
  description: practitioner.bioShort,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero: portrait + name + credentials + who I help */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid items-end gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <Reveal className="relative order-2 lg:order-1">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src="/images/portrait.jpg"
                  alt={`${practitioner.fullName}, ${practitioner.credentials.join(", ")}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={100} className="order-1 lg:order-2">
              <p className="eyebrow mb-5">
                About · {practitioner.pronouns}
              </p>
              <h1 className="h1-hero text-[var(--color-ink)]">{practitioner.fullName}</h1>
              <p className="mt-4 font-display text-xl text-[var(--color-accent-deep)]">
                {practitioner.credentials.join(", ")} · {site.city}, {site.state}
              </p>
              <p className="body-lead mt-7 max-w-xl">{practitioner.headline}</p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Long-form bio, letter-style, structured with subheadings */}
      <section className="border-t border-[var(--color-border)] py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-2xl">
            {practitioner.bioLong.map((section, i) => (
              <Reveal key={section.heading} delay={i * 60} className="mb-12 last:mb-0">
                <h2 className="h3-sub mb-4 text-[var(--color-ink)]">{section.heading}</h2>
                {section.paragraphs.map((p, j) => (
                  <p
                    key={j}
                    className="mb-4 leading-relaxed text-[var(--color-ink-muted)] last:mb-0"
                  >
                    {p}
                  </p>
                ))}
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Credentials & training — formal, verifiable */}
      <section className="bg-[var(--color-bg-alt)] py-16 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
            <Reveal>
              <p className="eyebrow mb-4">Credentials &amp; Training</p>
              <h2 className="h2-section text-[var(--color-ink)]">The formal record.</h2>
              <p className="mt-5 text-sm text-[var(--color-ink-muted)]">
                License {practitioner.licenseNumber}. You can verify any of this with the state
                licensing board.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <ul className="divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
                {practitioner.training.map((t) => (
                  <li
                    key={t.credential}
                    className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between"
                  >
                    <span className="font-display text-lg text-[var(--color-ink)]">
                      {t.credential}
                    </span>
                    <span className="text-sm text-[var(--color-ink-muted)]">
                      {t.institution} · {t.year}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Values — what they believe about healing */}
      <section className="py-16 lg:py-24">
        <Container>
          <Reveal className="mb-12 max-w-2xl">
            <p className="eyebrow mb-4">What I Believe</p>
            <h2 className="h2-section text-[var(--color-ink)]">
              A few things I hold to be true.
            </h2>
          </Reveal>
          <div className="grid gap-x-16 gap-y-10 sm:grid-cols-2">
            {practitioner.values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 2) * 80}>
                <h3 className="h3-sub mb-3 text-[var(--color-ink)]">{v.title}</h3>
                <p className="leading-relaxed text-[var(--color-ink-muted)]">{v.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <BookingCTA />
    </>
  );
}
