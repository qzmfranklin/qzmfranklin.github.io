# Mu — Component Specification Language

This document is the **normative definition** of what every component `SPEC.md`
must contain in the Mu design system. A file is a **valid Mu component
specification** if and only if it satisfies the requirements and validation
criteria below for every applicable section.

Specifications are **contracts**: they bind implementers, reviewers, and
accessibility auditors to the same observable behaviors, token usage, and policy
compliance. Informal prose that restates marketing copy without testable claims
is non-compliant.

**Conformance keywords**: The terms **must**, **must not**, **should**, and
**may** are interpreted as in RFC 2119. Sections marked **required** use
**must** unless a section is explicitly **conditional**.

---

## Global rules

1. **Section order**: Required sections **must** appear in the order given in
   this document (sections 1–12). Section 8 (**Mastery**) is included **only**
   when the criteria in that section apply; it **must not** appear as an empty
   stub.
2. **Token discipline**: Visual specifications **must** reference **semantic
   tokens** (color, spacing, typography, motion, elevation). Raw numeric
   literals, hex colors, or ad hoc CSS values in component specs are
   **non-compliant** except inside system token definition documents.
3. **State exhaustiveness**: Every component **must** define a **finite, named**
   set of states and transitions. “Stateless” is not an exemption: after
   **Presence Policy** is applied, even purely presentational interactive
   surfaces have at least **default** and **hover** (and typically
   **focus-visible** as a distinct interaction state in tables—see section 4).
4. **Policy traceability**: Each section lists **motivating policies**—the Mu
   policies or principles that make the section mandatory. A spec **must** still
   implement sections even when the motivating policy is “cross-cutting” (e.g.
   accessibility law and platform conventions).

---

## Section 1 — Name + Description

### What this section must contain

-   The **component’s canonical name** (match code and design tooling).
-   A **single-sentence purpose statement**: what user-facing capability this
    component provides.

### Validation criteria

| Compliant                                                                                     | Non-compliant                                                                  |
| --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| Name matches implementation selector or public symbol; description states user-facing purpose | Name drift between spec and code; description lists implementation detail only |
| One clear sentence                                                                            | Marketing slogans, multiple unrelated sentences, or missing description        |

### Motivating policy

-   **Content supremacy** (MANIFESTO): the spec names the component in relation
    to user content and tasks, not internal structure.

### Rationale

Without a stable name and purpose, reviewers cannot scope changes, and dependent
specs cannot reference the component unambiguously.

---

## Section 2 — Rationale

### What this section must contain

-   **Problem statement**: what friction, error, or gap exists without this
    component.
-   **User loss test**: answer explicitly—_If this component did not exist, what
    would the user lose?_
-   **Non-goals** (brief): what this component explicitly does not solve, if
    confusion is likely.

### Validation criteria

| Compliant                                            | Non-compliant                                       |
| ---------------------------------------------------- | --------------------------------------------------- |
| Ties existence to a user-observable problem and loss | Generic “we need a reusable widget” with no problem |
| User loss is concrete (capability, safety, clarity)  | Restates section 1 without new information          |

### Motivating policy

-   **User-as-subject** framing (AXIOMS / MANIFESTO): rationale is justified in
    experience terms, not repository convenience.

### Rationale

Rationale prevents duplicate or overlapping components and gives reviewers a
test for whether API and states still match the original intent.

---

## Section 3 — API

### What this section must contain

-   **Delivery mechanism**: Angular **selector** and/or **injectable** (or
    equivalent for the stack), as used in consuming code.
-   **Inputs**: name, type, default, binding semantics (attribute vs property),
    and whether required.
-   **Outputs**: name, payload type, and when they emit.
-   **Exported types**: public TypeScript (or IDL) types consumers rely on.
-   **Stable contract**: versioning or breaking-change note if the component is
    already shipped.

### Validation criteria

| Compliant                                                     | Non-compliant                                             |
| ------------------------------------------------------------- | --------------------------------------------------------- |
| Enough detail to implement and consume without reading source | Undocumented `any`, missing defaults, hidden side effects |
| Outputs and types cover all externally visible events         | “See source file” as the only API description             |

