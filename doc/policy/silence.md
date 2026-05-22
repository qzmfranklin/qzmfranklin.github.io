# Silence Policy

## Principle

Derives from **Proportional response** and **Silence over feedback**. The system
does not perform busywork while waiting. Stillness is meaningful: idle looks
idle. Streaming and partial content carry progress; synthetic loading theater
does not.

## Constraints

1. **No spinners** (indeterminate rotational indicators) for load or wait
   states.
2. **No skeleton screens** (placeholder layout mimics) as feedback for loading.
3. **No shimmer** or sweeping highlight effects that imply loading.
4. **No progress bars** for **indeterminate** operations—no fake percent when
   duration and work are unknown.
5. **No generic “Loading…”** text (or equivalent vague status) as the primary
   feedback surface.
6. **Streaming content is the loading indicator**—text, tokens, or partial UI
   appearing is how progress is shown.
7. **Stillness communicates idle**: when nothing is happening, the interface
   does not pretend otherwise with micro-motion whose only role is to signal
   “alive.”
8. Operations that **complete in under 200ms** show **no intermediate state**—no
   flash of a status line or transition whose sole purpose is to acknowledge
   sub-threshold work.

## Token Requirements

-   No tokens whose sole purpose is “loading chrome” (e.g. skeleton gray
    distinct from the six-step ramp as an exception channel). If placeholders
    exist, they must be justified under another policy (e.g. void) and must not
    animate as shimmer.

## Spec Requirements

A component `SPEC.md` must declare:

-   What the user sees for **determinate** long operations (if any)—must be
    truthful and specific, not a generic bar (see Honesty Policy for phase
    lines).
-   Confirmation that indeterminate waits use **streaming or stillness**
    only—explicit statement “no spinners / skeletons / shimmer.”
-   Threshold behavior: which operations are measured or assumed below 200ms and
    therefore have no intermediate UI.

## Examples

**Compliant**

-   Model output appears token-by-token; the cursor rests in the composer with
    ambient-tier motion only where it denotes a real state (e.g. listening), not
    to mean “loading.”
-   A network call under 200ms swaps data with no intermediate label; a 4s call
    shows specific phase lines (“resolving host”, “fetching document”) per
    Honesty Policy—not “Loading…”.

**Non-compliant**

-   A centered spinner while “thinking” with no partial transcript—violates
    spinners and silence-over-feedback.
-   Gray rectangles pulsing in place of messages—skeleton screens.
-   Indeterminate bar animating left-right while duration is unknown—violates
    indeterminate progress rule.
