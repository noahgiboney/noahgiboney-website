# NMG Systems LLC — Brand Spec v1.0

Every value a developer needs to build the identity. Nothing here is approximate.

---

## 1. The logo

The mark is **three circles above the wordmark NMG**. Nothing else. No illustration, no glyph.

### Construction

| Property | Value |
|---|---|
| Circle count | 3, left to right: Iris, Azure, Mint |
| Circle gap | **46.67% of circle diameter** (e.g. 30px circles → 14px gaps) |
| Cluster alignment | Horizontally centered above the wordmark |
| Circle diameter (stacked) | 37% of wordmark font-size |
| Circle diameter (horizontal) | 43% of wordmark font-size |
| Gap: cluster → wordmark | 17% of wordmark font-size |
| Gap: wordmark → tagline | 10% of wordmark font-size |
| Wordmark typeface | Archivo 700 |
| Wordmark tracking | `letter-spacing: 0.04em` |
| Wordmark line-height | 0.92 |
| Tagline | `SYSTEMS LLC` — JetBrains Mono 400, `letter-spacing: 0.30em`, muted |

The circle gap ratio is the one rule that must never drift. It is what makes the cluster read as a single mark rather than three separate dots.

### Variants and when to use them

| File | Use |
|---|---|
| `nmg-lockup-stacked-*` | Default. Hero areas, footers, decks, documents, splash screens |
| `nmg-lockup-horizontal-*` | Site navigation bars, email signatures, anywhere vertical space is tight |
| `nmg-mark-*` | Circular avatars, favicons ≥24px, loading states, watermarks |
| `nmg-wordmark-*` | One-color print, embroidery, invoices, fax-grade reproduction |

### Clear space
One circle diameter on all four sides. No text, image, or edge enters that zone.

### Minimum sizes
- Wordmark: **15px** font-size. Below that, switch to the mark alone.
- Mark: **24px** total width. Below that, use a single Iris rounded square (see `favicon-16.svg`).

### Do not
- Spread the circles wider than the construction ratio.
- Recolor the trio. The three hues are the identity.
- Set the wordmark in any face other than Archivo 700.
- Place the logo on an accent color — accents are for the mark only.
- Add a stroke, shadow, gradient, or outer container to the lockup.

---

## 2. Color

### Accents — bright set (use on Carbon / dark grounds)

| Name | Hex | Role |
|---|---|---|
| Iris | `#7C7CFF` | First circle. **The interface accent** — buttons, links, focus rings |
| Azure | `#4DA6FF` | Second circle. Link hover, secondary data |
| Mint | `#58E0B8` | Third circle. Success, positive metrics, URLs on dark cards |

### Accents — deep set (use on Chalk / light grounds)

| Name | Hex |
|---|---|
| Iris deep | `#5A5AEB` |
| Azure deep | `#1F8CE8` |
| Mint deep | `#17B98D` |

The bright set loses contrast on white. Always swap to the deep set when the ground is light.

### Neutrals

| Name | Hex | Role |
|---|---|---|
| Carbon | `#0E0F12` | Page background, dark theme |
| Surface | `#14161A` | Raised cards and panels |
| Border | `#22242A` | Hairline borders, 1px, everywhere |
| Chalk | `#F3F3F1` | Primary text on dark; page background on light |
| Body | `#B9BDC4` | Body copy on dark |
| Muted | `#8B9099` | Labels, captions, meta, timestamps |

### Rules
- Iris is the **only** accent that appears in the interface. Azure and Mint appear in the mark, in charts, and in product tags — not on buttons.
- Text on an Iris fill is **Carbon**, never white. `#0E0F12` on `#7C7CFF` passes AA; white does not.
- Never use Muted for body-size copy on Carbon at under 11px.

---

## 3. Typography

| Family | Weights | Role |
|---|---|---|
| **Archivo** | 400 / 500 / 600 / 700 | Wordmark, headings, all interface text |
| **JetBrains Mono** | 400 / 500 | Eyebrows, labels, numbers, code, URLs |
| **IBM Plex Sans** | 300 / 400 / 500 | Long-form body copy — blog posts, legal, support docs |

Both Archivo and JetBrains Mono are free on Google Fonts. See `snippets/head.html`.

### Scale

| Role | Family | Size | Weight | Tracking | Line-height |
|---|---|---|---|---|---|
| Display / hero | Archivo | 44–82px | 700 | `-0.04em` | 1.0 |
| H1 | Archivo | 30px | 700 | `-0.035em` | 1.1 |
| H2 | Archivo | 22px | 600 | `-0.02em` | 1.2 |
| UI / button | Archivo | 15px | 500–600 | 0 | 1.2 |
| Body | IBM Plex Sans | 15–16px | 400 | 0 | 1.6 |
| Eyebrow | JetBrains Mono | 11px | 400 | `0.22em` | 1.4 |
| Label / meta | JetBrains Mono | 10–11px | 400 | `0.10–0.14em` | 1.9 |

Rule of thumb: **the bigger the type, the tighter the tracking.** Display type is negative, labels are wide.

---

## 4. Components

### Buttons
- Radius `7px`. Padding `13px 24px`. Archivo 600, 15px.
- Primary: Iris fill, Carbon text.
- Secondary: transparent fill, `1px solid #3A3D45` border, Chalk text.
- Text link: Iris, `text-decoration: underline`, `text-underline-offset: 4px`.
- Hover: primary → Azure fill; secondary → border lightens to Chalk.

### Cards and panels
- Background Surface `#14161A`, `1px solid #22242A`, **radius 0**.
- The identity uses square cards and round marks. Do not round the cards.
- Section padding 34px; page gutter 40px; content max-width 1180px.

### Header
- Carbon background, `1px solid #22242A` bottom border, 20px/28px padding.
- Horizontal lockup: 19px wordmark, 11px circles.
- Nav items Archivo 500 15px in Body; primary CTA is an Iris button.

### Footer
- Stacked lockup, left aligned, 26px wordmark.
- Hairline divider, then JetBrains Mono 10px `0.12em` Muted for the legal line.

---

## 5. Motion

Restrained. The identity is still.
- Transitions: `150ms ease-out` for color and border; `220ms ease-out` for transform.
- Allowed logo animation: the three circles fade in staggered 60ms apart on first page load. Nothing else — the mark does not spin, bounce, or pulse.
- Respect `prefers-reduced-motion: reduce` by disabling the stagger.

---

## 6. Accessibility

- Body text meets 4.5:1 on its ground; headline-scale type meets 3:1 minimum.
- Iris on Carbon ≈ 6.5:1 — safe for links and labels.
- Muted `#8B9099` on Carbon ≈ 6:1 — safe.
- Focus ring: `2px solid #7C7CFF`, `outline-offset: 2px`. Never remove it.
- The logo is decorative when a text company name sits beside it — mark it `aria-hidden`. When it stands alone as the site identity, give it `role="img"` and `aria-label="NMG Systems LLC"`.
