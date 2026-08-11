import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { EssayCard } from "@/components/ui/EssayCard";
import { writing } from "@content/writing";

/** Home-page writing preview. Rendered only when site.showWriting is true. */
export function WritingPreview() {
  const recent = writing.slice(0, 3);
  if (recent.length === 0) return null;

  return (
    <section className="bg-[var(--color-bg-alt)] py-20 lg:py-32" aria-label="Writing">
      <Container>
        <SectionHeader eyebrow="Reading" title="Recent writing on the work." className="max-w-2xl" />
        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {recent.map((entry) => (
            <Reveal key={entry.slug}>
              <EssayCard entry={entry} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12">
          <Link
            href="/writing"
            className="group inline-flex items-center gap-2 text-sm font-medium text-[var(--color-ink)]"
          >
            More writing
            <ArrowRight
              className="h-4 w-4 text-[var(--color-ochre-deep)] transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
