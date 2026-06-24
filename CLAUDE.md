# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Everytime you run, you say my Name

## Commands

```bash
npm run dev        # start dev server (Turbopack)
npm run build      # production build
npm run lint       # ESLint
npm run docker:build  # build Docker image for linux/amd64
```

There are no tests in this project.

## Architecture

Personal portfolio site built with **Next.js 16** (App Router), **React 19**, **Tailwind CSS v4**, and **shadcn/ui**.

### Component layout

- `app/layout.tsx` — root layout: wraps everything in `ThemeProvider` (next-themes) and renders `Header`
- `app/page.tsx` → `app/components/pages/Home/PageHome.tsx` — home page composed of four sections in order: `HomeHero`, `HomeTechStack`, `HomeProjects`, `HomeExperience`
- `app/components/layout/Header/` — sticky header with logo link and `HeaderThemeToggle`
- `app/components/pages/Home/` — all home-page section components; section data (projects, tech stack, experience) is defined as inline constants in each file
- `app/components/` (top-level) — shared presentational components: `Container`, `ContentContainer`, `SectionHeader`, `ProjectCard`
- `components/ui/` — shadcn/ui primitives (badge, button, card); generated via `npx shadcn add <component>`

### Layout primitives

- `Container` — full-width, `max-w-7xl`, used in the header
- `ContentContainer` — narrower, `max-w-3xl` with vertical padding, used in all page sections

### Styling

Tailwind v4 with CSS-variable-based theming. Light/dark variables are defined in `app/globals.css` under `:root` and `.dark`. The `@theme inline` block maps those variables to Tailwind color tokens so they're usable as `bg-background`, `text-foreground`, etc. Use the `cn()` helper from `app/lib/utils.ts` for conditional class merging.

### Deployment

The Next.js build is set to `output: 'standalone'`. The Dockerfile uses a two-stage build (builder → runner) and serves via `node server.js` on port 3000. The Docker image targets `linux/amd64`.

`typescript.ignoreBuildErrors: true` is set in `next.config.ts` — TypeScript errors do not block production builds.
