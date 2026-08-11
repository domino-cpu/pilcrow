import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { practitioner } from "@content/practitioner";

/**
 * The "01. / 02. / 03." approach section. Substantive, specific to the method.
 * Content is composed from the practitioner's approach + values so it stays in
 * the content layer.
 */
const columns = [
  {
    n: "01",
    title: "What I believe",
    body: practitioner.approach[0],
  },
  {
    n: "02",
    title: "How I work",
    body: practitioner.approach[1],
  },
  {
    n: "03",
    title: "What to expect",
    body: practitioner.values[0].body,
  },
];

export function ApproachThreeColumn() {
  return (
    <section className="bg-[var(--color-bg-alt)] py-20 lg:py-32" aria-label="Approach">
      <Container>
        <Reveal className="mb-14">
          <p className="eyebrow">Approach</p>
        </Reveal>
        <div className="grid gap-12 md:grid-cols-3 md:gap-10">
          {columns.map((col, i) => (
            <Reveal key={col.n} delay={i * 100} className="border-t border-[var(--color-ink)] pt-6">
              <p className="font-display text-2xl text-[var(--color-ochre-deep)]">{col.n}</p>
              <h3 className="mt-2 font-display text-2xl text-[var(--color-ink)]">{col.title}</h3>
              <p className="mt-4 leading-relaxed text-[var(--color-ink-muted)]">{col.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
