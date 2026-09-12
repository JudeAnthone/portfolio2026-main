---
name: Jude Duarte Portfolio
description: A clean, balanced dark portfolio with architectural clarity — glass as the single material accent, blue glow as interaction signal.
colors:
  background: "#0c0c0c"
  foreground: "#f3f4f4"
  muted: "#bbbbbb"
  accent: "#191970"
  night-start: "#003153"
  night-end: "#1b1b1b"
  surface: "#121216"
  surface-2: "#17171c"
  border: "#252530"
  ring: "#4a55d6"
typography:
  display:
    fontFamily: "Geist Pixel, sans-serif"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Geist Pixel, sans-serif"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.01em"
rounded:
  sm: "0.5rem"
  md: "0.75rem"
  lg: "1rem"
spacing:
  section: "3rem"
  card: "1rem"
  card-lg: "1.5rem"
  gap: "1rem"
components:
  button-primary:
    backgroundColor: "#191970"
    textColor: "#f3f4f4"
    rounded: "0.75rem"
    padding: "0.5rem 1.5rem"
  button-outline:
    backgroundColor: "transparent"
    textColor: "#f3f4f4"
    rounded: "0.75rem"
    padding: "0.5rem 1.5rem"
  card:
    backgroundColor: "#121216"
    textColor: "#f3f4f4"
    rounded: "1rem"
    padding: "1rem"
  card-2:
    backgroundColor: "#17171c"
    textColor: "#f3f4f4"
    rounded: "1rem"
    padding: "1rem"
  chip:
    backgroundColor: "rgba(18,18,22,0.55)"
    textColor: "#f3f4f4"
    rounded: "9999px"
    padding: "0.25rem 0.75rem"
---

# Design System: Jude Duarte Portfolio

## Overview

**Creative North Star: "The Glass Observatory"**

The portfolio is a single, carefully balanced dark surface where visitors come to verify evidence — repos, internship details, resume — not to be dazzled. The design is architectural: every element has a clear spatial reason, and nothing exists for decoration alone. The blue glow is not a wash; it is a deliberate signal, appearing only on hover, focus, and active interaction. Glass — the frosted, semi-transparent surface — is the only material accent, used exactly once per view to draw the eye to the most important element without competing with the work itself.

The atmosphere is **architectural clarity**: clean, balanced, and precise. Surfaces are flat and calm at rest; motion exists only to confirm state changes. The dark background is a fixed anchor, not a gradient — it stays consistent as visitors scroll, grounding the content in quiet confidence. Typography is tight and intentional; spacing follows a predictable rhythm. The result is a portfolio that feels engineered rather than decorated: proof of craft in the interface itself.

**Key Characteristics:**
- Dark, flat background with no full-page gradient
- Glass (backdrop-blur + frosted border) as the single material accent
- Blue glow (`#4a55d6`) reserved exclusively for hover/focus/active states
- Geist Pixel typeface throughout — tight headings, comfortable body text
- Consistent card rhythm: `surface` / `surface-2` cards with 1px border
- Mobile-first responsive, sticky sidebar on `lg+`

## Colors

The palette is minimal by design: one brand accent, one neutral scale, and a blue ring for interaction feedback only.

