# Home page expansion — phased plan

**Goal:** Break the marketing home page into clear sections (about teaser, services teaser, projects, reviews) and ship **one phase at a time** — not all sections in a single change.

**Principles:**

- Reuse existing layout and motion patterns (`Reveal` for major below-the-fold blocks, spacing, primary/secondary CTAs).
- Keep copy scannable; each section ends with an obvious next step (link or button).
- Prefer shared data in `lib/` later (e.g. services list, gallery items) so home, `/services`, and `/gallery` stay aligned.

---

## Phase overview

| Phase | Deliverable | Notes |
|-------|-------------|--------|
| **0** | Baseline | Current hero + “Why {brand}?” + service cards + footer links — no required work unless refactoring for Phase 1. |
| **1** | Structure / stubs | Add `components/home/` (or equivalent) with section shells: headings + minimal placeholders; wire order in `app/page.tsx`. Establishes composition only. |
| **2** | About teaser | `HomeAboutTeaser`: short “who we are” blurb + **Read more →** `/about`. **Done** — see `components/home/HomeAboutTeaser.tsx` (reference layout: split header + 3 columns). |
| **3** | Services teaser | `HomeServicesTeaser`: subset of service cards + primary **View all services** → `/services`. Consolidate with or replace the old combined block so content is not duplicated awkwardly. |
| **4** | Projects teaser | `HomeProjectsTeaser`: few project/gallery items + **View gallery** → `/gallery`. Reuse image paths / patterns from the gallery page where possible. |
| **5** | Reviews | `HomeReviews`: 2–4 testimonials (quote, name, area optional, stars). Static data first; external embed/API only in a later optional phase. |
| **6** | CTA strip (optional) | `HomeContactStrip`: phone, WhatsApp, **Get a quote** → `/contact` — conversion safety net below the fold. |
| **7** | Polish | One `Reveal` per major section, copy trim, mobile order, quick pass on performance/accessibility. |

---

## Suggested section order (scroll)

1. **Hero** (existing): headline, supporting line, CTAs, stats, optional ticker.
2. **About teaser** — trust and identity before selling services hard.
3. **Services teaser** — what you do + “view all”.
4. **Projects teaser** — visual proof.
5. **Reviews** — social proof.
6. **Optional CTA strip** — repeat contact paths before footer.

---

## Per-phase checklist (before closing the phase)

- [ ] Section renders on mobile and desktop.
- [ ] Primary links resolve (`/about`, `/services`, `/gallery`, `/contact` as designed).
- [ ] No layout clash with sticky navbar / existing `main` padding.
- [ ] Motion: use existing `Reveal` sparingly; respect `prefers-reduced-motion` (project-wide).
- [ ] No duplicate H1; page keeps a single main hero heading.

---

## Implementation rule

**Implement exactly one phase per PR or focused session**, merge or verify in the browser, then start the next phase. Skipping ahead (e.g. building reviews before stubs exist) is discouraged — it makes review and rollback harder.

---

## Optional follow-ups (not part of the numbered phases)

- Centralize `quickServices` / gallery metadata in `lib/` for reuse across home and inner pages.
- Add schema.org `LocalBusiness` / `Review` JSON-LD when reviews and NAP are stable.
