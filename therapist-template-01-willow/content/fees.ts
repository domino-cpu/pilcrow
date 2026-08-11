import type { Fees } from "@/lib/types";

export const fees: Fees = {
  sessionRate: 225,
  sessionLength: "50 minutes",
  consultationLength: "15 minutes",
  consultationFree: true,

  insuranceAccepted: ["Blue Cross Blue Shield", "Aetna", "PacificSource"],

  outOfNetworkNote:
    "If I'm not in-network with your plan, many clients still receive partial reimbursement through their out-of-network benefits. I'm happy to walk you through how to check what your plan covers before we begin.",

  superbillAvailable: true,

  slidingScale: {
    available: true,
    note: "I hold a limited number of sliding-scale spots for clients for whom the full fee is a genuine barrier. When these are full there may be a short waitlist. Please ask. I would rather have the conversation than have cost quietly turn you away.",
  },

  cancellationPolicy:
    "Life happens, and I ask for 48 hours' notice to cancel or reschedule. Sessions cancelled with less than 48 hours' notice are charged the full fee, since I hold that time for you and cannot usually fill it. I make exceptions for genuine emergencies.",

  goodFaithEstimateNote:
    "Under the federal No Surprises Act, you have the right to a Good Faith Estimate of the expected cost of your care. For clients paying out of pocket, I provide a written estimate before we begin, and you can request one at any time. This helps you make an informed decision without surprises on the bill.",
};
