import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  subhead?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

/**
 * Eyebrow + H2 + optional subhead. Reused across nearly every section.
 */
export function SectionHeader({
  eyebrow,
  title,
  subhead,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  const alignment = align === "center" ? "text-center mx-auto items-center" : "text-left";
  return (
    <Reveal className={`flex flex-col ${alignment} ${className}`}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="h2-section text-[var(--color-ink)]">{title}</h2>
      {subhead && (
        <p className={`body-lead mt-5 max-w-2xl ${align === "center" ? "mx-auto" : ""}`}>
          {subhead}
        </p>
      )}
    </Reveal>
  );
}