### Motivating policy

-   **Brutal honesty** (MANIFESTO): the public surface is stated plainly so the
    system cannot pretend to offer behavior the API does not expose.

### Rationale

The API section is the implementable boundary between this component and the
rest of the product; ambiguity here propagates as defects.

---

## Section 4 — States

### What this section must contain

-   **State table** (exhaustive): for each named state—**state name**, **entry
    condition** (boolean or enumerative), **short visual summary** (what changes
    vs default).
-   **Transition table**: **from** state, **to** state, **trigger** (user,
    system, or data), **reversible?** (whether the user can return without
    leaving the component or reloading data).
-   **Minimum cardinality**: at minimum **default** and **hover** for any
    surface that is interactive under Presence Policy; document additional
    states (focus-visible, pressed, disabled, loading, error, etc.) as required
    by behavior.

### Validation criteria

| Compliant                                                    | Non-compliant                                              |
| ------------------------------------------------------------ | ---------------------------------------------------------- |
| Every visible distinction maps to a named state or sub-state | Undocumented visual modes (“sometimes it looks different”) |
| Every transition has a trigger; dead-end states explained    | Magic transitions with no cause                            |
| Hover/focus documented per Presence Policy                   | “No states” for interactive components                     |

### Motivating policy

-   **Presence Policy**: hover and focus-visible responses are mandatory for
    interactive targets; states make them testable.
-   **Motion Policy**: state graphs define valid triggers for tiered motion.

### Rationale

Finite state descriptions make visual, motion, and accessibility specs
reviewable and prevent infinite implicit modes.

---

## Section 5 — Visual Specification

### What this section must contain

-   **Layout**: ASCII diagram of structure (flex/grid), **content flow**, and
    **gaps** using **spacing tokens** only.
-   **Per-state visual notes**: for each state in section 4, how layout and
    chrome differ (if at all).
-   **Color map**: for each structural region and state, which **semantic color
    tokens** apply (foreground, background, border, accent usage). No raw
    values.
-   **Typography**: which **type-scale / role tokens** apply to each text run
    (title, body, caption, monospace, etc.).
-   **Spacing**: **padding**, **margin**, and **gap** expressed only with
    **spacing tokens**.
-   **Elevation**: declare **void** or **surface** depth level per Mu vocabulary
    (aligned to default-state axiom: primary surface is absence/void unless
    elevated per system rules).

### Validation criteria

| Compliant                                           | Non-compliant                                           |
| --------------------------------------------------- | ------------------------------------------------------- |
| Every color/size/spacing reference is a named token | Hex, `px` literals, or one-off values in component spec |
| Diagram matches described layout                    | Missing diagram for non-trivial layout                  |
| Elevation stated                                    | Ambiguous stacking or shadow without token-level intent |

### Motivating policy

-   **Chromatic Policy**: enumerable token set; no ad hoc color.
-   **Void-first**: layout and elevation justify visual weight.

### Rationale

Visual specs separate **semantic intent** from **implementation**, enabling
theme changes without rewriting compliance arguments.

---

## Section 6 — Motion

### What this section must contain

An **animation catalog** in tabular form. Each row **must** include:

| Field                       | Requirement                                                                                                               |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| **Name**                    | Stable identifier (e.g. `zen-cursor-pulse`)                                                                               |
| **Motion tier**             | One of: Interactive, State, Attention, Ambient (per Motion Policy tier table)                                             |
| **Duration token**          | Token reference, not raw ms in prose                                                                                      |
| **Easing token**            | Token reference                                                                                                           |
| **Trigger**                 | State transition(s) or condition from section 4                                                                           |
| **Policy compliance**       | Explicit checkmarks for: **positionally anchored**, **semantically honest**, **chromatically silent** (per Motion Policy) |
| **Reduced-motion fallback** | What replaces or removes the animation when `prefers-reduced-motion` is set                                               |

### Validation criteria

| Compliant                                                          | Non-compliant                                             |
| ------------------------------------------------------------------ | --------------------------------------------------------- |
| Every animation used by the component appears in the catalog       | Undocumented transitions or hover timing                  |
| Tier matches trigger (e.g. Attention only for blocking conditions) | Decorative motion with no honest state mapping            |
| Reduced-motion behavior stated per animation                       | “Browser default” as sole fallback for non-trivial motion |

