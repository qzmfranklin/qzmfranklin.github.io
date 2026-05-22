# Streaming Transcript Pattern

**Name:** transcript (not “chat”)

**One line:** A single vertical stream of contributions with minimal role
markers, honest phase lines, and streaming-native layout—aligned with
**user-as-subject** and **Content supremacy** (MANIFESTO).

---

## Problem

Users need to read, scan, and act on a **continuous conversation with the
system** without chat-theater: alternating bubbles, speaker-colored panels, or
layout that fights streaming. The surface must stay readable while tokens
arrive, tools run, and approvals block—without stealing scroll or pretending the
interface is the protagonist.

---

## Components

| Component   | Role in this pattern                                                                            |
| ----------- | ----------------------------------------------------------------------------------------------- |
| `stream`    | Owns ordering, append semantics, and scroll contract for the vertical transcript.               |
| `message`   | One logical turn (user or assistant); wraps role prefix + body; grows downward only.            |
| `mdcontent` | Renders assistant/user prose under **Prose** rhythm (typography + spacing tokens).              |
| `toolcall`  | Assistant-side tool invocations; **Scan** rhythm; stacked with Scan gaps; collapsed by default. |
| `approval`  | Blocking decisions **inline** in the assistant turn; does not break the stream into modals.     |
| `composer`  | Primary input; fixed to bottom; pairs with **Mastery Policy** hints.                            |

**Role markers (typographic, not chrome):**

| Contributor | Prefix | Notes                                                 |
| ----------- | ------ | ----------------------------------------------------- |
| User        | `>`    | Single column; no right/left lanes.                   |
| Assistant   | `·`    | Same measure as user; no background swap per speaker. |

---

## Layout

**Shell:** full-height flex column.

```
┌───────────────────────────────────────────── viewport
│  [Transcript region — flex: 1 1 auto; min-height: 0]
│  ┌─────────────────────────────────────────┐
│  │ scrollable Content (overflow-y: auto)   │
│  │   message groups (Prose vertical rhythm) │
│  │   toolcall stacks (Scan rhythm)         │
│  │   phase lines (metadata row, transient)  │
│  │   inline approval (when blocking)        │
│  └─────────────────────────────────────────┘
│  [Composer — flex: 0 0 auto; sticky/fixed bottom]
│     composer + optional mastery hint strip
└─────────────────────────────────────────────
```

| Region     | Behavior                                                                                                                  |
| ---------- | ------------------------------------------------------------------------------------------------------------------------- |
| Transcript | Scrolls; owns **Void Fade** (luminance vs recency) as decorative tier—must not reduce contrast below readable thresholds. |
| Composer   | Does not scroll away; sits on **surface** elevation per depth tokens; never overlaps readable text at rest.               |

**Measure:** Prose max width per `foundation/layout.md` (e.g. ~66ch for
narrative runs inside messages). Tool payloads and structured lines use **Scan**
measure (~80ch) where monospace or dense lines appear.

---

## Rhythm: Prose vs Scan

Two **rhythm contexts** interleave in one column:

| Context   | Applies to                        | Vertical spacing                           | Line height                    |
| --------- | --------------------------------- | ------------------------------------------ | ------------------------------ |
| **Prose** | Message text, `mdcontent`         | Larger gaps **between message groups**     | Prose band (typography tokens) |
| **Scan**  | `toolcall` blocks, dense metadata | Tighter gaps **between stacked toolcalls** | Scan band                      |

Do not unify into a single loose stack: prose breathes; tool stacks stay
scannable.

---

## Void Fade

**Intent:** Recency reads as luminance—recent lines brighter, older lines
drifting toward **void**—without turning the transcript into a chart of
speakers.

| Rule        | Requirement                                                                                                                                                                       |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Purpose     | Decorative hierarchy only; **Chromatic Policy** still uses approved grayscale steps—no new “age” hues.                                                                            |
| Readability | Older text must remain legible; fade is a step shift, not disappearance.                                                                                                          |
| Motion      | If fade animates on new content, use **Ambient** tier at most; **Honesty** phase lines are exempt from looking “aged” while active—they use fixed metadata styling until cleared. |

---

## Phase-status lines (Honesty Policy)

Transient rows while work is in flight—examples:

| Glyph | Example line          | When it appears                     |
| ----- | --------------------- | ----------------------------------- |
| `~`   | `~ thinking`          | Model internal delay before tokens. |
| `○`   | `○ calling read_file` | Named tool phase.                   |

**Requirements (see `policy/honesty.md`):**

