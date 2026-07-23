# Product Requirements Document

## Personal Developer Portfolio — 2026

| Field | Detail |
|---|---|
| **Author** | Jude Anthone Duarte |
| **Version** | 2.0.0 |
| **Date** | July 2026 |
| **Status** | Active Development |

---

## 1. Overview

A single-page personal portfolio website designed to showcase skills, projects, and professional identity as a Computer Science student. The site targets recruiters, hiring managers, and collaborators with a modern, dark-themed aesthetic built on a React + TypeScript stack.

---

## 2. Objectives

- Present a polished, professional first impression within 3 seconds of page load
- Showcase technical skills with categorized, icon-driven visual layouts
- Display project portfolio with expandable detail modals
- Provide direct links to social profiles and contact channels
- Maintain full responsiveness from 320px to 1200px+
- Achieve smooth 60fps animations throughout the experience

---

## 3. Target Audience

| Audience | Goal |
|---|---|
| Recruiters / HR | Quick skill assessment, contact info retrieval |
| Hiring Managers | Project depth review, tech stack verification |
| Developers / Peers | Collaboration interest, GitHub exploration |
| Professors / Advisors | Academic portfolio reference |

---

## 4. Tech Stack

### Core

| Technology | Version | Purpose |
|---|---|---|
| React | 19.2.4 | UI framework |
| TypeScript | 5.9.3 | Type safety |
| Vite | 8.0.1 | Build tool & dev server |
| Tailwind CSS | 4.2.2 | Utility-first styling |

### UI Libraries

| Library | Version | Purpose |
|---|---|---|
| MUI (Material UI) | 7.3.9 | Icon library (icons-material) |
| shadcn/ui | 4.1.0 | Reusable UI primitives |
| Radix UI | 1.4.3 | Headless UI components |
| react-icons | 5.6.0 | Technology brand icons |
| lucide-react | 1.7.0 | General-purpose icons |
| class-variance-authority | 0.7.1 | Variant-based class composition |
| clsx | 2.1.1 | Conditional class joining |
| tailwind-merge | 3.5.0 | Tailwind class deduplication |

### Animation

| Library | Version | Purpose |
|---|---|---|
| Framer Motion | 12.38.0 (motion) | Scroll-triggered & layout animations |
| GSAP | 3.14.2 | Physics-based canvas interactions (DotGrid) |
| tw-animate-css | 1.4.0 | Tailwind animation utilities |

### Fonts

| Font | Package | Usage |
|---|---|---|
| Geist Pixel | `@fontsource-variable/geist` | Primary body & heading font |

### Dev Tools

| Tool | Version |
|---|---|
| ESLint | 9.39.4 |
| typescript-eslint | 8.57.0 |
| eslint-plugin-react-hooks | 7.0.1 |
| eslint-plugin-react-refresh | 0.5.2 |
| @vitejs/plugin-react | 6.0.1 |
| sharp | 0.35.3 |

---

## 5. Project Architecture

```
portfolio2026-main/
├── v1/
│   ├── src/
│   │   ├── app/
│   │   │   ├── AppShell.tsx          # Root layout (grid, sidebar, sections)
│   │   │   └── routes.tsx            # Section route definitions
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── Header.tsx        # Fixed navigation (bottom on mobile)
│   │   │   │   ├── Footer.tsx        # Copyright bar
│   │   │   │   ├── SectionContainer.tsx  # Section wrapper + header component
│   │   │   │   └── StickyProfileCard.tsx # Left sidebar profile card
│   │   │   ├── sections/
│   │   │   │   ├── Hero.tsx          # Landing hero with typing effect
│   │   │   │   ├── About.tsx         # Bio, gallery carousel, metrics
│   │   │   │   ├── Skills.tsx        # Categorized tech stack tiles
│   │   │   │   ├── Projects.tsx      # Featured projects grid
│   │   │   │   └── Socials.tsx       # Social links grid
│   │   │   └── ui/
│   │   │       ├── button.tsx        # shadcn Button component
│   │   │       ├── DotGrid.tsx       # GSAP canvas background
│   │   │       └── ProjectCard.tsx   # Project card + modal dialog
│   │   ├── data/
│   │   │   ├── about.ts             # About content & metrics
│   │   │   ├── skills.ts            # Skill categories & items
│   │   │   ├── project.ts           # Project entries
│   │   │   └── socials.ts           # Social platform links
│   │   ├── lib/
│   │   │   ├── utils.ts             # cn() helper (clsx + twMerge)
│   │   │   └── animations.ts        # Shared Framer Motion variants
│   │   ├── assets/                  # Static images (logos, samples)
│   │   ├── index.css                # Global styles & design tokens
│   │   ├── App.tsx                  # React entry component
│   │   └── main.tsx                 # DOM root mount
│   ├── public/
│   │   ├── brand/                   # Brand images (card photos)
│   │   └── logo/                    # Logo assets
│   ├── index.html
│   ├── vite.config.ts
│   ├── tsconfig.json
│   ├── components.json              # shadcn config
│   └── package.json
```

