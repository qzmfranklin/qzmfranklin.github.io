# Typography Tokens — Type System

Mu uses **reference tokens** (font size steps, line-height values,
letter-spacing values) and **semantic tokens** (type roles such as `body`,
`heading`). **No component-level tokens.**

Typography is organized around **five concerns**: stack, weights, scale, roles,
and rhythm.

## Stack

| Constraint  | Requirement                                                                                                                                                   |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Font stacks | **One** font stack for the entire interface.                                                                                                                  |
| Mixing      | **No** mixing families for different regions (no separate “UI” vs “content” stacks unless formally split as a product exception; Mu default is single stack). |

## Weights

| Role     | Typical numeric weight |
| -------- | ---------------------- |
| Base     | ~**400**               |
| Emphasis | ~**600** or **700**    |

**Exactly two** weights for interface text. **Italic** is optional but, if used,
should map to **one** clear semantic purpose (e.g. citations or variable names),
not ad hoc styling.

## Type scale

| Constraint   | Requirement                                                                                                                                              |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Step count   | **6–10** discrete size steps                                                                                                                             |
| Monotonicity | Sizes strictly increase from smallest to largest step                                                                                                    |
| Ratio band   | **Largest ÷ smallest ≥ 3.5** and **≤ 6**                                                                                                                 |
| Curve        | **Dense small end**, **sparse large end** (smaller steps cluster at the reading range; larger steps jump more). No requirement for a pure modular scale. |

## Type roles (semantic tier)

Products define semantic type roles that map to reference
size/weight/letter-spacing. **Minimum five** roles:

| Role       | Purpose                                            |
| ---------- | -------------------------------------------------- |
| `meta`     | Timestamps, hints — quietest text                  |
| `label`    | Tool calls, navigation — scanned, not read in full |
| `body`     | Default content — primary reading size             |
| `emphasis` | Inline callouts — body-level but louder            |
| `heading`  | Structural markers                                 |

Products may add roles (e.g. `code`, `caption`) but must keep the semantic layer
enumerable and avoid one-off component-only names.

## Rhythm

Rhythm is chosen by **reading mode**, not by component type. **Within** a rhythm
context, **line-height is consistent** for that context.

| Context     | Reading mode        | Line-height | Typical vertical gap (semantic spacing)  |
| ----------- | ------------------- | ----------- | ---------------------------------------- |
| **Prose**   | Linear reading      | **1.5–1.7** | `space-3` to `space-4` (product mapping) |
| **Scan**    | Structural scanning | **1.3–1.5** | `space-1` to `space-2`                   |
| **Display** | Glance / hero       | **1.1–1.3** | `space-5` to `space-6`                   |

**Principle:** spacing between elements scales with the user’s expected
**reading speed** for that context — tighter for scan, looser for display,
balanced for prose.

The **context** determines line-height; **content** determines which context
applies.

## Letter spacing

At most **three** letter-spacing reference values:

| Name   | Typical use                                     |
| ------ | ----------------------------------------------- |
| Tight  | Negative tracking (e.g. large display)          |
| Normal | Zero adjustment — default for body and most UI  |
| Wide   | Positive tracking (e.g. labels, uppercase meta) |

## Reference implementation (Zen)

| Concern             | Zen choice                                                                                                  |
| ------------------- | ----------------------------------------------------------------------------------------------------------- |
| Stack               | **SF Mono** as the single stack (system fallbacks per platform as needed)                                   |
| Weights             | **400** (base), **600** (emphasis)                                                                          |
| Scale               | **8 steps** from **12px** through **48px** (exact intermediate steps product-defined within the ratio band) |
| Prose line-height   | **1.6**                                                                                                     |
| Scan line-height    | **1.5**                                                                                                     |
| Display line-height | **1.2**                                                                                                     |

Zen binds semantic roles to these reference steps; products document the mapping
in their token sheet.
