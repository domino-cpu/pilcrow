import type { Practitioner } from "@/lib/types";

export const practitioner: Practitioner = {
  firstName: "Maya",
  lastName: "Okonkwo",
  fullName: "Maya Okonkwo",
  credentials: ["LPC"],
  licenseNumber: "LPC #78542 · Texas",
  pronouns: "she/her",

  headline:
    "I help adults who grew up as the responsible one find their way back to themselves.",

  bioShort:
    "I'm Maya, a licensed professional counselor in Austin. I work with people who learned early to be the strong one, and who are quietly exhausted by it. My style is warm, honest, and unhurried.",

  bioMedium:
    "I'm a licensed professional counselor in Austin, Texas. I came to this work through my own long road, and I bring all of it into the room. Warmth, directness, and a deep respect for how hard you've already worked to hold everything together.",

  // Not heavily used in Tender (the /story essay carries the bio), kept for parity.
  bioLong: [
    {
      heading: "A little of my story",
      paragraphs: [
        "See my full story for the longer version. In short: I became a therapist because I needed one, and because the work of coming home to myself turned out to be the work I most wanted to do alongside other people.",
      ],
    },
  ],

  training: [
    {
      credential: "MA in Clinical Mental Health Counseling",
      institution: "St. Edward's University",
      year: "2021",
    },
    {
      credential: "Licensed Professional Counselor",
      institution: "Texas State Board of Examiners",
      year: "2023",
    },
    {
      credential: "Trained in Internal Family Systems (Level 1)",
      institution: "IFS Institute",
      year: "2024",
    },
  ],

  modalities: [
    "Internal Family Systems",
    "Attachment-based",
    "Somatic awareness",
    "Relational therapy",
  ],

  approach: [
    "I don't believe you're broken. I believe you learned, very early and very well, how to survive something. The habits that are wearing you out now once kept you safe. We start there, with respect.",
    "My work is warm and collaborative. I'll tell you what I notice. I'll ask the question under the question. And I'll move at a pace your body can actually keep up with, because healing that outruns your nervous system doesn't last.",
  ],

  values: [
    {
      title: "You learned this for a reason",
      body: "The patterns that bring you here made sense once. We treat them with curiosity, not shame.",
    },
    {
      title: "Slow is not the same as stuck",
      body: "We move at the pace that holds. Sometimes the bravest thing is to slow down.",
    },
    {
      title: "You get to be a whole person here",
      body: "Your culture, your history, your contradictions. All of it is welcome in this room.",
    },
  ],

  /* --- Tender additions --- */

  storyBio: [
    "For most of my life, I was the one who held things together. The oldest daughter. The one who noticed when the room went quiet, who could feel a mood change three rooms away. I was good at it. I was so good at it that I didn't notice, for a long time, that I had never learned to put any of it down.",
    "It caught up with me in my late twenties, the way it usually does. Not in a dramatic collapse. In a slow, quiet tiredness that I couldn't explain to anyone, least of all myself. I had a good job and good friends and a life that looked, from the outside, like it was working. Inside, I felt like I was performing a version of myself that everyone else needed, and I had lost track of the one underneath.",
    "I went to therapy because I ran out of other ideas. I expected to be fixed. Instead, slowly, I was met. My therapist didn't try to talk me out of anything. She just kept showing up, curious and unhurried, until I started to believe that the tired part of me was allowed to exist. That changed everything. Not overnight. But it changed the direction I was facing.",
    "I trained as a counselor because I wanted to offer other people what I'd been given. A place to stop performing. Someone who wouldn't flinch. I work now with adults who grew up the way I did, holding more than a child should have to, and who are quietly worn out from a lifetime of being the strong one.",
    "I'm still learning. I always will be. I don't have your answers, and I'd be suspicious of anyone who claimed to. What I have is a deep respect for how hard you've already worked to survive, and a genuine belief that you don't have to keep carrying it all alone.",
    "If any of this sounds like you, I'd love to hear from you. There's no pressure here. Just a chance to see if this feels like the right room.",
  ],

  outsideTheRoomBio: [
    "Outside of work, I'm usually cooking something ambitious and slightly beyond my skill level, or re-reading a novel I've already read four times because I find new things in it every time.",
    "I'm the daughter of Nigerian immigrants, which shapes how I think about family, obligation, and the long, tender work of becoming your own person without losing where you came from.",
    "I keep a pile of half-finished journals and a garden that survives mostly on optimism. I believe rest is not a reward you earn. It's a thing you're allowed to need.",
  ],

  whatIBelieve: [
    "I believe most of what we call symptoms are old survival strategies that are still running long after the danger has passed. The anxious part, the part that shuts down, the part that keeps you busy. None of them are the enemy. They're trying to help.",
    "I believe healing happens in relationship. Not because I have some special insight into your life, but because something shifts when you're truly met by another person who isn't afraid of what you're carrying.",
    "And I believe you already have more wisdom about your own life than anyone else ever will. My job isn't to hand you answers. It's to help you hear the ones that are already in you.",
  ],

  whatIDontDo: [
    "I'm not a crisis service. If you're in immediate danger, please call or text 988 or go to your nearest emergency room.",
    "I don't prescribe or manage medication. If that's part of what would help, I'll happily coordinate with a psychiatrist or your doctor.",
    "I don't do court-ordered evaluations, custody assessments, or forensic work.",
    "I don't work with active substance dependence as a primary focus, though I'm glad to help you find someone who specializes in it.",
  ],
};
