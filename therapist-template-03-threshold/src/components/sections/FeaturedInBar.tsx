import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@content/site";
import { practitioner } from "@content/practitioner";

/**
 * Editorial credentials bar. Restrained publication names (text, not raster
 * logos, so it stays crisp and swappable) + the primary credentials.
 */
export function FeaturedInBar() {
  return (
    <section className="py-16 lg:py-24" aria-label="Credentials and press">
      <Container>
        <Reveal className="flex flex-col items-center text-center">
          <p className="eyebrow mb-8">Credentialed. Trained. Seen.</p>

          {site.featuredInLogos.length > 0 && (
            <ul className="mb-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {site.featuredInLogos.map((logo) => (
                <li
                  key={logo.name}
                  className="font-display text-xl italic text-[var(--color-ink-muted)] opacity-70"
                >
                  {logo.name}
                </li>
              ))}
            </ul>
          )}

          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {[...practitioner.credentials, ...practitioner.training.map((t) => t.credential)].map(
              (item, i, arr) => (
                <li
                  key={`${item}-${i}`}
                  className="flex items-center gap-8 text-sm font-medium text-[var(--color-ink)]"
                >
                  {item}
                  {i < arr.length - 1 && (
                    <span className="text-[var(--color-ochre-deep)]" aria-hidden="true">
                      /
                    </span>
                  )}
                </li>
              ),
            )}
          </ul>

          <p className="mt-8 text-sm text-[var(--color-ink-muted)]">
            License <span className="text-[var(--color-ink)]">{practitioner.licenseNumber}</span> ·
            Verify with the state licensing board
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
