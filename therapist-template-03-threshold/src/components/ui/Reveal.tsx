"use client";

import { useEffect, useRef, useState, type ReactNode, type ElementType } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  /** Stagger delay in ms. */
  delay?: number;
  /** Optional id for in-page anchors (e.g. /services#anxiety). */
  id?: string;
}

/**
 * Fade-in-up on scroll. Adds .is-visible when the element enters the viewport.
 * The actual animation (and its full removal under prefers-reduced-motion)
 * is handled by the .reveal rules in globals.css, so this stays tiny and
 * degrades gracefully with JS disabled (content is visible via fallback).
 */
export function Reveal({ children, className = "", as: Tag = "div", delay = 0, id }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion: show immediately, skip the observer.
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
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      id={id}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
