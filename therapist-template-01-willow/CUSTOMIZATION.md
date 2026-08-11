# Customizing Willow for a client

Willow is built so a full customization takes **2 to 4 hours** and touches only the
`content/` layer, `globals.css` color tokens, and `public/images/`. You should not
need to edit anything in `src/` for a standard build.

Work top to bottom. Check each box.

---

## 1. Practice identity — `content/site.ts`

- [ ] `name` — practice name as it reads in the browser tab and OG cards
- [ ] `practiceName` — the name + credentials shown in the header and footer
- [ ] `url` — the live domain (used for canonical URLs, sitemap, JSON-LD). No trailing slash
- [ ] `city`, `state`
- [ ] `tagline` — one sentence, who they help and how
- [ ] `showTestimonials` — **leave `false`** unless you've confirmed the client's
      state licensing board permits testimonials. Many prohibit or restrict them
- [ ] `showPilcrowCredit` — set `false` to remove the footer "Site by Pilcrow" link
- [ ] `nav` — only change if adding/removing pages

## 2. The practitioner — `content/practitioner.ts`

- [ ] `firstName`, `lastName`, `fullName`
- [ ] `credentials` — array, e.g. `["PhD", "LMFT"]`
- [ ] `licenseNumber` — **displayed publicly** in the footer and About page. Verify it's correct
- [ ] `pronouns`
- [ ] `headline` — one line, who they help
- [ ] `bioShort` (40-60 words), `bioMedium` (150-200), `bioLong` (grouped paragraphs)
- [ ] `training` — degrees and certifications with institution + year
- [ ] `modalities` — the approaches they use (drives the home tags + approach page)
- [ ] `approach` — a few paragraphs of philosophy
- [ ] `values` — 3 to 5 belief statements

> **Copy rule:** never claim outcomes ("cure", "guarantee", "eliminate"). Use
> "help with", "support", "work through". No em dashes. CTAs never end in a period.

## 3. Services — `content/services.ts`

- [ ] One entry per specialty. `slug` must be URL-safe and unique (used for anchors)
- [ ] `icon` — a name from `src/components/ui/ServiceIcon.tsx`. Add more icons there
      if needed (import from `lucide-react`, add to the `ICONS` record)
- [ ] `title`, `subtitle`, `description`, `whoThisIsFor`, `howWeWork`

## 4. Fees — `content/fees.ts`

- [ ] `sessionRate`, `sessionLength`, `consultationLength`, `consultationFree`
- [ ] `insuranceAccepted` — list of plans, or `[]` if private pay only
- [ ] `outOfNetworkNote`, `superbillAvailable`
- [ ] `slidingScale.available` + `note`
- [ ] `cancellationPolicy`
- [ ] `goodFaithEstimateNote` — **keep this.** It's a federal (No Surprises Act) requirement

## 5. FAQ — `content/faq.ts`

- [ ] 8 to 15 Q&A entries. `category` groups them (order is preserved from first-seen)
- [ ] Keep the crisis-resource and "form is not confidential" notes

## 6. Approach detail — `content/approach.ts`

- [ ] `modalities` — plain-language explanation per modality (client-facing, no jargon)
- [ ] `sessionWalkthrough` — the "what a session looks like" steps

## 7. Contact — `content/contact.ts`

- [ ] `email`, `phone`, `address`, `virtualOnly` (hides address if true)
- [ ] `officeHours`, `responseTime`
- [ ] `bookingUrl` — the client's EHR booking link (SimplePractice, IntakeQ, Jane, etc.)
- [ ] `bookingPlatform` — the platform name shown on buttons

## 8. Colors — `src/app/globals.css`

Re-skin by overriding two or three variables in the `@theme` block at the top:

- `--color-accent` / `--color-accent-deep` (the sage) and
- `--color-terracotta` / `--color-terracotta-deep` (the hot note)

**Contrast check:** if you change `--color-terracotta`, verify it reads at **4.5:1
against `--color-bg`** (cream) so CTA button text stays WCAG AA. The shipped value
(`#a0562e`) passes. Lighter clay terracottas often don't.

You can also override colors per client without editing CSS by setting
`brandColorOverride` in `content/site.ts`:

```ts
brandColorOverride: { accent: "#6a7f8a", terracotta: "#9a5433" }
```

## 9. Images — `public/images/`

Replace, keeping the same filenames and roughly the same dimensions:

- [ ] `portrait.jpg` — practitioner headshot (**4:5**, ~1200×1500)
- [ ] `office.jpg` — optional interior shot (~16:11)
- [ ] `og-image.jpg` — social share card (**1200×630**)

The shipped files are generated placeholders. To regenerate placeholders after a
palette change, run `node scripts/generate-placeholders.mjs`.

- [ ] `src/app/icon.svg` — the favicon. Update the mark/colors if desired

## 10. Email delivery — `.env`

Copy `.env.example` to `.env.local` and fill in:

- [ ] `RESEND_API_KEY` — from https://resend.com/api-keys
- [ ] `CONTACT_INBOX` — where inquiries are delivered (the practitioner's inbox)
- [ ] `CONTACT_FROM` — a verified Resend sender on the client's domain

Without these, the contact form runs in **demo mode**: it validates and shows the
success state but does not send. That's fine for a preview. Set the keys before
handing off a live site.

---

## Verify before sending a preview

```bash
npm run typecheck   # no type errors
npm run build       # builds clean
npm run start       # smoke-test locally
```

- [ ] Every page reads correctly with the client's real content
- [ ] License number is correct and visible
- [ ] No placeholder text or "Sarah Chen" remains (search the repo)
- [ ] Contact form submits (demo or live)
- [ ] Booking button points at the client's real EHR link
