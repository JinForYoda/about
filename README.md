# Maksym Riahuzov Portfolio

Personal portfolio and professional profile site for Maksym Riahuzov.

The site is designed to present a clear Lead Frontend Engineer positioning with emphasis on frontend architecture, scalable UI systems, React and TypeScript delivery, design systems, performance, and technical leadership.

## What This Repo Contains

- a single-page portfolio site
- a concise professional narrative built from real CV data
- a static production build suitable for GitHub Pages
- a lightweight implementation focused on clarity, speed, and maintainability

## What The Site Tries To Communicate

- strong frontend architecture and systems thinking
- practical React / TypeScript depth
- ability to lead delivery and improve engineering quality
- credibility for recruiters, hiring managers, and engineering leaders
- a modern, restrained, professional visual tone

## Stack

- React
- TypeScript
- Vite
- Tailwind CSS v4

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

The build output is pre-rendered to static HTML and CSS, so the deployed site works as a static portfolio rather than relying on client-side React rendering.

## Deployment

The repository is set up for GitHub Pages deployment.

- `npm run build` outputs the final site to `dist/`
- GitHub Actions can publish `dist/` to the `gh-pages` branch automatically

## Quality

```bash
npm run lint
npm run format
npm run format:check
```
