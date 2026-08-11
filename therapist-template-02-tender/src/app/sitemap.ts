import type { MetadataRoute } from "next";
import { site } from "@content/site";

const routes = ["", "/story", "/how-i-work", "/who-i-work-with", "/fees", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  // Static lastModified to keep the build deterministic. Update on customization.
  const lastModified = new Date("2026-01-01");

  return routes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
