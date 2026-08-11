# Willow — Therapist Website Template 01

**For established solo practitioners.** Warm, credential-forward, trust-through-experience.
Calm authority: a wine estate that happens to be a therapy practice.

Part of the Pilcrow Studio therapist template suite (Willow · Tender · Threshold).

---

## Stack

- **Next.js 15** (App Router) + **TypeScript** (strict)
- **Tailwind CSS v4** (`@theme` design tokens)
- **next/font** (Fraunces + Inter)
- **motion** for restrained scroll reveals
- **Resend** + Server Actions for the contact form
- **Vercel** for hosting

## Quick start

```bash
npm install
cp .env.example .env.local   # optional for local dev; form runs in demo mode without it
npm run dev                  # http://localhost:3000
```

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Local dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | Next lint |

## Structure

```
content/          ← ALL customization happens here (typed data)
  site.ts         practice identity, colors flag, nav
  practitioner.ts name, credentials, license, bios, values
  services.ts     specialties
  fees.ts         rates, insurance, sliding scale, GFE
  faq.ts          Q&A by category
  approach.ts     modality explanations + session walkthrough
  contact.ts      contact info + EHR booking link
public/images/    portrait.jpg, office.jpg, og-image.jpg
src/
  app/            routes: / /about /services /approach /fees /faq /contact
                  + sitemap.ts, robots.ts, icon.svg
  components/     layout/ ui/ sections/ + StructuredData
  lib/            types, fonts, brand override, send-inquiry (Server Action)
scripts/          generate-placeholders.mjs
```

To customize for a client, see **[CUSTOMIZATION.md](./CUSTOMIZATION.md)**.

## Pages

`/` · `/about` · `/services` · `/approach` · `/fees` · `/faq` · `/contact`

## Quality bar (verified)

- **Lighthouse:** desktop 100/100/100/100; mobile 96/100/100/100 (perf/a11y/best-practices/seo)
- **Accessibility:** axe-core clean (zero violations) across all pages, WCAG 2.1 AA
- Semantic HTML, skip link, keyboard nav, focus states, reduced-motion respected
- Scroll reveals are **JS-gated**: content is fully visible without JavaScript

## Ethics (built in, do not remove)

- HIPAA notice on the contact form; form is explicitly not a confidential/PHI channel
- License number displayed publicly (footer + About)
- Testimonials component gated behind `showTestimonials: false` with a board warning
- Booking links out to the client's HIPAA-compliant EHR; no PHI captured on-site
- No outcome/cure claims; no dark patterns (no exit-intent, countdowns, fake activity)
- Good Faith Estimate notice (No Surprises Act) on the Fees page
- Crisis resources (988) on FAQ, Contact, and the form success state

## Contact form

`src/lib/send-inquiry.ts` is a Server Action: Zod validation, Resend delivery,
honeypot spam trap, and it never logs message contents. Without `RESEND_API_KEY` +
`CONTACT_FROM` it runs in demo mode (validates + shows success, does not send).

## Deploy (Vercel)

1. Push to a Git repo and import into Vercel, or run `vercel` from this directory
2. Set env vars in the Vercel project: `RESEND_API_KEY`, `CONTACT_INBOX`, `CONTACT_FROM`
3. Deploy. Preview URL target: `willow-template.vercel.app`

---

Site by [Pilcrow Studio](https://pilcrowstudio.design).
