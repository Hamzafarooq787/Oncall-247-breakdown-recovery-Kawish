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

The header and footer use the WebP logo in `public/images/brand`. The site icon is in `src/app/icon.png`. The social preview uses the homepage image in `public/images/brand` and resolves against `SITE_URL` or the Vercel production hostname. Recovery photos are stored as WebP in `public/images/recovery`.

Service descriptions and contact details are in `src/lib/site.ts`. The enquiry form opens a pre-filled WhatsApp message. The visitor sends the message in WhatsApp.
