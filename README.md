# On-Call 24/7 Breakdown Recovery

A Next.js App Router site for a Birmingham-based vehicle recovery business. The layout and dark gold theme are adapted from the AA Mobile Tyre reference.

## Run locally

Use Node.js 22 or later.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. To check the production build, run `npm run build`.

## Before launch

Set `SITE_URL` to the final public HTTPS origin in the hosting settings. It is used for canonical URLs, social metadata, the sitemap and the robots sitemap link. Without it, pages use noindex.

The header uses the business name as text. Photo areas keep the reference layout with temporary styling. Add the approved logo, photos, favicon and social preview image when they are ready.

Service descriptions and contact details are in `src/lib/site.ts`. The enquiry form opens a pre-filled WhatsApp message. The visitor sends the message in WhatsApp.
