import type { FirstSession } from "@/lib/types";

export const firstSession: FirstSession = {
  intro:
    "The first session is the one people are most nervous about. So here's exactly what it's like, so there are fewer surprises.",

  narrative: [
    "We start slow. There's no form you have to perform, and no right way to begin. Usually I'll ask what brought you here, and we'll go from there, at whatever pace feels okay to you.",
    "You won't have to tell me your whole life story in the first hour. You get to decide what to share and when. If something feels like too much, we can leave it for another day. I'll be tracking that with you.",
    "Mostly, the first session is about getting a feel for each other. You're interviewing me as much as I'm getting to know you. By the end, you'll have a sense of whether this feels like a room you'd want to come back to. And that's the only thing you need to decide.",
  ],

  fears: [
    {
      question: "What if I don't know where to start?",
      answer:
        "That's completely normal, and it's my job to help. You don't need a tidy explanation. We can start with 'I don't know, I just feel off,' and work from there.",
    },
    {
      question: "What if I cry?",
      answer:
        "Then you cry, and it's welcome. There are tissues, there's no rush, and there's nothing to be embarrassed about. Feeling something is usually a sign we're near what matters.",
    },
    {
      question: "What if we're not a good fit?",
      answer:
        "Then I'll say so, kindly, and help you find someone who is. A good fit matters more than almost anything else in therapy, and I'd never want you to stay out of politeness.",
    },
  ],
};
