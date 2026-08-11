import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, CalendarCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { InquiryForm } from "@/components/sections/InquiryForm";
import { contact } from "@content/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Begin with a free consultation, or send a note. Trauma-focused therapy in Portland and online across Oregon.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Begin here."
        intro="Reaching out is a real step, and I don't take it lightly. Send a note, or schedule a consultation directly. I'll respond personally."
      />

      <section className="py-12 lg:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
            <Reveal>
              <InquiryForm />
            </Reveal>

            <Reveal delay={100} as="aside" className="space-y-8">
              <div className="border border-[var(--color-border)] bg-[var(--color-bg-alt)] p-6">
                <p className="eyebrow mb-4 flex items-center gap-2">
                  <CalendarCheck
                    className="h-4 w-4 text-[var(--color-accent)]"
                    aria-hidden="true"
                  />
                  Prefer to book directly?
                </p>
                <p className="mb-4 text-sm leading-relaxed text-[var(--color-ink-muted)]">
                  Schedule your free consultation on my secure booking page, at a time that works
                  for you.
                </p>
                <a
                  href={contact.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-[var(--color-accent)] px-5 py-3 text-sm font-medium text-[var(--color-ink)] transition-colors hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)]"
                >
                  Book on {contact.bookingPlatform}
                </a>
              </div>

              <ul className="space-y-5">
                <li className="flex gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-accent)]" aria-hidden="true" />
                  <div>
                    <p className="eyebrow mb-1">Email</p>
                    <a href={`mailto:${contact.email}`} className="text-[var(--color-ink)] hover:text-[var(--color-ochre-deep)]">
                      {contact.email}
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-accent)]" aria-hidden="true" />
                  <div>
                    <p className="eyebrow mb-1">Phone</p>
                    <a href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`} className="text-[var(--color-ink)] hover:text-[var(--color-ochre-deep)]">
                      {contact.phone}
                    </a>
                  </div>
                </li>
                {!contact.virtualOnly && (
                  <li className="flex gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-accent)]" aria-hidden="true" />
                    <div>
                      <p className="eyebrow mb-1">Office</p>
                      <p className="text-[var(--color-ink)]">{contact.address}</p>
                    </div>
                  </li>
                )}
                <li className="flex gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-accent)]" aria-hidden="true" />
                  <div>
                    <p className="eyebrow mb-1">Hours</p>
                    <p className="text-[var(--color-ink)]">{contact.officeHours}</p>
                    <p className="mt-1 text-sm text-[var(--color-ink-muted)]">
                      I respond {contact.responseTime.toLowerCase()}.
                    </p>
                  </div>
                </li>
              </ul>

              <p className="border-t border-[var(--color-border)] pt-6 text-sm leading-relaxed text-[var(--color-ink-muted)]">
                If you are in crisis or need immediate support, please call or text 988 for the
                Suicide and Crisis Lifeline, or go to your nearest emergency room. This inbox is not
                monitored for emergencies.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
