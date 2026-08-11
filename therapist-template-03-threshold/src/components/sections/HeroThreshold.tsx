"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { site } from "@content/site";
import { contact } from "@content/contact";

/**
 * Magazine-cover hero. The H1 reveals via a "curtain wipe" (an ochre panel
 * sweeps across and reveals the text). Runs once on load; the H1 is fully
 * visible without JS and under prefers-reduced-motion (see globals.css).
 */
export function HeroThreshold() {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    // Kick the animation just after mount so the curtain sweeps on load.
    const t = setTimeout(() => setRevealed(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="border-b border-[var(--color-border)]" aria-label="Introduction">
      <div className="mx-auto grid w-full max-w-[var(--container-max)] gap-10 px-6 pb-14 pt-12 md:px-14 lg:grid-cols-[1.5fr_1fr] lg:items-end lg:gap-12 lg:px-20 lg:pb-20 lg:pt-16">
        <div>
          <p className="eyebrow mb-6">{site.specialty}</p>
          <h1 className="h1-hero text-[var(--color-ink)]">
            <span className={`curtain ${revealed ? "is-revealed" : ""}`}>
              <span className="curtain-text">The work of coming</span>
            </span>{" "}
            <span className={`curtain ${revealed ? "is-revealed" : ""}`}>
              <span className="curtain-text">back to yourself.</span>
            </span>
          </h1>
          <p className="body-lead mt-8 max-w-2xl">{site.tagline}</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href={contact.bookingUrl} external variant="primary">
              Schedule a consultation
            </Button>
            <Button href="/the-work" variant="secondary">
              Read about the work
            </Button>
          </div>
        </div>

        <div className="relative aspect-[4/5] w-full overflow-hidden lg:aspect-[3/4]">
          <Image
            src="/images/portrait.jpg"
            alt="Dr. Naomi Reyes, trauma specialist and EMDR-certified therapist"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