---

## 6. Design System

### 6.1 Color Tokens

| Token | Hex | Role |
|---|---|---|
| `--color-background` | `#0c0c0c` | Page background |
| `--color-foreground` | `#f3f4f4` | Primary text |
| `--color-muted` | `#bbbbbb` | Secondary text |
| `--color-accent` | `#191970` | Brand accent |
| `--color-night-start` | `#003153` | Gradient start |
| `--color-night-end` | `#1b1b1b` | Gradient end |
| `--color-surface` | `#121216` | Card background |
| `--color-surface-2` | `#17171c` | Nested card background |
| `--color-border` | `#252530` | All borders |
| `--color-ring` | `#4a55d6` | Focus ring |
| `--color-success` | `#22c55e` | Success states |
| `--color-warning` | `#f59e0b` | Warning states |
| `--color-danger` | `#ef4444` | Error states |

### 6.2 Border Radius

| Token | Value |
|---|---|
| `--radius-sm` | 0.5rem |
| `--radius-md` | 0.75rem |
| `--radius-lg` | 1rem |

### 6.3 Typography

| Element | Mobile | Desktop |
|---|---|---|
| Hero title | `text-4xl` (2.25rem) | `text-8xl` (6rem) |
| Section titles | `text-2xl` (1.5rem) | `text-5xl` (3rem) |
| Body text | `text-xs` | `text-sm` / `text-base` |
| Tags / badges | `text-[10px]` | `text-xs` |

- Font: **Geist Pixel** (variable weight)
- Line height headings: `1.15`
- Letter spacing: `-0.025em` (tracking-tight) for headings, `0.01em` for body

### 6.4 Background

- Full page: `linear-gradient(315deg, #003153 0%, #1b1b1b 74%)` with `background-attachment: fixed`
- Cards: `bg-surface/70` with `backdrop-blur-sm`
- Glass effect: `bg-white/10` + `backdrop-blur-xl` + border `white/20`

---

## 7. Features

### 7.1 DotGrid Background (GSAP Canvas)

- Interactive dot matrix covering the full viewport
- Dots respond to mouse proximity (color shift)
- Click triggers a radial shockwave animation
- Mouse movement pushes dots via inertia physics
- Configurable: `dotSize`, `gap`, `proximity`, `shockRadius`, `shockStrength`
- Rendered on `<canvas>` with `requestAnimationFrame` loop

### 7.2 Header Navigation

| Viewport | Behavior |
|---|---|
| Mobile (<768px) | Fixed to bottom viewport, app-bar style, rounded top corners |
| Tablet/Desktop | Fixed to top, pill-shaped nav, centered links |

- Highlights active section on scroll via `IntersectionObserver`-style scroll tracking
- Smooth scroll to section on link click

### 7.3 Hero Section

- **Letter-by-letter name reveal** with 3D rotateX animation (staggered per character)
- **Typing effect** cycling through roles: "Full-Stack Developer", "UI/UX Enthusiast", "Open Source Contributor", "CS Student"
- Auto-deletes text after full display, pauses 2s, then types next role
- "Open to opportunities" status badge with pulse dot
- CTA buttons: "View Projects" and "Get In Touch"
- Animated bouncing scroll indicator arrow
- Background: Two radial blur accent circles

### 7.4 Profile Card (Sticky Sidebar)

- Visible on desktop only (hidden on mobile, integrated into flow)
- Profile image with hover scale + brightness overlay
- Hover reveals education details (degree, university, years)
- Name with animated gradient text shimmer effect
- Social icon buttons (LinkedIn, Instagram, Facebook) with staggered entrance
- Entrance: `card-float-in` keyframe animation
- Sticky positioning: `lg:sticky lg:top-28`

