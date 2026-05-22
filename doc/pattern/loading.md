# Honest Absence Pattern (Loading)

**One line:** Reject loading theater (**Silence Policy**) while still answering
“what is happening?” with **truthful, transient** phase lines (**Honesty
Policy**)—or with nothing when the work is too fast to matter.

---

## Problem

Traditional UIs treat “loading” as a genre of interface chrome—spinners,
skeletons, bars—centered on **interface-as-subject**. Mu asks what the **user**
experiences: stillness when appropriate, **real partial content** when
streaming, and **specific operational truth** when the system is working but not
yet producing tokens. Pure silence during long opaque waits reads as
indifference; **Honesty** fixes that without resurrecting theater.

---

## Philosophical position

| Stance                    | Meaning                                                                                                                                                                                           |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Silence over feedback** | The system does not perform busywork while waiting.                                                                                                                                               |
| **Brutal honesty**        | When status matters, say what is **actually** happening—in plain, muted lines—then remove it.                                                                                                     |
| **Paper test**            | If you printed the frozen transcript, **phase lines would not appear** as part of the durable record—they are **ephemeral truth**, not content. While on screen, they were the most honest layer. |

---

## What Mu does NOT show (Silence Policy)

| Forbidden          | Rationale                                   |
| ------------------ | ------------------------------------------- |
| Spinners           | Indeterminate rotational “busy” indicators. |
| Skeleton screens   | Layout mimic placeholders.                  |
| Progress bars      | For **indeterminate** duration/work.        |
| Shimmer            | Sweeping highlight that implies loading.    |
| Generic “Loading…” | Vague status (**Silence** + **Honesty**).   |

---

## What Mu shows instead (Honesty Policy)

| Mechanism              | When                                                                                                                  |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------- |
| **Phase-status lines** | Named phases with glyphs and specific strings—e.g. `~ thinking`, `○ calling read_file`, `· waiting for API server...` |
| **Streaming content**  | Tokens or partial UI **arriving**—arrival **is** progress (**Silence Policy**: streaming is the indicator).           |
| **Caret at insertion** | Optional **Ambient** motion for active typing stream; respect **Motion Policy** reduced-motion.                       |
| **Nothing**            | Operations completing in **under 200ms** show **no** intermediate status (**Silence Policy** threshold).              |

### Phase line rules

| Property  | Requirement                                                                                       |
| --------- | ------------------------------------------------------------------------------------------------- |
| Copy      | Specific and truthful—identify bottleneck when known (**Honesty** § constraints).                 |
| Style     | Muted grayscale token; metadata typography—not headlines.                                         |
| Lifecycle | Appear with phase; **vanish when phase completes**—no sticky internal log in the primary surface. |
| Motion    | Optional **Ambient** opacity pulse only—never **Attention** for routine status.                   |

---

## Diagram: decision surface

```
                    ┌─────────────────────────┐
                    │  Duration / knowledge   │
                    └───────────┬─────────────┘
                                │
          ┌─────────────────────┼─────────────────────┐
          ▼                     ▼                     ▼
    < 200ms               streaming              blocked, no tokens
    stillness             partial content        phase lines (Honesty)
    (Silence)             (Silence §6)           transient, muted
```

---

## Relationship to other patterns

| Pattern                  | Role                                                                                                                  |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| **Streaming Transcript** | Hosts phase lines and streaming caret in context.                                                                     |
| **Inline Approval**      | **Attention** applies to **blocking decisions**, not routine loading—do not substitute spinners with approval pulses. |

---

## The honesty test

**Question:** If the user screenshots the UI during a long wait, is the most
prominent honest statement the **generic** word “Loading,” or the **specific**
phase line?

**Pass:** Specific phase text (or visible partial stream), muted, transient.

**Fail:** Generic label, decorative animation, or skeleton geometry implying
certainty the system does not have.

---

## Policy cross-references

| Policy        | Role in this pattern                                                                                                |
| ------------- | ------------------------------------------------------------------------------------------------------------------- |
| **Silence**   | Forbids spinners, skeletons, shimmer, indeterminate bars, generic loading copy; 200ms rule; streaming-as-indicator. |
| **Honesty**   | Authorizes phase lines; requires specificity; transient lifecycle; optional Ambient pulse only.                     |
| **Motion**    | Ambient for phase pulse; State for appearing/disappearing lines; no layout-shift motion.                            |
| **Chromatic** | Phase text stays in grayscale metadata roles—no rainbow status.                                                     |

---

## What this pattern explicitly does NOT do

-   **No** replacing Silence violations with “branded” shimmer or **skeleton**
    variants.
-   **No** permanent audit trail of internal phases in the main reading surface
    unless the product defines a **separate debug/transcript mode**
    (**Honesty**: transient by default).
-   **No** **Attention-tier** motion for “working” when the user is not blocked
    on a decision—Attention remains for **approval** and similar **blocking**
    surfaces.
-   **No** fake percentages or indeterminate progress bars that imply knowledge
    the system does not have (**Silence**).
-   **No** showing a phase line for sub-200ms work—**stillness** unless an
    exception is measured and documented in the product spec.
