import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { home } from "@content/home";

export function IfYoureHere() {
  return (
    <section className="py-24 lg:py-32" aria-label="If you're here">
      <Container>
        <Reveal className="reading mx-auto text-center">
          <p className="eyebrow mb-10">{home.ifYoureHere.eyebrow}..</p>
          <ul className="space-y-6">
            {home.ifYoureHere.items.map((item, i) => (
              <li
                key={i}
                className="callout-quote text-[var(--color-ink)]"
              >
                ..{item}
              </li>
            ))}
          </ul>
          <p className="callout-quote mt-12 text-[var(--color-accent-deep)]">
            {home.ifYoureHere.reassurance}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
