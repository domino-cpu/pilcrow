# Threshold — Therapist Website Template 03

**For specialty / niche practitioners.** Bold editorial magazine feel, deep on one thing.
The New Yorker crossed with a modern clinical practice. Higher-fee, positioning-heavy.

Part of the Pilcrow Studio therapist template suite (Willow · Tender · Threshold).

---

## Stack

- **Next.js 15** (App Router) + **TypeScript** (strict)
- **Tailwind CSS v4** (`@theme` design tokens)
- **next/font** (Newsreader + Inter)
- **motion** for restrained reveals + a one-time curtain-wipe hero
- **Resend** + Server Actions for the contact form
- **Vercel** for hosting

## Quick start

```bash
npm install
cp .env.example .env.local   # optional; form runs in demo mode without it
npm run dev                  # http://localhost:3000
```

## Structure

```
content/          ← ALL customization happens here (typed data)
  site.ts         identity, specialty, specialtyThesis, showWriting, featuredIn
  practitioner.ts name, credentials, license, bios, training, values
  the-work.ts     the long-form /the-work essay (the crown jewel)
  fit.ts          "yes if" / "maybe not if" client-fit filter
  timeline.ts     treatment phases + session structure + ending well
  writing.ts      essays (internal or external), for /writing
  approach.ts     modality explanations + session walkthrough
  fees.ts         rates, out-of-network philosophy, equity access, GFE
  contact.ts      contact info + EHR booking link
public/images/    portrait.jpg, office.jpg, og-image.jpg
src/
  app/            / /the-work /approach /is-this-you /working-together
                  /investment /writing (+ /writing/[slug]) /contact
                  + sitemap.ts, robots.ts, icon.svg
  components/     layout/ ui/ sections/ + StructuredData
  lib/            types, fonts, brand override, send-inquiry (Server Action)
```

To customize for a client, see **[CUSTOMIZATION.md](./CUSTOMIZATION.md)**.

## Pages

`/` · `/the-work` · `/approach` · `/is-this-you` · `/working-together` ·
`/investment` · `/writing` (+ per-essay pages) · `/contact`

`/the-work` is the long-form positioning centerpiece: sticky table of contents,
drop-cap, and a pull-quote. It's what earns the higher fee.

## Design system

- **Palette:** warm off-white paper, deep teal (expertise), ochre (warmth + rigor), charcoal
- **Type:** Newsreader (editorial display) + Inter (body, slightly larger/editorial)
- **Motion:** one curtain-wipe hero reveal on load; otherwise restrained. JS-gated
  (all content visible without JS / under reduced motion)
- Asymmetric, magazine-scale layouts (widest container of the three)

## Quality bar (verified)

- **Lighthouse:** desktop 100/100/100/100; mobile 96/100/100/100
- **Accessibility:** axe-core clean (zero violations) across all pages, WCAG 2.1 AA

## Ethics (built in, do not remove)

- HIPAA notice on the contact form; not a confidential/PHI channel
- License number displayed publicly (footer + booking band)
- Testimonials gated behind `showTestimonials: false` with a board warning
- Booking links out to the client's HIPAA-compliant EHR
- No outcome/cure claims (the "what healing means here" section reframes away from "cure")
- No dark patterns
- Good Faith Estimate notice (No Surprises Act) on Investment
- Honest client-fit filter ("maybe not, if..") with generous referral
- Crisis resources (988) on Is This You and Contact

## Optional: the /writing section

Toggle with `site.showWriting`. Set `false` and the page + home preview disappear
and the route returns 404. Essays can be internal (render on-site with a drop-cap) or
external (`external: "https://.."`, opens in a new tab with a screen-reader hint).

## Deploy (Vercel)

Import the repo into Vercel (or run `vercel`), set `RESEND_API_KEY`, `CONTACT_INBOX`,
`CONTACT_FROM`, and deploy. Preview target: `threshold-template.vercel.app`.

---

Site by [Pilcrow Studio](https://pilcrowstudio.design).
