# Layout Foundations

Layout in Mu is governed by **Content Supremacy** and **Void-first** (MANIFESTO
/ AXIOMS): the user’s work sits on the ground plane; chrome stays thin,
deferential, and easy to dismiss. This foundation defines **regions**,
**measure**, **responsive collapse**, **scroll**, and **overlays**—shared rules
that policies reference but do not duplicate.

**Conformance**: **must** / **must not** / **should** follow RFC 2119.

---

## Content width (the Measure)

Long-form reading and dense “scan” surfaces need different line lengths. Use
**`ch`** units so limits track font metrics and remain portable across
typefaces.

| Content kind                                      | Maximum width | Rationale                                                                                                 |
| ------------------------------------------------- | ------------- | --------------------------------------------------------------------------------------------------------- |
| Prose (articles, explanations, narrative UI copy) | **66ch**      | Within Bringhurst-style reading comfort for Latin scripts; adjust per locale if typography spec mandates. |
| Scan (code blocks, logs, metadata tables, JSON)   | **80ch**      | Preserves common monospace column counts without endless lines.                                           |

**No minimum width**: narrow viewports naturally constrain width; do not force
horizontal scroll for primary prose **except** scan content where wrapping would
destroy meaning (e.g. preformatted code—use horizontal scroll **inside** the
scan container only).

**Framework rule**: Components **must not** set arbitrary `max-width` in `px`
for text bodies when a semantic “measure” token or `ch`-based rule exists in the
product spacing/typography system.

---

## Viewport regions (structural roles)

The shell divides the viewport into up to **three simultaneous regions**. Only
**Content** is mandatory.

| Region         | Role                                                | Constraints                                                                                                                                                                                                                                   |
| -------------- | --------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Content**    | Primary user focus; hosts the task.                 | **Largest** area; **only** primary vertical scroll container for the main task (see Scroll strategy).                                                                                                                                         |
| **Navigation** | Persistent wayfinding (app bar, side rail).         | Fixed to an edge; **lightweight**. Height **< 10%** of viewport for horizontal bars; width **< 15%** for vertical rails **when** the full layout is shown at a breakpoint that includes nav. Values are **framework targets**, not pixel art. |
| **Auxiliary**  | Secondary context: TOC, inspector, chat side panel. | **Dismissible or collapsible** where possible; must not compete with Content for dominance.                                                                                                                                                   |

**Maximum three** regions visible at once in the standard desktop pattern (e.g.
nav + content + auxiliary). Smaller breakpoints **collapse** regions rather than
squeezing them into “half-visible” chrome.

---

## Responsive behavior

| Priority | Rule                                                                                                                                                                                              |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1        | **Content never breaks**: wrapping, overflow, and scroll behavior must keep the user’s material usable.                                                                                           |
| 2        | **Regions collapse, not shrink**: half-visible navigation or auxiliary panels are worse than none—prefer hide/show, icons-only patterns, or off-canvas patterns **with** accessible entry points. |
| 3        | **Collapse order**: **Auxiliary** first, then **Navigation** **simplifies** (e.g. full rail → icon rail → menu). Content absorbs freed space last.                                                |
| 4        | **Breakpoints are structural**: they signal **mode changes** (region model changes), not cosmetic nudges. Avoid dozens of one-off pixel breakpoints.                                              |

---

## Scroll strategy

| Region     | Scroll model                                                                                                                                                                    |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Content    | **The** primary vertical scroll for the task. Avoid nested scroll unless a sub-panel is intentionally independent (e.g. code editor).                                           |
| Navigation | **Sticky** to viewport edge; **no** independent scroll except where overflow is unavoidable (small phones); then prefer scroll **inside** nav only after content needs are met. |
| Auxiliary  | **Sticky**; **internal scroll only as last resort** when content height exceeds viewport minus chrome.                                                                          |

**Scrollbar treatment**: **Invisible by default**; on **hover** (or focus-within
for keyboard users), show a **thin** thumb—**4px** target thickness in design
tokens, **`line`**-family or muted color—without stealing focus from content.

**Framework constraint**: Do not make `body` the only scroll container on
desktop if Content is visually inset—ensure scroll-padding and focus management
align with **Accessibility Foundation** (sticky chrome).

---

## Overlay model

Overlays (dialogs, drawers, command surfaces) sit above the void with minimal
new physics:

| Layer      | Treatment                                                                                                |
| ---------- | -------------------------------------------------------------------------------------------------------- |
| Backdrop   | **Void** at **75–85%** opacity (product token within band), enough to dim without inventing a new color. |
| Foreground | **Surface** elevation per `token/depth.md`; **no** additional “floating world” palettes.                 |

**Dismissal**: **Escape** and **click outside** the surface (when safe and when
the surface is not modal-critical) **must** work where the pattern promises
dismissal. Modal flows that cannot dismiss without a decision **must** expose
that constraint in copy and **Accessibility Foundation** announcements.

**Plane rule**: Overlays **must not** introduce arbitrary new z-index colors or
shadows outside elevation tokens—**Void-first** means restraint.

---

## CSS technology guidance

| Layer                                                  | Preferred technology                                                                                |
| ------------------------------------------------------ | --------------------------------------------------------------------------------------------------- |
| Viewport-level regions (nav / content / auxiliary)     | **CSS Grid** for macro layout; named areas or explicit tracks for stable reordering at breakpoints. |
| Flow inside a region (sections, form stacks, toolbars) | **Flexbox** for one-dimensional flow and alignment.                                                 |
| Loading skeletons                                      | **Grid** for predictable bone placement (“skeleton” = macro).                                       |
| Component internals (“organs”)                         | **Flexbox** for local alignment; reserve Grid for true two-axis component layouts.                  |

**Rationale**: Grid stabilizes shell structure; Flexbox keeps component
internals adaptable without over-specifying two-dimensional grids everywhere.

---

## Cross-references

| Document                      | Relationship                                |
| ----------------------------- | ------------------------------------------- |
| `token/spacing.md`            | Gutters and inset tokens tied to regions.   |
| `token/depth.md`              | Elevation for surfaces and overlays.        |
| `foundation/accessibility.md` | `scroll-padding-top`, focus, overlay traps. |
| MANIFESTO                     | Content Supremacy, Void-first.              |
