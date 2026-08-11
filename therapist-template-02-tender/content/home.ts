/**
 * Tender homepage microcopy. Kept in the content layer so the whole home page
 * is customizable without touching /src.
 */

export const home = {
  hero: {
    // Caveat handwritten eyebrow.
    greeting: "Hi, I'm Maya",
    // Cormorant italic. The opening line of a letter, not a headline.
    title: "You've been carrying a lot.",
    // First-person opening prose. A voice, not a tagline.
    opening: [
      "I'm a therapist for adults who've spent a long time being the strong one.",
      "If you're tired, and you're not quite sure how to say why, keep reading. There's no rush here.",
    ],
  },

  // "IF YOU'RE HERE, YOU MIGHT BE.." — statements the ideal client would say.
  ifYoureHere: {
    eyebrow: "If you're here, you might be",
    items: [
      "exhausted from holding everyone else together.",
      "stuck in a pattern you thought you'd already worked through.",
      "grieving something you haven't quite named yet.",
      "wondering if therapy is even for someone like you.",
    ],
    reassurance: "You're in the right place.",
    handNote: "with me here",
  },

  // "HOW THIS WORKS" — three-step narrative.
  howThisWorks: {
    eyebrow: "How this works",
    title: "The first few steps",
    steps: [
      {
        n: "01",
        title: "We say hello",
        body: "We meet for a free consultation, a short call to see if we click. No commitment, no intake forms.",
      },
      {
        n: "02",
        title: "We begin",
        body: "If it feels right, we book a first session and start where you are. You set the pace.",
      },
      {
        n: "03",
        title: "We go at your pace",
        body: "We work slowly and honestly. No scripts, no rushing you toward a version of better that isn't yours.",
      },
    ],
    handNote: "your pace, always",
  },

  // Contact CTA at the bottom of the home page.
  contactCta: {
    title: "Whenever you're ready.",
    body: "I offer a free consultation. No pressure, no expectation. Just a chance to see if we're a good fit.",
  },
};
