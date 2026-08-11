import type { Site, NavItem } from "@/lib/types";

export const site: Site = {
  name: "Dr. Naomi Reyes Therapy",
  practiceName: "Dr. Naomi Reyes, LCSW",
  url: "https://drnaomireyes.com",
  city: "Portland",
  state: "OR",
  tagline:
    "Trauma-focused therapy for adults ready to move through what they've survived. EMDR-certified. Portland and online across Oregon.",

  showTestimonials: false,
  showPilcrowCredit: true,

  // Showcase demo. Set to false when forking for a real client so the site
  // can be indexed by search engines.
  demoMode: true,
  brandColorOverride: null,

  /* --- Threshold --- */
  specialty: "Trauma + EMDR",
  specialtyThesis: "Trauma isn't a story you tell. It's a shape your body holds.",
  showWriting: true,
  featuredInLogos: [
    { name: "The Atlantic" },
    { name: "Psychology Today" },
    { name: "NPR" },
    { name: "The Cut" },
  ],
};

export const nav: NavItem[] = [
  { label: "The Work", href: "/the-work" },
  { label: "Approach", href: "/approach" },
  { label: "Is This You?", href: "/is-this-you" },
  { label: "Working Together", href: "/working-together" },
  { label: "Investment", href: "/investment" },
  { label: "Writing", href: "/writing" },
  { label: "Contact", href: "/contact" },
];
