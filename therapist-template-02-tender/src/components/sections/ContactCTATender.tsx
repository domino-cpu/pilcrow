import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { HandwrittenAccent } from "@/components/ui/HandwrittenAccent";
import { practitioner } from "@content/practitioner";
import { contact } from "@content/contact";
import { home } from "@content/home";

/**
 * The invitation. Warm blush section, Cormorant italic, and the second (and
 * final) handwritten accent on the page: the sign-off.
 */
export function ContactCTATender() {
  return (
    <section className="bg-[var(--color-bg-alt)]" aria-label="Reach out">
      <Container className="py-24 text-center lg:py-32">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center">
          <h2 className="h1-hero text-[var(--color-ink)]">{home.contactCta.title}</h2>
          <p className="body-lead mt-6 max-w-xl">{home.contactCta.body}</p>
          <div className="mt-9">
            <Button href={contact.bookingUrl} external variant="primary">
              Book a consultation
            </Button>
          </div>
          <div className="mt-8">
            <HandwrittenAccent>{`— ${practitioner.firstName}`}</HandwrittenAccent>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