-   Muted foreground token; standard typography—not banner styling.
-   **Vanish when the phase ends**; no permanent stack of internal steps in the
    primary surface.
-   Optional **Ambient** pulse on opacity only; **Motion Policy** reduced-motion
    path removes pulse.
-   Strings must be **specific**—never generic “Loading…” (also **Silence
    Policy**).

---

## Streaming

| Topic      | Specification                                                                                                                                    |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Token path | Tokens append in place; message height grows **downward** only.                                                                                  |
| Cursor     | A caret at the insertion point is the **only** streaming-specific ornament; **Ambient** tier; disabled or static under `prefers-reduced-motion`. |
| Honesty    | Streaming partial text is real content—not a loading sham (**Silence Policy**: streaming _is_ the indicator).                                    |

---

## Scroll contract (layout stability)

```
user at bottom ──► auto-scroll with new tokens / phases (stick to end)
user scrolled up ──► do NOT change scrollTop; new content appends below visible fold
```

| Invariant          | Enforcement                                                                                            |
| ------------------ | ------------------------------------------------------------------------------------------------------ |
| No horizontal jump | No width changes in rows above the growing tail.                                                       |
| No scroll theft    | Pin only when **stick-to-bottom** predicate is true (threshold near end, e.g. within one line height). |

---

## Tool calls (Disclosure Policy)

| Default   | Interaction                                                                   |
| --------- | ----------------------------------------------------------------------------- |
| Collapsed | Summary row visible; detail hidden.                                           |
| Expanded  | Click / keyboard activates disclosure; full args and result per product spec. |

Stack **vertically** with **Scan** spacing between toolcalls. All tool UI lives
**inside** the assistant message column—no parallel “tool rail” that competes
with content unless the product defines a separate debug surface.

---

## Approval (Content supremacy + Attention)

| Topic      | Rule                                                                                                                            |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Position   | **Inline** after the assistant message that requested permission—not modal, not toast-only.                                     |
| Urgency    | While undecided, **Attention Policy** pulse (opacity on border/container); **Chromatic Policy**: no new hues for “more urgent.” |
| Continuity | Transcript flow continues above and below; approval is a **blocking island**, not a route change.                               |

---

## Composer and Mastery

The composer hosts the **primary Mastery Policy** surface for this view:
actionable hints (e.g. shortcuts) with stable `hint-id`s, mastery triggers on
successful demonstration, and corrective hints that ignore mastery when the user
errs. Tie hint copy and placement to `policy/mastery.md` tables in the product
spec.

---

## State flow (high level)

```
[Idle]
  → user sends → message(user) committed
  → phase lines may appear / clear per Honesty
  → assistant streams → mdcontent grows; cursor at tail if streaming
  → toolcalls append (collapsed); expand on intent
  → approval may block → Attention pulse until resolved
  → stream settles → phase lines gone; Void Fade updates recency
```

---

## Policy cross-references

| Policy                | How this pattern complies                                                                                          |
| --------------------- | ------------------------------------------------------------------------------------------------------------------ |
| **Honesty**           | Phase lines are truthful, transient, specific; vanish on completion.                                               |
| **Silence**           | No spinners/skeletons; streaming and stillness carry progress.                                                     |
| **Disclosure**        | Toolcalls collapsed by default; expansion is explicit.                                                             |
| **Attention**         | Approval urgency only while blocked; pulse stops immediately on resolve.                                           |
| **Mastery**           | Composer hints: actionable, retired on demonstration.                                                              |
| **Motion**            | Ambient for phase pulse and streaming caret; State tier for expand/collapse; Attention only for blocking approval. |
| **Chromatic**         | Void Fade uses grayscale steps; no speaker colorways.                                                              |
| **Content supremacy** | One column of content; chrome minimal; approvals inline.                                                           |

---

## What this pattern explicitly does NOT do

-   **No** chat bubbles, alternating left/right columns, or per-speaker
    background colors.
-   **No** treating the transcript as a log of permanent phase lines after work
    completes.
-   **No** auto-expand of tool details on load.
-   **No** scroll hijacking when the user has intentionally moved away from the
    bottom.
-   **No** Attention-tier motion for routine streaming or thinking—only for
    **blocking** conditions (e.g. undecided approval), per **Attention Policy**.
-   **No** generic loading copy or indeterminate progress chrome (**Silence** +
    **Honesty**).
-   **No** mastery tours or timed tips unrelated to composer focus—hints stay
    **moment-of-relevance** per **Mastery Policy**.
