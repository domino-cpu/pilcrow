import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { practitioner } from "@content/practitioner";

export function AboutPreview() {
  return (
    <section className="bg-[var(--color-bg-alt)] py-20 lg:py-32" aria-label={`About ${practitioner.firstName}`}>
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative aspect-[5/6] w-full overflow-hidden">
              <Image
                src="/images/office.jpg"
                alt={`The therapy office of ${practitioner.fullName}`}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
            <div
              className="absolute -left-4 -top-4 -z-10 hidden h-full w-full border border-[var(--color-terracotta)] lg:block"
              aria-hidden="true"
            />
          </Reveal>

          <Reveal delay={120} className="order-1 lg:order-2">
            <p className="eyebrow mb-5">About {practitioner.firstName}</p>
            <h2 className="h2-section max-w-xl text-balance text-[var(--color-ink)]">
              I am not here to fix you. You were never broken.
            </h2>
            <p className="mt-7 max-w-xl leading-relaxed text-[var(--color-ink-muted)]">
              {practitioner.bioMedium}
            </p>
            <Link
              href="/about"
              className="group mt-8 inline-flex items-center gap-2 font-body text-sm font-medium text-[var(--color-ink)]"
            >
              Read my full story
              <ArrowRight
                className="h-4 w-4 text-[var(--color-terracotta)] transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
