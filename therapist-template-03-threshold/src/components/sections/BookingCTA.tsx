import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@content/site";
import { practitioner } from "@content/practitioner";
import { contact } from "@content/contact";
import { fees } from "@content/fees";

/**
 * Editorial signature band. Deep teal background, ochre accent CTA, cream text.
 * The confident close. License is displayed here (credentials-visible rule).
 */
export function BookingCTA() {
  return (
    <section className="bg-[var(--color-accent)]" aria-label="Book a consultation">
      <Container className="py-24 text-center lg:py-32">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center">
          <h2 className="h2-section text-balance text-[var(--color-bg)]">
            The first session is a beginning.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-bg)] opacity-80">
            We start with a free {fees.consultationLength} consultation. No pressure, no obligation.
            A chance to feel whether this is the right work, with the right person, for you.
          </p>
          <a
            href={contact.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center justify-center bg-[#c9a45a] px-8 py-4 text-sm font-semibold tracking-wide text-[var(--color-ink)] transition-[filter] duration-200 hover:brightness-95"
          >
            Schedule a Consultation
          </a>
          <p className="mt-8 text-sm text-[var(--color-bg)] opacity-75">
            License {practitioner.licenseNumber} · {site.city}, {site.state} · By appointment only
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
