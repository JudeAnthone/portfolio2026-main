# Portfolio Changelog

## [1.2.0] - 2026-07-23

### Responsive Layout Overhaul

#### Mobile Bottom Navigation
- Header now pinned to bottom of viewport on mobile (<768px)
- Header stays at top on tablet and desktop (>=768px)
- Mobile nav uses rounded top corners, desktop nav uses full rounded pill
- Main content has increased bottom padding to clear the bottom nav
- Reduced top padding on mobile since header is no longer at top

#### Typography Scaling
- Hero title scales from `text-4xl` (mobile) to `text-8xl` (desktop)
- Section headers scale from `text-2xl` to `text-5xl`
- Role text scales from `text-base` (mobile) to `text-3xl` (desktop)
- All body text uses responsive sizing (`text-xs` mobile → `text-base` desktop)
- Status badges and tags scale down on mobile (`text-[10px]` → `text-xs` → `text-sm`)

#### Spacing & Layout
- Section padding reduced on mobile: `py-6` vs `py-14` desktop
- Section containers use `px-2` mobile, `px-8` desktop
- Component padding scales: `p-3` mobile → `p-6` desktop
- Gallery images: `w-[180px]` mobile → `w-[220px]` desktop
- Social card icon buttons: `34px` mobile → `38px` desktop
- Skill tiles: `h-8 w-8` mobile → `h-11 w-11` desktop
- Metrics grid: `sm:grid-cols-2` for tablet instead of `sm:grid-cols-3`
- Gallery pagination dots: `h-2 w-2` mobile → `h-2.5 w-2.5` desktop

#### Overflow Prevention
- Hero blur circles constrained with smaller dimensions on mobile
- Gallery carousel buttons no longer use negative margins that cause overflow
- Gallery nav buttons positioned within safe area using `px-1`
- Image heights scale responsively (`h-36` mobile → `h-48` desktop)
- All text elements use `truncate` or `line-clamp` where needed

#### Breakpoints Targeted
- **Mobile**: 320px-480px
- **Tablet**: 760px-1024px
- **Desktop**: 1200px+

---

## [1.1.0] - 2026-07-23

### Added

#### Hero Section
- New animated landing section with letter-by-letter name reveal
- Typing effect cycling through roles (Full-Stack Developer, UI/UX Enthusiast, etc.)
- "Open to opportunities" status badge with pulse animation
- CTA buttons for Projects and Socials sections
- Bouncing scroll indicator arrow
- Gradient background blur effects

#### Shared Animation System
- Created `src/lib/animations.ts` with reusable animation variants
- `containerVariants` - staggered children animation
- `itemVariants` - fade-in + slide-up
- `fadeInUp` - smooth entrance from below
- `scaleIn` - scale + fade entrance
- `letterVariants` - 3D letter reveal
- `pulseAnimation` / `floatAnimation` - looping effects

#### Header Animations
- Slide-down entrance animation on page load
- Delayed appearance for smooth transition

#### Profile Card Enhancements
- Scale-in entrance animation
- Staggered social icon reveal
- Gradient text shimmer effect on name
- Hover scale effect on profile image

#### Section Container Animations
- Scroll-triggered fade + slide-up for all sections
- Staggered line-by-line header reveal
- Tag, title lines, and description animate independently

### Changed

#### Code Refactoring
- Extracted duplicated animation variants to shared utilities
- All section components now import from `src/lib/animations.ts`
- Standardized animation imports across `About.tsx`, `Skills.tsx`, `Projects.tsx`, `Socials.tsx`

#### Routes
- Added `hero` as first route in navigation
- Updated `SectionId` type to include `'hero'`
- Header now shows "Home" link

### Technical Details

#### Dependencies Used
- `framer-motion` - animation library
- `gsap` - physics-based effects (DotGrid)
- `@mui/material` - UI components

#### Animation Patterns
- `ease: [0.22, 1, 0.36, 1]` - smooth deceleration curve used throughout
- `viewport: { once: true }` - animations trigger once on scroll
- Staggered delays with `staggerChildren` and `delayChildren`

---

## [1.0.0] - Initial Release

### Features
- Dark theme with gradient backgrounds
- Responsive layout with sticky profile card
- Interactive DotGrid background with GSAP physics
- About section with gallery carousel
- Skills section with categorized technology icons
- Projects section with modal details view
- Socials section with platform-specific links
- shadcn/ui integration
- Tailwind CSS 4 styling
