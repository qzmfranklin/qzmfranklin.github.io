# Disclosure Policy

## Principle

Derives from **Responsive presence** and **Disclosure via intent**. What is
visible by default stays minimal; depth appears when the user invokes it.
Progressive revelation follows explicit intent, not passive dwell time as a
primary strategy for core safety.

## Constraints

1. **Advanced controls** surface only on explicit invocation: command palette,
   documented hotkey, or direct click on a control that means “more options”—not
   on mere hover as the only path to essential behavior.
2. **No persistent chrome** for features that are not continuously needed (no
   standing panels whose sole purpose is discoverability of rarely used
   actions).
3. **Dismissed surfaces stay dismissed** until explicitly re-invoked—no
   auto-reopen on next navigation or timer-based reappearance for the same
   session state without a new user action.
4. **Collapsed content defaults to collapsed**; expanding requires a deliberate
   user action; no auto-expand on load for secondary material.
5. **Empty states are the void**: no illustrations, no curated suggestion lists,
   no marketing copy filling “dead” space—absence is intentional.
6. **Overlay dismissal** requires explicit intent: **Escape** or **click
   outside** the overlay’s interactive region—not implicit actions like
   scrolling the page behind the overlay (unless documented as an equivalent
   explicit gesture for that surface).

## Token Requirements

-   **Disclosure affordances**: icons or labels for “expand” / “more” use
    standard grayscale or accent tokens; no extra semantic colors for disclosure
    alone.
-   **Overlay**: backdrop and sheet tokens defined so default vs. dismissed
    states do not introduce new chromatic categories.

## Spec Requirements

A component `SPEC.md` must declare:

-   Default visibility for each sub-region (visible / collapsed / command-only).
-   The **invocation map**: which user actions reveal advanced controls (palette
    id, hotkey, control id).
-   Dismiss persistence: what state stores “user closed this” and what clears
    it.
-   Empty-state behavior: literal void—confirm no images, lists, or filler
    components.

## Examples

**Compliant**

-   Expert settings open only from a “More…” entry that is always reachable from
    the same menu; closing the sheet sets `userDismissedExpert=true` until the
    user opens “More…” again.
-   An empty thread shows only the input surface and neutral background—no “Try
    asking about…” prompts.

**Non-compliant**

-   Critical security settings only appear after hovering a header for 3
    seconds—advanced behavior gated on hover-only discovery.
-   A dismissed promo drawer reopens on every route change to “help”
    users—violates stay-dismissed until re-invoked.
-   Empty search shows illustrated cards suggesting queries—violates
    empty-as-void.
