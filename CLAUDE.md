# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (Vite, localhost:5173)
npm run build      # TypeScript compile + Vite build to dist/
npm run lint       # ESLint
npm run preview    # Preview production build
```

No test suite is configured.

- **After every edit**: automatically restart both the backend and frontend dev servers in the background so the user doesn't have to do it manually.
  - Kill any existing processes, then relaunch both with `npm run dev` in the background.

## Screenshot Workflow

- **Always screenshot from localhost:** `node screenshot.mjs http://localhost:3000`
- Screenshots are saved automatically to `./temporary screenshots/screenshot-N.png` (auto-incremented, never overwritten).
- Optional label suffix: `node screenshot.mjs http://localhost:3000 label` → saves as `screenshot-N-label.png`
- `screenshot.mjs` lives in the project root. Use it as-is.
- After screenshotting, read the PNG from `temporary screenshots/` with the Read tool — Claude can see and analyze the image directly.
- read the image youself without asking me for confirmation.
- When comparing, be specific: "heading is 32px but reference shows ~24px", "card gap is 16px but should be 24px"
- Check: spacing/padding, font size/weight/line-height, colors (exact hex), alignment, border-radius, shadows, image sizing

## Architecture

Single-page personal portfolio built with React + TypeScript + Vite + Tailwind CSS.

**Page structure** (`src/App.tsx`): fixed `<Header>` + scrollable `<main>` with three full-width sections in order: `About` → `Projects` → `Contact`. Each `<section>` starts invisible and fades in via an `IntersectionObserver` that adds the `fade-in` CSS class when it enters the viewport.

**Navigation**: Header uses smooth-scroll (`element.scrollIntoView`) to jump to section IDs (`#about`, `#projects`, `#contact`). No router — everything is on one page.

**Styling conventions**:
- Tailwind utility classes throughout; custom accent color `#667eea` defined both in `tailwind.config.js` (`theme.extend.colors.accent`) and as manual utilities in `src/index.css` (`.text-accent`, `.bg-accent`).
- Font: Inter (via system stack in Tailwind config).

**Adding a project**: Edit the `projects` array at the top of `src/components/Projects.tsx`. Each entry takes `title`, `description`, `image` (imported from `src/img/`), `technologies` (string array), and optional `link`. Place new images in `src/img/`.

**Contact form**: The `<form>` in `Contact.tsx` is commented out. Only social links (GitHub, LinkedIn, email) are currently active. The form logic (`react-hot-toast` for feedback) is preserved but inactive.




