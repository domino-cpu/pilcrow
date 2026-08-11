import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { practitioner } from "@content/practitioner";

export function ApproachIntro() {
  return (
    <section className="py-20 lg:py-32" aria-label="My approach">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow mb-5">My Approach</p>
            <h2 className="h2-section max-w-xl text-balance text-[var(--color-ink)]">
              Therapy that treats you like a whole person, not a case.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-[var(--color-ink-muted)]">
              {practitioner.approach[0]}
            </p>
            <Link
              href="/approach"
              className="group mt-8 inline-flex items-center gap-2 font-body text-sm font-medium text-[var(--color-ink)]"
            >
              How I work
              <ArrowRight
                className="h-4 w-4 text-[var(--color-terracotta)] transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </Reveal>

          <Reveal delay={120} className="lg:pt-2">
            <p className="eyebrow mb-5">Ways I work</p>
            <ul className="flex flex-wrap gap-3">
              {practitioner.modalities.map((m) => (
                <li
                  key={m}
                  className="border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm text-[var(--color-ink)]"
                >
                  {m}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
