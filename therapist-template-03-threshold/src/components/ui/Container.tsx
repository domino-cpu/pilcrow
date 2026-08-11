import type { ReactNode, ElementType } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

/**
 * Standard page container. Max-width 1240px, responsive inline padding
 * (24 / 48 / 64) per the Willow spacing rhythm.
 */
export function Container({ children, className = "", as: Tag = "div" }: ContainerProps) {
  return (
    <Tag
      className={`mx-auto w-full max-w-[var(--container-max)] px-6 md:px-12 lg:px-16 ${className}`}
    >
      {children}
    </Tag>
  );
}
