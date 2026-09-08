# peephole-complex-fixture

**Peephole production preview integration fixture** — a deliberately realistic, fully static React application used to validate Peephole's `static-v1` production preview pipeline beyond a minimal single-file fixture.

## What it exercises

- React 19 + TypeScript + Vite production compilation
- BrowserRouter navigation and a dynamic `/projects/:id` route
- A lazy-loaded Settings page that produces a separate JavaScript chunk
- CSS Modules alongside a global stylesheet
- Bundled local JSON data with search, status filtering, and derived dashboard totals
- Imported SVG and Peephole logo assets from `src/assets`, plus a static favicon from `public`
- Stateful forms powered by `useReducer`
- A responsive application shell and a catch-all Not Found page

The app has no API calls, backend, database, authentication, WebSocket, service worker, environment variables, secrets, native binary dependencies, postinstall scripts, SSR, or monorepo tooling.

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Dashboard summary, chart, and activity |
| `/projects` | Searchable and filterable project grid |
| `/projects/:id` | Dynamic project detail |
| `/settings` | Lazy-loaded local preferences form |
| `*` | Not Found page |

## Run locally

```bash
npm ci
npm run dev
```

## Production build

```bash
npm ci
npm run build
npm run preview
```

Vite writes the production output to `dist/` with `/` as the default base path. Because the app uses `BrowserRouter`, a static host should serve `index.html` as the fallback for application routes.

## Fixture contract

All application data lives in `src/data/*.json` and is bundled at build time. A successful build requires only Node.js and npm; no runtime services or private configuration are needed.
