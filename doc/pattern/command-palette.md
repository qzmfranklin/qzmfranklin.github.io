# Command Palette Pattern

**One line:** A **Disclosure Policy** reference implementation: command surface
on explicit invocation, void backdrop, fuzzy search, keyboard-first
navigation—no standing chrome.

---

## Problem

Power users need fast access to infrequent actions without persistent buttons
competing for **Content supremacy**. The palette must appear on intent, dismiss
cleanly, and respect **empty-as-void**—no decorative filler when nothing
matches.

---

## Components

| Component        | Role                                                                                      |
| ---------------- | ----------------------------------------------------------------------------------------- |
| `cmdpalette`     | Search field, result list, grouping headers, selection highlight, execute/dismiss wiring. |
| Overlay backdrop | Dims the world; captures outside clicks for dismissal per **Disclosure Policy**.          |

---

## Invocation

| Channel    | Behavior                                                                                                                                                                            |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Keyboard   | **Cmd+K** (macOS) / **Ctrl+K** (Windows/Linux)—primary path.                                                                                                                        |
| Visible UI | **None** by default (**Void-first**); products may document the chord in help or mastery hints elsewhere, not as a persistent toolbar button unless a separate pattern requires it. |

---

## Layout

```
                    ┌──────────────────────────┐
                    │  backdrop (void @ 80%)    │
     full viewport  │                           │
                    │    ┌─────────────────┐      │
                    │    │ cmdpalette       │      │  ← surface elevation
                    │    │ [ search input ] │      │
                    │    │ ─────────────── │      │
                    │    │ Category A       │      │  ← muted header
                    │    │   item           │      │
                    │    │   item           │      │
                    │    │ Category B       │      │
                    │    │   item           │      │
                    │    └─────────────────┘      │
                    │                           │
                    └──────────────────────────┘
```

| Layer    | Token intent                                                                                                       |
| -------- | ------------------------------------------------------------------------------------------------------------------ |
| Backdrop | **void** at ~80% opacity (product token); must not introduce a new hue—grayscale + alpha per **Chromatic Policy**. |
| Palette  | **surface** elevation; single radius system-wide; border hairline if defined in token sheet.                       |

---

## Search and results

| Behavior  | Specification                                                                                                                              |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Matching  | Fuzzy match on command title and optional keywords; deterministic ordering within a group (e.g. recency, static priority—product defines). |
| Grouping  | Results partitioned by **category**; each group has a **muted** header row (metadata text style—not a second accent).                      |
| Selection | Exactly one active row; visible focus ring per **Presence Policy** (hover/focus parity).                                                   |

---

## Navigation

| Input                 | Action                                                                    |
| --------------------- | ------------------------------------------------------------------------- |
| Arrow Up / Down       | Move selection; wrap or clamp—pick one and document (clamp is common).    |
| Enter                 | Execute selected command; then dismiss.                                   |
| Escape                | Dismiss without side effects.                                             |
| Click row             | Execute (secondary to keyboard; still fully supported).                   |
| Click outside palette | Dismiss (**Disclosure**: explicit intent, not accidental scroll-through). |

---

## Dismissal

| Mechanism                        | Included?                                                         |
| -------------------------------- | ----------------------------------------------------------------- |
| Escape                           | Yes.                                                              |
| Click outside interactive region | Yes.                                                              |
| Dedicated close button           | **No** (**Void-first**; redundant with Escape and outside click). |

**Disclosure Policy alignment:** once dismissed, the palette stays closed until
the chord is pressed again—no auto-reopen on unrelated navigation without a new
user invocation.

---

## Empty state

| Allowed                                    | Forbidden                                                              |
| ------------------------------------------ | ---------------------------------------------------------------------- |
| A **single** muted line: e.g. `No results` | Illustrations, icons-for-decoration, suggested queries, marketing copy |

This is the **empty-as-void** rule from **Disclosure Policy** applied to search.

---

## State flow

```
[Closed]
  chord → open + focus search input
  type → filter results; selection resets/clamps per spec
  Enter → run command → close
  Escape / outside click → close without running
```

Accessibility: treat as a modal dialog pattern for focus trap and `aria-modal`
semantics—exact roles live in the product component spec
(`foundation/accessibility.md` alignment).

---

## Policy cross-references

| Policy         | Compliance                                                                               |
| -------------- | ---------------------------------------------------------------------------------------- |
| **Disclosure** | Advanced actions on chord only; dismissed stays dismissed; empty state is void.          |
| **Chromatic**  | Backdrop and palette use approved tokens; one accent for selection if needed.            |
| **Presence**   | Hover/focus-visible parity on rows.                                                      |
| **Motion**     | Open/close uses **State** tier; list scroll is native—no gratuitous stagger.             |
| **Mastery**    | Optional one-time hint elsewhere documenting Cmd/Ctrl+K—not a persistent palette button. |

---

## What this pattern explicitly does NOT do

-   **No** persistent palette icon required in the shell (Void-first).
-   **No** close **×** control in the chrome (redundant; conflicts with void
    aesthetic).
-   **No** rich empty states with suggestions (**Disclosure** empty-as-void).
-   **No** reopening the palette automatically after route changes without a new
    chord.
-   **No** mouse-only affordance as the only way to reach critical actions
    (**Disclosure** advanced-via-intent still allows keyboard parity).
