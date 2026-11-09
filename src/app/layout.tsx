import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@fontsource-variable/inter";
import "./globals.css";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { StickyCTAs } from "@/components/site/StickyCTAs";
import { SITE } from "@/lib/site";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: SITE.name,
  robots: siteUrl ? undefined : { index: false, follow: true },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-GB">
      <body>
        <a className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-black focus:p-3" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <StickyCTAs />
      </body>
    </html>
  );
}
