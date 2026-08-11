import type { Fees } from "@/lib/types";

export const fees: Fees = {
  sessionRate: 150,
  sessionLength: "50 minutes",
  consultationLength: "20 minutes",
  consultationFree: true,

  insuranceAccepted: [],

  outOfNetworkNote:
    "I'm out of network with insurance, which lets me keep our work between the two of us without a diagnosis on file or a company deciding how many sessions you're allowed. If you have out-of-network benefits, I provide a monthly superbill you can submit for possible reimbursement, and I'm glad to help you figure out what your plan covers.",

  superbillAvailable: true,

  slidingScale: {
    available: true,
    note: "I hold a few reduced-fee spots because I don't want cost to be the reason you don't get support. If the full fee is out of reach, please just ask. When those spots are full I keep a short waitlist.",
  },

  cancellationPolicy:
    "Things come up, I get it. I just ask for 24 hours' notice to cancel or reschedule so I can offer the time to someone else. Sessions cancelled with less notice are charged the full fee, with grace for genuine emergencies.",

  goodFaithEstimateNote:
    "You have a right, under the federal No Surprises Act, to a Good Faith Estimate of what your care will cost. I'll give you one in writing before we begin, and you can ask for an updated one any time. No surprises, ever, on something as important as this.",
};
