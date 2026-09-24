# Client mockups

Static site mockups parked under `public/mockups/<slug>/`. Vite copies `public/`
into `dist/` verbatim and Vercel serves static files before the SPA rewrite in
`vercel.json`, so each one deploys as-is to:

    https://justin-soon.vercel.app/mockups/<slug>/

Slugs are random so the links are unlisted. Each mockup's `index.html` gets a
`<base href="/mockups/<slug>/">` (relative asset paths survive a missing
trailing slash) and `robots: noindex, nofollow`.

To add one: `scripts/new-mockup.sh <path-to-static-site-dir> [label]`

`scripts/stamp-mockup.py` does the `<base>` / noindex pass and is safe to
re-run — use it after re-syncing an existing mockup, since copying the source
over the top drops the stamp.

This file lives outside `public/`, so the slug list is never deployed.

| Slug | Site | Added |
| --- | --- | --- |
| gissp9ieyepr | Prox Coffee (custom sites/prox-website) — 6 pages | 2026-09-23 |
