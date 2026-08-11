import type { Site, NavItem } from "@/lib/types";

export const site: Site = {
  name: "Maya Okonkwo Therapy",
  practiceName: "Maya Okonkwo, LPC",
  url: "https://mayaokonkwo.com",
  city: "Austin",
  state: "TX",
  tagline:
    "A therapist for adults who've spent a long time being the strong one. If you're tired, and you're not sure how to say why, you're in the right place.",

  // Testimonials ship OFF by default. Check your state board's rules before
  // enabling. Testimonials are prohibited or restricted in many jurisdictions.
  showTestimonials: false,

  showPilcrowCredit: true,

  // Showcase demo. Set to false when forking for a real client so the site
  // can be indexed by search engines.
  demoMode: true,

  brandColorOverride: null,

  // The Caveat handwritten accents. Keep sparing (max ~2 per page).
  handwrittenAccent: true,

  narrativeBioStyle: "essay",
};

export const nav: NavItem[] = [
  { label: "My story", href: "/story" },
  { label: "How I work", href: "/how-i-work" },
  { label: "Who I work with", href: "/who-i-work-with" },
  { label: "Fees", href: "/fees" },
  { label: "Contact", href: "/contact" },
];
