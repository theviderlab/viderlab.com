---
title: Semantic search for e-commerce
kicker: Smart Search · E-commerce · Applied AI
summary: A search platform that understands what shoppers mean. An LLM pipeline processes the catalog, and natural-language queries become structured filters.
order: 2
role: Technical lead of a two-developer team; built the whole frontend
period: Dec 2025 — Jul 2026
stack: [Python, FastAPI, LangChain, OpenRouter, OpenAI embeddings, Pinecone, LangSmith, React, TypeScript, PostgreSQL, WooCommerce]
link: { href: 'https://theviderlab.github.io/smart-search-project', label: 'Project page' }
shots:
  - { src: smart-search/cover, label: 'Natural-language search' }
  - { src: smart-search/dashboard, label: 'Dashboard: pipeline metrics' }
  - { src: smart-search/taxonomies, label: 'Taxonomy approval' }
---

## The challenge

Keyword search breaks down exactly when shoppers describe what they need instead of naming the product. The goal was a search that understands intent and respects hard constraints (price, category, attributes) without making results up.

## What we built

- **Five-stage content pipeline:** URL discovery, HTML-to-structured-JSON parsing, LLM summaries, vector indexing in Pinecone, and search.
- **Hybrid search:** vector similarity plus LLM query enhancement and structured filter extraction from natural language, combined with database filters. Fully async, with fallbacks on errors.
- **Human-in-the-loop taxonomies:** the LLM proposes a hierarchical classification of the catalog and a person approves it before it goes live.
- **Model-agnostic:** OpenRouter as the gateway, so switching providers is a config change. Tracing in LangSmith.
- **Admin dashboard** in React and TypeScript: accounts, pipeline metrics, interactive search and taxonomy approval.
- **WooCommerce plugin:** semantic search over the store's catalog, re-indexing in the background whenever a product changes.

## Quality

A FastAPI API with auto-generated OpenAPI docs and standard error responses (RFC 7807), around 126 pytest test files, 50+ endpoints covered by API tests, and Sentry monitoring.
