# Pilcrow × Therapist Templates

Three production-ready therapist website templates. Each targets a different kind of
practice with a distinct design system, funnel, and voice. Same shop underneath
(Pilcrow), three different practices on top.

The workflow: pick whichever template fits a prospect, fork it, swap the content in
`content/*.ts` (2–6 hours), deploy to a preview URL, and send the working demo.

## The three templates

| | For | Palette / Type | Voice |
|---|---|---|---|
| **[01 · Willow](./therapist-template-01-willow/)** | Established solo practitioners | Cream / sage / terracotta · Fraunces + Inter | Calm wine-estate authority |
| **[02 · Tender](./therapist-template-02-tender/)** | Emerging practitioners | Cocoa / blush paper · Cormorant + Nunito + Caveat | Warm personal letter |
| **[03 · Threshold](./therapist-template-03-threshold/)** | Specialty / niche practitioners | Teal / ochre · Newsreader + Inter | New Yorker editorial |

Each folder has its own `README.md` (overview) and `CUSTOMIZATION.md` (per-client checklist).

## Shared stack

Next.js 15/16 (App Router) · TypeScript strict · Tailwind v4 · next/font · Resend +
Server Actions · Vercel. Content lives in typed `content/*.ts` files; nothing in `src/`
needs to change for a standard customization.

## Verified quality (all three)

- **Lighthouse:** desktop 100/100/100/100, mobile 95–96/100/100/100
- **Accessibility:** axe-core clean (zero violations), WCAG 2.1 AA
- **Ethics:** HIPAA notice on forms, visible license, testimonials off by default, Good
  Faith Estimate notice, EHR booking (no PHI on-site), crisis resources, no dark patterns

## Run any template locally

```bash
cd therapist-template-01-willow
npm install
npm run build
npm run start        # http://localhost:3000
```

## Deploy (Vercel monorepo)

Import this repo in Vercel three times, once per template, setting each project's
**Root Directory** to the template folder (`therapist-template-01-willow`, etc.).
Suggested project names: `willow-template`, `tender-template`, `threshold-template`.

Contact-form email is optional: without `RESEND_API_KEY` / `CONTACT_INBOX` /
`CONTACT_FROM`, the form runs in demo mode (validates + shows success, doesn't send).
Set those per client when onboarding a real therapist.

See **[NEXT-STEPS.md](./NEXT-STEPS.md)** for the full setup and per-prospect workflow.
