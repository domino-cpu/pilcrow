import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PullQuote } from "@/components/ui/PullQuote";
import { TableOfContents, type TocItem } from "@/components/ui/TableOfContents";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { site } from "@content/site";
import { theWork } from "@content/the-work";

export const metadata: Metadata = {
  title: "The Work",
  description: site.specialtyThesis,
  alternates: { canonical: "/the-work" },
};

const toc: TocItem[] = [
  { id: "what-it-is", label: "What it is" },
  { id: "why-this-work", label: "Why this work" },
  { id: "how-i-think", label: "How I think about it" },
  { id: "what-healing-means", label: "What healing means here" },
  { id: "common-questions", label: "Common questions" },
];

function Paragraphs({ items, dropcap = false }: { items: string[]; dropcap?: boolean }) {
  return (
    <>
      {items.map((p, i) => (
        <p
          key={i}
          className={`mb-5 leading-relaxed text-[var(--color-ink-muted)] ${
            dropcap && i === 0 ? "dropcap text-[var(--color-ink)]" : ""
          }`}
        >
          {p}
        </p>
      ))}
    </>
  );
}

export default function TheWorkPage() {
  const s = theWork.sections;
  return (
    <>
      {/* Hero */}
      <section className="border-b border-[var(--color-border)] py-16 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-center lg:gap-16">
            <Reveal>
              <p className="eyebrow mb-6">{site.specialty}</p>
              <h1 className="h1-hero text-balance text-[var(--color-ink)]">
                {site.specialtyThesis}
              </h1>
            </Reveal>
            <Reveal delay={100} className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src="/images/office.jpg"
                alt="The therapy space of Dr. Naomi Reyes"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* TOC + long-form essay */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[220px_1fr] lg:gap-16">
            <aside className="lg:pt-2">
              <TableOfContents items={toc} />
            </aside>

            <div className="reading">
              <article>
                <section id="what-it-is" className="scroll-mt-28">
                  <h2 className="h2-section mb-6 text-[var(--color-ink)]">What it is</h2>
                  <Paragraphs items={s.whatItIs} dropcap />
                </section>

                <section id="why-this-work" className="mt-16 scroll-mt-28">
                  <h2 className="h2-section mb-6 text-[var(--color-ink)]">Why this work</h2>
                  <Paragraphs items={s.whyThisWork} />
                </section>

                <section id="how-i-think" className="mt-16 scroll-mt-28">
                  <h2 className="h2-section mb-6 text-[var(--color-ink)]">
                    How I think about it
                  </h2>
                  <Paragraphs items={s.howIThinkAboutIt.paragraphs.slice(0, 1)} />
                  <PullQuote>{s.howIThinkAboutIt.pullQuote}</PullQuote>
                  <Paragraphs items={s.howIThinkAboutIt.paragraphs.slice(1)} />
                </section>

                <section id="what-healing-means" className="mt-16 scroll-mt-28">
                  <h2 className="h2-section mb-6 text-[var(--color-ink)]">
                    What healing means here
                  </h2>
                  <Paragraphs items={s.whatHealingMeans} />
                </section>

                <section id="common-questions" className="mt-16 scroll-mt-28">
                  <h2 className="h2-section mb-8 text-[var(--color-ink)]">Common questions</h2>
                  <dl className="divide-y divide-[var(--color-border)] border-t border-[var(--color-border)]">
                    {s.commonQuestions.map((q) => (
                      <div key={q.question} className="py-6">
                        <dt className="font-display text-xl text-[var(--color-ink)]">
                          {q.question}
                        </dt>
                        <dd className="mt-3 leading-relaxed text-[var(--color-ink-muted)]">
                          {q.answer}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </section>
              </article>
            </div>
          </div>
        </Container>
      </section>

      <BookingCTA />
    </>
  );
}
