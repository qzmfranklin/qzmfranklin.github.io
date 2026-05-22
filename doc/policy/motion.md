# Motion Policy

## Principle

Derives from **Proportional response** and **Silence over feedback**. Motion is
ambient and instrumental: it reinforces real state and never performs for its
own sake. The frozen-lake metaphor extends to barely perceptible
movement—breathing without demanding attention.

## Constraints

1. Every animation must be **positionally anchored**: no layout shift. The
   element stays in place; only safe properties change (opacity, color within
   palette, rotation, gradient position, transforms that do not affect layout
   when used per catalog rules).
2. Every animation must be **semantically honest**: motion encodes real state
   (e.g. working, waiting, entering, disabled)—no decorative or marketing
   motion.
3. Every animation must be **chromatically silent**: only the existing
   palette—accent, semantic pair, and grayscale. No new hues, glow colors, or
   shadows introduced solely for motion.
4. **Duration must respect tier assignments**:

| Tier        | Duration  | Role                                          |
| ----------- | --------- | --------------------------------------------- |
| Interactive | 150ms     | Hover, focus, press; cause–effect.            |
| State       | 200–400ms | Entry, exit, discrete state transitions.      |
| Attention   | 1.5–3s    | System blocked on user input; polite urgency. |
| Ambient     | 800ms–4s  | Ongoing conditions, not a single moment.      |

5. **`prefers-reduced-motion`**: must be supported with **per-tier degradation**
   (e.g. shorten or replace loops with static state; collapse attention motion
   to a single opacity step; never rely on motion as the only channel).
6. Removing all animations must leave the interface **fully functional**—no
   information or action may exist only in motion.

Additional catalog rules aligned with ambient motion: no new colors beyond
approved semantic tokens; no scale transforms on interactive elements; ambient
loops must be slow enough to be felt as atmosphere, not watched as a show.

## Token Requirements

-   **Motion tiers**: named durations/easings per tier (Interactive / State /
    Attention / Ambient) as design tokens or shared constants.
-   **Palette**: motion may only reference accent, success/error (semantic
    pair), and grayscale tokens—see Chromatic Policy for the exact token set.
-   **Transition default**: a single system default for Interactive-tier
    transitions (e.g. `--zen-transition`) used for hover/focus unless a
    component spec documents an exception tied to tier.

## Spec Requirements

A component `SPEC.md` must declare:

-   Each animation’s **name**, **tier**, **duration**, **easing**, and
    **trigger**.
-   Proof of positional anchoring (what layout-affecting properties are
    forbidden for that component).
-   Semantic mapping: what user-visible state each motion represents.
-   Reduced-motion behavior: what replaces or removes each animation when the
    preference is set.

## Examples

**Compliant**

-   A message row enters with 200ms opacity translate-free fade (State tier);
    focus ring uses 150ms ease-out (Interactive).
-   An “approval pending” control pulses opacity between two values over 2s
    (Attention tier) only while a blocking approval exists; disabling
    `prefers-reduced-motion` replaces the loop with a static high-contrast
    border.

**Non-compliant**

-   A button scales to 1.05 on hover for “delight” with no state
    change—decorative, not semantically honest.
-   A toast slides in from off-screen in a way that shifts surrounding
    content—violates positional anchoring.
-   A loading state uses a rainbow gradient sweep—new chroma outside the
    palette, violates chromatic silence.
