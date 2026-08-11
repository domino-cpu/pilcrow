/**
 * Skip-to-content link. Visually hidden until focused, then appears top-left.
 * First focusable element on every page for keyboard and screen-reader users.
 */
export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-[var(--color-ink)] focus:px-4 focus:py-2 focus:text-sm focus:text-[var(--color-bg)]"
    >
      Skip to content
    </a>
  );
}
