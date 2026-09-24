"""Stamp every page of a parked mockup with its <base> and a noindex.

<base> makes relative asset paths survive a URL without a trailing slash;
noindex keeps client mockups out of search results. Re-running is safe — any
previous stamp is stripped first.

Usage: stamp-mockup.py <mockup-dir> <slug>
"""
import re
import sys
import pathlib

root, slug = pathlib.Path(sys.argv[1]), sys.argv[2]
tags = f'<base href="/mockups/{slug}/">\n<meta name="robots" content="noindex, nofollow">\n'

for page in sorted(root.rglob("*.html")):
    s = page.read_text()
    s = re.sub(r'<base\b[^>]*>\s*', '', s, flags=re.I)
    s = re.sub(r'<meta[^>]+name=["\']robots["\'][^>]*>\s*', '', s, flags=re.I)
    # after the charset/viewport metas when they exist, else straight after <head>
    m = re.search(r'<meta[^>]+name=["\']viewport["\'][^>]*>\n?|<meta[^>]+charset[^>]*>\n?', s, re.I)
    if m:
        s = s[:m.end()] + tags + s[m.end():]
    else:
        s = re.sub(r'(<head\b[^>]*>\s*)', lambda x: x.group(1) + tags, s, count=1, flags=re.I)
    page.write_text(s)
    print(f"  stamped {page.relative_to(root)}")
