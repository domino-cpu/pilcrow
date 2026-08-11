import type { WritingEntry } from "@/lib/types";

/**
 * Thought-leadership essays. `external` = URL if published elsewhere (opens in
 * a new tab); otherwise the essay renders on-site from `content`.
 * Dates are ISO strings; they are formatted for display, never used for sorting
 * at build time (kept in intended order here).
 */
export const writing: WritingEntry[] = [
  {
    slug: "on-slow-healing",
    title: "On slow healing",
    date: "2026-05-12",
    category: "Essays",
    excerpt:
      "We have built a culture that treats healing like a project with a deadline. Trauma does not read the calendar.",
    external: null,
    content: [
      "We have built a culture that treats healing like a project with a deadline. Ten sessions, a workbook, a breakthrough, done. It is a tidy story, and it is mostly a lie.",
      "Trauma does not read the calendar. The nervous system settles on its own timeline, and that timeline is set by safety, not by willpower. The most common mistake I see, in clients and in myself, is trying to go faster than is safe, and then treating the resulting overwhelm as failure.",
      "Slow is not the same as stuck. Slow is often the shortest path that actually holds. The work that lasts is the work your system could metabolize as it went.",
    ],
  },
  {
    slug: "the-body-is-not-a-metaphor",
    title: "The body is not a metaphor",
    date: "2026-03-03",
    category: "Essays",
    excerpt:
      "When we say trauma is stored in the body, we are not being poetic. We are being precise.",
    external: null,
    content: [
      "When we say trauma is stored in the body, we are not being poetic. We are being precise.",
      "The startle response, the shallow breath, the gut that drops before the mind catches up, these are not symbols of distress. They are the distress, living in tissue and reflex. This is why talking, on its own, so often falls short. You cannot reason with a reflex.",
      "Working at the body level is not a softer or less rigorous approach. It is where the actual mechanism of trauma lives, and therefore where the actual repair has to happen.",
    ],
  },
  {
    slug: "what-emdr-actually-does",
    title: "What EMDR actually does",
    date: "2026-01-20",
    category: "Explainers",
    excerpt:
      "EMDR sounds strange until you understand what it is quietly doing underneath the eye movements.",
    external: null,
    content: [
      "EMDR sounds strange until you understand what it is quietly doing underneath the eye movements. People hear about it and picture something almost hypnotic. The reality is more grounded, and more interesting.",
      "The bilateral stimulation appears to help the brain do what it does naturally in REM sleep, moving an experience from the raw, still-live storage of trauma into the settled storage of ordinary memory. The event stops feeling like it is happening now and starts feeling like it happened then.",
      "You stay awake, aware, and in control the whole time. It is not magic. It is a way of helping an interrupted process finally complete.",
    ],
  },
];