### Primary
- **Midnight Navy** (#191970): The brand accent. Used on primary CTAs, active nav state, and section-header tag backgrounds. Appears sparingly — it is the "signal" in the system.

### Neutral
- **Obsidian Black** (#0c0c0c): The page background. Fixed, flat, no gradient. The dark canvas that lets the work speak.
- **Surface** (#121216): Primary card background. Used on most cards, panels, and elevated containers.
- **Surface-2** (#17171c): Secondary card background. Used on sub-cells, chips, and nested surfaces.
- **Moonstone** (#f3f4f4): Primary text color. High contrast on dark surfaces.
- **Muted Silver** (#bbbbbb): Secondary text, descriptions, captions, and labels.
- **Border** (#252530): Card borders, dividers, and subtle structural lines.

### Accent / Interaction
- **Periwinkle** (#4a55d6): Focus ring and hover glow only. Never used as a background fill — it is an interaction signal, not a decorative color.

### Named Rules
**The 10% Accent Rule.** Midnight Navy appears on ≤10% of any given viewport. Its scarcity is the point — it marks the primary action, nothing else. Use it on CTAs and active nav states; everywhere else, let the neutral scale carry the weight.

**The Glow-Only-on-Action Rule.** The blue glow (Periwinkle or Midnight Navy) appears only in response to user interaction — hover, focus, or active tap. It is never a static decorative element. An idle screen has zero blue glow.

## Typography

**Display Font:** Geist Pixel (sans-serif)
**Body Font:** Geist Pixel (sans-serif)

**Character:** Geist Pixel is a geometric, pixel-informed typeface that reads as technical and precise without being monospaced. The single-typeface system keeps the design coherent; weight and size do the hierarchy work.

### Hierarchy
- **Display** (400, clamp(2.5rem, 5vw, 4rem), line-height 1.15): Hero headline only. The largest text on the page.
- **Headline** (400, 2rem, line-height 1.15): Section titles rendered through `SectionHeader`.
- **Title** (500, 1.25rem, line-height 1.3): Card titles, modal headings.
- **Body** (400, 1rem, line-height 1.5): Paragraphs, descriptions, list items. Max comfortable width ~65ch.
- **Label** (500, 0.75rem, letter-spacing 0.05em, uppercase): Chips, badges, section tags.

### Named Rules
**The Tight-Headings Rule.** All headings use `tracking-tight` and `line-height: 1.15`. No exceptions. Loose headings break the architectural feel.

## Layout

The layout is mobile-first (320px base) with a clear spatial hierarchy that shifts at `lg` (1024px).

**Mobile/Tablet (< lg):** Flat vertical stack. The sticky profile card collapses to a compact horizontal bar at the bottom with tap-to-expand education details. All sections scroll vertically with consistent spacing.

**Desktop (≥ lg):** Two-column layout — a sticky sidebar (StickyProfileCard, ~280px) on the left, and a flat section list on the right. The sidebar stays pinned as visitors scroll through sections.

**Spacing Rhythm:** Sections use `gap-4` (1rem) on mobile, `gap-5` (1.25rem) on desktop. Cards use `p-4` (1rem) or `p-6` (1.5rem) depending on prominence. The bento grid in About uses a 12-column grid on desktop (`md:grid-cols-12`) with 2-col mobile fallback.

**Container Behavior:** No max-width container; content is full-width with horizontal padding (`px-4 md:px-6`). The sidebar has a fixed max-width on desktop.

## Elevation & Depth

The system is flat by default. Depth is conveyed through three mechanisms only:

1. **Border** — a 1px `border-border` line on every card and panel, giving surfaces a defined edge without shadow.
2. **Glass accent** — a single frosted glass card per view (backdrop-blur + semi-transparent background + border). This is the only "lifted" element.
3. **Blue glow** — a subtle `ring-ring` glow on hover/focus, applied only to interactive elements. Not a surface treatment.

No ambient shadows. No drop shadows. No elevation layers. The flat palette is intentional — it keeps the design quiet and lets the work be the visual interest.

### Shadow Vocabulary
- **None.** The system does not use box-shadow as a design element. Depth is structural (border) or interaction-based (glow on hover/focus only).

### Named Rules
**The Flat-By-Default Rule.** Every surface is flat at rest. No shadows, no tonal shifts, no gradients appear in the default state. Lift and depth are reserved for interaction moments — hover, focus, active.

## Shapes

The form language is soft and consistent: gently rounded corners across all surfaces, with no hard 90° edges.

- **Cards/panels:** `border-radius: 1rem` (rounded-lg)
- **Buttons:** `border-radius: 0.75rem` (rounded-md)
- **Chips/badges:** `border-radius: 9999px` (full pill)
- **Icon boxes:** `border-radius: 0.5rem` (rounded-sm)

No clipping, no decorative geometry, no unusual silhouettes. The shape vocabulary is deliberately boring — it is infrastructure, not expression.

## Components

### Buttons
- **Shape:** `border-radius: 0.75rem` (rounded-md)
- **Primary:** Solid Midnight Navy (#191970) background, Moonstone (#f3f4f4) text, no gradient fill
- **Hover/Focus:** Subtle background shift + Periwinkle (#4a55d6) focus ring; transition 150ms
- **Outline:** Transparent background, Border (#252530) border, foreground text
- **Ghost:** No background, hover shows Surface background
- **Sizes:** xs (h-6), sm (h-7), default (h-8), lg (h-9), icon variants at 6/7/8/9

### Cards
- **Corner Style:** `border-radius: 1rem` (rounded-lg)
- **Background:** Surface (#121216) or Surface-2 (#17171c)
- **Shadow Strategy:** None — flat by default, 1px Border line only
- **Border:** 1px solid Border (#252530)
- **Internal Padding:** 1rem (mobile), 1.5rem (desktop)

### Chips / Badges
- **Style:** Semi-transparent Surface background (55% opacity), backdrop-blur, Border border
- **Shape:** Full pill (9999px radius)
- **Typography:** Label weight, uppercase tracking

### Navigation
- **Mobile:** Bottom-fixed header, compact, icon-forward
- **Desktop:** Top-pinned horizontal nav, section links with active state (Midnight Navy pill or text highlight)
- **Active state:** Midnight Navy accent — never gradient, never glow in idle

### Section Header
- **Pattern:** Tag (e.g. `/02`) + stacked uppercase lines (e.g. "TOOLS / OF THE TRADE.")
- **Typography:** Label weight, uppercase tracking, Muted Silver text
- **Structure:** SectionContainer renders this consistently across all sections

## Do's and Don'ts

### Do:
- **Do** keep the background flat and dark — no gradient, no tonal shift as visitors scroll.
- **Do** use glass (backdrop-blur + frosted border) as a single, deliberate accent per view.
- **Do** reserve blue glow for hover, focus, and active tap only — never idle.
- **Do** maintain the 10% accent rule — Midnight Navy marks the primary action, nothing else.
- **Do** use tight headings (`tracking-tight`, `line-height: 1.15`) throughout.
- **Do** keep card backgrounds flat (`surface` / `surface-2`) with a 1px border.

### Don't:
- **Don't** use a full-page gradient as the body background.
- **Don't** fill CTA buttons or nav pills with a gradient — use solid Midnight Navy.
- **Don't** show idle glow or pulsing blue effects on any surface.
- **Don't** use box-shadow as a decorative element — depth is border-based only.
- **Don't** hardcode hex values in components — reference tokens (`var(--color-accent)`).
- **Don't** add decorative elements that don't serve a spatial or interaction purpose.
