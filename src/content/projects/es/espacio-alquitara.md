---
title: Nueva plataforma de gestión para un centro cultural
kicker: Espacio Alquitara · Cultura y ocio
summary: Un sistema legacy reemplazado por una plataforma moderna para talleres, clases, salas, clientes y facilitadores, con la migración de los datos del sistema anterior preparada y verificada en cada cambio.
order: 3
status: En curso
role: 'Único desarrollador: arquitectura, backend, frontend y despliegue'
period: Sep 2026 — hoy
stack: [Laravel 12, PHP 8.4, React 19, TypeScript, Tailwind, MySQL, GitHub Actions]
shots:
  - { src: espacio-alquitara/cover, label: 'Catálogo de productos' }
  - { src: espacio-alquitara/rooms, label: 'Programación de clases' }
---

## El reto

Espacio Alquitara organiza talleres, clases y actividades grupales, y toda su operación dependía de un sistema antiguo. Había que reemplazarlo sin perder funcionalidad ni datos, y dejarlo preparado para crecer.

## Qué estoy construyendo

- **API REST en Laravel** con autenticación, roles y permisos por módulo.
- **Aplicación web en React y TypeScript** para la operación diaria: usuarios, clientes, facilitadores, productos con sus variaciones y precios, salas, cajas y métodos de pago.
- **Grilla de horarios:** clases en serie (semanales, quincenales o mensuales) o sueltas, con control de choques de sala y de facilitador en cada cambio, y lo que queda en conflicto guardado como pendiente hasta resolverlo.
- **Migración del sistema anterior:** 28 tablas legacy documentadas y mapeadas al esquema nuevo, con un registro de las decisiones de calidad de datos que hay que tomar antes del corte.
- **Próximo paso:** ventas, inscripciones, cierres de caja y honorarios, ya diseñados.

## Cómo se sostiene

CI con análisis estático y más de 370 tests en el backend, más tests en el frontend. Una verificación de la migración corre en cada cambio y bloquea el despliegue si el esquema y el mapeo dejan de coincidir. Despliegue automático a staging y a producción con un clic, health check y rollback. Cada módulo y entidad está documentado.
