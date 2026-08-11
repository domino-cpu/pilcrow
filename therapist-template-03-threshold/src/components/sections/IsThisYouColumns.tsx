import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { fit } from "@content/fit";

interface IsThisYouColumnsProps {
  /** Cap items per column (home preview shows fewer). */
  limit?: number;
  /** Show the "read the longer version" link (home only). */
  showLink?: boolean;
  /** Section eyebrow. */
  eyebrow?: string;
  /** Show the referral note under the columns (full page). */
  showReferral?: boolean;
}

export function IsThisYouColumns({
  limit,
  showLink = false,
  eyebrow = "Is this the fit?",
  showReferral = false,
}: IsThisYouColumnsProps) {
  const yes = limit ? fit.yesIf.slice(0, limit) : fit.yesIf;
  const maybe = limit ? fit.maybeNotIf.slice(0, limit) : fit.maybeNotIf;

  return (
    <section className="py-20 lg:py-32" aria-label="Is this you">
      <Container>
        <Reveal className="mb-14">
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Yes if */}
          <Reveal>
            <h3 className="mb-8 font-display text-3xl text-[var(--color-ink)]">Yes, if..</h3>
            <ul className="space-y-8">
              {yes.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <Check
                    className="mt-1 h-5 w-5 shrink-0 text-[var(--color-accent)]"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-medium text-[var(--color-ink)]">{item.title}</p>
                    <p className="mt-1 leading-relaxed text-[var(--color-ink-muted)]">
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Maybe not if */}
          <Reveal delay={120}>
            <h3 className="mb-8 font-display text-3xl text-[var(--color-ink-muted)]">
              Maybe not, if..
            </h3>
            <ul className="space-y-8">
              {maybe.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span
                    className="mt-1 h-5 w-5 shrink-0 text-center text-[var(--color-ochre-deep)]"
                    aria-hidden="true"
                  >
                    —
                  </span>
                  <div>
                    <p className="font-medium text-[var(--color-ink)]">{item.title}</p>
                    <p className="mt-1 leading-relaxed text-[var(--color-ink-muted)]">
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {showReferral && (
          <Reveal className="mt-14">
            <p className="reading text-[var(--color-ink-muted)]">{fit.referralNote}</p>
          </Reveal>
        )}

        {showLink && (
          <Reveal className="mt-12">
            <Link
              href="/is-this-you"
              className="group inline-flex items-center gap-2 text-sm font-medium text-[var(--color-ink)]"
            >
              Read the longer version
              <ArrowRight
                className="h-4 w-4 text-[var(--color-ochre-deep)] transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
