import { Reveal } from "@/components/ui/Reveal";

/**
 * Long-form essay-style bio wrapper with a reading-column width constraint.
 * The first paragraph gets a subtle lead treatment. Prose, not resume.
 */
export function NarrativeBio({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="reading mx-auto">
      {paragraphs.map((p, i) => (
        <Reveal key={i} delay={Math.min(i * 40, 200)}>
          <p
            className={
              i === 0
                ? "mb-6 text-xl leading-relaxed text-[var(--color-ink)]"
                : "mb-6 leading-relaxed text-[var(--color-ink-muted)]"
            }
          >
            {p}
          </p>
        </Reveal>
      ))}
    </div>
  );
}
