import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { EssayCard } from "@/components/ui/EssayCard";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { site } from "@content/site";
import { writing } from "@content/writing";

export const metadata: Metadata = {
  title: "Writing",
  description: "Essays and explainers on trauma, the body, and the slow work of healing.",
  alternates: { canonical: "/writing" },
};

export default function WritingPage() {
  // Guard: if writing is disabled for this client, this route shouldn't exist.
  if (!site.showWriting) notFound();

  const categories = Array.from(new Set(writing.map((w) => w.category)));

  return (
    <>
      <PageHero
        eyebrow="Writing"
        title="On the work."
        intro="Essays and explainers on trauma, the body, and the slow, real work of healing."
      />

      <section className="py-12 lg:py-20">
        <Container>
          <Reveal className="mb-10 flex flex-wrap gap-x-6 gap-y-2">
            <span className="eyebrow text-[var(--color-ink)]">All</span>
            {categories.map((c) => (
              <span key={c} className="eyebrow">
                {c}
              </span>
            ))}
          </Reveal>

          <div className="grid gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {writing.map((entry) => (
              <Reveal key={entry.slug}>
                <EssayCard entry={entry} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <BookingCTA />
    </>
  );
}
