import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { site } from "@content/site";
import { practitioner } from "@content/practitioner";
import { contact } from "@content/contact";

export function HeroWillow() {
  return (
    <section className="relative overflow-hidden" aria-label="Introduction">
      <div className="mx-auto grid w-full max-w-[var(--container-max)] items-center gap-10 px-6 pb-16 pt-10 md:px-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:px-16 lg:pb-28 lg:pt-16">
        {/* Left: content */}
        <div className="order-2 lg:order-1">
          <p className="eyebrow mb-6 flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-[var(--color-terracotta)]" aria-hidden="true" />
            Licensed Therapist · {site.city}, {site.state}
          </p>
          <h1 className="h1-hero text-balance text-[var(--color-ink)]">
            Find the ground beneath the anxiety you&apos;ve been carrying.
          </h1>
          <p className="body-lead mt-7 max-w-xl">{site.tagline}</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href={contact.bookingUrl} external variant="primary">
              Schedule a Consultation
            </Button>
            <Button href="/about" variant="secondary">
              Read More About Me
            </Button>
          </div>
          <p className="mt-6 text-sm text-[var(--color-ink-muted)]">
            Free 15-minute consultation · In-person &amp; virtual across {site.state}
          </p>
        </div>

        {/* Right: portrait */}
        <div className="relative order-1 lg:order-2">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src="/images/portrait.jpg"
              alt={`${practitioner.fullName}, ${practitioner.credentials.join(", ")}, in a calm, naturally lit setting`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />
          </div>
          {/* Sage frame accent, offset behind */}
          <div
            className="absolute -bottom-4 -right-4 -z-10 hidden h-full w-full border border-[var(--color-accent)] lg:block"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
