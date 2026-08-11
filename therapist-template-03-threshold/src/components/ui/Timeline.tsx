import { Reveal } from "@/components/ui/Reveal";
import type { TimelinePhase } from "@/lib/types";

/**
 * Treatment timeline. A vertical sequence of phases with a connecting rule.
 * Renders as an ordered list for semantics.
 */
export function Timeline({ phases }: { phases: TimelinePhase[] }) {
  return (
    <ol className="relative">
      {phases.map((phase, i) => (
        <Reveal
          key={phase.name}
          as="li"
          delay={i * 80}
          className="relative grid gap-4 pb-12 pl-10 last:pb-0 sm:grid-cols-[1fr_2fr] sm:gap-10 sm:pl-12"
        >
          {/* Connector line + node */}
          <span
            aria-hidden="true"
            className="absolute left-[7px] top-2 h-full w-px bg-[var(--color-border)]"
          />
          <span
            aria-hidden="true"
            className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-[var(--color-ochre-deep)] bg-[var(--color-bg)]"
          />
          <div>
            <p className="font-display text-2xl text-[var(--color-ink)]">{phase.name}</p>
            <p className="eyebrow mt-1">{phase.duration}</p>
          </div>
          <p className="leading-relaxed text-[var(--color-ink-muted)]">{phase.description}</p>
        </Reveal>
      ))}
    </ol>
  );
}
