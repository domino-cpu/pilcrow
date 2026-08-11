import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { home } from "@content/home";

export function HowThisWorks() {
  return (
    <section className="bg-[var(--color-bg-alt)] py-24 lg:py-32" aria-label="How this works">
      <Container>
        <Reveal className="mb-14 max-w-2xl">
          <p className="eyebrow mb-4">{home.howThisWorks.eyebrow}</p>
          <h2 className="h2-section text-[var(--color-ink)]">{home.howThisWorks.title}</h2>
        </Reveal>

        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {home.howThisWorks.steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 100} className="relative">
              <span className="font-display text-5xl italic text-[var(--color-blush)]">
                {step.n}
              </span>
              <h3 className="h3-sub mt-3 text-[var(--color-ink)]">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-[var(--color-ink-muted)]">{step.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 font-body text-sm font-semibold text-[var(--color-ink)]"
          >
            Ready to talk?
            <ArrowRight
              className="h-4 w-4 text-[var(--color-blush-deep)] transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
