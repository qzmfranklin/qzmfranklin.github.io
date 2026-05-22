# Mastery Policy

## Principle

Derives from **Responsive presence**, **Progressive relationship**, and **Teach
once**. Hints teach; they do not nag. Guidance appears at the moment of
relevance, retires after demonstration, and never replaces corrective feedback
when the user errs.

## Constraints

1. **Every hint is actionable**—it instructs a concrete action (e.g. a key
   chord, a control to activate). Purely informational copy with no next step is
   not a hint surface under this policy.
2. Hints **appear at the moment of relevance**—when the user’s context makes the
   action applicable—not as proactive tours or scheduled tips unrelated to the
   current task.
3. **Once the user demonstrates the action**, the hint for that `id` is
   **permanently retired** (recorded in the mastered set); the system must not
   show that instructional hint again for that user profile.
4. **Corrective hints** (urgent tier when the user makes a mistake) are **never
   suppressed** by mastery—they fire whenever the mistake recurs until behavior
   changes.
5. **Mastery is recorded when the user performs the action successfully**, not
   when the hint is shown or dismissed without action.
6. **No hint lingers indefinitely**—if ignored, it follows a natural fade
   lifecycle; the resting state is no hint at all.

Implementation alignment: each hint has a stable `id`; before display,
`if mastered.has(id)` → do not show (except urgent corrective path, which is
governed by mistake detection, not the mastered set). Mastery state is shared
application-wide and persisted where the product specifies (e.g. storage with
graceful degradation).

## Token Requirements

-   **Hint surfaces**: background and text colors drawn only from approved
    semantic tokens; tier (normal / pop / urgent) may map to accent, grayscale
    steps, or the semantic error tone for urgent—declared in the component spec,
    not invented per instance.
-   **Motion**: hint entrance/exit uses State or Attention tier per hint tier
    table in the Motion Policy; `hintbar-*` naming in specs must tie to those
    durations.

## Spec Requirements

A component `SPEC.md` must declare:

-   A table of **hint ids**, **copy**, **tier**, **mastery trigger** (exact user
    action that calls `markMastered(id)`), and whether the hint is suppressible
    by mastery.
-   Lifecycle: attention duration, fade duration, and behavior when a new hint
    preempts an in-flight one.
-   Corrective hints: the mistake condition and proof they are not gated on
    `mastered`.

## Examples

**Compliant**

-   Hint `composer-newline` shows “↵ new line” when the composer first gains
    focus; when the user presses Enter once successfully in the composer,
    `markMastered('composer-newline')` runs and the hint never returns.
-   User presses ⌘↵ while the agent is busy; urgent hint explains the correct
    interrupt chord—fires every time that mistake happens, regardless of other
    mastered hints.

**Non-compliant**

-   A banner says “Did you know you can customize themes?” with no
    action—informational, not actionable.
-   Mastery is set when the user clicks “Got it” without performing the
    shortcut—records display, not demonstration.
-   A tour shows five hints on a timer before the user reaches the relevant
    control—proactive, not moment-of-relevance.
