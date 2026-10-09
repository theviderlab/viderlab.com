---
title: A new management platform for a cultural center
kicker: Espacio Alquitara · Culture & leisure
summary: A legacy system replaced by a modern platform for workshops, sign-ups, room bookings, payments, cash registers and instructor fees, migrating the old system's data.
order: 3
status: In progress
role: 'Sole developer: architecture, backend, frontend and deployment'
period: 2026 — now
stack: [Laravel 12, PHP 8.4, React 19, TypeScript, Tailwind, MySQL, WooCommerce, GitHub Actions]
shots:
  - { src: espacio-alquitara/cover, label: 'Product catalog' }
  - { src: espacio-alquitara/rooms, label: 'Class scheduling' }
---

## The challenge

Espacio Alquitara runs workshops, classes and group activities, and its whole operation depended on an old system. It had to be replaced without losing features or data, and set up to grow.

## What I'm building

- **Laravel REST API** with authentication and per-module roles and permissions.
- **React and TypeScript web app** for day-to-day operations: users, accounts, rooms, payment methods, sign-ups and cash registers.
- **Legacy migration:** about 27 legacy tables documented and mapped to the new schema, with a command that checks the mapping still covers everything.
- **WooCommerce sync** for sign-ups coming from the website.

## Built to last

CI with static analysis and tests on both backend and frontend, automatic deploys to staging, and one-click production deploys with rollback. Every module and entity is documented.
