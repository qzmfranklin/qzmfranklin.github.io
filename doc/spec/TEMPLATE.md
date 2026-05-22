# {ComponentName}

<!--
Replace {ComponentName} with the canonical component name. Keep this title in sync with the selector or public symbol.
-->

## 1. Name + Description

**Name:** `{component-name}`

**Description:** {One sentence describing what the user can do or perceive with
this component.}

<!--
Must state user-facing purpose in a single sentence. Avoid implementation-only wording.
-->

---

## 2. Rationale

**Problem:** {What friction, gap, or error exists without this component?}

**If this component did not exist, the user would lose:** {Concrete capability,
clarity, or safety—not "a reusable widget."}

**Non-goals:** {What this component intentionally does not solve, or "None—scope
is narrow."}

<!--
Tie existence to an observable user problem. Non-goals prevent scope creep.
-->

---

## 3. API

**Delivery:** {e.g. selector `app-example`, injectable `ExampleService`, or
both—match your stack.}

### Inputs

| Name          | Type     | Default     | Required | Notes                        |
| ------------- | -------- | ----------- | -------- | ---------------------------- |
| `{inputName}` | `{Type}` | `{default}` | yes/no   | {binding / validation notes} |

### Outputs

| Name           | Payload         | When it emits |
| -------------- | --------------- | ------------- |
| `{outputName}` | `{PayloadType}` | {condition}   |

### Exported types

```typescript
// {Paste or summarize public types consumers rely on.}
type Example = {
    /* ... */
};
```

**Contract notes:** {Versioning, breaking-change policy, or "Initial release."}

<!--
Every input needs type and default; outputs need payload types. No "see source" as the only documentation.
-->

---

## 4. States

### State table

| State         | Condition (entry)                 | Visual summary            |
| ------------- | --------------------------------- | ------------------------- |
| `default`     | {e.g. idle, enabled}              | {vs baseline—token-level} |
| `hover`       | {pointer over interactive region} | {Presence response}       |
| `{stateName}` | {boolean / enum condition}        | {what changes}            |

<!--
Exhaustive: every distinct appearance maps to a state. Interactive components include at least default + hover; add focus-visible, disabled, loading, error, etc. as needed.
-->

### Transition table

| From     | To     | Trigger                      | Reversible?    |
| -------- | ------ | ---------------------------- | -------------- |
| `{from}` | `{to}` | {user / system / data event} | yes/no + {how} |

<!--
Every transition needs a cause. Reversible means the user can return without leaving the component or reloading data unless noted.
-->

---

## 5. Visual Specification

### Layout (ASCII)

```
{Diagram: flex/grid, regions, content flow. Annotate gaps with spacing tokens, e.g. [gap: --space-md].}
```

<!--
Show structure and flow. Gaps and padding must be token names in prose or diagram labels—no raw px in this section.
-->

### Per-state visuals

| State     | Layout delta      | Notes            |
| --------- | ----------------- | ---------------- |
| `{state}` | {none / describe} | {chrome changes} |

### Color map

| Region / element | State     | Semantic tokens                                 |
| ---------------- | --------- | ----------------------------------------------- |
| {e.g. container} | `default` | bg: `{token}`, fg: `{token}`, border: `{token}` |
| {e.g. label}     | `hover`   | {token deltas}                                  |

### Typography

| Text run     | Role / token         |
| ------------ | -------------------- |
| {e.g. title} | `{type-scale-token}` |
| {e.g. body}  | `{type-scale-token}` |

### Spacing

| Area     | Padding           | Margin            | Gap               |
| -------- | ----------------- | ----------------- | ----------------- |
| {region} | `{spacing-token}` | `{spacing-token}` | `{spacing-token}` |

### Elevation

**Depth level:** {`void` | `surface` | as defined by product token sheet}

**Notes:** {Stacking context, z-index tokens if any—still no raw numbers unless
tokenized.}

<!--
Chromatic Policy: complete token list for this component appears here and in section 10—no hex or ad hoc colors.
-->

---

## 6. Motion

| Name                 | Tier                                      | Duration token | Easing token | Trigger                | Positional anchor | Semantically honest | Chromatically silent | Reduced-motion fallback          |
| -------------------- | ----------------------------------------- | -------------- | ------------ | ---------------------- | ----------------- | ------------------- | -------------------- | -------------------------------- |
| `{zen-example-name}` | Interactive / State / Attention / Ambient | `{token}`      | `{token}`    | {section 4 transition} | yes/no            | yes/no              | yes/no               | {static state or shortened step} |

<!--
Add one row per animation. Attention tier requires a blocking condition per Attention Policy—justify in section 10.
-->

---

## 7. Interaction

### Per-state matrix

| State     | Hover (Presence)  | Click / tap      | Keyboard | Focus              | Disclosure notes                          |
| --------- | ----------------- | ---------------- | -------- | ------------------ | ----------------------------------------- |
| `default` | {cursor + visual} | {primary action} | {keys}   | {tab / focus ring} | {what is not visible without exploration} |
| `{state}` | {…}               | {…}              | {…}      | {…}                | {…}                                       |

**Invocation map (Disclosure Policy):** {Which actions reveal advanced
UI—palette id, control id, hotkey—and how dismiss persistence works.}

**Primary task without hover:** {Confirm baseline flow is complete with keyboard
only.}

<!--
Pair hover with focus-visible per Presence Policy. List discoverability-only behaviors explicitly.
-->

---

## 8. Mastery

<!--
CONDITIONAL: Remove this entire section (including the heading) when the component has no hints or learnable affordances. LANGUAGE.md forbids an empty stub.
-->

**Applicability:** {Include this section only if there are learnable
affordances; otherwise delete from "## 8" through the "---" before section 9.}

### Hint inventory

| Hint ID     | Text (or i18n key) | Tier                            | Suppressibility                                   |
| ----------- | ------------------ | ------------------------------- | ------------------------------------------------- |
| `{hint-id}` | `{copy}`           | first-run / contextual / expert | permanent retire / session / always-on corrective |

### Mastery triggers

{User actions that prove competence and retire hints.}

### Suppressibility rules

{Permanent retirement vs corrective-only; tie to hint IDs.}

<!--
Teach-once / progressive relationship: hints must have explicit retirement; avoid endless coaching loops.
-->

---

## 9. Accessibility

**Roles:** {e.g. `button`, `listbox`, custom composite—justify if non-obvious.}

**ARIA attributes:** {`aria-expanded`, `aria-controls`, etc., tied to section 4
states.}

**Keyboard:** {Tab order, roving tabindex, Space/Enter/Escape behavior.}

**Focus management:** {Where focus moves on open/close/async complete; focus
trap rules.}

**Screen reader:** {Live regions, labels, descriptions; what is announced on
load, change, error.}

**Reduced-motion:** {Reference section 6; confirm no information is conveyed by
motion alone.}

<!--
Roles and properties must match the real DOM. Keyboard contract must cover every primary action.
-->

---

## 10. Policies

| Policy     | Applies? | Compliance statement                                                        |
| ---------- | -------- | --------------------------------------------------------------------------- |
| Presence   | yes/no   | {hover/focus/scroll-proximity; Interactive tier ≤150ms for presence motion} |
| Motion     | yes/no   | {catalog alignment; anchoring, honesty, chromatic silence; reduced-motion}  |
| Disclosure | yes/no   | {defaults, invocation, dismiss persistence, empty-as-void if relevant}      |
| Chromatic  | yes/no   | {token list; no extra hues}                                                 |
| Attention  | yes/no   | {blocking condition for Attention tier—or explicit "no Attention motion"}   |

**N/A justifications:** {For any "no" that might surprise a reviewer—one line
each.}

<!--
One concrete line per engaged policy. Mark N/A with a reason when a policy truly does not apply.
-->

---

## 11. Dependencies

**Depends on:**

-   `{OtherMuComponentOrDirective}` — {why}
-   `{ServiceOrModule}` — {effect on UI}

**Dependency graph (textual):**

```
{ParentFeature}
  └── {ThisComponent}
        ├── {ChildA}
        └── {ChildB}
```

**Constraints:** {Optional: lazy loading, circularity forbidden, etc.}

<!--
List components/services that affect rendered output or interaction. Keep the graph direction clear.
-->

---

## 12. Usage

```{language}
// Realistic example: imports/modules as required by your stack.
// @example parent context
<{selector}
  [{inputName}]="{value}"
  ({outputName})="{handler}($event)"
/>
```

**Anti-patterns (optional):**

-   {Misuse to avoid and why.}

<!--
Example must match section 3. At least one complete, credible usage.
-->

---

## Metadata (optional)

| Field        | Value                |
| ------------ | -------------------- |
| Spec version | `{semver or date}`   |
| Owner        | `{team or area}`     |
| Links        | `{RFD / issue URLs}` |
