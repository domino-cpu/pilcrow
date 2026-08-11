import { BadgeCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { practitioner } from "@content/practitioner";

export function CredentialsBar() {
  // Distinct credential chips: degrees, license, and each training credential.
  const items = [
    ...practitioner.credentials,
    ...practitioner.training.map((t) => t.credential),
  ];

  return (
    <section className="py-16 lg:py-24" aria-label="Credentials">
      <Container>
        <Reveal className="flex flex-col items-center text-center">
          <p className="eyebrow mb-8 flex items-center gap-2">
            <BadgeCheck className="h-4 w-4 text-[var(--color-accent-deep)]" aria-hidden="true" />
            Credentialed, Licensed, Verified
          </p>

          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {items.map((item, i) => (
              <li
                key={`${item}-${i}`}
                className="font-display text-lg text-[var(--color-ink)] lg:text-xl"
              >
                {item}
                {i < items.length - 1 && (
                  <span className="ml-8 text-[var(--color-terracotta)]" aria-hidden="true">
                    ·
                  </span>
                )}
              </li>
            ))}
          </ul>

          <p className="mt-8 text-sm text-[var(--color-ink-muted)]">
            License <span className="text-[var(--color-ink)]">{practitioner.licenseNumber}</span> ·
            Verify with your state licensing board
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
