---
title: A direct booking engine for a hotel chain
kicker: Apartur · Hospitality · Argentina
summary: A custom booking engine for a four-hotel chain, synced with its channel manager and connected to an LLM-based virtual assistant. Direct bookings grew by over 50%.
order: 1
role: Planning and development, alongside the client's CTO
period: 2025 — now
stack: [PHP 8.1, WordPress, WooCommerce, MySQL, JavaScript, RoomCloud XML OTA API, GA4, Meta Hotel Ads, GitHub Actions]
outcome: { value: '+50%', label: 'direct bookings' }
link: { href: 'https://apartur.com.ar', label: 'apartur.com.ar' }
shots:
  - { src: apartur/cover, label: 'Availability search on apartur.com.ar' }
  - { src: apartur/checkout, label: 'Room selection and checkout' }
  - { src: apartur/backoffice, label: 'Back office: inventory calendar' }
---

## The challenge

Apartur runs four hotels in Argentina and wanted its own website to sell directly, with availability and rates always in line with every other sales channel, and a booking experience on par with the big platforms.

## What we built

A custom multi-hotel direct booking engine, with WooCommerce as the cart, checkout and payments layer:

- **Two-way channel manager integration** (RoomCloud XML OTA API): hotels, rooms, rates, availability and inventory stay in sync automatically, and bookings flow both ways.
- **Full hotel business logic:** occupancy-based and extra-bed pricing, child age ranges, offers and promo codes, seasonal cancellation policies and derived rates.
- **Multi-currency, per country:** currency conversion, payment methods and settings based on the visitor's country.
- **Public availability API** so the LLM-based virtual assistant can check prices and availability in real time.
- **Marketing and measurement:** a Meta Hotel Ads catalog and GA4 conversion tracking, including bookings entered from the back office.
- **Custom back office** to manage hotels, rates, offers, a calendar view of inventory and manual bookings.

## Built to last

160+ PHPUnit test files, JavaScript and API tests, CI/CD on GitHub Actions, weekly dependency audits and automated semantic releases. Some 1,800 commits and 640 pull requests later, version 2.2 is in production. All of it built with my agent-assisted development workflow (Claude Code, OpenCode, GitHub Copilot).

## Result

The chain's direct bookings **grew by over 50%**.
