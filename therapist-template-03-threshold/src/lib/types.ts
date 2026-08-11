/*
  Shared content types for the Willow template.
  The /content/*.ts files are typed against these so a customizer gets
  autocomplete and compile-time errors instead of silent breakage.
*/

export interface BrandColorOverride {
  accent?: string;
  accentDeep?: string;
  ochre?: string;
  ochreDeep?: string;
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
  /** Override two or three vars to re-skin without touching the design system. */
  brandColorOverride: BrandColorOverride | null;

  /* --- Threshold additions --- */
  /** The specialty label, e.g. "Trauma + EMDR". */
  specialty: string;
  /** One-line thesis for the specialty. */
  specialtyThesis: string;
  /** Toggle the /writing page + home preview. */
  showWriting: boolean;
  /** Publication logos for the "Featured In" bar. */
  featuredInLogos: { name: string }[];
}

export interface TheWork {
  thesis: string;
  sections: {
    whatItIs: string[];
    whyThisWork: string[];
    howIThinkAboutIt: { paragraphs: string[]; pullQuote: string };
    whatHealingMeans: string[];
    commonQuestions: { question: string; answer: string }[];
  };
}

export interface Fit {
  yesIf: { title: string; body: string }[];
  maybeNotIf: { title: string; body: string }[];
  referralNote: string;
}

export interface TimelinePhase {
  name: string;
  duration: string;
  description: string;
}

export interface Timeline {
  phases: TimelinePhase[];
  sessionStructure: string;
  betweenSessions: string;
  endingWellNote: string;
}

export interface WritingEntry {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  /** External URL if published elsewhere, else null. */
  external: string | null;
  /** Full essay paragraphs if internal. */
  content: string[];
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
