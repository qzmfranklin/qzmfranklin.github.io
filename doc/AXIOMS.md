# Mu — Axiom Space (Layer 0)

## 1. Opening — The Euclid Analogy

For roughly two thousand years, Euclidean geometry stood on five postulates. The
first four were spare and uncontroversial; the fifth—parallel lines—was treated
as equally self-evident, a truth so obvious it scarcely seemed worth naming as a
choice. When mathematicians finally asked _what if we choose differently?_, they
did not break geometry. They discovered hyperbolic and elliptic geometries:
entire families of internally consistent worlds, each with its own theorems,
each as rigorous as Euclid’s.

Design frameworks share this structure. Principles that feel
inevitable—elevation, motion language, disclosure patterns—function as
postulates: they are commitments, not discoveries of nature. If you have only
encountered one framework, its axioms can feel like plain description of “good
UI.” They are not. They are one coherent point in a larger space of possible
commitments. Choosing different postulates yields a different framework, not a
defective one. Mu is one such point; this document names the axes on which any
framework—including Mu—must declare itself.

---

## 2. Axiom Space — 8 Independent Axes

An **axiom space** is a set of independent dimensions of choice. A position
along one axis does not logically force a position along another. In practice,
some combinations have natural affinities—cultural habits, tooling, or brand—but
independence matters: you can mix positions deliberately, and the result is a
new geometry, not a contradiction.

### Axis 1: Subject

**Whose perspective frames the system?**

| Position      | Framing                                 | What it tends to surface                                                               |
| ------------- | --------------------------------------- | -------------------------------------------------------------------------------------- |
| **User**      | Principles describe user experience.    | Temporal and relational properties (pace, interruption, trust). Mu adopts this.        |
| **Interface** | Principles describe interface behavior. | Spatial and material properties (surfaces, layers, affordances). Material’s choice.    |
| **Activity**  | Principles describe user tasks.         | Workflow properties (steps, completion, handoff). SAP Fiori exemplifies this emphasis. |
| **Content**   | Principles describe content needs.      | Editorial properties (clarity, voice, structure). BBC GEL aligns here.                 |

### Axis 2: Default State

**What does the viewport contain before the user acts?**

| Position     | Character                                                                                               |
| ------------ | ------------------------------------------------------------------------------------------------------- |
| **Void**     | Default is absence; every element must earn its place. Mu’s choice.                                     |
| **Surface**  | A visible ground plane with elevation and layering. Material’s choice.                                  |
| **Skeleton** | Placeholders that communicate structure before content arrives. Common in feeds and content-heavy apps. |
| **Canvas**   | An infinite or unbounded workspace. Creative tools (Figma, Miro).                                       |

### Axis 3: Disclosure

**How do capabilities become visible?**

| Position        | Character                                                                                                     |
| --------------- | ------------------------------------------------------------------------------------------------------------- |
| **Progressive** | Hidden by default; surfaced through exploration or explicit intent. Mu’s choice.                              |
| **Declarative** | Visible upfront—toolbars, menus, persistent chrome. Material leans here.                                      |
| **Contextual**  | Appear when context warrants them (e.g., right-click, selection). Apple HIG leans here.                       |
| **Adaptive**    | The system exposes or hides based on usage patterns or inference. Ribbon UIs and many AI-assisted interfaces. |

### Axis 4: Motion

**What role does animation play?**

| Position           | Character                                                                                           |
| ------------------ | --------------------------------------------------------------------------------------------------- |
| **Ambient**        | Felt rather than watched; slow, positionally anchored, non-performative. Mu’s choice.               |
| **Expressive**     | Communicates meaning through choreographed transitions. Material’s choice.                          |
| **Kinetic**        | Simulates physical dynamics—springs, momentum, elasticity. Apple’s motion language often sits here. |
| **Minimal / None** | Animation only where strictly functional; emphasis on accessibility and data density.               |

### Axis 5: Attention

**What determines visual weight?**