### Motivating policy

-   **Motion Policy**: tiering, honesty, chromatic silence, positional
    anchoring, reduced-motion.
-   **Attention Policy**: eligibility and constraints for Attention-tier motion.

### Rationale

Motion is a liability for accessibility and performance; cataloging it forces
explicit triggers and fallbacks.

---

## Section 7 — Interaction

### What this section must contain

A **per-state interaction matrix** covering at minimum:

-   **Hover** (Presence Policy): for each interactive target in each state, the
    hover response (cursor, border, opacity, etc.).
-   **Click/tap**: primary and secondary actions, including disabled behavior.
-   **Keyboard**: **key chords** and focusable order; shortcuts documented by id
    where applicable.
-   **Focus**: tab order, focus trap rules (if any), and `:focus-visible`
    treatment.
-   **Disclosure** (Disclosure Policy): explicitly list behaviors **discoverable
    only through exploration** (e.g. hover-revealed affordances) and confirm
    they are **not** required for primary tasks.

### Validation criteria

| Compliant                                                 | Non-compliant                                       |
| --------------------------------------------------------- | --------------------------------------------------- |
| Keyboard parity for hover affordances per Presence Policy | Core action only on hover                           |
| Disclosure map matches actual defaults and invocations    | Hidden critical paths with no documented invocation |
| Each state row complete or marked N/A with reason         | Missing focus behavior for interactive component    |

### Motivating policy

-   **Presence Policy**: hover/focus pairing and non-gating of baseline tasks.
-   **Disclosure Policy**: progressive disclosure and invocation map.

### Rationale

Interaction tables are the fastest way to verify that policies survived
implementation.

---

## Section 8 — Mastery (conditional)

### When this section must appear

Include this section **if and only if** the component exposes **learnable
affordances** (hints, progressive shortcuts, coaching UI, or “teach once”
flows). If there are **no** hints or learnable paths, **omit the section
entirely**—do not leave placeholders.

### What this section must contain

-   **Hint inventory**: table of **hint ID**, **copy** (or reference to i18n
    key), **tier** (e.g. first-run, contextual, expert).
-   **Mastery triggers**: user actions that demonstrate competence and should
    retire coaching.
-   **Suppressibility**: for each hint, whether it uses **permanent retirement**
    after mastery, **session-only**, or **always-on corrective** (errors only).

### Validation criteria

| Compliant                                           | Non-compliant                                       |
| --------------------------------------------------- | --------------------------------------------------- |
| Present only when hints exist                       | Empty “Mastery” section with “N/A”                  |
| Every hint has ID, text, tier, and suppression rule | Hints reappear forever with no retirement condition |

### Motivating policy

-   **Progressive relationship** / **Teach once** (MANIFESTO): guidance appears
    once; demonstrated competence retires it.

### Rationale

Mastery tracking prevents patronizing repetition and documents lifecycle for QA
and analytics.

---

## Section 9 — Accessibility

### What this section must contain

-   **ARIA role(s)** for the root and notable descendants.
-   **ARIA attributes**: states/properties tied to section 4 states.
-   **Keyboard navigation contract**: tab order, roving tabindex if used,
    escape/enter/space behavior.
-   **Focus management**: on open/close, async completion, and error.
-   **Screen reader strategy**: what is announced on state change, loading, and
    errors (live regions, labels, descriptions).
-   **Reduced-motion**: pointer to section 6 catalog; confirm no information is
    motion-only.

### Validation criteria

| Compliant                                        | Non-compliant                                       |
| ------------------------------------------------ | --------------------------------------------------- |
| Roles/properties match implemented DOM           | Roles copied from a library default without mapping |
| SR strategy matches real announcements           | Critical updates only via color or motion           |
| Keyboard path documented for all primary actions | Focus loss or missing names on interactive controls |

### Motivating policy

-   **Motion Policy** (`prefers-reduced-motion`) and **Presence Policy** (focus
    parity).
