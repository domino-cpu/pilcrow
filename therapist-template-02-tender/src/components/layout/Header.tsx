"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { site, nav } from "@content/site";
import { contact } from "@content/contact";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "./MobileNav";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-[var(--color-border)] bg-[var(--color-bg)]/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-[var(--container-max)] items-center justify-between px-6 md:px-12 lg:px-16">
        <Link
          href="/"
          className="font-display text-xl font-medium tracking-tight text-[var(--color-ink)]"
        >
          {site.practiceName}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative font-body text-sm font-medium text-[var(--color-ink)]"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--color-blush)] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Button href={contact.bookingUrl} external variant="primary" className="ml-2">
            Book a Consultation
          </Button>
        </nav>

        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