| Position       | Character                                                                                     |
| -------------- | --------------------------------------------------------------------------------------------- |
| **Urgency**    | Weight tracks how blocked the system is on user input—what must be resolved now. Mu’s choice. |
| **Importance** | Weight tracks significance in an information hierarchy. Material and HIG commonly align here. |
| **Frequency**  | Weight tracks how often an element is needed. Common in productivity suites.                  |
| **Role**       | Weight tracks user role or permission. Typical in enterprise and SaaS admin surfaces.         |

### Axis 6: Feedback

**How does the system confirm user action?**

| Position              | Character                                                                                                              |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **Silence + Honesty** | No loading theater; transient, honest state lines; the system never pretends work is done when it is not. Mu’s choice. |
| **Confirmation**      | Explicit visual feedback—progress, toasts, determinate bars. Material’s choice.                                        |
| **Haptic**            | Physical confirmation through vibration. iOS and watchOS patterns.                                                     |
| **Auditory**          | Sound as primary or co-primary confirmation. Games; also accessibility contexts.                                       |

### Axis 7: Learning

**How does the system handle user growth?**

| Position       | Character                                                                             |
| -------------- | ------------------------------------------------------------------------------------- |
| **Mastery**    | Teach once; retire persistent guidance after competence is demonstrated. Mu’s choice. |
| **Persistent** | Help and guidance remain always available. Most design systems default here.          |
| **Adaptive**   | Adjusts scaffolding based on observed competence. Ribbon-style interfaces.            |
| **None**       | No formal learning layer—expert tools, terminals, environments that assume fluency.   |

### Axis 8: Chromatic

**How is color budgeted?**

| Position          | Character                                                                                |
| ----------------- | ---------------------------------------------------------------------------------------- |
| **Constrained**   | Minimal palette, one accent, grayscale plus semantic pairs. Mu’s choice.                 |
| **Expressive**    | Rich dynamic color, multiple accents. Material 3’s choice.                               |
| **Monochrome**    | Pure grayscale. Terminals, e-ink, certain data-first UIs.                                |
| **Semantic-only** | Color reserved for meaning, not decoration. Bloomberg-style and many medical interfaces. |

---

## 3. Existing Frameworks Mapped

Approximate coordinates (each cell is a shorthand for the axis position). These
are interpretive, not official vendor statements.

```
Framework   | Subject   | Default   | Disclosure | Motion    | Attention | Feedback      | Learning   | Chromatic
------------|-----------|-----------|------------|-----------|-----------|---------------|------------|----------
Mu          | User      | Void      | Progressive| Ambient   | Urgency   | Silence+Honest| Mastery    | Constrained
Material 3  | Interface | Surface   | Declarative| Expressive| Importance| Confirmation  | Persistent | Expressive
Fluent 2    | Interface | Surface   | Declarative| Expressive| Importance| Confirmation  | Persistent | Expressive
HIG         | Interface | Surface   | Contextual | Kinetic   | Importance| Haptic        | Persistent | Expressive
Carbon      | Activity  | Surface   | Declarative| Expressive| Importance| Confirmation  | Persistent | Semantic
```

**Observations.**

-   **Material 3 and Fluent 2** occupy nearly the same region of the space:
    interface-subject, surface default, declarative disclosure, expressive
    motion, importance-based attention, confirmation feedback, persistent
    learning, expressive chromatic budgets. Their divergences are branding and
    implementation, not a different axiom set.

-   **HIG** diverges most clearly on **Motion** (kinetic rather than purely
    expressive) and **Feedback** (haptic prominence), and on **Disclosure**
    (contextual vs. declarative). It remains close to the Material–Fluent
    cluster on subject and default state.

-   **Carbon** sits closest to **Activity** as subject among these rows—task and
    workflow framing is structurally central—while sharing much else with
    enterprise-oriented declarative patterns.

-   **Mu** is the most distant point from that cluster in this table: it differs
    from Material-like frameworks on all eight axes simultaneously. That
    distance is intentional; it is not a claim of universal superiority but a
    claim of a different postulate set.

---

## 4. Generative Potential — How Frameworks Could Evolve

Frameworks need not be frozen. Deliberate **postulate shifts**—changing one axis
while holding others stable—generate new coherent systems. Examples:

