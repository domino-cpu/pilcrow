import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { NarrativeBio } from "@/components/ui/NarrativeBio";
import { ContactCTATender } from "@/components/sections/ContactCTATender";
import { practitioner } from "@content/practitioner";
import { site } from "@content/site";

export const metadata: Metadata = {
  title: "My story",
  description: practitioner.bioShort,
  alternates: { canonical: "/story" },
};

export default function StoryPage() {
  return (
    <>
      {/* Hero: portrait + name + credentials + one-line statement */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <div className="relative mx-auto mb-8 aspect-[4/5] w-56 overflow-hidden rounded-t-[999px] sm:w-64">
                <Image
                  src="/images/portrait.jpg"
                  alt={`${practitioner.fullName}, ${practitioner.credentials.join(", ")}`}
                  fill
                  priority
                  sizes="256px"
                  className="object-cover"
                />
              </div>
              <p className="eyebrow mb-4">
                {practitioner.credentials.join(", ")} · {site.city}, {site.state}
              </p>
              <h1 className="h1-hero text-[var(--color-ink)]">{practitioner.firstName}&apos;s story</h1>
              <p className="body-lead mx-auto mt-6 max-w-xl">{practitioner.headline}</p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* The essay */}
      <section className="pb-8 lg:pb-16">
        <Container>
          <NarrativeBio paragraphs={practitioner.storyBio} />
        </Container>
      </section>

      {/* Formal credentials + training (structured, small) */}
      <section className="border-t border-[var(--color-border)] py-16 lg:py-24">
        <Container>
          <div className="reading mx-auto">
            <p className="eyebrow mb-6">Training &amp; credentials</p>
            <ul className="divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
              {practitioner.training.map((t) => (
                <li
                  key={t.credential}
                  className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between"
                >
                  <span className="text-[var(--color-ink)]">{t.credential}</span>
                  <span className="text-sm text-[var(--color-ink-muted)]">
                    {t.institution} · {t.year}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-[var(--color-ink-muted)]">
              License {practitioner.licenseNumber}. Verifiable with the state board.
            </p>
          </div>
        </Container>
      </section>

      <ContactCTATender />
    </>
  );
}
