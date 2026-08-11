import { Reveal } from "@/components/ui/Reveal";

/**
 * The honest "what I don't do" section. Soft border, slightly muted background.
 * Naming scope limits builds trust and helps the wrong-fit visitor self-select
 * out kindly.
 */
export function ScopeLimitsNote({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <Reveal className="border-l-2 border-[var(--color-accent)] bg-[var(--color-bg-alt)] p-6 lg:p-8">
      <h2 className="h3-sub mb-4 text-[var(--color-ink)]">{title}</h2>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3 leading-relaxed text-[var(--color-ink-muted)]">
            <span aria-hidden="true" className="mt-1 text-[var(--color-blush-deep)]">
              ·
            </span>
            {item}
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
