import { Fraunces, Inter } from "next/font/google";

/**
 * Display serif. Fraunces carries the warmth and the editorial feel.
 * Variable weight + optical sizing per the Willow spec.
 */
export const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  // Variable font: omit an explicit weight array so the full 300-700 range
  // (and the optical-size axis) stays available. `axes` requires this.
  axes: ["opsz", "SOFT", "WONK"],
  variable: "--font-fraunces",
});

/**
 * Body sans. Inter keeps body copy clean and legible.
 */
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});
