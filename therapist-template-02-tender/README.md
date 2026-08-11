# Tender — Therapist Website Template 02

**For emerging practitioners.** Personal, story-driven, first-person. Reading the home
page should feel like reading a warm letter someone wrote just for you.

Part of the Pilcrow Studio therapist template suite (Willow · Tender · Threshold).

---

## Stack

- **Next.js 15** (App Router) + **TypeScript** (strict)
- **Tailwind CSS v4** (`@theme` design tokens)
- **next/font** (Cormorant Garamond + Nunito Sans + Caveat)
- **motion** for gentle scroll reveals + one hand-drawn scribble
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
  site.ts         identity, handwrittenAccent toggle, nav
  practitioner.ts name, credentials, license, storyBio (essay), whatIBelieve, whatIDontDo
  populations.ts  who I work with
  first-session.ts  what a first session is like + common fears
  approach.ts     plain-language modality explanations
  fees.ts         rates, insurance, sliding scale, GFE
  contact.ts      contact info + EHR booking link
  home.ts         homepage microcopy (hero, if-you're-here, how-this-works)
public/images/    portrait.jpg, office.jpg, og-image.jpg
src/
  app/            routes: / /story /how-i-work /who-i-work-with /fees /contact
                  + sitemap.ts, robots.ts, icon.svg
  components/     layout/ ui/ sections/ + StructuredData
  lib/            types, fonts, brand override, send-inquiry (Server Action)
```

To customize for a client, see **[CUSTOMIZATION.md](./CUSTOMIZATION.md)**.

## Pages

`/` · `/story` · `/how-i-work` · `/who-i-work-with` · `/fees` · `/contact`

Fewer pages than Willow, deeper each. The `/story` page is a long-form narrative essay.

## Design system

- **Palette:** warm paper, cocoa ink, soft sage, blush accent (cocoa/blush)
- **Type:** Cormorant Garamond (italic display), Nunito Sans (warm body), Caveat (handwritten)
- **Handwritten accents:** Caveat with a pen-draw underline. Capped at 2 per page. Global
  off switch via `site.handwrittenAccent`
- Motion is gentle (12px travel, 800ms) and JS-gated (content visible without JS)

## Quality bar (verified)

- **Lighthouse:** desktop 100/100/100/100; mobile 95/100/100/100
- **Accessibility:** axe-core clean (zero violations) across all pages, WCAG 2.1 AA

## Ethics (built in, do not remove)

- HIPAA notice on the contact form; not a confidential/PHI channel
- License number displayed publicly (footer + story page)
- Testimonials gated behind `showTestimonials: false` with a board warning
- Booking links out to the client's HIPAA-compliant EHR
- No outcome/cure claims; no dark patterns
- Good Faith Estimate notice (No Surprises Act) on Fees
- Honest scope limits ("what I don't do", "who I might not be the right fit for")
- Crisis resources (988) on How I Work, Who I Work With, and Contact

## Contact form

`src/lib/send-inquiry.ts` is a Server Action: Zod validation, Resend delivery, honeypot,
never logs contents. Without `RESEND_API_KEY` + `CONTACT_FROM` it runs in demo mode.

## Deploy (Vercel)

Import the repo into Vercel (or run `vercel`), set `RESEND_API_KEY`, `CONTACT_INBOX`,
`CONTACT_FROM`, and deploy. Preview target: `tender-template.vercel.app`.

---

Site by [Pilcrow Studio](https://pilcrowstudio.design).
