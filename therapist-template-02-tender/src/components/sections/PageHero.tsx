import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
}

/**
 * Interior-page header. Consistent rhythm across About, Services, Approach,
 * Fees, FAQ, Contact.
 */
export function PageHero({ eyebrow, title, intro }: PageHeroProps) {
  return (
    <section className="border-b border-[var(--color-border)] py-16 lg:py-24">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="eyebrow mb-5">{eyebrow}</p>
          <h1 className="h1-hero text-balance text-[var(--color-ink)]">{title}</h1>
          {intro && <p className="body-lead mt-7 max-w-2xl">{intro}</p>}
        </Reveal>
      </Container>
    </section>
  );
}
