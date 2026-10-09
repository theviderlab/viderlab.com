---
title: Motor de reservas directas para una cadena hotelera
kicker: Apartur · Hotelería · Argentina
summary: Motor de reservas a medida para una cadena de cuatro hoteles, sincronizado con su channel manager y conectado a un asistente virtual basado en LLM. Las reservas directas crecieron más de un 50%.
order: 1
role: Planificación y desarrollo, junto al CTO del cliente
period: 2025 — hoy
stack: [PHP 8.1, WordPress, WooCommerce, MySQL, JavaScript, RoomCloud XML OTA API, GA4, Meta Hotel Ads, GitHub Actions]
outcome: { value: '+50%', label: 'reservas directas' }
link: { href: 'https://apartur.com.ar', label: 'apartur.com.ar' }
shots:
  - { src: apartur/checkout, label: 'Checkout de la reserva' }
  - { src: apartur/backoffice, label: 'Backoffice: configuración de hoteles' }
  - { src: apartur/cover, label: 'Buscador de disponibilidad en apartur.com.ar' }
---

## El reto

Apartur gestiona cuatro hoteles en Argentina y quería que su propia web vendiera directamente, con disponibilidad y tarifas siempre alineadas con el resto de canales de venta y una experiencia de reserva a la altura de las grandes plataformas.

## Qué construimos

Un motor de reservas directo multi-hotel a medida, con WooCommerce como capa de carrito, checkout y pagos:

- **Integración bidireccional con el channel manager** (RoomCloud XML OTA API): hoteles, habitaciones, tarifas, disponibilidad e inventario se sincronizan solos, y las reservas viajan en ambos sentidos.
- **Lógica de negocio hotelera completa:** precios por ocupación y camas extra, rangos de edad infantil, ofertas y códigos promocionales, políticas de cancelación por temporada y tarifas derivadas.
- **Multi-moneda y por país:** conversión de moneda, métodos de pago y configuración según el país del visitante.
- **API pública de disponibilidad** para que el asistente virtual basado en LLM consulte precios y disponibilidad en tiempo real.
- **Marketing y medición:** catálogo para Meta Hotel Ads y tracking de conversiones en GA4, también para las reservas cargadas desde el backoffice.
- **Backoffice propio** para gestionar hoteles, tarifas, ofertas, inventario en vista calendario y reservas manuales.

## Cómo se sostiene

Más de 160 archivos de tests PHPUnit, tests de JavaScript y de API, CI/CD con GitHub Actions, auditoría semanal de dependencias y releases semánticos automatizados. Unos 1.800 commits y 640 pull requests después, la versión 2.2 está en producción. Todo el desarrollo usa mi flujo de trabajo asistido por agentes (Claude Code, OpenCode, GitHub Copilot).

## Resultado

Las reservas directas de la cadena **crecieron más de un 50%**.
