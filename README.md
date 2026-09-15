# aveon.framer.website — offline mirror

Complete static mirror of `https://aveon.framer.website/` (Framer site, published Jul 30 2026).
All 21 routes and every asset are stored locally; nothing is fetched from the network at runtime.

## Run it

```bash
python serve.py
```

Then open <http://127.0.0.1:8899/>.

**Use the server — do not open `index.html` via `file://`.** The site is built from ES
modules, which browsers refuse to load over `file://` (CORS), and its CMS data is fetched
with byte-range requests. Any static server works for the HTML/CSS/images, but `serve.py`
also implements the `?range=<start>-<end>` convention Framer's CDN uses for `.framercms`
data files — a plain server returns the whole file and client-side CMS reads break.

## What's here

| | |
|---|---|
| Pages | 21 (all sitemap routes, incl. `/404`) |
| Files | 456 |
| Size | 89 MB |
| Images | 235 (jpeg/png/jpg) |
| Fonts | 98 woff2 |
| JS modules | 66 `.mjs` + 12 `.js` |
| CMS data | 14 `.framercms` |
| Video | 2 mp4 |

```
index.html                  work/<6 projects>/index.html
about/  services/           journal/<6 posts>/index.html
contact/  journal/  work/   legal/privacy-policy/  legal/terms-and-conditions/
404/                        sitemap.xml  robots.txt
assets/
  framerusercontent.com/    images, fonts, JS modules, CMS data
  fonts.gstatic.com/        Google-hosted woff2
  events.framer.com/        analytics script (inert offline)
```

Asset URLs keep their original host and path under `assets/<host>/<path>`, so the JS module
graph resolves through its own relative imports unchanged. Images that differed only by
query string (`?scale-down-to=512&width=…`) are stored as `<name>__<hash-of-query>.<ext>`,
one file per variant, so every `srcset` entry resolves.

## Rewrites applied to the originals

The mirror is byte-identical to the source except for link rewriting, which was unavoidable:

1. **Page links** were resolved against each page's *original* URL, then re-emitted relative
   to its location on disk. On the server `/work/elm-grove-residence` is a page, but locally
   it's `work/elm-grove-residence/index.html` — one directory deeper — so the site's own
   relative links (`href="../"`) would otherwise point at the wrong route.
2. **Asset URLs in HTML** are page-relative.
3. **Asset URLs inside shared JS modules** are root-relative (`/assets/…`). These strings get
   injected into the DOM, where they resolve against the *page* URL, not the module's — and
   the same module is loaded by pages at three different depths, so no single relative path
   can work. This is why an HTTP server is required.
4. **`new URL(x, base)` calls** whose `base` was an absolute CDN URL are wrapped as
   `new URL(x, new URL(base, import.meta.url))`; a bare relative string is not a legal
   base URL and threw `Invalid base URL`.
5. **`.framercms` data files** are stored under both `modules/` and `cms/` — the CDN serves
   byte-identical files at both paths and the runtime requests the `cms/` one.

## Verification

- 7,350 local references checked, **0 broken**.
- All 21 pages loaded in a browser: **0 failed requests** on every page.
- 952 images on the homepage: **0 decode failures**.
- All 234 image files verified to have valid JPEG/PNG signatures.
- A local `?range=` slice was compared against the live CDN response — **md5 identical**.

## Notes

- Two requests still fail offline by design: the Framer editor badge (`framer.com/edit`)
  and the analytics beacon. Both are third-party callbacks with no effect on the page.
- Avéon is a commercial Framer template; this copy is a local reproduction of the published
  demo, so check the template licence before reusing the design or assets in your own work.
