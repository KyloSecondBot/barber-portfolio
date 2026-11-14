# Barber Portfolio

Personal portfolio site for one barber, built from the PRD "Barber Personal Portfolio Website".
Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Motion · Lenis.

## Run it

```bash
npm install --legacy-peer-deps
npm run dev
```

Open http://localhost:3000.

## Pages

| URL | What |
| --- | --- |
| `/` | Hero, selected cuts, bio teaser, how a visit works, prices, reviews, booking |
| `/work` | All cuts, filter by style (`?style=fade`), loads more as you scroll |
| `/work/[slug]` | One cut: photos, technique, "Book this cut" (pre-filled WhatsApp) |
| `/about` | His story, approach, highlights, current shop |
| `/services` | Prices (Rp) and durations, house rules |
| `/book` | WhatsApp message builder, map, hours, brand/collab contact |

## Edit content

All content is in `src/content/`:

- `site.ts` — name, WhatsApp number, shop, hours, services, reviews, story, highlights
- `cuts.ts` — the portfolio

Everything marked `PLACEHOLDER` must be replaced with the barber's real details.
Photos are Unsplash placeholders until his own cuts are shot (3+ angles each, same light).
Only use client photos with their written permission (UU PDP).

## Next steps

- Move cuts, prices and reviews to Sanity so he can upload from his phone (PRD goal: under 2 minutes).
- Add analytics (Vercel Analytics, Plausible or Umami). Book buttons carry `data-track="book"`.
- Hosting: Vercel Pro, Netlify or Cloudflare Pages (Vercel Hobby is non-commercial only).
