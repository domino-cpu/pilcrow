# Pilcrow Therapist Templates — What To Do Next

All three templates are built, verified, and documented. This is your step-by-step
for getting them live and turning them into a working outreach machine.

Templates live at:
```
~/Downloads/therapist/therapist-template-01-willow/      (established solo)
~/Downloads/therapist/therapist-template-02-tender/      (emerging practitioner)
~/Downloads/therapist/therapist-template-03-threshold/   (specialty / niche)
```

---

## 0. One thing to know first

**Willow's `node_modules` was deleted mid-build** to free up a full disk. Its source
code is 100% complete and was fully verified — you just need to reinstall before you
run it. Tender and Threshold still have their dependencies.

```bash
cd ~/Downloads/therapist/therapist-template-01-willow && npm install
```

---

## 1. Smoke-test all three locally (15 min)

For each template folder:

```bash
cd ~/Downloads/therapist/therapist-template-01-willow
npm install        # only needed the first time (Willow definitely; others optional)
npm run build      # should say "Compiled successfully"
npm run start      # open http://localhost:3000
```

Click through every page. Then repeat for `-02-tender` and `-03-threshold`.
(Use a different port if running two at once: `PORT=3001 npm run start`.)

---

## 2. Put each template in its own Git repo (30 min)

Do this per template so each can be forked per client later.

```bash
cd ~/Downloads/therapist/therapist-template-01-willow
git init
git add -A
git commit -m "Willow therapist template v1"
```

Then create a repo on GitHub (under the Pilcrow account) and push:

```bash
gh repo create pilcrow/willow-template --private --source=. --push
# or set the remote manually:
# git remote add origin git@github.com:pilcrow/willow-template.git
# git push -u origin main
```

Repeat for Tender and Threshold. Suggested repo names:
`willow-template`, `tender-template`, `threshold-template`.

> `.gitignore` is already set up (ignores `node_modules`, `.next`, `.env*`).

---

## 3. Deploy the three "showcase" versions to Vercel (30 min)

These are your reference links for outreach ("here's what your site could look like").

**Important:** deploy these under the **Pilcrow** Vercel account, not a personal one.
When I checked, the only logged-in Vercel account on this machine was `domino-cpu`.
Log into the Pilcrow account first (`vercel logout` then `vercel login`), or connect
the Pilcrow GitHub org in the Vercel dashboard.

Easiest path — import each GitHub repo in the Vercel dashboard:
1. vercel.com → Add New → Project → import the repo
2. Framework preset auto-detects Next.js. No build settings to change.
3. Set the project name so the URL is clean: `willow-template`, `tender-template`,
   `threshold-template`.
4. Add environment variables (see step 4), or skip for now — the contact form runs in
   "demo mode" without them (it validates and shows success but doesn't send email).
5. Deploy.

Target URLs:
- `willow-template.vercel.app`
- `tender-template.vercel.app`
- `threshold-template.vercel.app`

CLI alternative from inside a template folder: `vercel --prod`.

---

## 4. Turn on the contact form email (Resend) — 20 min, optional for showcases

The form works in demo mode without this. To make it actually send email, per project:

1. Create a Resend account at resend.com and verify a sending domain.
2. Get an API key at resend.com/api-keys.
3. In each Vercel project → Settings → Environment Variables, add:
   - `RESEND_API_KEY` — your key
   - `CONTACT_INBOX` — where inquiries should land (for a showcase, your own inbox)
   - `CONTACT_FROM` — a verified sender on your domain, e.g. `inquiries@pilcrowstudio.design`
4. Redeploy.

For the showcase demos you can leave this off. Turn it on for real client deploys.

---

## 5. Build a small portfolio page (optional, 1 hr)

A single page linking the three previews, each with a one-line "who it's for", so you
can send one link in outreach. This can itself be a tiny static page on the Pilcrow site.

---

## 6. The per-prospect workflow (this is the actual business)

When you find a therapist with a bad site:

1. **Pick the template** that fits their practice:
   - Established, referral-fed, credential-forward → **Willow**
   - Newer, differentiating on personality/values → **Tender**
   - Deep in one specialty, higher fee → **Threshold**
2. **Fork the repo** (or `cp -r` the folder to `dr-lastname-preview`).
3. **Customize the content** — open `CUSTOMIZATION.md` in that template and work the
   checklist. Everything is in `content/*.ts` + colors in `globals.css` + swap the
   photos in `public/images/`. Nothing in `src/` needs to change.
   - Budget: ~2–4 hrs for Willow/Tender, ~4–6 hrs for Threshold (longer copy).
4. **Swap the photos**: real headshot → `public/images/portrait.jpg` (4:5, ~1200×1500),
   optional interior → `office.jpg`, social card → `og-image.jpg` (1200×630).
   No photo yet? The generated placeholders look intentional — run
   `node scripts/generate-placeholders.mjs` after a color change to refresh them.
5. **Verify**: `npm run build` must pass. Search the repo for the demo name
   (e.g. "Sarah Chen") to make sure no placeholder text slipped through. Confirm the
   license number is correct and the booking button points at their real EHR link.
6. **Deploy the fork** to a preview URL: `dr-nguyen-preview.vercel.app`.
7. **Send the prospect the live link.**

---

## 7. After the first 5–10 responses

Treat the templates as living products. Note what prospects react to and what they ask
to change, and fold the best of it back into the three base templates so every future
fork starts better.

---

## Quick reference — what each template ships with

- 6–8 pages, fully responsive, mobile-first
- Lighthouse: desktop 100/100/100/100, mobile 95–96/100/100/100
- Accessibility: axe-core clean (WCAG 2.1 AA), keyboard + screen-reader friendly
- SEO: per-page titles/descriptions, canonicals, Open Graph + Twitter, JSON-LD, sitemap, robots
- Contact form: validated, spam-trapped, privacy-safe, demo-mode until keys are set
- Ethics built in: HIPAA notice, visible license, testimonials off by default, Good Faith
  Estimate notice, EHR booking (no PHI on-site), crisis resources, no dark patterns
- `README.md` (overview) + `CUSTOMIZATION.md` (per-template checklist) in each folder

---

## The commands you'll use most

```bash
# run a template locally
npm install && npm run build && npm run start

# check a customization didn't break the build
npm run build

# find leftover placeholder text before sending a preview
grep -ri "sarah chen" .      # Willow demo name
grep -ri "maya okonkwo" .    # Tender demo name
grep -ri "naomi reyes" .     # Threshold demo name

# regenerate placeholder images after a color change
node scripts/generate-placeholders.mjs
```
