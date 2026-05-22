# Design Manifesto — prod/me

## Design is a peer of `base/`, `prod/`, `tools/`, `net/`

In this monorepo, design is not a stylesheet bolted onto a component after the
fact. It is a real directory — a first-class participant in the build graph,
with its own tokens, its own resolver, its own documentation tree. When you
`bazel build //prod/me/design:tokens`, you get a CSS file that encodes every
visual decision this site makes. No hand-rolled hex values. No magic numbers. If
a value isn't a token, it's a bug.

## A DSL for designing from first principles

`design_token_library` is to visual identity what Bazel is to software builds: a
grammar for composing surfaces from a fixed vocabulary. The vocabulary is small
(color, typography, spacing, motion, opacity, radius, elevation), the
compositions are infinite. The grammar is the constraint that makes the infinite
manageable.

## Speaks mu, ships dual mode

`prod/mu` defined this vocabulary. Every name, every scale, every motion value
in this directory is unchanged from mu. We contribute one extension: a
light-mode resolver, allowing the same site to render in both dark and light
based on the visitor's system preference or explicit toggle.

The site itself is the proof that the vocabulary works across modes — the same
tokens, the same components, two palettes, zero visual drift.

## UPSTREAM

Files in `prod/me/design/doc/` (other than this one) are rendered from
`prod/mu/doc/*` via Bazel filegroup dependency. They are mu's — single source of
truth. To edit a design doc, edit it in `prod/mu/doc/` and rebuild.
