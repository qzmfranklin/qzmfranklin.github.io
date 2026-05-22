## 1. Orientation Declaration

Mu describes what the user experiences. Every principle has the user as the
grammatical subject:

-   The user's visual field is clear (Void-first)
-   The user's implicit actions are heard (Responsive presence)
-   The user is not interrupted unless the system is blocked (Proportional
    response)
-   The user's expertise deepens over time (Progressive relationship)

Builder constraints — tokens, component specs, animation rules — are _derived_
from these experience descriptions. They are second-order, not first-order. The
derivation direction (experience → constraint → token → code) is the structural
consequence of centering the user.

## 2. Positioning Paragraph

Mu does not claim to be the only valid way to design software. It is a
deliberate postulate: we choose to ground design in user-as-subject because it
yields a coherent ethics of restraint and a testable vocabulary for what “good”
means in interaction. When the user is the subject of every sentence, what you
naturally discover are temporal and relational properties — rhythm, trust,
interruption, memory, escalation. When the interface is the subject, what you
naturally discover are spatial and material properties — grids, surfaces,
affordance density. Neither is false; they answer different questions. Mu
commits to the former. These are our postulates. See [AXIOMS.md](./AXIOMS.md)
for why they are choices, not truths.

## 3. Principle Hierarchy

### Root — Silent Attentiveness

The interface listens. It observes user behavior — mouse movement, keystrokes,
pauses, gaze proxies — and responds proportionally to the intent those actions
imply. It never initiates instruction, never demands acknowledgment, never
assumes the user needs to be taught. Components are listeners, not speakers. The
user's action is the only input; the interface's response is always proportional
and always deniable.

### Tier 1 — Five Derived Principles

**Void-first**: default state is absence; every element justifies existence.
Derived from attentiveness: if the interface is listening, it has nothing to say
until the user acts.

**Content supremacy**: the user's content is the interface; chrome is overhead.
Derived from attentiveness: the interface serves the user's focus, not its own
structure.

**Responsive presence**: the interface reacts to implicit signals (hover, focus,
scroll position) with lightweight, transient, non-committal feedback. The user
is free to pursue or ignore. Derived from attentiveness: responding to observed
intent without assuming it.

**Proportional response**: visual weight and motion intensity scale with system
urgency, not element importance. The interface escalates only when it is
blocked. Derived from attentiveness: the listener speaks softly until the
conversation requires otherwise.

**Progressive relationship**: users who explore more discover more. Users who
don't explore have a complete experience. Depth is earned through interaction,
never imposed through onboarding. The long-term consequence of attentiveness —
the interface and user develop a relationship over time.

### Tier 2 — Tactical Principles

**Disclosure via intent** (from Responsive presence): controls surface on
explicit invocation, not by default.

**Exploration without commitment** (from Responsive presence): hover reveals
affordances; baseline functionality never depends on discovery.

**Teach once** (from Responsive presence + Progressive relationship): guidance
appears once. Once the user demonstrates the action, guidance is permanently
retired.

**Urgency over importance** (from Proportional response): visual weight tracks
how blocked the system is, not how important the element is.

**Silence over feedback** (from Proportional response): no loading artifacts
(spinners, skeletons, shimmer). Streaming content IS the feedback.

**Brutal honesty** (from Silent Attentiveness + Proportional response): the
system never hides its own state. Transient phase-status lines reveal exactly
what the system is doing. They vanish when the phase ends, leaving the
transcript clean.

## 4. Derivation Tree

```
Silent Attentiveness (root)
├── Void-first
├── Content supremacy
├── Responsive presence
│   ├── Disclosure via intent
│   ├── Exploration without commitment
│   └── Teach once (mastery lifecycle)
├── Proportional response
│   ├── Urgency over importance
│   └── Silence over feedback
└── Progressive relationship
```

```
Silent Attentiveness + Proportional response → Brutal honesty
```

## 5. Scope — Aesthetics and Mechanics

Mu is product-agnostic because it occupies a specific position in the MDA
framework (Hunicke, LeBlanc, Zubek 2004 — Mechanics, Dynamics, Aesthetics).

-   **Aesthetics** — what the user feels. The principle hierarchy above (Silent
    Attentiveness → Void-first, Content supremacy, Responsive presence,
    Proportional response, Progressive relationship) names the experiential
    qualities Mu targets. Policies, tokens, and the axiom-space positions in
    [AXIOMS.md](./AXIOMS.md) formalize these commitments.

-   **Mechanics** — the atomic interaction primitives. The spec language
    ([LANGUAGE.md](./spec/LANGUAGE.md)), component patterns, policies, and
    tokens define the rules individual components implement: how disclosure
    works, how motion escalates, how feedback is rendered or withheld.

-   **Dynamics** — the emergent behavioral patterns that arise when a user
    interacts with a product's specific mechanics over time. Mu does not —
    cannot — prescribe these. Dynamics depend on what the product _is_, who uses
    it, and what they are trying to accomplish. They emerge from how a specific
    product combines its mechanics under a specific aesthetic commitment.

Designers work forward: Mechanics → Dynamics → Aesthetics. Users experience the
product in reverse: they feel the Aesthetics first, which emerge from Dynamics,
which are produced by Mechanics. Mu gives products the vocabulary for the two
bookend layers — what the user should feel, and what interaction rules produce
those feelings. The product defines the middle: the dynamic patterns it intends
to cultivate over sessions, over weeks, over a user's lifetime with the tool.

Visual identity is one consequence of this separation. Zen is one expression
(cold, monospace, dark, sharp). Another product could apply Mu principles with a
warm palette, rounded corners, and sans-serif type. But the deeper consequence
is structural: the principles constrain the _behavior_ of the interface — what
it does — while the product owns the _dynamics_ — what patterns of behavior
emerge over time.
