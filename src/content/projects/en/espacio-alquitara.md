---
title: A new management platform for a cultural center
kicker: Espacio Alquitara · Culture & leisure
summary: A legacy system replaced by a modern platform for workshops, classes, rooms, customers and instructors, with the old system's data migration prepared and verified on every change.
order: 3
status: In progress
role: 'Sole developer: architecture, backend, frontend and deployment'
period: Sep 2026 — now
stack: [Laravel 12, PHP 8.4, React 19, TypeScript, Tailwind, MySQL, GitHub Actions]
shots:
  - { src: espacio-alquitara/cover, label: 'Product catalog' }
  - { src: espacio-alquitara/rooms, label: 'Class scheduling' }
---

## The challenge

Espacio Alquitara runs workshops, classes and group activities, and its whole operation depended on an old system. It had to be replaced without losing features or data, and set up to grow.

## What I'm building

- **Laravel REST API** with authentication and per-module roles and permissions.
- **React and TypeScript web app** for day-to-day operations: users, customers, instructors, products with their variations and prices, rooms, cash registers and payment methods.
- **Class schedule:** recurring (weekly, biweekly or monthly) or one-off classes, with room and instructor clash checks on every change, and anything left in conflict kept as pending until it's resolved.
- **Legacy migration:** 28 legacy tables documented and mapped to the new schema, plus a log of the data-quality decisions to settle before cutover.
- **Next up:** sales, sign-ups, cash register closing and instructor fees, already designed.

## Built to last

CI with static analysis and 370+ backend tests, plus frontend tests. A migration check runs on every change and blocks the deploy if the schema and the mapping drift apart. Automatic deploys to staging, and one-click production deploys with a health check and rollback. Every module and entity is documented.
