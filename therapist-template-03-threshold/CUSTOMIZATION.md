# Customizing Threshold for a client

Threshold takes a little longer than Willow or Tender (budget **4 to 6 hours**) because
of the long-form `/the-work` content. Everything still lives in `content/`, `globals.css`
color tokens, and `public/images/`.

Threshold's voice is confident and editorial. Positioning statements, not benefit claims.
Assume an intelligent, self-aware reader. No em dashes. Never apologize for the rate.
CTAs never end in a period.

## 1. Identity + specialty — `content/site.ts`

- [ ] `name`, `practiceName`, `url` (no trailing slash), `city`, `state`, `tagline`
- [ ] `specialty` — the one thing, e.g. "Trauma + EMDR", "Perinatal", "Couples"
- [ ] `specialtyThesis` — the one-line thesis that anchors the home + /the-work hero
- [ ] `showWriting` — `true` keeps the /writing section; `false` removes it (route 404s)
- [ ] `featuredInLogos` — publication names (rendered as text, not raster logos). `[]` to hide
- [ ] `showTestimonials` — leave `false` unless the state board permits
- [ ] `showPilcrowCredit`, `brandColorOverride`

## 2. The practitioner — `content/practitioner.ts`

- [ ] Name, `credentials`, `licenseNumber` (**displayed publicly**), `pronouns`, `headline`
- [ ] `bioShort`, `bioMedium`, `bioLong`
- [ ] `training` — degrees + certifications (these power the Featured In bar + Approach)
- [ ] `modalities`, `approach` (2 paragraphs, drives the 01/02 home columns), `values`

## 3. The Work — `content/the-work.ts` (the crown jewel)

This is what earns the fee. Write it to be read, not scanned.

- [ ] `thesis` — the one-paragraph thesis for the home page (200-250 words)
- [ ] `sections.whatItIs` — clear, plain-language explanation (400-600 words as paragraphs)
- [ ] `sections.whyThisWork` — the practitioner's connection to the specialty
- [ ] `sections.howIThinkAboutIt.paragraphs` + `.pullQuote` — the distinct philosophical stance
- [ ] `sections.whatHealingMeans` — reframe away from cure toward integration/capacity
- [ ] `sections.commonQuestions` — 4 to 6 substantive Q&A specific to the specialty

## 4. Client fit — `content/fit.ts`

- [ ] `yesIf` — 5 to 10 specific "you're in the right place" signals (title + body)
- [ ] `maybeNotIf` — 3 to 5 honest "better served elsewhere" items
- [ ] `referralNote`

## 5. Treatment arc — `content/timeline.ts`

- [ ] `phases` — the arc (name, duration, description). Include "ending well"
- [ ] `sessionStructure`, `betweenSessions`, `endingWellNote`

## 6. Writing — `content/writing.ts` (if `showWriting`)

- [ ] Each entry: `slug` (unique), `title`, `date` (ISO), `category`, `excerpt`
- [ ] `external` — a URL if published elsewhere (opens new tab), else `null`
- [ ] `content` — full essay paragraphs (used when `external` is null; first paragraph
      gets a drop-cap)

## 7. Approach — `content/approach.ts`

- [ ] `modalities` — full-paragraph, authoritative explanations
- [ ] `sessionWalkthrough` — the in-the-room walkthrough

## 8. Investment — `content/fees.ts`

- [ ] Rate, out-of-network philosophy (`outOfNetworkNote` — explain the choice confidently),
      equity access, cancellation. **Keep `goodFaithEstimateNote`** (federal requirement)

## 9. Contact — `content/contact.ts`

- [ ] `email`, `phone`, `address`, `virtualOnly`, `officeHours`, `responseTime`,
      `bookingUrl`, `bookingPlatform`

## 10. Colors — `src/app/globals.css`

Override `--color-accent` (the teal) and `--color-ochre` in `@theme`.

**Contrast notes:** the primary CTA and form submit use `--color-accent` (deep teal) with
cream text — very high contrast, safe. `--color-ochre` is used for small accents; it's
darkened from the original spec (`#a97d34`) so it passes AA where it carries text. The
teal booking band uses a hardcoded lighter ochre chip (`#c9a45a`) with ink text so it
passes AA on the dark background. If you change the palette, re-check these two.

Or use `brandColorOverride` in `content/site.ts`:

```ts
brandColorOverride: { accent: "#243b53", ochre: "#a97d34" }
```

## 11. Images — `public/images/`

- [ ] `portrait.jpg` (4:5), `office.jpg` (evocative interior), `og-image.jpg` (1200×630).
      Regenerate placeholders after a palette change: `node scripts/generate-placeholders.mjs`
- [ ] `src/app/icon.svg` — favicon

## 12. Email — `.env.local`

- [ ] `RESEND_API_KEY`, `CONTACT_INBOX`, `CONTACT_FROM`. Without them the form runs in
      demo mode (validates + shows success, does not send)

---

## Verify before sending a preview

```bash
npm run typecheck && npm run build && npm run start
```

- [ ] No "Naomi Reyes" / "Trauma + EMDR" placeholder content remains
- [ ] License number correct and visible
- [ ] `/the-work` reads like a real editorial essay, not filler
- [ ] Booking button points at the client's real EHR
- [ ] If `showWriting: false`, confirm `/writing` 404s and the home preview is gone
