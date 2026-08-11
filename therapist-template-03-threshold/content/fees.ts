import type { Fees } from "@/lib/types";

export const fees: Fees = {
  sessionRate: 250,
  sessionLength: "50 minutes",
  consultationLength: "20 minutes",
  consultationFree: true,

  insuranceAccepted: [],

  outOfNetworkNote:
    "I am out of network by choice. Insurance requires a mental-health diagnosis on your permanent record and often dictates how many sessions of trauma work you're allowed, regardless of what the work actually requires. Staying out of network lets me practice this specialty the way it needs to be practiced, and keeps your history yours. I provide a monthly superbill for out-of-network reimbursement, and many clients recover a meaningful portion of the fee.",

  superbillAvailable: true,

  slidingScale: {
    available: true,
    note: "I reserve a small number of reduced-fee spaces for clients for whom access would otherwise be out of reach, with priority for those historically underserved by specialty trauma care. When these are full, I keep a waitlist and refer generously.",
  },

  cancellationPolicy:
    "Because I hold a limited caseload and reserve your time specifically for you, I ask for 48 hours' notice to cancel or reschedule. Sessions cancelled with less notice are charged in full, with grace for genuine emergencies.",

  goodFaithEstimateNote:
    "Under the federal No Surprises Act, you have the right to a Good Faith Estimate of the expected cost of your care. I provide one in writing before we begin, and you may request an updated estimate at any time.",
};
