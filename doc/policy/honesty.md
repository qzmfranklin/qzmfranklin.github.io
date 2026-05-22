# Honesty Policy

## Principle

Derives from **Silent Attentiveness** (root) and **Proportional response**
(**Brutal honesty** in the manifesto). The system never hides its operational
state. Short-lived phase-status lines say what is actually happening; they
disappear when work completes so the transcript stays clean. Transparency builds
trust and assigns responsibility correctly when something is slow or stuck.

## Constraints

1. The system **must not hide its current operational state** from the user when
   that state affects understanding of progress or failure (e.g. which step is
   running, whether the system is blocked on I/O).
2. **Phase-status lines are transient**: they appear while work is in progress
   and **vanish when the phase completes**—no permanent log of internal steps
   mixed into primary content unless the product explicitly defines a persistent
   debug view.
3. Phase-status text must be **specific and truthful**—e.g. `calling read_file`,
   `compiling query`, `waiting for network`—not **“Loading…”**, **“Please
   wait”**, or other generic placeholders.
4. Phase lines use **muted color** and **standard typography** (metadata styling
   from grayscale tokens); they are not marketing headlines or error banners.
5. Phase lines may use **subtle Ambient-tier** motion only (e.g. gentle opacity
   pulse within 800ms–4s band) per Motion Policy—never Attention-tier for
   routine status.
6. When the transcript or task is **complete**, **no trace** of phase lines
   remains in the primary reading surface.
7. If work takes long, the status must **identify the actual bottleneck** when
   known (e.g. slow tool, network stall) so user trust and debugging energy
   align with the real cause.

## Token Requirements

-   Phase text: grayscale tokens only, typically mid-step between body and
    disabled (documented as `phase-fg` or equivalent single metadata role).
-   Motion on phase lines: Ambient tier tokens only; reduced-motion path removes
    pulse.

## Spec Requirements

A component `SPEC.md` must declare:

-   Which **phases** exist and the **exact strings** (or string templates with
    variables) shown for each.
-   Entry and exit conditions for showing and clearing phase lines.
-   Behavior when multiple subsystems run concurrently (ordering, stacking, or
    single combined line)—must remain truthful, not generic.
-   Mapping of any phase motion to **Ambient** tier with reduced-motion
    fallback.

## Examples

**Compliant**

-   During a tool run, a single muted line reads `running: search_repo` and
    clears the instant the tool returns; if the network stalls, the line updates
    to `waiting: network (api.example.com)`.

**Non-compliant**

-   A persistent footer says “Loading…” for any background activity—generic,
    violates specificity.
-   Phase lines use bright accent color and bounce animation to “feel
    responsive”—reads as content, violates metadata styling and tier.
-   Internal steps remain on screen after completion as a permanent
    stack—violates transient transcript cleanliness.
