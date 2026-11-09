import type { Metadata } from "next";
import { SITE } from "./site";

export const siteUrl = process.env.SITE_URL ? new URL(process.env.SITE_URL) : undefined;

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = siteUrl ? new URL(path, siteUrl).href : undefined;
  return {
    title,
    description,
    alternates: url ? { canonical: url } : undefined,
    openGraph: { title, description, url, siteName: SITE.name, locale: "en_GB", type: "website" },
    twitter: { card: "summary", title, description },
  };
}
