# Accessibility Foundation

Mu’s visual language—dark ground, ambient motion, void fade, hover
disclosure—intentionally trades default contrast and motion density for
atmosphere. This foundation records that tension and the **non-negotiable**
resolutions. **Silent Attentiveness** (see MANIFESTO / AXIOMS) applies to every
user, including people who rely on assistive technology, reduced motion, or
keyboard-only operation. Aesthetic choices must never become exclusionary
defaults.

This document is **not** a token file: it does not emit CSS values. It
constrains how semantic tokens, motion tiers, and components behave so that
policies remain compatible with platform accessibility expectations and WCAG 2.x
Level AA.

---

## Conformance and scope

| Term                    | Meaning                                                                     |
| ----------------------- | --------------------------------------------------------------------------- |
| **Must** / **must not** | RFC 2119; required for Mu conformance.                                      |
| **Should**              | Strong recommendation; deviation needs documented rationale and mitigation. |

Applies to all shipped surfaces in Zen and any product adopting Mu unless a
product-level exception is explicitly approved (exceptions must not weaken
keyboard or screen-reader requirements).

---

## Color contrast (WCAG AA baseline)

### Ratios

| Content type                                                    | Minimum contrast vs adjacent background |
| --------------------------------------------------------------- | --------------------------------------- |
| Normal text (not large)                                         | **4.5:1**                               |
| Large text (≥ 18 pt regular or ≥ 14 pt bold, or CSS equivalent) | **3:1**                                 |
| Non-text UI (icons, focus rings, meaningful borders, controls)  | **3:1**                                 |

Large text may use relaxed thresholds only when typography tokens meet the CSS
“large text” definition in implementation.

### Contrast matrix (semantic foreground × background)

Use this matrix during design review and visual regression: every **foreground**
role that carries meaning must be checked against the **background** planes it
actually sits on. Values below are **requirements for qualification**, not
measured Zen hex pairs—implementations verify with automated contrast tools on
composed layers (including opacity stacks).

| Foreground role     | On `void`                                                    | On `surface`   | On `accent-dim` / `accent-mid` (tint)   | Notes                                                          |
| ------------------- | ------------------------------------------------------------ | -------------- | --------------------------------------- | -------------------------------------------------------------- |
| `primary`           | AA normal text                                               | AA normal text | Must still meet ratio after compositing | Primary reading color; see halation cap below.                 |
| `secondary`         | AA normal or large per size                                  | Same           | Verify after compositing                | De-emphasized but still readable body.                         |
| `muted`             | **AA large only** unless L ≥ **38%** for normal text         | Same           | Verify stack                            | Never sole carrier of meaning (see Problem tokens).            |
| `line`              | **Not a text/icon color**                                    | Same           | N/A                                     | Decorative boundary only (see Problem tokens).                 |
| `accent`            | AA for text at chosen size; **3:1** for non-text affordances | Same           | N/A                                     | Use for links, keys, focus affordances as specified elsewhere. |
| `success` / `error` | AA for associated text; **3:1** for indicators               | Same           | Verify                                  | Semantic pair bands must still clear AA when used as text.     |

**Halation cap**: `primary` lightness **must not** exceed **L 88%** in OKLCH.
High-L neutrals increase glare for users with astigmatism (roughly a third of
the population); the cap trades marginal brightness for sustained comfort.

### Problem tokens (strict rules)

| Token                      | Issue                                                                            | Resolution                                                                                                                                                                                                                                                                     |
| -------------------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `muted`                    | Older L bands (~25–35%) can fail AA for normal body sizes on `void` / `surface`. | Raise **L to ≥ 38%** where `muted` is used for **normal-sized** readable text. If L stays lower, restrict `muted` to **large text** or non-lexical chrome. **Must never** be the only channel for state, error, or approval meaning—pair with text, iconography, or structure. |
| `line`                     | Typical L ~15% vs `void` ~5% yields ~**1.3:1**—fails non-text UI contrast.       | **Decorative only.** Do not use `line` for “you must see this boundary to use the control.” Use `muted`, `accent`, or structural spacing for semantic separation; screen readers and keyboard users rely on semantics, not hairlines.                                          |
| `accent-dim`, `accent-mid` | Opacity-derived; **fail as text colors** against `void` in many stacks.          | **Backgrounds and fills only**—hover washes, selection washes, focus halo area. Foreground text on these layers must use `primary`, `secondary`, or `accent` per matrix, not the dim/mid token alone.                                                                          |
| `primary`                  | High L can halo.                                                                 | Enforce **L < 88%** as above; verify focus rings still meet 3:1 using ring treatment in this doc.                                                                                                                                                                              |

Products maintain an automated **contrast matrix check** in CI or release gates:
for each approved foreground/background pair in the palette closure, record
pass/fail and forbid new pairs outside the closed set without updating this
foundation.

