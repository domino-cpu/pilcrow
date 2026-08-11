import type { Practitioner } from "@/lib/types";

export const practitioner: Practitioner = {
  firstName: "Sarah",
  lastName: "Chen",
  fullName: "Dr. Sarah Chen",
  credentials: ["PhD", "LMFT"],
  licenseNumber: "LMFT T1234 · Oregon",
  pronouns: "she/her",

  headline:
    "Licensed therapist for adults working through anxiety, trauma, and life transitions.",

  bioShort:
    "I'm a licensed marriage and family therapist in Portland. For the past twelve years I've helped adults find steadier ground through anxiety, trauma, and the transitions that reshape a life. My work is warm, direct, and grounded in evidence.",

  bioMedium:
    "I'm Sarah, a licensed marriage and family therapist in Portland, Oregon. For twelve years I've sat with adults in the middle of hard, tender seasons. Anxiety that won't quiet down. Grief that arrived without warning. The slow work of healing from things that happened long ago. My approach is collaborative and unhurried. We move at the pace your nervous system can actually tolerate, not the pace you think you should be at. I draw on EMDR, Internal Family Systems, and attachment-based work, and I hold all of it lightly, because you are the expert on your own life. I am not here to fix you. You were never broken. I'm here to help you understand yourself with more compassion, and to build a life that feels like yours.",

  bioLong: [
    {
      heading: "How I got here",
      paragraphs: [
        "I did not set out to become a therapist. I set out to understand my own family, which is a slower and more complicated project. I grew up as the person who held everyone together, the one who noticed when the room got quiet. It took me most of my twenties to realize that being the strong one had a cost, and that I had never learned to put any of that weight down.",
        "Graduate school gave me language for what I had lived. Twelve years of practice gave me humility about how much language leaves out. What I know now is that healing is rarely dramatic. It usually looks like a person slowly deciding to be a little kinder to themselves, one session at a time.",
      ],
    },
    {
      heading: "How I work",
      paragraphs: [
        "I work relationally, which is a clinical way of saying that the relationship between us is the medicine, not just the container for it. I pay attention to what happens in the room. I say the quiet thing out loud when it will help. I will never pretend to be a blank screen.",
        "I am trained in EMDR and Internal Family Systems, and I lean on attachment theory to make sense of the patterns that repeat. But I hold the models loosely. You are not a diagnosis, and therapy is not a protocol you get run through. We will find the approach that fits you, and we will change it when it stops fitting.",
      ],
    },
    {
      heading: "Outside the therapy room",
      paragraphs: [
        "Outside of work I am usually in the garden, over-committing to tomatoes I cannot possibly eat, or walking the same loop by the river that I have walked for a decade. I read more poetry than is strictly reasonable. I am the daughter of immigrants, which shapes how I think about belonging, obligation, and the long project of becoming yourself.",
        "I tell you this because I think it matters who your therapist is. Not the credentials. The person. If any of this makes you feel like we might be a fit, I would be glad to hear from you.",
      ],
    },
  ],

  training: [
    {
      credential: "PhD in Clinical Psychology",
      institution: "University of California, Berkeley",
      year: "2013",
    },
    {
      credential: "MA in Marriage and Family Therapy",
      institution: "Lewis & Clark College",
      year: "2010",
    },
    {
      credential: "EMDR Certified Therapist",
      institution: "EMDR International Association (EMDRIA)",
      year: "2016",
    },
    {
      credential: "Level 2 Trained, Internal Family Systems",
      institution: "IFS Institute",
      year: "2019",
    },
  ],

  modalities: [
    "EMDR",
    "Internal Family Systems",
    "Attachment-based",
    "Cognitive Behavioral Therapy",
    "Somatic awareness",
  ],

  approach: [
    "I believe therapy works best when it treats you like a whole person, not a case to be managed. That means we look at the whole picture. Your history, your body, your relationships, the culture you came up in, and the very real conditions of your life right now.",
    "In practice, my work is collaborative and paced. We start by understanding what is actually happening, not just what the symptom looks like on the surface. From there we draw on the tools that fit. Sometimes that is EMDR for a memory that still hijacks the present. Sometimes it is slower relational work to loosen a pattern that has been running for decades.",
    "You set the pace. You always have the option to slow down, and I will help you notice when slowing down is the braver choice.",
  ],

  values: [
    {
      title: "You were never broken",
      body: "The patterns that bring people to therapy usually started as intelligent responses to real circumstances. We treat them with respect, not judgment, even as we work to change them.",
    },
    {
      title: "Pace over pressure",
      body: "Healing that outruns your nervous system does not hold. I would rather move slowly and have the work last than push for a breakthrough that costs you afterward.",
    },
    {
      title: "The relationship is the work",
      body: "Change happens inside a relationship where you feel safe enough to be honest. Building that between us is not a preliminary. It is the therapy.",
    },
    {
      title: "Context is not an excuse, it is the truth",
      body: "Your struggles do not exist in a vacuum. We hold the reality of your circumstances, your identity, and your history without using any of it to let you off the hook for the life you want to build.",
    },
  ],
};
