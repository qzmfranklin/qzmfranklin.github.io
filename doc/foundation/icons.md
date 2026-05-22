# Iconography Foundation

Mu favors **typographic** clarity over pictorial density: **Void-first**,
**Chromatic Policy**, and **Content Supremacy** jointly discourage ornamental
glyphs and forbid rainbow toolbars. Icons are **rare**, **semantic**, and almost
always **paired with words** unless platform conventions override (e.g. window
chrome).

This foundation is **not** a token file: it does not emit CSS color values. It
constrains **when** and **how** symbols appear.

**Conformance**: **must** / **must not** / **should** follow RFC 2119.

---

## Decision tiers (preference order)

| Tier | Form                                      | When to use                                                                                                                             |
| ---- | ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | **Text labels**                           | Default for actions, states, and navigation. Spell the concept; zero new symbol vocabulary.                                             |
| 2a   | **Text glyphs** (Unicode in content flow) | When a compact marker is needed and the glyph inherits font metrics; must still ship with explanatory text nearby or on first exposure. |
| 2b   | **Inline SVG**                            | When geometry must be exact, monochrome, and `currentColor`-driven; same pairing rules as glyphs.                                       |
| 3    | **Icon fonts**                            | **Not recommended**: additional face download, unclear boundaries with **Void-first**, and fuzzy semantics versus real text.            |

**Co-equal rule**: For tier 2, choose glyph vs SVG by **context**—SVG when path
precision matters; glyphs when font consistency matters. **Both** require
**contextual text** in the same surface unless a platform standard icon is
universally recognized **and** the product spec documents the exception.

---

## Icon budget and comprehension

| Rule                | Detail                                                                                                                                                                              |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Minimum set**     | Ship only symbols the product truly needs; prefer deleting over adding.                                                                                                             |
| **~7 guideline**    | Research suggests distinct arbitrary symbols become hard to discriminate beyond roughly **seven** novel shapes; Mu treats this as a **soft ceiling** for **unique semantic** icons. |
| **Discoverability** | Hover or long-press **may** reveal a tooltip with the glyph’s meaning; **baseline task success must never depend** on memorizing the glyph alone.                                   |

---

## Standard glyph vocabulary

The table below is the **approved** compact notation set when glyphs are used.
Products **should** restrict ad hoc symbols to this list unless a spec adds a
new symbol with accessibility and localization review.

| Glyph | Unicode | Name / code                      | Meaning                                 | Typical usage                              |
| ----- | ------- | -------------------------------- | --------------------------------------- | ------------------------------------------ | ------------------------------------------ |
| `>`   | U+003E  | Greater-than                     | User input follows; prompt continuation | REPL-style input, prompt prefix            |
| `·`   | U+00B7  | Middle dot                       | Neutral / ongoing                       | Status separator, idle tick                |
| `~`   | U+007E  | Tilde                            | Thinking / soft pending                 | Non-final assistant state (pair with text) |
| `✓`   | U+2713  | Check mark                       | Success                                 | Completed step, succeeded operation        |
| `✗`   | U+2717  | Ballot X                         | Failure                                 | Failed step, rejected item                 |
| `○`   | U+25CB  | White circle                     | In progress                             | Open task, running (non-terminal)          |
| `▶`   | U+25B6  | Black right-pointing triangle    | Collapsed                               | Expandable section closed                  |
| `▼`   | U+25BC  | Black down-pointing triangle     | Expanded                                | Expandable section open                    |
| `—`   | U+2014  | Em dash                          | Separator                               | Clause or section break in compact UI      |
| `…`   | U+2026  | Horizontal ellipsis              | Truncated                               | More content exists; opens follow-up       |
| `     | `       | U+007C                           | Vertical line                           | Nesting / pipe                             | Tree depth, alternate paths (with spacing) |
| `⏎`   | U+23CE  | Return symbol                    | Submit / newline                        | Enter to send; line break affordance       |
| `⌘`   | U+2318  | Place of interest sign (Command) | Command key (macOS)                     | Shortcut legend                            |
| `⇧`   | U+21E7  | Upwards white arrow              | Shift key                               | Shortcut legend                            |
| `⌃`   | U+2303  | Up arrowhead                     | Control key                             | Shortcut legend                            |

**Localization**: Shortcut glyphs follow platform; on non-macOS, **may**
substitute platform-standard key symbols if paired with the same semantic label
text.

**Unicode caveat**: Text glyphs **inherit font metrics** but **rendering
varies** across fonts and OS—verify critical symbols in body typefaces used in
production.

---

## Inline SVG constraints

When SVG is used:

| Constraint | Detail                                                                                      |
| ---------- | ------------------------------------------------------------------------------------------- |
| Color      | **Monochrome** `currentColor` only—no extra palette tokens beyond semantic colors.          |
| Structure  | **Single-path** preferred; avoid stacked filters.                                           |
| Sizing     | **`em`-based** width/height so icons scale with text.                                       |
| ViewBox    | **Square** viewBox; align optical center to the cap height / x-height context.              |
| Effects    | **No** gradients, **no** drop shadows, **no** glow—**Chromatic Policy** and **Void-first**. |

---

## Reference implementation (Zen)

Zen’s concrete choice for scope control:

| Choice      | Detail                                                                                           |
| ----------- | ------------------------------------------------------------------------------------------------ |
| Text glyphs | **~10** total distinct symbols in product chrome and core flows.                                 |
| Icon font   | **None.**                                                                                        |
| SVG         | **None** in UI chrome except the **wordmark logo** (brand exception documented in brand assets). |

Other products on Mu **may** differ but **should** justify increases against the
icon budget and accessibility review.

---

## Cross-references

| Document                      | Relationship                                       |
| ----------------------------- | -------------------------------------------------- |
| `token/color.md`              | `currentColor` inherits semantic foreground roles. |
| `policy/chromatic.md`         | Chromatic silence and restraint.                   |
| `foundation/accessibility.md` | Contrast for symbolic UI; pairing with text.       |
