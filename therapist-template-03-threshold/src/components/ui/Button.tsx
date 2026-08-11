import type { ReactNode } from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  children: ReactNode;
  href: string;
  variant?: Variant;
  /** Set for links leaving the site (e.g. the EHR booking platform). */
  external?: boolean;
  className?: string;
  ariaLabel?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 font-body text-sm font-medium tracking-wide transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-[3px]";

const variants: Record<Variant, string> = {
  // Deep teal background, cream text — authoritative primary CTA.
  primary:
    "px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] hover:bg-[var(--color-accent-deep)]",
  // Teal border, ink text.
  secondary:
    "px-8 py-4 border border-[var(--color-accent)] text-[var(--color-ink)] hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)]",
  // Underlined text only, ochre underline.
  ghost:
    "text-[var(--color-ink)] underline decoration-[var(--color-ochre-deep)] decoration-1 underline-offset-4 hover:decoration-2",
};

export function Button({
  children,
  href,
  variant = "primary",
  external = false,
  className = "",
  ariaLabel,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
