#!/usr/bin/env bash
# Park a static site mockup under public/mockups/<random slug>/ so it deploys
# to https://justin-soon.vercel.app/mockups/<slug>/
#
# Vite copies public/ into dist/ verbatim, and Vercel serves static files
# before falling through to the SPA rewrite in vercel.json, so the mockup is
# served as-is with no routing changes.
#
# Usage: scripts/new-mockup.sh <path-to-static-site-dir> [label]
set -euo pipefail

SRC="${1:?usage: scripts/new-mockup.sh <path-to-static-site-dir> [label]}"
LABEL="${2:-}"
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

[ -f "$SRC/index.html" ] || { echo "no index.html in $SRC" >&2; exit 1; }

# lowercase, minus l/o/0/1 so nothing gets garbled if a client retypes the link
SLUG="$(node -e "const c=require('crypto');const a='abcdefghijkmnpqrstuvwxyz23456789';let s='';for(const b of c.randomBytes(12))s+=a[b%32];console.log(s)")"
DEST="$ROOT/public/mockups/$SLUG"

mkdir -p "$DEST"
rsync -a --exclude '.git' --exclude '.gitignore' --exclude 'README.md' \
  --exclude '.DS_Store' --exclude 'node_modules' "$SRC"/ "$DEST"/

# <base> keeps relative asset paths working whether or not the URL has a
# trailing slash; noindex keeps client mockups out of search results. Applied
# to every page, not just index.html — mockups are usually multi-page.
python3 "$ROOT/scripts/stamp-mockup.py" "$DEST" "$SLUG"

mkdir -p "$ROOT/docs"
printf '| %s | %s | %s |\n' "$SLUG" "${LABEL:-$(basename "$SRC")}" "$(date +%Y-%m-%d)" >> "$ROOT/docs/mockups.md"

echo "public/mockups/$SLUG/"
echo "https://justin-soon.vercel.app/mockups/$SLUG/"
