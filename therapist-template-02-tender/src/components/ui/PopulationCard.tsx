import { Reveal } from "@/components/ui/Reveal";
import type { Population } from "@/lib/types";

/**
 * Card for the "who I work with" list. First-person, warm.
 */
export function PopulationCard({ population, index }: { population: Population; index: number }) {
  return (
    <Reveal
      as="article"
      id={population.slug}
      delay={(index % 2) * 80}
      className="scroll-mt-28 border-t border-[var(--color-border)] py-10 first:border-t-0"
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr] lg:gap-12">
        <h2 className="font-display text-2xl italic leading-tight text-[var(--color-ink)] lg:text-3xl">
          {population.title}
        </h2>
        <div className="space-y-4">
          <p className="leading-relaxed text-[var(--color-ink)]">{population.intro}</p>
          <p className="leading-relaxed text-[var(--color-ink-muted)]">
            {population.whatItLooksLike}
          </p>
        </div>
      </div>
    </Reveal>
  );
}
