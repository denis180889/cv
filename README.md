# Denys Pobochnyi — Personal Landing Page

A personal landing page / portfolio for **Denys Pobochnyi**, Senior Automation QA Engineer — built from his CV, styled as a modern dark tech portfolio.

`Hero` · `Highlights` · `Skills` · `Experience` · `Education & Certifications`

## Tech Stack

| Layer      | Choice                          |
| ---------- | -------------------------------- |
| Framework  | [React](https://react.dev) + [TypeScript](https://www.typescriptlang.org/) |
| Build tool | [Vite](https://vitejs.dev)       |
| Styling    | [Tailwind CSS](https://tailwindcss.com) |

No backend, no database — a fully static single-page site.

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

## Sharing It Publicly (temporary tunnel)

To get a public, internet-reachable URL for your local dev server (e.g. to show someone on your phone or remotely) without deploying anywhere:

```bash
npm run dev:public
```

This runs Vite **and** an [ngrok](https://ngrok.com) tunnel together. Requirements:

- [ngrok](https://ngrok.com/download) installed and on your `PATH` (`brew install --cask ngrok`)
- A free ngrok account with an authtoken configured once via `ngrok config add-authtoken <token>`

**Where to find the public URL:** look for the `[ngrok]`-prefixed line in the terminal output that looks like:

```
[ngrok] ... msg="started tunnel" ... url=https://<random>.ngrok-free.app
```

That's your shareable link. If it scrolls out of view, the same URL (plus a live traffic inspector) is always available at **http://localhost:4040** while the tunnel is running, or via `curl -s http://localhost:4040/api/tunnels`.

Notes:
- The URL is **temporary** — it only works while this command keeps running, and changes every time you restart it (free tier).
- First-time visitors will see an ngrok interstitial page (click "Visit Site") before reaching the app.
- `vite.config.ts` sets `server.allowedHosts: true` so Vite accepts requests coming through the ngrok domain — without it, Vite's dev-server host check returns a 403 for any non-localhost `Host` header.
- For a permanent public link, deploy the production build (see below) to a static host like Vercel, Netlify, or Cloudflare Pages instead of tunneling.

## Other Commands

```bash
# Type-check + build an optimized production bundle into dist/
npm run build

# Preview the production build locally
npm run preview
```

## Project Structure

```
claude-foo/
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

## Notes

- This is currently local-only; no deployment/hosting is configured yet.
