# Motion Tokens — Motion Token System

Mu uses **reference tokens** (durations in ms, easing curves) and **semantic
tokens** (purpose-named aliases tied to the four-tier model). **No
component-level tokens.**

Motion is structured around **four tiers**: interactive feedback, state change,
attention, and ambient background motion. Tokens must remain consistent with
**Motion Policy** (positionally anchored, chromatically silent, semantically
honest).

## Duration tokens

| Token                         | Framework range                                                                           | Zen reference                                                      |
| ----------------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| `duration-interactive`        | **100–200 ms**                                                                            | **150 ms**                                                         |
| `duration-state`              | **150–500 ms**                                                                            | **200–400 ms** (product picks a value or narrow band within range) |
| `duration-attention`          | **1–4 s**                                                                                 | **1.5–3 s**                                                        |
| `duration-ambient`            | **500 ms–∞** (loops may use long periods; “infinite” means no fixed upper bound on cycle) | **800 ms–4 s** per cycle where applicable                          |
| `duration-stagger` (optional) | **30–80 ms** per item                                                                     | **50 ms** per item                                                 |

Four durations are **required**; `duration-stagger` is **optional** but must
stay within the band when used.

## Easing tokens

| Token              | Framework requirement                                              | Zen reference                        |
| ------------------ | ------------------------------------------------------------------ | ------------------------------------ |
| `ease-interactive` | **Decelerating** (ease-out family)                                 | ease-out-style curve                 |
| `ease-attention`   | **Symmetric** (ease-in-out) **or** **constant** (linear) for loops | ease-in-out or linear as appropriate |
| `ease-ambient`     | **Symmetric** or **constant** for loops                            | ease-in-out or linear                |

Three easing tokens are **required**. Products store cubic-bezier or platform
equivalents as reference tokens; semantic names above are stable.

## Motion constraints (from Motion Policy)

| #   | Constraint            | Meaning                                                                                                                                |
| --- | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Positionally anchored | **No layout shift** — motion does not change measured layout in a way that reflows content unexpectedly.                               |
| 2   | Chromatically silent  | Only **existing semantic color tokens**; no new colors introduced for motion alone.                                                    |
| 3   | Semantically honest   | Animation **reflects real state** — no decorative motion that implies completion, loading, or priority when state does not support it. |

## Reduced-motion contract

When the user prefers reduced motion:

| Tier        | Behavior                                                                        |
| ----------- | ------------------------------------------------------------------------------- |
| Interactive | **Instant** transition or **reduced amplitude** (no large overshoot or travel). |
| State       | **Fade-only** — opacity changes allowed; **no translation**, **no scale**.      |
| Attention   | **Static highlight** — no pulse, no looping emphasis.                           |
| Ambient     | **Disabled entirely** — no ambient loops or parallax.                           |

Products implement this at the platform `prefers-reduced-motion` (or equivalent)
layer; token names stay the same, but composition rules above apply.

## Zen summary

| Category    | Zen                                                         |
| ----------- | ----------------------------------------------------------- |
| Interactive | 150 ms, ease-out                                            |
| State       | 200–400 ms, fade-capable easing per reduced-motion rules    |
| Attention   | 1.5–3 s, symmetric or linear                                |
| Ambient     | 800 ms–4 s cycles where used; disabled under reduced motion |
| Stagger     | 50 ms/item when lists animate                               |
