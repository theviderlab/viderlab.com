---
title: An AI agent network with no master controller
kicker: Zobik · Open source · Distributed systems
summary: An event-driven multi-agent system where nodes pick their own work through topic subscriptions and semantic similarity, and the network brings up the node it is missing. Specified in full and being built in Go, stage by stage, each one closed with an end-to-end demo.
order: 5
size: small
status: In development
role: Design and development
period: Aug 2026 — now
stack: [Go, NATS JetStream, gRPC, Protocol Buffers, Python, LangGraph, OpenAI, Docker, SQLite, OpenTelemetry, Jaeger, Trivy, GitHub Actions]
outcome: { value: '7 of 12', label: 'build stages closed, each with an end-to-end demo' }
link: { href: 'https://github.com/zobik-org/zobik', label: 'GitHub repository (Apache 2.0)' }
shots:
  - { src: zobik/cover, label: 'Zobik' }
---

## The question

Most multi-agent systems have an orchestrator deciding who does what. What if nobody is in charge? In Zobik, tasks are published on an event bus and each node decides whether a task is for it, based on the topics it subscribes to and the semantic similarity with its specialty. No component knows the others by name.

## What already works

- **Task auctions on an event bus.** NATS JetStream carries signed, schema-validated events. A broker collects proposals and assigns each task atomically with compare-and-swap, so two nodes never take the same task.
- **Nodes written in Python.** A gRPC SDK lets a node take tasks, ask questions and open subtasks. The first LLM node answers requests from the operator panel with a LangGraph graph over the OpenAI Responses API.
- **The network fills its own gaps.** When a task goes unclaimed for several rounds, a spawner picks the closest entry from a local catalog of specialties and brings that node up. Without room, it evicts the idle node that was used least recently.
- **Every node is measured.** A network monitor follows the bus and keeps a quality, cost and usage profile per node: how often its work fails or is reopened, what each resolution costs, how often it wins.
- **Nothing runs unchecked.** Node images are scanned before they are admitted, for leaked secrets and for hidden characters used in prompt injection. Every external call goes through an allowlist with rules, and the sensitive ones wait for a person to approve them in the panel. Secrets live in an encrypted store, and each call's token cost lands in its trace.
- **Distributed tracing** with OpenTelemetry and Jaeger, rebuilt from the events on the bus, over mutual TLS with the network's own certificate authority.

## How it is built

The specification comes first: an architecture document and an implementation document that justifies the technology chosen for each piece. The code follows a build plan of twelve stages, and each stage ends with a demo that stays as an end-to-end test against a real container engine, so every stage proves the earlier ones again.

The development runs on a workflow I designed: I define the specification and the conventions, Claude Code implements each substage, and every pull request goes through automated code and security review, a CI pipeline with race tests, linting and vulnerability scanning, and my approval before it merges.

## Status

Early development: about 52,000 lines of Go across 68 pull requests, with seven of the twelve stages closed. Next come replacing nodes by quality, per-trace budgets, inbound channels and the Forge, which will let the network create the nodes it lacks instead of only picking them from the catalog. There is nothing to install yet.
