import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { fees } from "@content/fees";
import { contact } from "@content/contact";

export function BookingCTA() {
  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-bg-alt)]" aria-label="Book a consultation">
      <Container className="py-20 text-center lg:py-32">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center">
          <p className="eyebrow mb-6">Begin when you&apos;re ready</p>
          <h2 className="h2-section text-balance text-[var(--color-ink)]">Ready when you are.</h2>
          <p className="body-lead mt-6 max-w-xl">
            It starts with a free {fees.consultationLength} consultation. No pressure and no
            obligation. Just a chance to talk, ask questions, and see whether we&apos;re a good fit.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Button href={contact.bookingUrl} external variant="primary">
              Schedule Your Consultation
            </Button>
            <Link
              href="/contact"
              className="font-body text-sm font-medium text-[var(--color-ink)] underline decoration-[var(--color-terracotta)] underline-offset-4 hover:decoration-2"
            >
              Or send a message
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
