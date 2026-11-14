# Cuplis — Barber Portfolio

Personal portfolio for Cuplis (Yusuf Alansyah), barber at Dibawah Pohon Barber.
A pure portfolio: his work and his story, no booking, prices or opening hours.
Copy is casual Indonesian. Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Motion · Lenis.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000. (`.npmrc` sets `legacy-peer-deps` for a React peer-version quirk.)

## Pages

| URL | What |
| --- | --- |
| `/` | Hero, photo strips, selected work, short bio |
| `/work` | Galeri: all cuts, filter by style (`?style=fade`), loads more as you scroll |
| `/work/[slug]` | One cut: photos from each angle, technique notes, tags, next/previous |
| `/about` | His story, approach, highlights, photos, where he cuts now |
| `/contact` | Instagram, WhatsApp, the shop's Instagram |

`/book` redirects to `/contact` and `/services` to `/work` (old links).

## Edit content

All content is in `src/content/`:

- `site.ts` — name, Instagram, WhatsApp, shop, story, highlights, style names
- `cuts.ts` — the portfolio (cut names, photos, technique) and his own photos

Everything marked `PLACEHOLDER` must be replaced with his real details.
Cut photos are Unsplash placeholders until his own cuts are shot (see `PHOTO-PROMPTS.md`).
Only use client photos with their written permission (UU PDP).

## Next steps

- Move cuts to Sanity so he can upload from his phone (PRD goal: under 2 minutes).
- Add privacy-friendly analytics (Vercel Analytics, Plausible or Umami).
- Hosting: Vercel Pro, Netlify or Cloudflare Pages.
