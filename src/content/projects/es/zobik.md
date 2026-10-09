---
title: Una red de agentes de IA sin controlador central
kicker: Zobik · Open source · Arquitectura
summary: La especificación de un sistema multi-agente event-driven en el que los nodos eligen su propio trabajo por suscripción y similitud semántica. Está en fase de diseño, todavía sin implementación.
order: 5
size: small
status: En diseño
role: Autor de la especificación
period: 2026 — hoy
stack: [Event-driven, Pub/Sub, Blackboard, Embeddings, Distributed tracing, Go, Python]
link: { href: 'https://github.com/zobik-org/zobik', label: 'Repositorio en GitHub (Apache 2.0)' }
shots:
  - { src: zobik/cover, label: 'Diagrama de arquitectura' }
---

## La pregunta

La mayoría de los sistemas multi-agente tienen un orquestador que decide quién hace qué. ¿Qué pasa si no hay nadie al mando? Zobik propone una red donde los nodos publican tareas en un bus de eventos y cada nodo decide si una tarea le corresponde, según los tópicos a los que está suscrito y la similitud semántica con su especialidad.

## Qué resuelve la especificación

- **Asignación atómica de tareas** sin condiciones de carrera, con un broker y leases.
- **Tracing distribuido** de punta a punta y gestión de contextos pesados (claim-check).
- **Human-in-the-loop**, identidad y autorización entre nodos.
- **Control de costes por traza** y presupuesto anti-abuso.
- **Particionado por consistent hashing**, rebalanceo y ciclo de vida de los nodos.

## Estado

La especificación está casi cerrada. El repositorio tiene la estructura prevista, pero todavía no hay nada que instalar: es trabajo de diseño.
