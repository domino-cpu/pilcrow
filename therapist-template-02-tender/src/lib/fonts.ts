import { Cormorant_Garamond, Nunito_Sans, Caveat } from "next/font/google";

/**
 * Display serif. Cormorant Garamond carries the editorial elegance.
 * Used for H1, H2, callout quotes (often italic).
 */
export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

/**
 * Body sans. Nunito Sans is rounded and warm, more human than a geometric sans.
 */
export const nunito = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600"],
  variable: "--font-nunito",
});

/**
 * Handwritten accent. Caveat. Use SPARINGLY (eyebrows, one signature per view).
 * Never for body copy or CTAs.
 */
export const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  variable: "--font-caveat",
});