### 7.5 About Section

- **Section header**: Tagged "/01 Intro" with animated line-by-line title reveal
- **Main content card** (8/12 columns on desktop):
  - "Currently Building" badge
  - Bio description
  - Location and availability chips
  - Stack highlights grid (2-column on sm+)
  - CTA links to Projects and Socials
- **Sidebar bento** (4/12 columns on desktop):
  - "Profile Snapshot" card with gradient background
  - Metrics cards (Primary Focus, Interests)
- **Gallery carousel**:
  - Responsive slides-per-view (1 mobile → 5 desktop)
  - Spring-animated slide transitions
  - Arrow navigation + pagination dots
  - Image hover scale effect

### 7.6 Skills Section

- **4 skill categories**: Frontend, Backend, Database, Tools & DevOps
- Category cards in 2-column grid on desktop, 1-column on mobile
- Each category has:
  - Icon badge (WebIcon, DnsIcon, StorageIcon, HandymanIcon, CloudQueueIcon)
  - Title
  - Flex-wrapped logo tiles with tooltips
- **Logo tiles**:
  - Brand-colored icons from `react-icons/si`
  - Hover: `y: -2, scale: 1.04`
  - Sizes: `h-8 w-8` mobile → `h-11 w-11` desktop

**Technologies displayed:**

| Category | Technologies |
|---|---|
| Frontend | React, JavaScript, TypeScript, HTML, CSS, Tailwind, Axios, Vite, Styled Components |
| Backend | Node.js, TypeScript, Express.js, Java, Python, C++, JavaScript, JWT, OAUTH |
| Database | PostgreSQL, MySQL, MongoDB |
| Tools | Git, GitHub, VS Code, Visual Studio, PyCharm, Jupyter Notebook, Docker, CI/CD |

### 7.7 Projects Section

- **ProjectCard component** with two states:
  - **Collapsed**: Image preview, status badge, title, description (2-line clamp), stack tags (max 4)
  - **Expanded (Modal)**: Full image, detailed description, all stack chips, GitHub link button, live preview button
- Dialog uses MUI `Dialog` with custom glass-morphism styling
- Hover: `y: -4` elevation effect
- Click: Opens modal with backdrop blur

### 7.8 Socials Section

- **CTA banner**: Gradient card with "Start a conversation" link
- **Social cards** (2-column grid on desktop):
  - Platform icon with brand color
  - Platform name + handle
  - Description text
  - "Open [Platform]" button
  - Hover: Colored glow effect (platform-specific)
- **Platforms**: LinkedIn, Instagram, Facebook, GitHub

---

## 8. Data Models

```typescript
// About
interface AboutData {
  tagline: string;
  intro: string;
  description: string;
  location: string;
  availability: string;
  stackHighlights: string[];
  metrics: AboutMetric[];
}

interface AboutMetric {
  label: string;
  value: string;
}

// Skills
type SkillCategoryKey = "frontend" | "backend" | "database" | "tools" | "devops-cloud";

interface SkillCategory {
  key: SkillCategoryKey;
  title: string;
  items: string[];
}

// Projects
type ProjectStatus = "Live" | "In Progress" | "Planned";

interface ProjectItem {
  id: string;
  title: string;
  description: string;
  details: string;
  stack: string[];
  status: ProjectStatus;
  imageSrc: string;
  repoUrl: string;
  liveUrl?: string;
}

// Socials
type SocialPlatform = "LinkedIn" | "Github" | "Instagram" | "Facebook";

interface SocialLink {
  platform: SocialPlatform;
  handle: string;
  url: string;
  description: string;
}
```

---

## 9. Animation System

### Shared Variants (`src/lib/animations.ts`)

| Variant | Effect | Duration |
|---|---|---|
| `containerVariants` | Stagger children (0.08s delay, 0.05s initial) | — |
| `itemVariants` | Fade up 12px | 0.5s |
| `fadeInUp` | Fade up 20px | 0.6s |
| `scaleIn` | Fade + scale from 0.95 | 0.5s |
| `letterVariants` | 3D rotateX reveal, custom index delay | 0.5s per letter |
| `pulseAnimation` | Scale 1 → 1.02 → 1 loop | 3s infinite |
| `floatAnimation` | Y 0 → -8 → 0 loop | 4s infinite |

