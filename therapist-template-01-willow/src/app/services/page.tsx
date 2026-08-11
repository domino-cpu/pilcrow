import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { services } from "@content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "The areas I work in most: anxiety, trauma, life transitions, relationships, grief, and questions of career and identity.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="The areas I work in most."
        intro="Every person is more than a presenting concern. Still, it helps to know where someone spends their clinical hours. Here is the work I return to, and how we tend to approach it together."
      />

      <section className="py-8 lg:py-12">
        <Container>
          <div className="divide-y divide-[var(--color-border)]">
            {services.map((service, i) => (
              <Reveal
                key={service.slug}
                as="article"
                id={service.slug}
                delay={(i % 2) * 60}
                className="scroll-mt-28 py-12 lg:py-16"
              >
                <div className="grid gap-8 lg:grid-cols-[0.9fr_2fr] lg:gap-16">
                  <div>
                    <ServiceIcon
                      name={service.icon}
                      className="h-9 w-9 text-[var(--color-accent-deep)]"
                    />
                    <h2 className="mt-5 font-display text-3xl text-[var(--color-ink)]">
                      {service.title}
                    </h2>
                    <p className="mt-2 font-display text-lg italic text-[var(--color-accent-deep)]">
                      {service.subtitle}
                    </p>
                  </div>

                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed text-[var(--color-ink)]">
                      {service.description}
                    </p>
                    <dl className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <dt className="eyebrow mb-2">Who this is for</dt>
                        <dd className="text-sm leading-relaxed text-[var(--color-ink-muted)]">
                          {service.whoThisIsFor}
                        </dd>
                      </div>
                      <div>
                        <dt className="eyebrow mb-2">How we work</dt>
                        <dd className="text-sm leading-relaxed text-[var(--color-ink-muted)]">
                          {service.howWeWork}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <BookingCTA />
    </>
  );
}
