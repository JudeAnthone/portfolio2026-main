# .opencode — Setup Guide

How the opencode config in this repo fits together, and what happens when you run opencode.

## The 3 Pieces

| # | File | Loaded when | Role |
|---|---|---|---|
| 1 | `opencode.json` (repo root) | opencode startup | Global wiring: `$schema` validation + `skills.paths` registration |
| 2 | `AGENTS.md` (repo root) | opencode startup (always) | Repo conventions: commands, architecture, strict TS rules, quirks |
| 3 | `.opencode/skills/*/SKILL.md` | On demand, when a task matches | Deep, topic-specific guidance loaded only when needed |

### Does opencode.json matter for skills?

**Short answer: not strictly.** `.opencode/skills/` is a *default scanned location*, so opencode finds your SKILL.md files there even without `opencode.json`. The config file makes the registration explicit, adds `$schema` editor validation, and gives a single place to later register non-default skill folders or MCP servers. It costs nothing to keep.

**What actually makes a skill work:** the `name` + `description` frontmatter. Skills with no description are silently filtered out. Your empty SKILL.md files were the real blocker, not the missing config.

## The Runtime Flow

When you start opencode and request a change:

```
You start opencode in the repo root
        │
        ▼
┌─────────────────────────────────────────────┐
│ 1. Load opencode.json                       │
│    → registers skills.paths (and any MCP,   │
│      agents, plugins configured)            │
└─────────────────────┬───────────────────────┘
                      ▼
┌─────────────────────────────────────────────┐
│ 2. Load AGENTS.md into context (always on)  │
│    → agent learns commands, architecture,   │
│      TS rules, image layout, quirks         │
└─────────────────────┬───────────────────────┘
                      ▼
You type: "Create a new Projects card"
                      │
                      ▼
┌─────────────────────────────────────────────┐
│ 3. Skill matcher checks every SKILL.md      │
│    description against your request         │
│    │                                        │
│    ├─ "component-architecture" → matches    │
│    │    ("component", "creating components")│
│    ├─ "design-system"          → weak/no    │
│    │    match (no styling asked)            │
│    └─ built-in "customize-opencode" → no    │
└─────────────────────┬───────────────────────┘
                      ▼
┌─────────────────────────────────────────────┐
│ 4. Load matched SKILL.md content            │
│    → agent gets component/data/TS guidance  │
│      WITHOUT the design-system detail       │
└─────────────────────┬───────────────────────┘
                      ▼
┌─────────────────────────────────────────────┐
│ 5. Agent works on your request using:       │
│    AGENTS.md (baseline) + matched SKILL.md  │
│    (deep topic rules)                       │
└─────────────────────────────────────────────┘
```

## Why Skills Save Tokens

- `AGENTS.md` is always in context — keep it short (it is).
- SKILL.md bodies are **only** loaded when relevant, so a UI task doesn't carry design-system + component rules + everything else at once.
- Rule of thumb: if it applies to *every* change → `AGENTS.md`. If it applies to *one topic* → a SKILL.md.

## After Editing Config Files

`opencode.json`, SKILL.md, agents, commands are read **once at startup**, not hot-reloaded. After changing them, **quit and restart opencode**.

## Adding a New Skill

```
.opencode/skills/<skill-name>/SKILL.md
```

```markdown
---
name: <skill-name>            # lowercase, hyphen-separated, matches folder name
description: What it does AND when to trigger it. Front-load keywords the user will say.
---

(skill body: instructions, examples, references)
```

## Local Skills in This Repo

| Skill | Triggers on | Contents |
|---|---|---|
| `component-architecture` | "component", "section", "data file", "add section" | folder structure, single-page section flow, data layer, TS strict rules |
| `design-system` | "style", "redesign", "new UI", "color", "font", "animation" | design tokens, gradients, fonts, animation library duality, MUI `sx` conventions |

## Cheat Sheet

- Restart opencode after editing config/skills.
- New section = component in `sections/` + entry in `routes.tsx`. Nothing else.
- Build = `tsc -b && vite build` (run from `v1/`). Unused imports fail it.
- Two animation libs — match the file's existing import.
- No `tailwind.config.*`; tokens live in `@theme` in `src/index.css`.
