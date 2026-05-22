# Attention Policy

## Principle

Derives from **Proportional response** and **Urgency over importance**. Visual
weight and motion that demand the eye track **how blocked the system is**, not
how important a product owner thinks a feature is. Importance is expressed
through content and structure; urgency is expressed through restrained motion.

## Constraints

1. Visual weight tracks **urgency** (how blocked the system or flow is), not
   perceived importance of content.
2. Only components that **block system progress** may use **Attention-tier**
   animations (1.5–3s per Motion Policy).
3. Non-blocking components remain visually quiet regardless of stakeholder
   “importance”—no attention loops for awareness, branding, or engagement.
4. Attention animations **stop immediately** when the blocking condition
   resolves (no tail, no “finish the loop” delay).
5. **At most one** Attention-tier animation visible at a time to avoid competing
   urgency signals.
6. Attention animation **intensity uses opacity oscillation** only—not hue
   shifts, not size changes, not chromatic novelty.

## Token Requirements

-   **Attention tier**: durations and easings restricted to the Attention band;
    opacity endpoints must be drawable from existing grayscale/accent tokens (no
    new colors for attention).
-   **Z-order / stacking**: if multiple blocking surfaces could exist, token or
    spec must define which single surface may hold Attention motion.

## Spec Requirements

A component `SPEC.md` must declare:

-   The **blocking condition** that justifies Attention tier (machine-readable
    or testable description).
-   Proof that when the condition is false, no Attention motion runs.
-   Coordination rule: how this component yields to another if two blocking
    conditions could overlap (single winner).
-   Exact opacity keyframes (or equivalent) showing no scale, no color drift
    outside allowed tokens.

## Examples

**Compliant**

-   While a destructive action awaits explicit confirmation, the confirm control
    gently pulses opacity over 2s (Attention); the pulse halts the frame the
    dialog closes or the user confirms.
-   Only the global “agent blocked on your reply” strip runs an Attention loop;
    a sidebar “tip” never uses Attention tier while that strip is active
    (deferred or suppressed).

**Non-compliant**

-   A “Pro” upsell card uses a 2s glow pulse because marketing considers it
    important—no system block, violates tier eligibility.
-   Two modals each run an Attention pulse because both “need”
    visibility—competing signals, violates the single-attention rule.
-   Attention uses a growing shadow and font-size bump—uses non-opacity
    channels, violates constraint 6.
