import { Newsreader, Inter } from "next/font/google";

/**
 * Display serif. Newsreader carries editorial authority, like a well-set
 * magazine. Used for H1, H2, callout quotes, pull-outs (often light weights).
 */
export const newsreader = Newsreader({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
});

/**
 * Body sans. Inter keeps body copy modern, trustworthy, and clean.
 */
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});
