# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two co-equal primary audiences:

- **Recruiters / hiring managers** — assessing whether Jude is worth a call. They want a fast, verifiable read: who he is, what he can build, where he works now, and how to reach him (skills, current internship, resume, contact).
- **Developers / peers** — evaluating technical depth and collaboration fit. They want project substance: repos, stack choices, and enough detail to judge the work.

Both arrive cold and scroll a single page. The job is the same in both cases: decide whether to reach out (or follow) and establish credibility.

## Product Purpose

A personal single-page portfolio for Jude Anthone Duarte — a fourth-year Computer Science student at EARIST and a Backend AI Engineering intern at FlyRank AI. It exists to prove, in a few seconds, that he builds real, shipped full-stack software, and to make the next step (contact, GitHub, resume) effortless.

Success is not a single conversion: it is a polished, memorable first impression that builds credibility for the visitor to act on later. Per the owner, there is **no single primary action** to optimize for.

## Positioning

**Evidence over claims.** Jude positions as a *student fullstack developer who ships*: every project entry links to a real GitHub repository and carries its own screenshots, and the internship section lists concrete, verifiable responsibilities. The credible claim is breadth with depth at the edges — fullstack (React/Node/TypeScript), cloud-native (Docker, CI/CD, PostgreSQL), and AI automation — grounded in institutional, real-world projects rather than demos.

## Operating Context

- **Read-only marketing surface, no backend.** Pure static SPA deployed publicly (Vercel); no auth, no state beyond UI, no API integration is planned (owner explicitly deferred backend work).
- **Single-page, hash navigation** (no router library): `#hero`, `#about`, `#skills`, `#projects`, `#socials`, plus a non-route "Resume" download item in the header.
- **Visitors consume on a scroll**, mostly on a phone or laptop, then either follow a social link, open GitHub, or download the resume.
- Sections in order: Hero → About → Skills → Projects → Socials → Footer.
- Mobile-first from 320px up to 1200px+; the header is bottom-fixed on mobile and top-pinned on desktop.

## Capabilities and Constraints

- **Stack (existing codebase, no greenfield choice):** React 19 + TypeScript + Vite 8, Tailwind v4 (config via `@theme` in `src/index.css`, no tailwind config file), MUI v7 (icons + Dialog/Button), shadcn/ui + Radix, framer-motion + motion/react (both coexist), GSAP for the DotGrid canvas, react-icons + lucide-react.
- **TypeScript strictness is a hard build gate:** `noUnusedLocals`/`noUnusedParameters`, `verbatimModuleSyntax` (`import type`/`export type`), `erasableSyntaxOnly` (no enums, namespaces, parameter properties). Build = `tsc -b && vite build`.
- **Sections and data are decoupled:** all content lives in typed `src/data/{about,skills,project,socials,experience}.ts` with `ReadonlyArray`; `experience.ts` splits `current` (the FlyRank internship) from `past` (empty, reserved for future entries).
- **Content inventory:** 5 completed projects (EARIST Extension Services System, BrewCrafter, EACON, Lever, BBC compiler) + the portfolio itself (in progress); skills across frontend/backend/database/tools; 4 socials (LinkedIn, Instagram, Facebook, GitHub).
- **Section-header convention is a fixed identity pattern:** a numbered tag + two to three uppercase lines (e.g. `/01 Intro` → "Crafting / Digital / Experiences."; `/02 Skills` → "Tools / Of The Trade."). Tag numbers are artistically chosen, not sequential.
- **Undecided:** none blocking. Open future items named in the PRD (dark/light toggle, blog, contact form, ⌘K palette, scroll progress) are not confirmed scope.

## Brand Commitments

- **Name/identity:** "Jude Duarte" (full name Jude Anthone Duarte). Academic identity is part of the story — "Iskolar ng Bayan", B.S. Computer Science, Eulogio "Amang" Rodriguez Institute of Science and Technology (EARIST), 2023–2027.
- **The official brand color is the existing blue gradient** used in the profile card (owner's explicit instruction): applied consistently project-wide. Root tokens: `--color-accent #191970`, night gradient `#003153 → #1b1b1b`, dark background `#0c0c0c`, light foreground `#f3f4f4`.
- **Dark theme, glassy surfaces:** gradient page background, `bg-surface/70` cards with `backdrop-blur`, blue radial glow accents.
- **Font:** Geist (variable) is the committed typeface.
- **Section-header style standard** (owner-defined) is a binding pattern for any section added or revised.
- **Personality signals in copy:** a mix of professional ("Fullstack Software Developer", "Cloud Engineer") and light personal voice ("pushin' and pullin'" on the GitHub card). No emojis in UI copy.

## Evidence on Hand

- **47 personal gallery photos** in `public/brand/gallery/` (About gallery carousel) plus `public/brand/card-img*.webp` profile artwork.
- **Per-project screenshots** in `src/assets/{ecs,eacon,brewcrafter,lever,bbc}/` (imported as `imageSrcs` arrays).
- **Live GitHub repos** for every completed project (links in `src/data/project.ts`).
- **FlyRank AI internship** details incl. logo at `public/logo/flyrank_logo.webp` and four concrete responsibility bullets.
- **Resume PDF** at `public/resume/JUDE-CV-READY.2.pdf`, linked from the header with the `download` attribute.
- **Absences future work must not fabricate:** no live/deployed project URLs (all `liveUrl` are empty), no testimonials, no metrics/benchmarks or performance numbers, no press.

## Product Principles

1. **Proof over promise** — every claim links to something a visitor can open and verify (repo, screenshot, live role).
2. **Serve two readers at once** — scannable facts for recruiters, real depth for peers; neither audience should have to dig for what they came for.
3. **Craft is credibility** — the design, responsiveness, and performance of the portfolio are themselves part of what it demonstrates about the engineer.
4. **Ship real, working software** — practical, end-to-end projects over toy demos; breadth is fine when it is earned.
5. **Identity with restraint** — the Filipino academic identity and blue-gradient brand are constants; they accent the work rather than compete with it.

## Accessibility & Inclusion

- Mobile-first from 320px; the owner is actively refining responsiveness, layout, and performance.
- Committed patterns in code: semantic HTML (`header`/`nav`/`main`/`article`/`section`/`footer`), `aria-labelledby` on sections, `aria-label`/tooltips on icon-only buttons, `aria-current` for the active nav item, `alt` text on images, `focus-visible` ring, skip-to-content link, and `prefers-reduced-motion` considerations.
- The DotGrid canvas is desktop-only and lazy-loaded (never blocks initial paint; no canvas on mobile/tablet).
