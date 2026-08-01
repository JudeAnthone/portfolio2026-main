# AGENTS.md — Portfolio 2026

## Commands (run from `v1/`)

| Command | What it does |
|---|---|
| `npm run dev` | Vite dev server |
| `npm run build` | `tsc -b && vite build` — **must pass both typecheck + build** |
| `npm run lint` | ESLint |
| `npm run preview` | Serve production build |

## Key Architecture

- **Single-page app**, no router library — hash navigation via section IDs (`#hero`, `#about`, etc.) driven by `src/app/routes.tsx`
- **Entry**: `src/main.tsx` → `App.tsx` → `AppShell.tsx`
- **Layout**: sticky sidebar (`StickyProfileCard`) + flat section list + footer, side-by-side on `lg+`
- **Data files**: `src/data/{project,about,skills,socials,experience}.ts` — typed interfaces, `ReadonlyArray`
  - `experience.ts` splits `current: ExperienceEntry | null` (rendered in the About "Current Internship" row) from `past: ReadonlyArray<ExperienceEntry>` for future entries
- **Animations**: shared variants in `src/lib/animations.ts`
- **Path alias**: `@/` → `src/` (configured in both `vite.config.ts` and `tsconfig`)
- **`StickyProfileCard` has two responsive variants**: a compact horizontal bar (`lg:hidden`) with tap-to-expand education details (local `showDetails` state; `aria-expanded`/`aria-controls`) on mobile/tablet, and the full vertical card (`hidden lg:block`) on `lg+`

## Framework / Toolchain Quirks

- **Tailwind v4** — no `tailwind.config.*` file. Config happens via `@theme` block in `src/index.css`. Plugin is `@tailwindcss/vite`.
- **Two animation libraries coexisting**: `framer-motion` (most files) and `motion/react` (ProjectCard, Projects). Both work the same API. Use whichever the file already imports.
- **MUI v7** for icons (`@mui/icons-material`) and Dialog/Button components. No emotion theme provider — styles use inline `sx` with CSS variable references (e.g., `var(--color-foreground)`).
- **shadcn/ui** installed — button component at `src/components/ui/button.tsx` uses `class-variance-authority` and `radix-ui`.

## TypeScript Strict Rules

- `noUnusedLocals`, `noUnusedParameters` — unused imports/vars cause build failure
- `verbatimModuleSyntax` — must use `import type` / `export type` for type-only imports
- `erasableSyntaxOnly` — no enums, no namespaces, no parameter properties

## Project Images

- `project.ts` use `imageSrcs: string[]` (array of imported assets)
- Imported images organized per-project in `src/assets/{ecs,eacon,brewcrafter,lever,bbc}/`
- Static images in `public/brand/` — accessed as `/brand/...`
- Gallery photos in `public/brand/gallery/` — 47 personal photos used in About section
- Company logos in `public/logo/` — accessed as `/logo/...` (e.g. `flyrank_logo.jpg` in the About "Current Internship" card)
- Resume PDF in `public/resume/` — linked from the Header nav (`/resume/JUDE-CV-READY.2.pdf`) with the `download` attribute

## Section Header Convention

| Section | Tag | Lines |
|---|---|---|
| Skills | `/02 Skills` | `TOOLS / OF THE TRADE.` |
| Projects | `/03 Projects` | `Featured / Works.` |
| Socials | `/04 Socials` | `LET'S / CONNECT.` |

(The tag numbers are artistically chosen, not sequential. Check `Requirement.md` for full list.)

## Notable

- `src/assets/` has a `proj-img.png` used in project data
- `src/lib/utils.ts` exports `cn()` (clsx + tailwind-merge)
- No tests, no CI config
- All sections use `whileInView` with `viewport={{ once: true }}` for scroll-triggered animations
- **DotGrid (GSAP canvas) is desktop-only + lazy-loaded**: `DotGridBackground` in `AppShell.tsx` mounts it only when `matchMedia("(min-width: 1024px)")` matches and loads it via `React.lazy` + `Suspense` — no canvas on mobile/tablet, never blocks initial paint
- **Header nav** renders `sectionRoutes`, then appends a non-route "Resume" download `<li>` — add extra header items there, not in `routes.tsx`
- **`aboutData` no longer has `location`/`availability` fields**; the "Currently Building" tech grid reads a component-local `techStack` array (`{ name, subtitle, icon: ReactNode }`), not `aboutData.stackHighlights` (field kept but unused)
