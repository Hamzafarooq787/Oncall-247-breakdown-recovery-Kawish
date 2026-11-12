import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/site";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) return [];
  return ["/", "/services", "/coverage", "/about", "/contact", "/terms-and-conditions", ...SERVICES.map(s => `/services/${s.slug}`)]
    .map(path => ({ url: new URL(path, siteUrl).href }));
}
