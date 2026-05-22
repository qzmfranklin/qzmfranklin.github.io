# Interaction State Vocabulary

This foundation defines the **universal set** of interaction states Mu
components may occupy. It is **not** derived from a single policy principle; it
harmonizes **Presence**, **Motion**, **Attention**, **Silence**, **Disclosure**,
and **Accessibility** into one vocabulary implementers and spec authors share.

**Conformance**: Terms **must**, **must not**, **should** follow RFC 2119.

---

## Purpose

| Goal             | Outcome                                                                                                            |
| ---------------- | ------------------------------------------------------------------------------------------------------------------ |
| Shared names     | Specs and code use the same state identifiers (`enabled`, `hovered`, …).                                           |
| Composable UI    | Multiple states can apply; precedence resolves conflicts.                                                          |
| Motion alignment | State changes bind to **motion tokens** (`duration-interactive`, `duration-state`, `duration-attention`) per tier. |
| Policy hooks     | **Presence** governs hover transience; **Silence** governs streaming; **Attention** governs blocked emphasis.      |

---

## Core states

Each row is a **named state** a component may implement. Not every component
uses every state; each component spec **must** list the subset it supports and
map them to visuals and motion.

| State       | Entry condition (summary)                                                                     | Visual / motion role                                                                                                    |
| ----------- | --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `enabled`   | Default; interactive and available.                                                           | Baseline appearance; no tiered emphasis.                                                                                |
| `disabled`  | Not interactive; often inert in the data model or permission layer.                           | Reduced emphasis (e.g. opacity), **no** pointer hit-testing; must not steal focus.                                      |
| `hovered`   | Pointer over target while **not** pressed; device supports hover.                             | Transient feedback per **Presence Policy**—preview only, **non-committal**.                                             |
| `focused`   | Keyboard or assistive-tech focus; `:focus-visible` where applicable.                          | Focus ring or equivalent per **Accessibility Foundation**; not a commitment to activate.                                |
| `pressed`   | Active press (pointer down, key repeat phase where relevant).                                 | Brief **interactive-tier** response; pairs with `duration-interactive`.                                                 |
| `selected`  | User chose this option among alternatives (listbox row, toggle-on, multi-select).             | Persistent **accent**-family indicator distinct from transient hover.                                                   |
| `active`    | Represents **current route**, **current tab**, or **primary locus** in navigation chrome.     | Persistent **primary**-role emphasis for “where am I.”                                                                  |
| `streaming` | Content still arriving; partial response or open channel.                                     | Cursor or edge treatment per **Silence Policy**; uses streaming-appropriate motion, not attention loops.                |
| `blocked`   | Further progress requires user input or resolution (approval, missing field, disambiguation). | **Attention-tier** motion or stasis-breaking emphasis per **Attention Policy**; must not fake urgency when not blocked. |

### Semantic notes

| State                    | Distinguish from                                                                                                                                                                                         |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `selected` vs `active`   | **Selection** answers “which item did I pick?” **Active** answers “which place in the app am I in?” Same row may be both selected and active in different contexts—document which wins under precedence. |
| `streaming` vs `blocked` | **Streaming** is progress with open I/O; **blocked** is a hard gate. Do not use attention loops for mere streaming.                                                                                      |
| `hovered` vs `focused`   | Hover is pointer-only where supported; focus is modality-agnostic. Do not require hover for any required action.                                                                                         |

---

## State precedence

When multiple states apply to the same node, **one** precedence order resolves
**conflicting** visual or motion rules. **Non-conflicting** properties **merge**
(e.g. `selected` border plus `focused` ring).

**Order (highest wins first):**

`disabled` → `blocked` → `pressed` → `focused` → `hovered` → `active` →
`selected` → `enabled`

| Principle           | Application                                                                                                                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Safety              | `disabled` suppresses affordances that imply action; must win over hover/focus visuals where conflict exists.                                                                               |
| Urgency of gate     | `blocked` outranks exploratory states so users see the gate.                                                                                                                                |
| Direct manipulation | `pressed` beats passive hover/focus for immediate feedback.                                                                                                                                 |
| Keyboard            | `focused` beats `hovered` when both could apply (e.g. mouse moved away while keyboard focus remains).                                                                                       |
| Persistence         | `active` and `selected` are **slower-changing** than `hovered`; lower precedence so transient states can still show on top when semantics allow—if a conflict remains, **higher** row wins. |

**Implementation guidance**: Encode as stacked pseudo-classes / state flags with
explicit CSS source order or a small state-to-style resolver in code—avoid ad
hoc overrides per component.

---

## State transitions and motion

All transitions between states **must** use **semantic motion tokens**—no raw
millisecond literals in components.

| Transition                            | Typical tokens                             | Notes                                                                                           |
| ------------------------------------- | ------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| `hovered` → `enabled` (pointer leave) | `duration-interactive`, `ease-interactive` | **Instant removal** of hover styling on leave—no lag that implies commitment (Presence Policy). |
| Focus changes                         | `duration-interactive` or shorter          | Avoid slow focus slides; respect reduced-motion rules in `token/motion.md`.                     |
| Press / release                       | `duration-interactive`                     | Micro-response only; must not simulate layout completion.                                       |
| `streaming` → idle                    | `duration-state`, appropriate easing       | Settles content “arrival”; aligns with Silence Policy end states.                               |
| Enter / exit `blocked`                | `duration-attention` for loops or emphasis | Loops **must** stop when `blocked` clears; no orphan animations.                                |

**Presence Policy nuance**: Hover is **transient** and **non-committal**.
Tooltip-like hover content follows Disclosure rules; disappearing instantly on
pointer leave is **required** unless keyboard-equivalent focus path keeps
content open with explicit dismissal.

---

## Mapping to component specs

Each Mu `SPEC.md` **must**:

1. List the **subset** of core states this component uses.
2. Provide a **state table** (entry conditions, visuals, tokens).
3. Provide a **transition table** with triggers (user, system, stream).
4. When two states could conflict, cite **this precedence list** or document a
   **narrower** component-specific rule that does not contradict higher-priority
   global states (`disabled`, `blocked`).

---

## Cross-references

| Document                      | Relationship                                          |
| ----------------------------- | ----------------------------------------------------- |
| `foundation/accessibility.md` | Focus, keyboard, contrast for `focused` / `disabled`. |
| `token/motion.md`             | Authoritative durations and easing names.             |
| `policy/presence.md`          | Hover transience and non-commitment.                  |
| `policy/silence.md`           | Streaming behavior.                                   |
| `policy/attention.md`         | Blocked and attention-tier motion.                    |