-   Platform accessibility expectations (WCAG-aligned behavior) as cross-cutting
    requirements.

### Rationale

Accessibility is not an audit checkbox; it must be specified with the same
precision as visuals.

---

## Section 10 — Policies

### What this section must contain

A table listing **which Mu policies** this component materially engages, with
**one line per policy** stating **how** the component complies. Policies are
drawn from the canonical set:

| Policy document | Typical compliance statement                                            |
| --------------- | ----------------------------------------------------------------------- |
| Presence        | How hover/focus/scroll-proximity behave and map to Interactive tier     |
| Motion          | How catalog entries satisfy tier, anchoring, honesty, chromatic silence |
| Disclosure      | Default visibility, invocation map, dismiss persistence, empty-as-void  |
| Chromatic       | Complete token list; no extraneous hues                                 |
| Attention       | Blocking condition for Attention-tier motion, or explicit “not used”    |

Policies **not** listed **must** be explicitly marked **N/A** with a one-line
justification (e.g. “No Attention-tier animation in this component”). Omitting a
policy entirely is non-compliant unless justified under “does not apply.”

### Validation criteria

| Compliant                                           | Non-compliant                                                                |
| --------------------------------------------------- | ---------------------------------------------------------------------------- |
| Every engaged policy has a concrete compliance line | Boilerplate that could apply to any component                                |
| N/A rows justified                                  | Missing Attention/Chromatic/Presence when the component clearly touches them |

### Motivating policy

-   **Cross-cutting governance**: policies are the non-negotiables; this section
    proves the spec author addressed them.

### Rationale

Centralizing policy mapping avoids scattering compliance arguments across
sections and simplifies audit.

---

## Section 11 — Dependencies

### What this section must contain

-   **Component dependency graph**: directed dependencies on other Mu
    components, directives, or services.
-   **Non-UI dependencies**: data services, i18n, feature flags—only those
    affecting rendered output or interaction.
-   **Version or module constraints** if relevant to consumers.

### Validation criteria

| Compliant                                       | Non-compliant                                 |
| ----------------------------------------------- | --------------------------------------------- |
| Graph is acyclic or cycles explicitly justified | Hidden imports not listed                     |
| Leaf vs composite role clear                    | “Uses Angular” with no component-level detail |

### Motivating policy

-   **Content supremacy** / maintainability: dependencies clarify what chrome
    and behavior are inherited vs owned.

### Rationale

Dependency clarity predicts bundle impact, theming breakage, and circular
refactors.

---

## Section 12 — Usage

### What this section must contain

-   At least **one** **complete** code example showing the component in a
    realistic parent context (not a naked element with no module/import clues if
    the stack requires them).
-   Examples **must** reflect the API in section 3 (correct inputs/outputs).
-   Optional **anti-patterns** short list if misuse is common.

### Validation criteria

| Compliant                             | Non-compliant                                                    |
| ------------------------------------- | ---------------------------------------------------------------- |
| Example compiles against declared API | Example uses non-existent inputs                                 |
| Context matches typical product use   | Trivial snippet duplicated from CLI boilerplate with no guidance |

### Motivating policy

-   **Brutal honesty**: examples prove the documented API is real and
    sufficient.

### Rationale

Usage is the executable summary of the spec; broken examples invalidate the
document.

---

## Document metadata (recommended)

While not counted among the twelve sections, authors **should** include
file-level metadata for traceability:

-   **Spec ID / version** or last-reviewed date.
-   **Owning team** or area.
-   **Related RFD or issue** links.

---

## Compliance review checklist (summary)

1. Name + description present and aligned with code.
2. Rationale answers the user-loss test.
3. API complete for consumers.
4. States and transitions exhaustive; hover/focus covered.
5. Visual spec uses tokens only; includes layout diagram and elevation.
6. Motion catalog complete with tiers and reduced-motion.
7. Interaction matrix covers hover, keyboard, focus, disclosure.
8. Mastery present iff hints exist; otherwise omitted.
9. Accessibility section complete.
10. Policies table complete with N/A justifications.
11. Dependencies graphed.
12. Usage example valid.

A specification that fails any **must** requirement in a **required** section is
**non-compliant** until corrected.
