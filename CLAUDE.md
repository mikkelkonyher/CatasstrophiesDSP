# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

CatasstrophiesDSP is a marketing/showcase website for audio processing plugins (DSP). Built with React 19, TypeScript, Vite 7, and Tailwind CSS 4. Currently showcases the "BIRMA" dynamic audio processor plugin.

## Commands

```bash
npm run dev       # Start Vite dev server with HMR
npm run build     # TypeScript type-check (tsc -b) + Vite production build → dist/
npm run lint      # ESLint across all .ts/.tsx files
npm run preview   # Preview production build locally
```

No test framework is configured yet.

## Architecture

### Component Organization

- `src/components/layout/` — Structural components (AppLayout, Header, Footer). AppLayout wraps the entire app in a CRT monitor frame effect with scanlines.
- `src/components/ui/` — Reusable UI primitives (GlitchButton, NeonInput, TerminalCard) that implement the cyberpunk design system.
- `src/sections/` — Page sections composed from layout and UI components (Hero, ProductShowcase).
- `src/App.tsx` — Root component assembling layout and sections.
- `src/main.tsx` — Entry point rendering App into `#root`.

### Design System

The site uses a cyberpunk/retro-futuristic aesthetic. Key Tailwind custom tokens defined in `tailwind.config.js`:
- Colors: `neon` (#00ff88), `neon-dim` (#00b36a), `bg` (#081018)
- Fonts: `mono` (JetBrains Mono, Inconsolata), `sans` (Inter)
- Custom animations and neon glow effects are in `src/index.css`

### Tech Stack Details

- **React 19** with automatic JSX transform (`react-jsx`)
- **Vite 7** with `@vitejs/plugin-react` (Babel-based Fast Refresh)
- **Tailwind CSS 4** via `@tailwindcss/postcss` plugin (PostCSS integration)
- **TypeScript 5.9** in strict mode with `noUnusedLocals`, `noUnusedParameters`, `erasableSyntaxOnly`
- **ESLint 9** flat config with typescript-eslint, react-hooks, and react-refresh plugins
