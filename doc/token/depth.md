# Depth Tokens — Surface and Elevation

Mu uses **reference tokens** (opacity, z-index integers) and **semantic tokens**
(elevation level names, overlay roles). **No component-level tokens.**

**Void-first** defaults mean elevation is **not** Material-style stacked
shadows. Mu distinguishes surfaces primarily by **luminance (lightness)** in
OKLCH, aligned with color tokens `void`, `surface`, and `line`.

## Elevation via luminance, not shadow

| Principle   | Requirement                                                                                                                                                              |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Primary cue | **ΔL between surfaces** is the elevation signal — lighter (or systematically stepped) surfaces read as “higher” in the dark UI, with parallel structure in light themes. |
| Shadow      | **Not** the primary stack. Optional minimal shadow, if any, must not introduce new grays outside semantic tokens.                                                        |

## Elevation levels (framework minimum)

| Level | Semantic surface | Role                                |
| ----- | ---------------- | ----------------------------------- |
| **0** | `void`           | Ground plane — default background   |
| **1** | `surface`        | Elevated containers (cards, panels) |

**Framework minimum** is two levels. Products may add **at most one** additional
level (**maximum three** total). More than three violates **Content Supremacy**
— chrome must not out-layer content.

If a third level is defined, it must be a documented semantic token (e.g.
`surface-raised`) with a **ΔL** relationship to `surface` consistent with the
color spec (monotonicity, minimum separation).

## Border as edge

| Rule | Requirement                                                                                                                               |
| ---- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Seam | Where two surfaces meet, the edge uses **`line`** at the product’s single border width (see spacing token spec: **1px** or **2px** only). |
| Role | Edge replaces heavy shadow — **barely visible** separation.                                                                               |

## Overlay model

| Element  | Treatment                                                                                                        |
| -------- | ---------------------------------------------------------------------------------------------------------------- |
| Backdrop | **`void` at 75–85% opacity** for command palettes, modals, and blocking overlays.                                |
| Content  | **On `surface`** — same elevated surface token as other chrome; **no new visual planes** beyond semantic tokens. |

No additional backdrop colors outside `void` with controlled alpha within the
band.

## Z-index tokens (optional, recommended)

| Token       | Value   | Typical use                       |
| ----------- | ------- | --------------------------------- |
| `z-base`    | **0**   | Normal stacking                   |
| `z-sticky`  | **10**  | Sticky headers, pinned controls   |
| `z-overlay` | **100** | Modals, popovers, command palette |

**Maximum three z-index tiers** in the token system. Products must not introduce
ad hoc large z-index values outside this enumerated set.

## Relationship to color tokens

| Concept        | Token tie-in                         |
| -------------- | ------------------------------------ |
| Ground         | `void`                               |
| Elevated plane | `surface` (and optional third level) |
| Edge           | `line`                               |
| Overlay scrim  | `void` + opacity 75–85%              |

Zen uses the same **OKLCH** ramp as in `color.md`; elevation is expressed as
**ΔL** between `void` and `surface` (and optional third level), with **line** at
seams.