### Easing

All animations use: `[0.22, 1, 0.36, 1]` — a smooth deceleration curve.

### Per-Component Animations

| Component | Animation |
|---|---|
| Header | `y: 100 → 0` slide-up entrance (0.6s, delay 0.3s) |
| Profile Card | Scale-in + float-in keyframe, social icons stagger |
| Section Container | Scroll-triggered fade + slide-up (`whileInView`) |
| Section Header | Tag slides in from left, title lines stagger in |
| Hero Name | Letter-by-letter 3D rotateX with 0.04s stagger |
| Hero Role | Typing/deleting loop with 100ms/50ms intervals |
| Scroll Arrow | Bouncing y-axis loop |
| DotGrid | GSAP inertia + elastic.out return |
| Gallery | Spring-animated x translate (`stiffness: 340, damping: 34`) |
| Skill Tiles | Hover lift (`y: -2, scale: 1.04`) |
| Social Cards | Hover lift (`y: -3`) |
| Profile Name | Infinite gradient background-position animation |

---

## 10. Responsive Design

### Breakpoints

| Name | Width | Target |
|---|---|---|
| Mobile | 320px – 639px | Phones |
| Small tablet | 640px – 767px | Large phones, small tablets |
| Tablet | 768px – 1023px | Tablets, small laptops |
| Desktop | 1024px – 1279px | Laptops |
| Wide | 1280px+ | Desktop monitors |

### Layout Behavior

| Viewport | Grid | Sidebar | Header |
|---|---|---|---|
| Mobile | Single column | Below content | Bottom fixed |
| Tablet | Single column | Below content | Top fixed |
| Desktop | 2-column (300px sidebar + content) | Sticky left | Top fixed |
| Wide | 2-column (320px sidebar + content) | Sticky left | Top fixed |

### Spacing

| Element | Mobile | Desktop |
|---|---|---|
| Section padding | `py-6` | `py-14` |
| Section horizontal | `px-2` | `px-8` |
| Content gap | `gap-6` | `gap-8` |
| Main top padding | `pt-4` | `pt-20` |
| Main bottom padding | `pb-24` | `pb-8` |

---

## 11. Accessibility

- Skip-to-content link (`sr-only` until focus)
- All sections wrapped in `<section>` with `aria-labelledby`
- Social links have `aria-label` attributes
- Image elements have `alt` text
- Gallery navigation uses `aria-label` for page buttons
- `focus-visible` ring styling (`2px solid ring, offset 2px`)
- Semantic HTML: `<header>`, `<main>`, `<nav>`, `<footer>`, `<article>`, `<aside>`
- Tooltip components for icon-only buttons

---

## 12. Build & Scripts

| Script | Command | Purpose |
|---|---|---|
| `dev` | `vite` | Start dev server with HMR |
| `build` | `tsc -b && vite build` | Type-check + production build |
| `lint` | `eslint .` | Run ESLint across project |
| `preview` | `vite preview` | Preview production build locally |

### Path Aliases

- `@/` → `./src/` (configured in `tsconfig.json` + `vite.config.ts`)

---

## 13. Performance Considerations

- **Lazy loading**: Gallery images use `loading="lazy"`
- **Code splitting**: Vite auto-chunks; warning exists for bundle >500KB (GSAP + MUI)
- **Passive listeners**: Scroll event listeners use `{ passive: true }`
- **Canvas rendering**: DotGrid uses `requestAnimationFrame` with throttled mouse events (50ms)
- **Image optimization**: `sharp` available for build-time image processing
- **Font loading**: Variable font (`Geist Pixel`) loaded via `@fontsource-variable`
- **CSS**: Tailwind v4 with tree-shaking, `tw-merge` for deduplication

---

## 14. Content Structure

### Page Flow (Top to Bottom)

1. **Hero** — Name, typing roles, intro, CTAs
2. **About** — Bio, stack highlights, metrics, gallery
3. **Skills** — Categorized technology grid
4. **Projects** — Featured work with expandable details
5. **Socials** — Contact links and platforms
6. **Footer** — Copyright

---

## 15. Future Enhancements

- Add more project entries as they are completed
- Dark/light mode toggle
- Blog section
- Contact form with email integration
- Page transition animations between routes
- Scroll progress indicator
- Command palette (⌘K) for quick navigation

---

*End of document.*
