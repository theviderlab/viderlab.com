---
title: An agent that recovers unbilled revenue and writes nothing without your approval
kicker: Revenue Leakage Agent · AI agents
summary: A chat agent that compares contracts against invoices, explains what was billed wrong and proposes corrections. A deterministic detector does the math, the LLM explains it, and every write stops at an approval card. A working demo with synthetic data.
order: 7
size: small
status: Open-source demo
role: Design and development (portfolio project)
period: Nov 2026
stack: [LangGraph, LangChain, Claude, OpenRouter, Python, FastAPI, Pydantic, SQLite, React, TypeScript, Tailwind, pytest, Vitest, Playwright, Bruno, GitHub Actions]
outcome: { value: '0', label: 'writes without human approval' }
link: { href: 'https://github.com/theviderlab/revenue-leakage-agent', label: 'GitHub repository (MIT)' }
shots:
  - { src: revenue-leakage-agent/cover, label: 'The agent proposes a make-good invoice and waits for approval' }
---

## The problem

A subscription contract says what should be billed and when. Billing systems drift from that: a month gets skipped, an invoice goes out in the wrong currency, a contract is amended mid-quarter and nobody updates the schedule. The gap between what the contracts promise and what was invoiced is revenue leakage. Finding it means reconciling every plan against every invoice, period by period.

An LLM is good at explaining that kind of analysis and bad at doing the arithmetic reliably. And an agent that writes invoices needs a hard stop before anything touches the books.

## The core idea

Split the work: **code computes, the LLM explains, a person approves.**

- **A deterministic detector** (no LLM) lists every expected period of each contract as ok, missing, underbilled or overbilled, net of credit memos and in the contract's currency. Records it cannot place go to an explicit residue instead of being guessed.
- **The LLM** calls the detector as a tool, explains the findings in plain language and labels hypotheses as hypotheses. It never computes an amount.
- **Every correction** (make-good invoice, credit memo, contract amendment) is validated against the detector and stops at an approval card. A "yes" typed in the chat is not an approval.

## How it works

1. **Investigate:** *"Check all plans for revenue leakage."* The agent runs the detector and summarizes what it found.
2. **Propose:** *"Propose a make-good for February on PLN-1001."* The proposal is checked against the findings: the agent cannot propose a correction for a period that is not missing.
3. **Approve:** the card shows the amount and the evidence. Only Approve writes.
4. **Verify or undo:** approved actions go to an append-only sandbox with an audit log. Re-running the check shows the period resolved, and a rollback marks the action as reverted instead of deleting it.

## Design decisions

- **Human approval inside the graph, not in the prompt.** A LangGraph `interrupt()` stops every write and every rollback. The approval carries its interrupt id, so a stale or replayed card cannot approve anything.
- **State written only by tools.** The active plan, findings and proposals are facts the tools record, never parsed from the LLM's text. A SQLite checkpointer keeps a pending approval alive across server restarts.
- **Assumptions the data does not decide are explicit.** The analysis cutoff, the period calendar or how amendments are prorated live in a settings panel only the user can change. If an assumption changes a contract's result, its findings drop to low confidence and admit no proposals.
- **Retrieval by key, not by similarity.** Records and domain concepts have exact names, so the agent looks them up by key instead of using embeddings.
- **Every decision written down.** Forty design decisions, each with the alternatives that were rejected and why.

## Quality

Each test layer checks something the others do not: pytest for the detector against a table of expected results and for the graph with a scripted LLM, Vitest for the interface, a Bruno collection of 51 requests over real HTTP, a Playwright end-to-end test of the approval flow, and evals against the real model that assert which tools were called, never the wording. Three CI jobs in GitHub Actions.

## Run it

A scripted mock backend runs the full interface without an API key:

```sh
git clone https://github.com/theviderlab/revenue-leakage-agent.git
cd revenue-leakage-agent
make install
make dev AGENT_BACKEND=mock
```

With any OpenAI-compatible endpoint (developed with Claude Sonnet through OpenRouter), copy `.env.example` to `.env`, set the key and run `make dev`. Details are in the [repository README](https://github.com/theviderlab/revenue-leakage-agent#readme).
