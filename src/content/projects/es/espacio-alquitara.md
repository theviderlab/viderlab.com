---
title: Nueva plataforma de gestión para un centro cultural
kicker: Espacio Alquitara · Cultura y ocio
summary: Un sistema legacy reemplazado por una plataforma moderna para talleres, inscripciones, reservas de salas, pagos, cajas y honorarios, con migración de los datos del sistema anterior.
order: 3
status: En curso
role: 'Único desarrollador: arquitectura, backend, frontend y despliegue'
period: 2026 — hoy
stack: [Laravel 12, PHP 8.4, React 19, TypeScript, Tailwind, MySQL, WooCommerce, GitHub Actions]
shots:
  - { src: espacio-alquitara/cover, label: 'Catálogo de productos' }
  - { src: espacio-alquitara/rooms, label: 'Programación de clases' }
---

## El reto

Espacio Alquitara organiza talleres, clases y actividades grupales, y toda su operación dependía de un sistema antiguo. Había que reemplazarlo sin perder funcionalidad ni datos, y dejarlo preparado para crecer.

## Qué estoy construyendo

- **API REST en Laravel** con autenticación, roles y permisos por módulo.
- **Aplicación web en React y TypeScript** para la operación diaria: usuarios, cuentas, salas, métodos de pago, inscripciones y cajas.
- **Migración del sistema anterior:** unas 27 tablas legacy documentadas y mapeadas al esquema nuevo, con un comando que verifica que el mapeo siga cubriendo todo.
- **Sincronización con WooCommerce** para las inscripciones que llegan desde la web.

## Cómo se sostiene

CI con análisis estático y tests en backend y frontend, despliegue automático a staging y despliegue a producción con un clic y rollback. Cada módulo y entidad está documentado.
