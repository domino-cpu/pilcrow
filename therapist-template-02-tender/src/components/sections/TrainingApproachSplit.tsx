import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { practitioner } from "@content/practitioner";

/**
 * The credentials in disguise. A warm belief statement on the left, a clean
 * training list on the right. Not hidden, not shouting.
 */
export function TrainingApproachSplit() {
  return (
    <section className="py-24 lg:py-32" aria-label="Training and approach">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow mb-4">Training + approach</p>
            <h2 className="h2-section mb-6 text-[var(--color-ink)]">
              Where the work comes from.
            </h2>
            <div className="space-y-4">
              {practitioner.approach.map((p, i) => (
                <p key={i} className="leading-relaxed text-[var(--color-ink-muted)]">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <p className="eyebrow mb-5">The credentials, plainly</p>
            <ul className="divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
              {practitioner.training.map((t) => (
                <li key={t.credential} className="py-4">
                  <p className="font-display text-lg text-[var(--color-ink)]">{t.credential}</p>
                  <p className="text-sm text-[var(--color-ink-muted)]">
                    {t.institution} · {t.year}
                  </p>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {practitioner.modalities.map((m) => (
                <span
                  key={m}
                  className="border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-sm text-[var(--color-ink)]"
                >
                  {m}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm text-[var(--color-ink-muted)]">
              License <span className="text-[var(--color-ink)]">{practitioner.licenseNumber}</span>
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
