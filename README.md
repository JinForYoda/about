# Maksym Riahuzov Portfolio

Single-page portfolio built with Vite, React, TypeScript, Tailwind CSS v4, and a small shared token layer for color and radius.

## Install

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

`npm run build` creates a static `dist/` output with pre-rendered HTML and CSS for the portfolio. The final bundle is generated without a client-side React render step, which makes it suitable for GitHub Pages and other static hosts.

## Preview

```bash
npm run preview
```

## Quality

```bash
npm run lint
npm run format
npm run format:check
```

## Structure

- `src/` application code
- `public/` static assets such as the CV, avatar, SVG icons, and social preview image
- `index.html` application entry
- `vite.config.ts` Vite configuration

## Deployment

The project uses a relative Vite `base` value, so the production build in `dist/` is suitable for GitHub Pages-style static hosting.

Typical flow:

```bash
npm run build
```

Then publish the contents of `dist/` to your `gh-pages` branch.

## GitHub Pages Automation

A GitHub Actions workflow is included in [.github/workflows/deploy-gh-pages.yml](/Users/maxryaguzov/Repositories/portfolio/.github/workflows/deploy-gh-pages.yml).

It will:

- run on pushes to `main`
- build the static site
- publish `dist/` to the `gh-pages` branch

One-time repository setup:

1. Open GitHub repository settings.
2. Go to `Pages`.
3. Set the source to `Deploy from a branch`.
4. Choose the `gh-pages` branch and the `/ (root)` folder.
