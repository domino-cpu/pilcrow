import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { services } from "@content/services";

export function SpecialtiesGrid() {
  return (
    <section className="bg-[var(--color-bg-alt)] py-20 lg:py-32" aria-label="Specialties">
      <Container>
        <SectionHeader eyebrow="Specialties" title="The work I do best." className="max-w-2xl" />

        <div className="mt-14 grid gap-px overflow-hidden border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal
              key={service.slug}
              as="article"
              delay={(i % 3) * 90}
              className="group flex flex-col bg-[var(--color-surface)] p-8 lg:p-10"
            >
              <ServiceIcon
                name={service.icon}
                className="h-8 w-8 text-[var(--color-accent-deep)]"
              />
              <h3 className="mt-6 font-display text-2xl text-[var(--color-ink)]">
                {service.title}
              </h3>
              <p className="mt-1 font-display text-base italic text-[var(--color-accent-deep)]">
                {service.subtitle}
              </p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-[var(--color-ink-muted)]">
                {service.description}
              </p>
              <Link
                href={`/services#${service.slug}`}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-ink)]"
              >
                Learn more<span className="sr-only"> about {service.title}</span>
                <ArrowUpRight
                  className="h-4 w-4 text-[var(--color-terracotta)] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
