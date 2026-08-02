---
name: design-system
description: Portfolio's visual design conventions — fonts, colors, spacing, gradients, animation libraries. Use when styling, redesigning, or adding new UI.
---

# Design System

## Design Tokens (Tailwind v4)

No `tailwind.config.*` file exists. All theme tokens are defined in the `@theme` block in `src/index.css`. Add new tokens there, not in a config file.

| Token | Tailwind class | CSS var |
|---|---|---|
| Main bg | `bg-background` | `var(--color-background)` = #0c0c0c |
| Main text | `text-foreground` | `var(--color-foreground)` = #f3f4f4 |
| Secondary text | `text-muted` | `var(--color-muted)` = #bbbbbb |
| Accent/brand | `bg-accent` | `var(--color-accent)` = #191970 |
| Night gradient | `bg-night-gradient` | start #003153 → end #1b1b1b |
| Surface | `bg-surface` | `var(--color-surface)` = #121216 |
| Surface-2 | `bg-surface-2` | `var(--color-surface-2)` = #17171c |
| Border | `border-border` | `var(--color-border)` = #252530 |
| Ring/focus | `ring-ring` | `var(--color-ring)` = #4a55d6 |

## Fonts

- Body font: **Geist Pixel** — set on `body` in `src/index.css` (via `@import "@fontsource-variable/geist"`).
- `index.html` loads Plus Jakarta Sans + Geist Pixel from Google Fonts, but the app body uses Geist Pixel.
- Headings inherit the body font; they use `tracking-tight` + `line-height: 1.15`.

## Gradient & Card Utility Classes (defined in `src/index.css`)

Reusable classes, not Tailwind tokens — prefer these over raw inline gradients:

- `bg-night-gradient` — the brand 315° gradient (primary CTA buttons, section headers, active nav pill, body background).
- `bg-card-image-gradient` — gradient used behind profile/project images.
- `card-image-overlay` — overlay on hover for images (used in StickyProfileCard).
- `card-detail-chip` — frosted chip (bg + blur + border) for badges over images.
- `bg-grid-subtle` — subtle grid background.
- `surface` / `surface-2` — shorthand for `bg-surface border border-border rounded-lg`.

## Animations

**Two animation libraries coexist — use whichever the file already imports:**

- `framer-motion` — Hero, About, Skills, Header, StickyProfileCard, SectionContainer, lib/animations.ts
- `motion/react` — Projects, ProjectCard, Socials

Shared variants live in `src/lib/animations.ts` (`containerVariants`, `itemVariants`, `fadeInUp`, `scaleIn`, `letterVariants`). Sections use `whileInView` + `viewport={{ once: true }}` for scroll-triggered reveals. Don't re-declare variants — import from `../../lib/animations`.

## MUI v7 Conventions

- Icons from `@mui/icons-material` (e.g., `ChevronLeftRoundedIcon`).
- `Dialog`, `Button`, `Tooltip`, `IconButton` from `@mui/material`.
- **No Emotion ThemeProvider.** Style via inline `sx` referencing CSS vars: `sx={{ color: "var(--color-foreground)", borderColor: "var(--color-border)" }}`.
- Don't hardcode hex in components; reference the tokens above.

## Buttons

- Custom CTA styling (Hero, ProjectCard modal) uses `bg-night-gradient` + rounded-lg, not the shadcn `Button` component.
- shadcn `Button` (`src/components/ui/button.tsx`) uses CVA + radix — only needed when an accessible inline variant is wanted.

## Section Headers

Always render section headers through `SectionHeader` (`src/components/layout/SectionContainer.tsx`) with a `tag` + `lines` array. Tag numbers are artistic, not sequential (see AGENTS.md table).

## Section Card Headers (chip)

About section cards use a consistent header chip: `inline-flex items-center gap-2 rounded-full border border-border bg-surface-2 px-2.5 py-1` with a small MUI icon (`text-sm md:text-base text-foreground`) + uppercase tracking label (`text-[10px] md:text-xs tracking-[0.1em]`). Example labels: "Current Internship", "Gallery". (The About hero narrative card has no chip/label — just story text.)

Bento / tech-stack grids (e.g. About's 6 tech cells) are now individual cells in the section's 12-column grid (`md:col-span-4` on desktop, `col-span-1` in a 2-col mobile grid). Each cell is `rounded-xl border border-border bg-surface-2` with a left-aligned layout: icon box (`h-10 w-10 rounded-lg bg-accent/15 text-lg text-foreground/80`), name (`text-sm font-medium text-foreground`), subtitle (`text-[10px] text-muted`), and a one-liner (`mt-3 text-xs leading-relaxed text-muted`). Drive them from a component-local `{ name, subtitle, icon: ReactNode, description: string }` array. Tech cells use **real brand logos** from `react-icons/si` (e.g. `SiReact`, `SiDocker`); for brands not in react-icons (e.g. n8n), define a small inline `<svg fill="currentColor">` component.

- About's full-width hero narrative card is `md:col-span-12` with `bg-surface/70`, decorative blurs, `max-w-3xl` text, and no chip/label.
