# Presence Policy

## Principle

Derives from **Silent Attentiveness** (root) and **Responsive presence**. The
interface listens to implicit signals—hover, focus, scroll proximity—and answers
with lightweight, transient feedback that never assumes commitment. Discovery
(hover affordances, scroll-revealed chrome) enhances the experience; it does not
gate core tasks.

## Constraints

1. Every interactive element must define a hover response: cursor change, border
   highlight, or opacity shift (at least one).
2. Hover responses must be transient—they disappear immediately when the pointer
   leaves the element, with no lingering state and no intentional delay after
   leave.
3. Every hover behavior must have a keyboard focus equivalent (same semantic
   affordance via `:focus-visible` or an explicit focus ring treatment).
4. Baseline functionality must work without any hover or discovery-dependent
   interaction; hover and scroll-proximity effects are enhancements, not
   requirements for completing primary flows.
5. Scroll-proximity responses (e.g. scrollbar fade-in, void fade) must use
   smooth easing and durations that avoid sudden jumps or flashes that read as
   errors.
6. Presence responses use only **Interactive-tier** motion: duration ≤ 150ms,
   consistent with the Motion Policy tier table.

## Token Requirements

-   **Interactive motion**: durations and easings aligned to the Interactive
    tier (e.g. `--zen-transition` or equivalent single source for ≤150ms
    presence transitions).
-   **Focus/hover affordance**: border or outline tokens from the chromatic
    system (grayscale or accent as defined by component role), not ad hoc
    colors.
-   **Cursor**: `cursor` values declared explicitly where non-default (e.g.
    pointer for clickable regions).

## Spec Requirements

A component `SPEC.md` must declare:

-   The list of interactive targets and which hover/focus visual is applied to
    each (cursor, border, opacity).
-   Proof that primary actions are reachable without hover (keyboard path and
    visible default controls).
-   Scroll-proximity behaviors, if any: trigger, duration, easing, and maximum
    visual delta.
-   Mapping of each presence animation to **Interactive** tier with stated
    duration ≤ 150ms.

## Examples

**Compliant**

-   A list row uses `opacity: 0.92` on hover and an identical focus ring on
    `:focus-visible`; activating the row works via Enter from focus without ever
    moving the mouse.
-   A scrollable panel fades a dim overlay over “void” space in 120ms ease-out
    when the user scrolls near the edge; releasing the scroll ends the fade
    without a second click.

**Non-compliant**

-   A primary “Submit” control only changes appearance on hover; there is no
    focus style, so keyboard users cannot tell which control is active.
-   Hover opens a tooltip that stays visible for 500ms after mouseleave
    (“linger” for readability)—violates immediate leave behavior for
    presence-tier feedback.
-   A card’s only affordance is a lift-on-hover with no focus equivalent; screen
    reader and keyboard users see a static card with no activation cue.
