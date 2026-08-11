import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { WritingEntry } from "@/lib/types";

/** Formats an ISO date string without relying on the current time. */
function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  return `${months[m - 1]} ${d}, ${y}`;
}

export function EssayCard({ entry }: { entry: WritingEntry }) {
  const isExternal = Boolean(entry.external);
  const href = entry.external ?? `/writing/${entry.slug}`;

  const inner = (
    <>
      <div className="flex items-center gap-3">
        <span className="eyebrow">{entry.category}</span>
        <span className="text-sm text-[var(--color-ink-muted)]">{formatDate(entry.date)}</span>
      </div>
      <h3 className="mt-3 font-display text-2xl leading-tight text-[var(--color-ink)] group-hover:text-[var(--color-accent)]">
        {entry.title}
      </h3>
      <p className="mt-3 leading-relaxed text-[var(--color-ink-muted)]">{entry.excerpt}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-ink)]">
        {isExternal ? "Read" : "Read"}
        <ArrowUpRight
          className="h-4 w-4 text-[var(--color-ochre-deep)] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
        {isExternal && <span className="sr-only"> (opens in a new tab)</span>}
      </span>
    </>
  );

  const className =
    "group flex flex-col border-t border-[var(--color-ink)] pt-6";

  return isExternal ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={className}>
      {inner}
    </Link>
  );
}
