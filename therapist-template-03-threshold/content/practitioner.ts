import type { Practitioner } from "@/lib/types";

export const practitioner: Practitioner = {
  firstName: "Naomi",
  lastName: "Reyes",
  fullName: "Dr. Naomi Reyes",
  credentials: ["PhD", "LCSW"],
  licenseNumber: "LCSW L5521 · Oregon",
  pronouns: "she/her",

  headline:
    "Trauma-focused therapy for adults ready to move through what they've survived.",

  bioShort:
    "I'm a trauma specialist and EMDR-certified therapist in Portland. For fifteen years I've worked with adults carrying the long aftermath of trauma, helping them move from surviving to living. This is the one thing I do, and I do it with everything I have.",

  bioMedium:
    "I'm Dr. Naomi Reyes, a trauma specialist and EMDR-certified therapist. My practice is built around one hard thing done well: helping adults move through trauma toward a life that feels like theirs again. I trained where the field is deepest, in EMDR, Somatic Experiencing, and parts work, and I've spent fifteen years refining how those approaches fit together. I don't treat a little of everything. I go deep on this, because the people I work with deserve someone who has.",

  bioLong: [
    {
      heading: "Why trauma",
      paragraphs: [
        "I came to this work through the body, and through a long-held belief that the people most changed by what happened to them are also the most capable of profound repair.",
        "Fifteen years in, I am more convinced than ever that trauma is not a life sentence. It is an unfinished response the body is still trying to complete. Our work is to help it finish.",
      ],
    },
    {
      heading: "How I trained",
      paragraphs: [
        "I am EMDR-certified through EMDRIA, trained in Somatic Experiencing, and grounded in Internal Family Systems. I keep training, because this field keeps deepening, and the people I serve deserve current, rigorous care.",
      ],
    },
  ],

  training: [
    { credential: "PhD in Clinical Social Work", institution: "Smith College", year: "2011" },
    { credential: "EMDR Certified Therapist", institution: "EMDR International Association (EMDRIA)", year: "2014" },
    { credential: "Somatic Experiencing Practitioner (SEP)", institution: "Somatic Experiencing International", year: "2017" },
    { credential: "Level 2 Trained, Internal Family Systems", institution: "IFS Institute", year: "2020" },
  ],

  modalities: [
    "EMDR",
    "Somatic Experiencing",
    "Internal Family Systems",
    "Attachment-focused EMDR",
  ],

  approach: [
    "I believe trauma lives in the body long after the mind has tried to move on. So we work at the body level, not just the story level, and we go only as fast as your nervous system can safely hold.",
    "My work is structured but never rigid. We build stability first, always. Only once you feel resourced do we turn toward the harder material, and we do it together, with your foot on the brake the whole way.",
  ],

  values: [
    {
      title: "Safety is not a preliminary",
      body: "Stabilization is the work, not the warm-up. We build enough safety that turning toward what happened becomes possible, and never re-traumatizing.",
    },
    {
      title: "The body keeps the score, and the body can settle it",
      body: "What lives below language gets tended below language. We work somatically, so healing is something you feel, not just understand.",
    },
    {
      title: "Depth over breadth",
      body: "I do one thing. That focus is what lets me offer care that a generalist, spread across a dozen specialties, simply cannot.",
    },
  ],
};
