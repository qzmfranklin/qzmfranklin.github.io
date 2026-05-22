# Inline Decision Pattern (Approval)

**One line:** **Attention Policy** applied to a **blocking** user decision that
stays **inline** in the transcript—honoring **Content supremacy** and
conversational continuity.

---

## Problem

When the system must obtain permission, the user needs an unmistakable,
low-friction decision surface that does not eject them from context. Mu chooses
**inline** placement: the decision reads as part of the same stream as the
request, not as a separate application mode.

---

## Components

| Component  | Role                                                                                                           |
| ---------- | -------------------------------------------------------------------------------------------------------------- |
| `approval` | Renders prompt copy, **y** / **n** (or approve/deny) actions, resolved state, and accessibility announcements. |

No additional chrome pattern is required beyond transcript + `approval`—this
pattern composes into **Streaming Transcript Pattern**
(`pattern/transcript.md`).

---

## Position

```
... assistant message (permission request text)
... mdcontent / toolcall as needed
┌──────────────────────────────────────┐
│  approval (inline, same column width) │
│  [ pulse while pending ]               │
└──────────────────────────────────────┘
... transcript may continue below (non-blocking content) or wait on product rules
```

| Rule               | Detail                                                                                   |
| ------------------ | ---------------------------------------------------------------------------------------- |
| Placement          | Immediately **after** the assistant message that requests permission.                    |
| Forbidden surfaces | **Not** a modal dialog as the default; **not** a toast that auto-dismisses the question. |

**Content supremacy:** the approval block uses the same horizontal measure as
messages—no full-bleed banner that overpowers narrative text.

---

## Urgency (Attention Policy)

While **undecided** and the system is **blocked** on this approval:

| Channel     | Allowed                                                                                                                                                    |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Motion      | **Attention** tier: **opacity oscillation** on border or container edge—**positionally anchored**; no scale, no hue shift (**Attention** + **Chromatic**). |
| Duration    | 1.5–3s loop per **Motion Policy**; stops **immediately** when blocking ends.                                                                               |
| Singularity | At most one Attention animation in the view—coordinate with transcript-level rules if multiple blocks could exist.                                         |

---

## Decision interaction

| Input                    | Result                                                                                                     |
| ------------------------ | ---------------------------------------------------------------------------------------------------------- |
| **y**                    | Approve; transition to resolved **State** tier (~200ms) if any chrome change; **pulse stops first frame**. |
| **n**                    | Deny; same as above.                                                                                       |
| Click on labeled actions | Equivalent to keys.                                                                                        |

**Resolved visual:**

| Outcome  | Indicator                                                                                                              |
| -------- | ---------------------------------------------------------------------------------------------------------------------- |
| Approved | Checkmark or explicit “approved” token—product picks one **semantic** treatment (**success** token where appropriate). |
| Denied   | **X** or explicit “denied”—**error** or neutral grayscale per product; no celebratory motion.                          |

**Settlement:** **No** animation on the checkmark/X appearance—the **absence of
the pulse** is the primary state signal (**Attention Policy**: no tail after
resolve).

---

## Keyboard-first and accessibility

| Requirement    | Implementation                                                                                                                                                 |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Focus          | Approval region is **focusable** (or contains a roving focus target) when pending.                                                                             |
| Primary keys   | **y** and **n** as primary shortcuts when focus is in transcript context—document conflicts with text entry (composer typically exempt).                       |
| Screen readers | Use **`aria-live="polite"`** (or `assertive` if product tests blocking severity) to announce pending → resolved transitions per `foundation/accessibility.md`. |

---

## Timeout

**Undefined by this pattern.** Products choose:

-   no timeout (block until answered),
-   soft timeout with phase line (**Honesty**) elsewhere,
-   or cancellation semantics.

Document the choice in the product `approval` spec—this pattern only constrains
**placement** and **motion tier**.

---

## State flow

```
[pending + blocked]
  Attention pulse runs (opacity only)
  user presses y/n or clicks
    → pulse stops immediately (Attention off)
    → State-tier settle (optional, short)
    → resolved static icon/text (no pulse)
```

---

## Policy cross-references

| Policy                | Compliance                                                                               |
| --------------------- | ---------------------------------------------------------------------------------------- |
| **Attention**         | Pulse only while blocking; opacity-only; stops on resolve.                               |
| **Chromatic**         | No extra “urgency yellow”; oscillation stays within grayscale/accent rules.              |
| **Motion**            | Attention vs State tiers; reduced-motion collapses pulse to static high-contrast border. |
| **Content supremacy** | Inline, same stream—no competing modal layer by default.                                 |
| **Honesty**           | Prompt text states what permission is—no vague “Allow action?” without referent.         |

---

## What this pattern explicitly does NOT do

-   **No** **modal** approval as the default Mu pattern (products may override
    with explicit rationale).
-   **No** Attention motion after the user has decided—**no** “finish the loop”
    delay.
-   **No** hue-based urgency (importance theater)—**Attention** tracks
    **blockage**, not marketing priority.
-   **No** toast-only permission flows that disappear from the transcript record
    (unless the product defines a persistent audit elsewhere).
-   **No** defining global timeout behavior here—**products must specify**.
