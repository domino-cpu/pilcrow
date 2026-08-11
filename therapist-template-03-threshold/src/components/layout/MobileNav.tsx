"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { nav } from "@content/site";
import { contact } from "@content/contact";
import { Button } from "@/components/ui/Button";

/**
 * Full-screen takeover mobile navigation. Warm cream background, large serif
 * items. Traps focus, closes on Escape, and restores focus to the trigger.
 */
export function MobileNav() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    // Move focus into the panel.
    panelRef.current?.querySelector<HTMLElement>("a, button")?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className="inline-flex h-11 w-11 items-center justify-center text-[var(--color-ink)]"
      >
        <Menu className="h-6 w-6" aria-hidden="true" />
      </button>

      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-[60] flex flex-col bg-[var(--color-bg)]"
        >
          <div className="flex h-20 items-center justify-end px-6">
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                triggerRef.current?.focus();
              }}
              aria-label="Close menu"
              className="inline-flex h-11 w-11 items-center justify-center text-[var(--color-ink)]"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <nav
            aria-label="Primary mobile"
            className="flex flex-1 flex-col justify-center gap-2 px-8"
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display text-4xl font-normal text-[var(--color-ink)]"
              >
                {item.label}
              </Link>
            ))}
            <Button
              href={contact.bookingUrl}
              external
              variant="primary"
              className="mt-8 self-start"
            >
              Book a Consultation
            </Button>
          </nav>
        </div>
      )}
    </>
  );
}
