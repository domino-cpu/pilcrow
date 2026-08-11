"use client";

import { useState, useId } from "react";
import { Plus, Minus } from "lucide-react";
import type { Faq } from "@/lib/types";

/**
 * Accessible accordion for the FAQ page. Each item is a real button that
 * toggles an aria-controlled region. Keyboard operable, screen-reader friendly.
 * Groups are rendered by category by the parent.
 */
export function Accordion({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const baseId = useId();

  return (
    <div className="divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
      {items.map((item, i) => {
        const isOpen = open === i;
        const btnId = `${baseId}-btn-${i}`;
        const panelId = `${baseId}-panel-${i}`;
        return (
          <div key={item.question}>
            <h3>
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="font-display text-xl text-[var(--color-ink)]">
                  {item.question}
                </span>
                <span
                  className="mt-1 shrink-0 text-[var(--color-terracotta)]"
                  aria-hidden="true"
                >
                  {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              hidden={!isOpen}
              className="pb-6 pr-10"
            >
              <p className="max-w-2xl leading-relaxed text-[var(--color-ink-muted)]">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
