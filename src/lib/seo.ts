import type { Metadata } from "next";
import { SITE } from "./site";

export const siteUrl = process.env.SITE_URL ? new URL(process.env.SITE_URL) : undefined;

const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const socialBase = siteUrl ?? (productionHost ? new URL(`https://${productionHost}`) : undefined);
const socialImage = socialBase ? {
  url: new URL("/images/brand/on-call-247-open-graph.jpg", socialBase),
  width: 1200,
  height: 630,
  alt: "On-Call 24/7 Breakdown Recovery homepage",
} : undefined;

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = siteUrl ? new URL(path, siteUrl).href : undefined;
  return {
    title,
    description,
    alternates: url ? { canonical: url } : undefined,
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      locale: "en_GB",
      type: "website",
      images: socialImage ? [socialImage] : undefined,
    },
    twitter: {
      card: socialImage ? "summary_large_image" : "summary",
      title,
      description,
      images: socialImage ? [{ url: socialImage.url, alt: socialImage.alt }] : undefined,
    },
  };
}
