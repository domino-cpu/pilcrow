import type { Modality } from "@/lib/types";

/**
 * The modalities Threshold's specialist uses, explained with authority but
 * without jargon. Assumes an intelligent, self-aware reader.
 */
export const modalities: Modality[] = [
  {
    name: "EMDR",
    description:
      "Eye Movement Desensitization and Reprocessing helps the brain finish processing an experience that got stuck in its raw, still-live form. Using bilateral stimulation, we let a memory move from feeling like it's happening now to feeling like it happened then. It is among the most researched trauma treatments in existence, and I am EMDRIA-certified in it.",
  },
  {
    name: "Somatic Experiencing",
    description:
      "Trauma is an incomplete survival response held in the body. Somatic Experiencing works directly with the nervous system, tracking sensation and the small, natural movements toward discharge and settling that the body was never able to complete. It is slow, precise, and often profound.",
  },
  {
    name: "Internal Family Systems",
    description:
      "Trauma fragments us into parts: the one that protects, the one that carries the pain, the one that manages. IFS helps you turn toward each with curiosity rather than judgment. In trauma work, it offers a way to approach the most wounded parts without being overwhelmed by them.",
  },
  {
    name: "Attachment-focused EMDR",
    description:
      "For trauma rooted in early relationships, standard protocols aren't enough. Attachment-focused EMDR weaves in the repair of the relational wounds underneath, so we address not just discrete events but the developmental ground they grew from.",
  },
];

export const sessionWalkthrough = {
  intro:
    "People considering trauma work want to know what actually happens in the room. Here is an honest picture.",
  steps: [
    {
      title: "We check in and resource",
      body: "Every session begins by making sure you're grounded and present. In trauma work this isn't a nicety, it's the safety mechanism. We don't proceed until you're steady.",
    },
    {
      title: "We work at the edge",
      body: "We turn toward the material at the edge of what you can tolerate, never past it. Whether through EMDR, somatic tracking, or parts work, we let your system do its processing with support.",
    },
    {
      title: "We close, grounded",
      body: "We never leave you cracked open. The final minutes are for settling, orienting back to the present, and making sure you're resourced before you step back into your day.",
    },
  ],
};