-   **Material → User-as-subject:** Keep surfaces and motion grammar but
    re-derive hierarchy and components from user tempo, interruption cost, and
    trust rather than from layer metaphors alone.

-   **HIG → Mastery learning:** Preserve kinetic motion and haptic feedback
    while replacing always-on tips with one-time teaching paths that withdraw
    after demonstrated competence.

-   **Fluent → Ambient motion:** Retain structure and accessibility tooling but
    replace expressive, meaning-forward transitions with low-amplitude,
    positionally anchored motion that does not compete with content.

-   **Carbon → Progressive disclosure:** Keep activity-centric IA while reducing
    persistent chrome in favor of intent- and context-driven surfacing of tasks
    and tools.

-   **Any framework → Urgency-based attention:** Re-weight prominence from
    static importance or frequency to _what must be resolved for the system and
    user to proceed together_—a cross-cutting shift that can coexist with
    several subject and disclosure choices.

Each shift is a new “geometry”: internally checkable against its own axioms, not
a patch on the old one.

---

## 5. Predecessors and Intellectual Lineage

Mu’s coordinates did not appear in a vacuum. The following are touchstones—some
direct influences, some parallel discourses that clarify what is at stake when
choosing postulates:

-   **Mark Weiser; Amber Case — Calm Technology** (1995; 2015): technology that
    moves to the periphery of attention and respects human pace—related to void
    defaults, ambient motion, and urgency over spectacle.

-   **Don Norman — Affordances and Signifiers** (1988; 2013): how perceived
    action possibilities are communicated—foundational for any disclosure and
    feedback axis, regardless of which position you take.

-   **Kristina Hooper Woolsey; Carroll & Rosson — Progressive Disclosure**
    (1985; 1997): managing complexity by sequencing revelation—names one pole of
    the disclosure axis explicitly.

-   **Dieter Rams — Ten Principles of Good Design** (1970s): spare, honest,
    user-respecting product discipline—often cited alongside constrained
    chromatic and anti-theatrical feedback instincts.

-   **Ma (間) — Japanese negative space:** the productive role of
    emptiness—philosophical kin to void default states and refusal to fill the
    viewport without reason.

-   **The attention economy discourse** (2010s–present): treats attention as
    scarce and contested—informs urgency-based attention and skepticism toward
    decorative motion and persistent chrome.

-   **Material Design** (Google, 2014 onward): a major, well-documented
    interface-subject, surface-based geometry—useful as a reference point
    precisely because it is explicit.

-   **Apple Human Interface Guidelines** (1987–present): long-running
    articulation of platform norms, especially strong on motion feel and tactile
    feedback.

-   **IBM Carbon** (2017–present): enterprise-scale system with task and content
    patterns that illustrate activity-forward framing.

Lineage is not endorsement of every detail; it is honesty about where ideas
circulate and where Mu chooses a different parallel through the axiom space.

---

## 6. Relationship to MANIFESTO.md

**AXIOMS.md** describes the space: the dimensions along which any design
framework must take positions, and the sense in which those positions are
_choices_—like Euclid’s fifth postulate—not universal truths. **MANIFESTO.md**
declares Mu’s specific coordinates in that space and derives the ordered
principle hierarchy from those commitments. Read together: the manifesto says
_these are our postulates_; this document says _they are selections within a
known space, not inevitable facts_. Where the manifesto reads as dogma,
AXIOMS.md supplies the epistemic modesty: alternate geometries are valid; Mu is
the one we adopt on purpose.

The eight axes above describe positions on **Aesthetics** (what the user feels)
and **Mechanics** (what interaction rules components implement). They do not
include **Dynamics** — the emergent behavioral patterns that arise when a user
interacts with a product over time — because dynamics are not chosen the way a
postulate is chosen. They emerge from how a specific product combines its
mechanics under a specific aesthetic commitment. This is the structural reason
the axiom space is product-agnostic: it specifies the two bookend layers of the
MDA framework (Hunicke, LeBlanc, Zubek 2004) while leaving the middle layer —
the one that depends on what the product _is_ — to each product's own design
documents.
