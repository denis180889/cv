# Denys Pobochnyi — Personal Landing Page

A personal landing page / portfolio for **Denys Pobochnyi**, Senior Automation QA Engineer — built from his CV, styled as a modern dark tech portfolio.

🔗 **Live site: [cv.denis-pob.workers.dev](https://cv.denis-pob.workers.dev/)**

> This repo was created for playing around with [Claude Code](https://claude.com/claude-code) — most of it (code, content, deployment setup) was built through an AI-assisted, conversational workflow.

## Tech Stack

| Layer      | Choice                          |
| ---------- | -------------------------------- |
| Framework  | [React](https://react.dev) + [TypeScript](https://www.typescriptlang.org/) |
| Build tool | [Vite](https://vitejs.dev)       |
| Styling    | [Tailwind CSS](https://tailwindcss.com) |

## Prerequisites

- [Node.js](https://nodejs.org) 18+ (includes `npm`)

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server (with hot reload)
npm run dev
```

Then open **http://localhost:5173** in your browser.

## Deployment (Cloudflare Pages)

This repo is connected to [Cloudflare Pages](https://pages.cloudflare.com) for continuous deployment: every push to `main` automatically builds and deploys.

Project settings used in the Cloudflare dashboard (Workers & Pages → this project → Settings → Builds):

| Setting | Value |
| --- | --- |
| Framework preset | Vite |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | `/` |
| Node version | `20` (pinned via `.nvmrc`) |

## Other Commands

```bash
# Type-check + build an optimized production bundle into dist/
npm run build

# Preview the production build locally
npm run preview
```

## Project Structure

```
cv/
├── index.html                # HTML entry point / page <title>, fonts
├── src/
│   ├── main.tsx               # React root
│   ├── App.tsx                # Page layout — composes all sections
│   ├── index.css              # Tailwind entry + global styles
│   ├── data/
│   │   └── cv.ts               # All CV content (profile, skills, experience, education)
│   └── components/
│       ├── Hero.tsx            # Name, title, summary, contact links
│       ├── Highlights.tsx      # Stat bar + confident taglines
│       ├── Skills.tsx          # Skills grouped by category
│       ├── Experience.tsx      # Reverse-chronological work timeline
│       └── Education.tsx       # Degree, certifications, languages
└── CV_Denys_Pobochniy.doc.pdf  # Source CV used as reference data
```

To edit any content on the page, edit `src/data/cv.ts` — no component code needs to change.

