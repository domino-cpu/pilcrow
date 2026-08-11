/*
  Shared content types for the Willow template.
  The /content/*.ts files are typed against these so a customizer gets
  autocomplete and compile-time errors instead of silent breakage.
*/

export interface BrandColorOverride {
  accent?: string;
  accentDeep?: string;
  terracotta?: string;
  terracottaDeep?: string;
}

export interface Site {
  name: string;
  practiceName: string;
  url: string;
  city: string;
  state: string;
  tagline: string;
  /** Many licensing boards restrict testimonials. Keep false unless verified. */
  showTestimonials: boolean;
  /** Set to false to hide the small "Site by Pilcrow" footer credit. */
  showPilcrowCredit: boolean;
  /** true = showcase demo: noindex + block crawlers. Set false for a real client. */
  demoMode: boolean;
  /** Override two or three vars to re-skin without touching the design system. */
  brandColorOverride: BrandColorOverride | null;
}

export interface TrainingEntry {
  credential: string;
  institution: string;
  year: string;
}

export interface Practitioner {
  firstName: string;
  lastName: string;
  fullName: string;
  credentials: string[];
  licenseNumber: string;
  pronouns: string;
  headline: string;
  /** 40-60 words, home hero / meta. */
  bioShort: string;
  /** 150-200 words, about preview. */
  bioMedium: string;
  /** 400-600 words, full about page. Array of paragraphs, grouped by heading. */
  bioLong: { heading: string; paragraphs: string[] }[];
  training: TrainingEntry[];
  modalities: string[];
  /** A few paragraphs of approach copy. */
  approach: string[];
  values: { title: string; body: string }[];
}

export interface Service {
  slug: string;
  /** Lucide icon name. */
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  whoThisIsFor: string;
  howWeWork: string;
}

export interface Fees {
  sessionRate: number;
  sessionLength: string;
  consultationLength: string;
  consultationFree: boolean;
  insuranceAccepted: string[];
  outOfNetworkNote: string;
  superbillAvailable: boolean;
  slidingScale: {
    available: boolean;
    note: string;
  };
  cancellationPolicy: string;
  goodFaithEstimateNote: string;
}

export interface Faq {
  category: string;
  question: string;
  answer: string;
}

export interface Contact {
  email: string;
  phone: string;
  address: string;
  virtualOnly: boolean;
  officeHours: string;
  responseTime: string;
  bookingUrl: string;
  bookingPlatform: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Modality {
  name: string;
  description: string;
}
