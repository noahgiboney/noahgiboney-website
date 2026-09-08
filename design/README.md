# Handoff: NMG Systems LLC brand identity

## Overview
The visual identity for **NMG Systems LLC**, an umbrella software company. The mark is three colored circles seated above the wordmark NMG — one circle per product line, one company behind them. This package contains everything needed to apply that identity to a live website: vector assets, design tokens, drop-in code, and a complete spec.

## About the design files
The `.dc.html` files in `reference/` are **design references created in HTML** — prototypes showing the intended look, geometry, and rules. They are not production code to copy into a site.

The task is to **apply this identity inside the target codebase's existing environment** (React, Next.js, Vue, Astro, WordPress, plain HTML — whatever the site is built in), using its established patterns, component structure, and build pipeline. If the site has no established styling approach yet, adopt the tokens in `tokens/tokens.css` as its foundation.

## Fidelity
**High-fidelity.** Every color, font size, tracking value, radius, and spacing step in `BRAND_SPEC.md` is final and exact. Match them. The logo's circle-gap ratio in particular is a construction rule, not a suggestion.

## What's in here

```
design_handoff_nmg_brand/
├── README.md                    ← you are here
├── BRAND_SPEC.md                ← the full spec: logo geometry, color, type, components, motion, a11y
├── tokens/
│   ├── tokens.css               ← CSS custom properties, ready to import
│   └── tokens.json              ← same values for JS/Tailwind/Figma tooling
├── assets/                      ← all vector, all scalable
│   ├── nmg-lockup-stacked-on-dark.svg
│   ├── nmg-lockup-stacked-on-light.svg
│   ├── nmg-lockup-horizontal-on-dark.svg
│   ├── nmg-lockup-horizontal-on-light.svg
│   ├── nmg-mark.svg / nmg-mark-on-light.svg
│   ├── nmg-wordmark-white.svg / nmg-wordmark-black.svg
│   ├── nmg-app-icon-dark.svg / nmg-app-icon-light.svg
│   ├── favicon-32.svg / favicon-16.svg
│   └── og-card-1200x630.svg
├── snippets/
│   ├── head.html                ← fonts, favicon, theme-color, Open Graph tags
│   └── Logo.jsx                 ← React logo component, geometry derived from one size prop
└── reference/
    ├── NMG Systems Brand Kit.dc.html   ← the visual guideline sheet
    └── NMG Systems Mockups.dc.html     ← earlier explorations, for context only
```

## Integration steps

1. **Drop the assets in.** Copy `assets/` to your public directory — e.g. `/public/brand/`. Paths in `snippets/head.html` assume `/brand/`.
2. **Load the tokens.** Import `tokens/tokens.css` before your own stylesheets, or port the values into your framework's theme config (Tailwind `theme.extend`, styled-components theme, CSS modules — whatever the codebase uses).
3. **Wire up `<head>`.** Paste `snippets/head.html` into your document head and correct the asset paths and the `og:image` domain.
4. **Add the logo component.** Use `snippets/Logo.jsx` as-is if the site is React; otherwise port it — it's ~40 lines and derives all geometry from one `size` prop, which is what keeps the mark correct at every scale. Or reference the SVGs directly for static placements.
5. **Restyle the site.** Work through `BRAND_SPEC.md` §4 for header, buttons, cards, and footer. Read §2's rule that Iris is the only interface accent — the temptation to use all three colors in the UI is the fastest way to break this identity.

## Raster exports still needed
Every asset here is SVG, which covers the web. Three raster files must be generated from them before launch, because some platforms won't accept SVG:

| From | Export to | For |
|---|---|---|
| `nmg-app-icon-dark.svg` | PNG 180×180, 512×512, 1024×1024 | Apple touch icon, PWA manifest, app stores |
| `favicon-32.svg` | `favicon.ico` (16+32+48) | Legacy browsers |
| `og-card-1200x630.svg` | PNG 1200×630 | Link previews — most crawlers reject SVG |
| `nmg-mark.svg` | PNG 400×400 on Carbon, square canvas | Social profile avatars |

Any SVG-to-PNG tool handles these; make sure Archivo is installed locally first, or the text will fall back.

## Font note
The SVG assets reference Archivo and JetBrains Mono by name rather than embedding outlines, so they render correctly on the web (where the fonts are loaded) but may fall back in design tools without those fonts installed. For print or third-party handoff, convert the text to outlines first.

## Design tokens
See `tokens/tokens.css` and `BRAND_SPEC.md` §2, §3. Summary:

- **Accents:** Iris `#7C7CFF`, Azure `#4DA6FF`, Mint `#58E0B8` (deep variants `#5A5AEB`, `#1F8CE8`, `#17B98D` on light grounds)
- **Neutrals:** Carbon `#0E0F12`, Surface `#14161A`, Border `#22242A`, Chalk `#F3F3F1`, Body `#B9BDC4`, Muted `#8B9099`
- **Type:** Archivo (display/UI), JetBrains Mono (labels), IBM Plex Sans (long body)
- **Radius:** buttons 7px, cards 0px, app icon 22.5%
- **Spacing:** 7 / 14 / 20 / 28 / 40 / 64

## Open questions for the owner
- The three circles are designed to stand for three product lines. Once those products are named, each can claim a color — worth deciding before the site ships.
- The identity is dark-first. If the site needs a light default theme, the deep accent set and Chalk ground are already specified for it, but the balance should be reviewed.
