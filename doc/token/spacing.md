# Spacing Tokens — Multiplier-Set Spacing

Mu uses **reference tokens** (numeric steps derived from a base unit and
multiplier set) and **semantic tokens** (purpose-named aliases such as
`space-3`). **No component-level tokens.**

## Base unit

| Constraint     | Requirement                                                          |
| -------------- | -------------------------------------------------------------------- |
| Definition     | Product-chosen length used as the scalar base for the spacing scale. |
| Typical values | **4px** or **8px** (common); must be an **integer ≥ 2px**.           |

## Multiplier set

Spacing steps are **base × multiplier** for each multiplier in the set.

| Constraint  | Requirement                                                                                                                                       |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Count       | **Minimum 6**, **maximum 10** multipliers.                                                                                                        |
| First value | **1** (always).                                                                                                                                   |
| Last value  | **≥ 12**                                                                                                                                          |
| Progression | **Dense-to-sparse**: the ratio between **consecutive** multipliers must be **non-decreasing** (later gaps grow at least as fast as earlier ones). |

Products name semantic spacing tokens (e.g. `space-1` … `space-n`) by mapping
each multiplier index to a role in the type and layout system; the **framework**
constrains the multiplier set, not every pixel value.

## Reference implementation (Zen)

| Parameter            | Value                            |
| -------------------- | -------------------------------- |
| Base unit            | **4px**                          |
| Multipliers          | `[1, 2, 3, 4, 6, 8, 12, 16]`     |
| Resolved pixel steps | **4, 8, 12, 16, 24, 32, 48, 64** |

Eight multipliers satisfies the count bounds; the last multiplier is 16 (≥ 12).
The product must validate **dense-to-sparse** progression: consecutive
multiplier ratios **non-decreasing** over the full chosen set.

## Alternative example (Fibonacci-style)

Illustrates a different base and progression; product must still satisfy all
constraints.

| Parameter            | Value                      |
| -------------------- | -------------------------- |
| Base unit            | **8px**                    |
| Multipliers          | `[1, 2, 3, 5, 8, 13]`      |
| Resolved pixel steps | **8, 16, 24, 40, 64, 104** |

Six steps; last multiplier 13 (≥ 12). Verify dense-to-sparse progression against
the ratio rule for the product’s full set.

## Border and shape tokens

| Category      | Rule                                                                                                  |
| ------------- | ----------------------------------------------------------------------------------------------------- |
| Border width  | **Exactly one** reference value for the product: **1px** or **2px**. No graduated border-width scale. |
| Border radius | **Exactly one** radius value **system-wide**. Mixing multiple radii in the same product violates Mu.  |

Semantic tokens may alias these (e.g. `radius-default`, `border-hairline`) but
must resolve to the single allowed reference each.
