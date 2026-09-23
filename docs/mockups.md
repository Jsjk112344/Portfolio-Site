# Client mockups

Static site mockups parked under `public/mockups/<slug>/`. Vite copies `public/`
into `dist/` verbatim and Vercel serves static files before the SPA rewrite in
`vercel.json`, so each one deploys as-is to:

    https://justin-soon.vercel.app/mockups/<slug>/

Slugs are random so the links are unlisted. Each mockup's `index.html` gets a
`<base href="/mockups/<slug>/">` (relative asset paths survive a missing
trailing slash) and `robots: noindex, nofollow`.

To add one: `scripts/new-mockup.sh <path-to-static-site-dir> [label]`

This file lives outside `public/`, so the slug list is never deployed.

| Slug | Site | Added |
| --- | --- | --- |
| gissp9ieyepr | Prox Coffee (custom sites/prox-website) | 2026-09-23 |
