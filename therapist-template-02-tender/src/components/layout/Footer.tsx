import Link from "next/link";
import { site, nav } from "@content/site";
import { practitioner } from "@content/practitioner";
import { contact } from "@content/contact";

export function Footer() {
  const year = 2026; // Static to keep the build deterministic; update on customization.

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-alt)]">
      <div className="mx-auto w-full max-w-[var(--container-max)] px-6 py-16 md:px-12 lg:px-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Identity + credentials (verifiable trust) */}
          <div className="lg:col-span-2">
            <p className="font-display text-2xl text-[var(--color-ink)]">
              {site.practiceName}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[var(--color-ink-muted)]">
              {site.tagline}
            </p>
            <dl className="mt-6 space-y-1 text-sm text-[var(--color-ink-muted)]">
              <div className="flex gap-2">
                <dt className="sr-only">Credentials</dt>
                <dd>{practitioner.credentials.join(", ")}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-medium text-[var(--color-ink)]">License</dt>
                <dd>{practitioner.licenseNumber}</dd>
              </div>
            </dl>
          </div>

          {/* Explore */}
          <nav aria-label="Footer">
            <p className="eyebrow mb-4">Explore</p>
            <ul className="space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-ink)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p className="eyebrow mb-4">Get in touch</p>
            <ul className="space-y-2 text-sm text-[var(--color-ink-muted)]">
              <li>
                <a href={`mailto:${contact.email}`} className="hover:text-[var(--color-ink)]">
                  {contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`} className="hover:text-[var(--color-ink)]">
                  {contact.phone}
                </a>
              </li>
              {!contact.virtualOnly && <li>{contact.address}</li>}
              <li className="pt-2">{contact.officeHours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-[var(--color-border)] pt-8 text-xs text-[var(--color-ink-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.practiceName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {site.showPilcrowCredit && (
              <a
                href="https://pilcrowstudio.design"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--color-ink)]"
              >
                Site by Pilcrow
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
