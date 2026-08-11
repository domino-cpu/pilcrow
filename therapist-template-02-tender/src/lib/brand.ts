import type { CSSProperties } from "react";
import { site } from "@content/site";

/**
 * Turns the optional brandColorOverride in content/site.ts into inline CSS
 * variable overrides. Applied on the <body> so a client re-skin needs only a
 * two or three line edit in the content layer, never a change in /src.
 */
export function brandStyle(): CSSProperties {
  const o = site.brandColorOverride;
  if (!o) return {};
  const style: Record<string, string> = {};
  if (o.accent) style["--color-accent"] = o.accent;
  if (o.accentDeep) style["--color-accent-deep"] = o.accentDeep;
  if (o.blush) style["--color-blush"] = o.blush;
  if (o.blushDeep) style["--color-blush-deep"] = o.blushDeep;
  return style as CSSProperties;
}
