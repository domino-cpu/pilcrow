import type { MetadataRoute } from "next";
import { site } from "@content/site";

export default function robots(): MetadataRoute.Robots {
  // Demo mode: block all crawlers so the fictional showcase content is never
  // indexed. Set site.demoMode = false when forking for a real client.
  if (site.demoMode) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api",
    },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
