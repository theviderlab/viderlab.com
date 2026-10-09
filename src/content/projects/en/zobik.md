---
title: An AI agent network with no master controller
kicker: Zobik · Open source · Architecture
summary: The specification of an event-driven multi-agent system where nodes pick their own work through topic subscriptions and semantic similarity. It is at the design stage, not implemented yet.
order: 5
size: small
status: In design
role: Author of the specification
period: 2026 — now
stack: [Event-driven, Pub/Sub, Blackboard, Embeddings, Distributed tracing, Go, Python]
link: { href: 'https://github.com/zobik-org/zobik', label: 'GitHub repository (Apache 2.0)' }
shots:
  - { src: zobik/cover, label: 'Architecture diagram' }
---

## The question

Most multi-agent systems have an orchestrator deciding who does what. What if nobody is in charge? Zobik proposes a network where nodes publish tasks on an event bus and each node decides whether a task is for it, based on the topics it subscribes to and the semantic similarity with its specialty.

## What the specification solves

- **Atomic task assignment** with no race conditions, through a broker and leases.
- **End-to-end distributed tracing** and handling of heavy context (claim-check).
- **Human-in-the-loop**, plus identity and authorization between nodes.
- **Per-trace cost control** and an anti-abuse budget.
- **Consistent-hashing partitioning**, rebalancing and node lifecycle.

## Status

The specification is nearly complete. The repository has the planned structure, but there is nothing to install yet: this is design work.