---

## Motion: reduced preference and honesty

### `prefers-reduced-motion`: reduce, not remove

System UI **must** honor `prefers-reduced-motion: reduce` (or platform
equivalent). The contract is **reduction**, not **blanket removal** of
feedback—users still need to know what changed.

Align tier behavior with **Motion Tokens** (`token/motion.md`), summarized here:

| Tier        | Reduced-motion behavior                                                   |
| ----------- | ------------------------------------------------------------------------- |
| Interactive | Instant or **reduced amplitude**—no large travel, bounce, or overshoot.   |
| State       | **Fade-only** (opacity); **no** translation or scale that reflows layout. |
| Attention   | **Static** emphasis—no pulse, no looping animation.                       |
| Ambient     | **Off**—no ambient loops, parallax, or decorative drift.                  |

### Motion-off test

**Definition**: All CSS / platform animations disabled (or reduced-motion on),
including ambient and streaming micro-motion.

**Requirement**: The interface remains **fully functional**: navigation,
approval flows, tool calls, errors, and content editing work with no dead ends.
If a feature depended on motion alone to communicate state, that feature is
**non-conforming**.

---

## Keyboard

Every interactive component **must** be operable without a pointer.

| Mechanism     | Rule                                                                                                                  |
| ------------- | --------------------------------------------------------------------------------------------------------------------- |
| Tab           | Moves focus among interactive elements in **logical reading order**.                                                  |
| Arrow keys    | Where components define internal lists, grids, or tabs, arrows move **within** the component per platform convention. |
| Enter / Space | Activates the default action of the focused control; documented per component when non-standard.                      |
| Escape        | Dismisses transient layers (menus, dialogs, popovers) when the layer owns focus; must not trap focus.                 |

**Sticky navigation**: Fixed or sticky nav **must not** obscure the focused
element. Use **`scroll-padding-top`** (and logical equivalents for vertical
writing modes) so `Element.scrollIntoView` and native focus scrolling land
focused items clear of the chrome.

---

## Focus visibility

| Surface             | Requirement                                                                                                                                  |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| General interactive | **2px** solid `accent` focus ring, **2px** offset outside the control bounds (or inner offset where outer would clip, with same visibility). |
| Text inputs         | Ring optional if **underline** and/or **border** shift to `accent` on `:focus-visible` with **≥ 3:1** against field background.              |

Focus styles **must not** be removed for “minimal” aesthetics. `:focus-visible`
may suppress rings for mouse users where platform guidelines allow, but keyboard
focus **must** always be visible.

---

## Screen readers and announcements

Goal: **parallel complete experience**—a user who never sees the canvas still
gets accurate structure, status, and outcomes.

| Category          | Announce / expose                                                                             | Do **not** spam                                               |
| ----------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| Messages          | Role and full content; streaming updates batched sensibly (polite live region or equivalent). | Decorative phrasing repeated every tick.                      |
| Tool calls        | State changes (pending, running, succeeded, failed); errors with recovery hints.              | Internal IDs or raw JSON unless “raw” is the product promise. |
| Approval / safety | Prompt text, consequences, default and destructive actions.                                   | Background layout changes with no semantic effect.            |
| Navigation        | Current route or context when it changes meaningfully.                                        | Every scroll or hover.                                        |

**Explicitly excluded** from routine announcement: void fade, ambient background
motion, decorative hover transitions, and “streaming cursor” sparkle—unless a
**non-visual** user needs an equivalent status (then expose **state**, not the
animation).

**DOM order** equals **reading order**. No positive `tabindex` tricks that
diverge from visual sequence. Disclosure and hover-revealed content must be
reachable and exposed to accessibility APIs when active.

---

## Review checklist (short)

| #   | Check                                                                              |
| --- | ---------------------------------------------------------------------------------- |
| 1   | Contrast matrix passes for all shipped foreground/background pairs.                |
| 2   | `muted`, `line`, `accent-dim`, `accent-mid` used only as allowed above.            |
| 3   | `primary` L < 88% verified in theme.                                               |
| 4   | Reduced-motion tier rules implemented; ambient off.                                |
| 5   | Motion-off test passes for core flows.                                             |
| 6   | Keyboard path complete; sticky chrome does not hide focus.                         |
| 7   | Focus ring or input focus treatment meets visibility and contrast.                 |
| 8   | Live regions and labels cover messages, tools, approvals without decorative noise. |

---

## Cross-references

| Document                                           | Relationship                                           |
| -------------------------------------------------- | ------------------------------------------------------ |
| `token/color.md`                                   | Semantic palette; this doc constrains **use** for AA.  |
| `token/motion.md`                                  | Durations and reduced-motion mapping.                  |
| Policies: Disclosure, Presence, Silence, Attention | Behavioral context for hover, streaming, and emphasis. |
