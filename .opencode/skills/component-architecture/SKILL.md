---
name: component-architecture
description: Component folder structure, data layer, and TypeScript conventions for the portfolio. Use when creating components, adding sections, or touching data files.
---

# Component Architecture

## Folder Structure

```
src/
├── app/           → AppShell.tsx (page layout) + routes.tsx (section registry)
├── components/
│   ├── layout/    → Header, Footer, SectionContainer, StickyProfileCard
│   ├── sections/  → Hero, About, Skills, Projects, Socials
│   └── ui/        → button, DotGrid, ProjectCard (reusable primitives)
├── data/          → about, project, skills, socials (typed content)
├── lib/           → animations.ts (shared variants), utils.ts (cn)
└── assets/        → imported images, per-project folders
```

## Single-Page App — How Sections Work

- No router library. Hash navigation via section IDs (`#hero`, `#about`, …).
- Sections are registered in `src/app/routes.tsx` as a `ReadonlyArray<SectionRoute>` (`id`, `label`, `Component`).
- **Adding a new section:** create component in `sections/` → add entry to `routes.tsx` → it auto-appears in nav + layout (AppShell maps over `sectionRoutes`).
- Layout is side-by-side on `lg+`: sticky sidebar (`StickyProfileCard`) + flat section list + footer.
- AppShell wraps every section in `<SectionContainer id>` which provides the `whileInView` reveal + section spacing.

## Data Layer Conventions

- Every data file (`src/data/*.ts`) exports a **typed interface** + a `ReadonlyArray` const (e.g., `projectsData: ReadonlyArray<ProjectItem>`).
- Components import the data, never import `.ts` data into other data files.
- `project.ts` uses `imageSrcs: string[]` (array of imported assets, one folder per project under `src/assets/`).
- Static brand images live in `public/brand/` and are referenced as `/brand/...` (NOT imported). Personal gallery photos: `/brand/gallery/...`.
- Alt text: use descriptive strings (e.g., `Gallery photo 1`), not `photo1`.

## TypeScript Strict Rules (build-enforced)

- `noUnusedLocals`, `noUnusedParameters` — unused imports/vars **fail the build**.
- `verbatimModuleSyntax` — type-only imports must use `import type` / `export type`.
- `erasableSyntaxOnly` — no enums, no namespaces, no parameter properties.
- Path alias: `@/` → `src/` (configured in both `vite.config.ts` and `tsconfig.app.json`).

## Component Conventions

- Default export per component file.
- Single responsibility; small focused components (per `prompt.md`).
- Mobile-first: base styles for mobile, `md:` / `lg:` for larger breakpoints.
- Animation: use `framer-motion` or `motion/react` matching the file's existing import. Import shared variants from `../../lib/animations` rather than redefining.
- Accessibility: semantic HTML, `aria-label` on icon-only buttons, skip link exists in AppShell.

## Key Files

- `src/app/AppShell.tsx` — layout shell, sticky sidebar, section list.
- `src/app/routes.tsx` — the section registry / "routing".
- `src/components/layout/SectionContainer.tsx` — exports both `SectionContainer` (wrapper) and `SectionHeader` (tag + lines).
- `src/lib/animations.ts` — shared motion variants.
- `src/lib/utils.ts` — `cn()` (clsx + tailwind-merge).
