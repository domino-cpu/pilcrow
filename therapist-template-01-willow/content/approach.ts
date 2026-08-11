import type { Modality } from "@/lib/types";

/**
 * Plain-language explanations of each modality for the /approach page.
 * Keep these jargon-free. A prospective client, not a clinician, is reading.
 */
export const modalities: Modality[] = [
  {
    name: "EMDR",
    description:
      "EMDR helps the brain reprocess a memory that still feels like it's happening now. Using gentle back-and-forth attention (eyes, sound, or touch), we let a stuck experience settle into the past where it belongs. It's well-researched for trauma, and we only begin it once you feel steady and resourced enough.",
  },
  {
    name: "Internal Family Systems (IFS)",
    description:
      "IFS starts from the idea that you're not one single voice but a system of parts. The anxious part, the critic, the one that shuts down. None of them are the enemy. We get to know them with curiosity instead of trying to silence them, and things soften from there.",
  },
  {
    name: "Attachment-based therapy",
    description:
      "The way we learned to connect as children quietly shapes how we love and protect ourselves as adults. Attachment work traces those patterns back to where they started, grieves what they cost, and helps you practice a more secure way of being close.",
  },
  {
    name: "Cognitive Behavioral Therapy (CBT)",
    description:
      "CBT looks at the loop between what we think, how we feel, and what we do. When anxiety or low mood has a grip, CBT gives you concrete tools to interrupt the spiral and test the stories your mind is telling. I use it flexibly, as one tool among several.",
  },
  {
    name: "Somatic awareness",
    description:
      "So much of what we carry lives in the body before it reaches words. Somatic work brings gentle attention to sensation, breath, and the nervous system, so healing isn't only something we think about but something you can actually feel shift.",
  },
];

/**
 * The "what a session looks like" walkthrough for the /approach page.
 */
export const sessionWalkthrough = {
  intro:
    "People often ask what actually happens in a session. Here's an honest picture, though every hour is a little different.",
  steps: [
    {
      title: "We start where you are",
      body: "We usually begin by checking in on how the week landed and what's present for you today. There's no script you have to follow and no right way to show up.",
    },
    {
      title: "We follow what matters",
      body: "From there we go where the material leads. Sometimes that's processing a specific memory. Sometimes it's making sense of a pattern, or simply having a place to think out loud with someone who's paying close attention.",
    },
    {
      title: "We close with care",
      body: "Toward the end I make sure you're grounded before you head back into your day. When we're doing deeper trauma work, this closing is not optional. We don't leave you cracked open.",
    },
  ],
};
