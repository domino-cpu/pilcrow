"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { site } from "@content/site";

interface HandwrittenAccentProps {
  children: ReactNode;
  className?: string;
}

/**
 * The human hand on the page. Renders Caveat text with a small hand-drawn
 * underline that draws itself in when scrolled into view. Respects
 * site.handwrittenAccent (global off switch). Use SPARINGLY (max ~2 per page).
 *
 * The underline is fully visible without JS and under prefers-reduced-motion
 * (see the .scribble rules in globals.css).
 */
export function HandwrittenAccent({ children, className = "" }: HandwrittenAccentProps) {
  const ref = useRef<SVGSVGElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  if (!site.handwrittenAccent) return null;

  return (
    <span className={`hand relative inline-block ${className}`}>
      {children}
      <svg
        ref={ref}
        className={`scribble absolute -bottom-2 left-0 h-2 w-full ${visible ? "is-visible" : ""}`}
        viewBox="0 0 200 8"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M2 5 C 40 1, 80 7, 120 3 S 180 2, 198 5"
          pathLength={1}
          stroke="var(--color-blush)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
