# Chromatic Policy

## Principle

Derives from **Void-first**. Color carries meaning only through a tight,
enumerable system. The interface stays near-grayscale; accent and semantics do
bounded work—no rainbow of priorities.

## Constraints

1. **Maximum one accent color**: one hue, one chroma range—no parallel “primary
   / secondary / tertiary” accents.
2. **Grayscale ramp of exactly six steps** with **monotonic lightness** (no
   crossing or duplicate luminance roles).
3. **Exactly one semantic pair** (success / error) with **muted chroma**—no
   extra semantic colors (info, warning, etc.) unless explicitly added as a
   system-wide token revision.
4. **No color outside the eleven semantic tokens** may appear in the interface.
   The eleven are a closed set—for example: six grayscale steps, one accent,
   `success`, `error`, plus two additional documented roles still drawn from the
   same ramp or semantic rules (e.g. `void`, `elevated`) such that the total
   count stays eleven and none are introduced ad hoc in components.
5. **Grayscale chroma ≤ 0.02** in the design space used for tokens (e.g.
   Oklab/Oklch)—near-neutral; a subtle shared tint is allowed if applied
   consistently across the ramp.
6. **Accent does the work** of traditional primary/secondary/tertiary
   emphasis—no split emphasis system implemented as multiple competing hues.

## Token Requirements

The governing set must be enumerated once as **exactly eleven** named tokens in
the product token sheet, for example:

-   Six grayscale steps: `gray-1` … `gray-6` with documented monotonic
    lightness.
-   `accent` (single hue/chroma band).
-   `success` and `error` (muted semantic pair).
-   Two remaining roles (e.g. `void`, `elevated`) defined without new hues
    outside this list.

Components reference **only** these eleven names in every state.

## Spec Requirements

A component `SPEC.md` must declare:

-   The **complete list** of color tokens used by the component—no hex or raw
    channel values except in token definitions.
-   Proof that no token outside the approved set appears in any state (including
    hover, error, charts).
-   If charts or third-party embeds are used, how they are constrained or
    neutralized to satisfy the palette rules.

## Examples

**Compliant**

-   All text and borders use `gray-1`–`gray-6`; links and primary actions use
    `accent`; destructive actions use `error`; positive completion uses
    `success`.

**Non-compliant**

-   A “warning” yellow is added for one banner without extending the global
    eleven-token list—ad hoc chroma.
-   Two accents (“brand” and “highlight”) for different teams—violates
    single-accent rule.
-   A data viz library injects seven arbitrary series colors—violates “no color
    outside semantic tokens” unless those series are remapped to the allowed
    set.
