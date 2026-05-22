# Color Tokens — Palette as a Lightness Ramp in OKLCH

Mu uses a **two-tier token architecture**: **reference tokens** (raw OKLCH
values) and **semantic tokens** (purpose-named aliases). There are **no
component-level tokens**; components bind only to semantic names.

OKLCH is the authoritative color space. A Mu-compliant palette is defined
primarily by **lightness (L)** relationships. **Hue** and **chroma** are
product-specific within the bounds below; **lightness relationships** are
framework constraints.

## Grayscale ramp (six required steps)

Monotonic L from ground to body text. Chroma for grayscale steps must satisfy
**chroma ≤ 0.02**. A subtle shared hue tint is allowed if it is **consistent
across all six steps**.

| Semantic token | Role                     | L range (framework) | Zen L | Zen hex (sRGB) |
| -------------- | ------------------------ | ------------------- | ----- | -------------- |
| `void`         | Ground plane, background | 3–8%                | ~5%   | `#08080a`      |
| `surface`      | Elevated container       | 8–15%               | ~10%  | `#111114`      |
| `line`         | Borders, dividers        | 13–20%              | ~15%  | `#1a1a1f`      |
| `muted`        | Disabled, tertiary       | 25–35%              | ~30%  | `#3a3a42`      |
| `secondary`    | De-emphasized text       | 40–55%              | ~47%  | `#6a6a75`      |
| `primary`      | Body text                | 75–88%              | ~82%  | `#c8c8d0`      |

### Framework guarantees

| Guarantee           | Requirement                                                                                  |
| ------------------- | -------------------------------------------------------------------------------------------- |
| Monotonic lightness | L strictly increases from `void` through `primary` (no inversions within the ramp).          |
| Minimum contrast    | `primary` on `void` ≥ **WCAG AA 4.5:1** for normal body text.                                |
| Surface separation  | Adjacent elevation roles (e.g. `void` vs `surface`) maintain **minimum ΔL of 5** in OKLCH L. |

## Accent (one color plus two derived roles)

| Semantic token | Definition                                                                         |
| -------------- | ---------------------------------------------------------------------------------- |
| `accent`       | Product-chosen hue and chroma at **L 65–80%** (reference token holds full OKLCH).  |
| `accent-dim`   | **Accent at 8–12% opacity** composited over `void` (hover tints, subtle emphasis). |
| `accent-mid`   | **Accent at 20–30% opacity** composited over `void` (selection, focus rings).      |

Zen does not fix hue/chroma for `accent`; only the L band and the two
opacity-derived aliases are specified here.

## Semantic pair (two colors)

| Semantic token | L range | Chroma range |
| -------------- | ------- | ------------ |
| `success`      | 65–78%  | 0.08–0.15    |
| `error`        | 55–70%  | 0.08–0.15    |

Hue is product-chosen; both must remain within the L and chroma bands.

## Palette closure

**No color outside these eleven semantic tokens may appear in the interface.**
The closed set is:

`void`, `surface`, `line`, `muted`, `secondary`, `primary`, `accent`,
`accent-dim`, `accent-mid`, `success`, `error`.

Ad hoc hex, channel values, or additional named colors in components violate Mu.

## Dark and light mode

The OKLCH lightness ramp may be **inverted** or remapped for light themes.
**Relationships** (monotonicity, ΔL between void/surface, contrast floor,
semantic pair bands) hold because they are defined by **relative structure and
ΔL**, not by a single fixed absolute L list.

## Zen reference implementation

| Item          | Zen choice                                                                                          |
| ------------- | --------------------------------------------------------------------------------------------------- |
| Space         | OKLCH                                                                                               |
| Grayscale     | Six steps as in the table above with chroma ≤ 0.02                                                  |
| Accent        | Product hue/chroma, L in 65–80%; `accent-dim` / `accent-mid` as opacity over `void` per bands above |
| Semantic pair | `success` and `error` within the stated L and chroma ranges                                         |
