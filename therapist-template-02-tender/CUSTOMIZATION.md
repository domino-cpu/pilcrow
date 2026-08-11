# Customizing Tender for a client

Tender is built so a full customization takes **2 to 4 hours** and touches only the
`content/` layer, `globals.css` color tokens, and `public/images/`.

Tender's voice is more distinctive than Willow's. When you write client copy, keep it
**first-person, warm, specific, short-paragraphed.** No em dashes. No outcome claims.
CTAs never end in a period. (See the copy rules at the bottom.)

Work top to bottom.

## 1. Identity — `content/site.ts`

- [ ] `name`, `practiceName`, `url` (no trailing slash), `city`, `state`, `tagline`
- [ ] `showTestimonials` — leave `false` unless the state board permits testimonials
- [ ] `showPilcrowCredit` — `false` to remove the footer credit
- [ ] `handwrittenAccent` — `true` keeps the Caveat accents (max 2 per page). `false`
      removes them site-wide
- [ ] `narrativeBioStyle` — `"essay"` (default) or `"structured"`
- [ ] `nav` — only change if adding/removing pages

## 2. The practitioner — `content/practitioner.ts`

- [ ] Name, `credentials`, `licenseNumber` (**displayed publicly**), `pronouns`, `headline`
- [ ] `bioShort`, `bioMedium`
- [ ] `storyBio` — the long-form essay for `/story`. Array of paragraphs. This is the
      heart of Tender. Write it like a letter, not a resume (see the arc below)
- [ ] `outsideTheRoomBio` — 2-3 warm paragraphs about life outside work
- [ ] `whatIBelieve`, `approach`, `values`
- [ ] `whatIDontDo` — honest scope limits (keep the crisis line)
- [ ] `training`, `modalities`

**Story essay arc (suggested):** a specific moment that led them here → the path/training
→ what they believe about healing → what they're still learning → a warm closing invitation.

## 3. Who I work with — `content/populations.ts`

- [ ] One entry per population. `slug` unique. `title`, `intro` (first-person, why drawn
      to them), `whatItLooksLike`

## 4. First session — `content/first-session.ts`

- [ ] `intro`, `narrative` (200-300 words, what to expect), `fears` (common Q&A that
      reduce first-session anxiety)

## 5. Approach — `content/approach.ts`

- [ ] `modalities` — plain-language, warm explanation per approach. No jargon

## 6. Homepage microcopy — `content/home.ts`

- [ ] `hero.greeting` (handwritten), `hero.title` (the letter's opening line), `hero.opening`
- [ ] `ifYoureHere.items` — 3-4 first-person statements the ideal client would say
- [ ] `howThisWorks.steps` — the 3-step narrative
- [ ] `contactCta` — the closing invitation

## 7. Fees — `content/fees.ts`

- [ ] Rates, insurance, sliding scale, cancellation. **Keep `goodFaithEstimateNote`**
      (federal No Surprises Act requirement)

## 8. Contact — `content/contact.ts`

- [ ] `email`, `phone`, `address`, `virtualOnly`, `officeHours`, `responseTime`
- [ ] `bookingUrl` (client's EHR), `bookingPlatform`

## 9. Colors — `src/app/globals.css`

Override `--color-accent` (sage) and `--color-blush` (the warm accent) in `@theme`.

**Contrast check:** the CTA uses `--color-blush-deep`. If you change it, keep it at
**4.5:1 against `--color-bg`** (paper) so button text stays WCAG AA. The shipped value
(`#9a5a30`) passes; the soft `--color-blush` is decorative only and is not used for
button backgrounds.

Or override per client without editing CSS via `brandColorOverride` in `content/site.ts`:

```ts
brandColorOverride: { accent: "#8a7f66", blush: "#a5623a" }
```

## 10. Images — `public/images/`

- [ ] `portrait.jpg` (4:5, ~1200×1500), `office.jpg` (a warmer/casual shot), `og-image.jpg`
      (1200×630). Regenerate placeholders after a palette change:
      `node scripts/generate-placeholders.mjs`
- [ ] `src/app/icon.svg` — favicon

## 11. Email — `.env.local`

- [ ] `RESEND_API_KEY`, `CONTACT_INBOX`, `CONTACT_FROM`. Without them the form runs in
      demo mode (validates + shows success, does not send)

---

## Verify before sending a preview

```bash
npm run typecheck && npm run build && npm run start
```

- [ ] No "Maya Okonkwo" or placeholder text remains (search the repo)
- [ ] License number correct and visible
- [ ] Handwritten accents appear at most twice per page
- [ ] Booking button points at the client's real EHR

## Copy rules (Tender)

- First-person always ("I help..", never "This practice..")
- Short paragraphs (2-3 sentences). Specific over general
- Warm, not saccharine. Sentence fragments and conjunction-starts are fine
- Never claim outcomes. Never use em dashes. CTAs never end in a period
- Handwritten one-liners only ("with me here", "your pace, always", "— [First name]")
