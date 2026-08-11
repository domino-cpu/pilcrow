import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@content/site";
import { theWork } from "@content/the-work";

export function TheWorkIntro() {
  return (
    <section className="py-20 lg:py-32" aria-label="What I do">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow mb-6">What I do</p>
            <h2 className="h2-section text-balance text-[var(--color-ink)]">
              {site.specialtyThesis}
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-xl leading-relaxed text-[var(--color-ink-muted)]">
              {theWork.thesis}
            </p>
            <Link
              href="/the-work"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-ink)]"
            >
              Read more on the work
              <ArrowRight
                className="h-4 w-4 text-[var(--color-ochre-deep)] transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
