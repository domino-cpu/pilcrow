import type { Site, NavItem } from "@/lib/types";

export const site: Site = {
  name: "Dr. Sarah Chen Therapy",
  practiceName: "Sarah Chen, PhD, LMFT",
  url: "https://drsarahchen.com",
  city: "Portland",
  state: "OR",
  tagline:
    "Compassionate, evidence-based therapy for adults working through anxiety, trauma, and life transitions.",

  // Testimonials ship OFF by default. Check your state board's rules before
  // enabling. Testimonials are prohibited or restricted in many jurisdictions.
  showTestimonials: false,

  showPilcrowCredit: true,

  // Showcase demo. Set to false when forking for a real client so the site
  // can be indexed by search engines.
  demoMode: true,

  // Override two or three vars to re-skin per client without touching /src.
  // Example: { accent: "#6a7f8a", terracotta: "#a86b4f" }
  brandColorOverride: null,
};

export const nav: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Approach", href: "/approach" },
  { label: "Fees", href: "/fees" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];
