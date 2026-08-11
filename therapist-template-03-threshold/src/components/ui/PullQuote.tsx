/**
 * Large italic Newsreader pull-quote. Gives long-form essays magazine rhythm.
 * Rendered as an aside so screen readers can skip it (the quote repeats body
 * text) without losing meaning.
 */
export function PullQuote({ children }: { children: string }) {
  return (
    <aside className="my-12 border-l-2 border-[var(--color-ochre-deep)] pl-6 lg:my-16 lg:pl-8">
      <p className="callout-quote text-[var(--color-accent)]">{children}</p>
    </aside>
  );
}
