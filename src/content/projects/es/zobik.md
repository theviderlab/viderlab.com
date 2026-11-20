---
title: Una red de agentes de IA sin controlador central
kicker: Zobik · Open source · Sistemas distribuidos
summary: Un sistema multi-agente event-driven en el que los nodos eligen su propio trabajo por suscripción y similitud semántica, y la red levanta el nodo que le falta. Especificado por completo y en construcción en Go, por etapas, cada una cerrada con una demo de punta a punta.
order: 5
size: small
status: En desarrollo
role: Diseño y desarrollo
period: Ago 2026 — hoy
stack: [Go, NATS JetStream, gRPC, Protocol Buffers, Python, LangGraph, OpenAI, Docker, SQLite, OpenTelemetry, Jaeger, Trivy, GitHub Actions]
outcome: { value: '7 de 12', label: 'etapas de construcción cerradas, cada una con su demo' }
link: { href: 'https://github.com/zobik-org/zobik', label: 'Repositorio en GitHub (Apache 2.0)' }
shots:
  - { src: zobik/cover, label: 'Zobik' }
---

## La pregunta

La mayoría de los sistemas multi-agente tienen un orquestador que decide quién hace qué. ¿Qué pasa si no hay nadie al mando? En Zobik las tareas se publican en un bus de eventos y cada nodo decide si una tarea le corresponde, según los tópicos a los que está suscrito y la similitud semántica con su especialidad. Ningún componente conoce a los otros por nombre.

## Lo que ya funciona

- **Subasta de tareas sobre un bus de eventos.** NATS JetStream transporta eventos firmados y validados contra su esquema. Un broker reúne las propuestas y asigna cada tarea de forma atómica con compare-and-swap, así que dos nodos nunca toman la misma.
- **Nodos escritos en Python.** Un SDK sobre gRPC permite a un nodo tomar tareas, hacer preguntas y abrir subtareas. El primer nodo con LLM responde los pedidos del panel de operador con un grafo de LangGraph sobre la Responses API de OpenAI.
- **La red cubre sus propios huecos.** Cuando una tarea pasa varias rondas sin que nadie la reclame, un spawner elige del catálogo local de especialidades la entrada más cercana y levanta ese nodo. Si no hay sitio, desaloja el nodo libre que lleva más tiempo sin trabajo.
- **Cada nodo se mide.** Un monitor de red sigue el bus y lleva un perfil de calidad, coste y uso por nodo: cuántas de sus tareas fallan o se reabren, cuánto cuesta cada resolución, cuántas veces gana.
- **Nada corre sin control.** Las imágenes de los nodos se analizan antes de admitirlas, en busca de secretos filtrados y de caracteres ocultos que se usan para prompt injection. Cada llamada externa pasa por una lista de permitidos con reglas, y las sensibles esperan a que una persona las apruebe en el panel. Los secretos viven en un almacén cifrado, y el coste en tokens de cada llamada queda en su traza.
- **Tracing distribuido** con OpenTelemetry y Jaeger, reconstruido desde los eventos del bus, por TLS mutuo con la autoridad de certificación propia de la red.

## Cómo se construye

Primero la especificación: un documento de arquitectura y otro de implementación que justifica la tecnología elegida para cada pieza. El código sigue un plan de doce etapas, y cada etapa termina con una demo que queda como test de punta a punta contra un motor de contenedores real, así que cada etapa vuelve a probar las anteriores.

El desarrollo corre sobre un flujo de trabajo que diseñé: yo defino la especificación y las convenciones, Claude Code implementa cada subetapa, y cada pull request pasa por revisión automática de código y de seguridad, un CI con tests de concurrencia, linters y escaneo de vulnerabilidades, y mi aprobación antes de fusionarse.

## Estado

Desarrollo temprano: unas 52.000 líneas de Go en 68 pull requests, con siete de las doce etapas cerradas. Faltan el reemplazo de nodos por calidad, los presupuestos por traza, los canales de entrada y la Forge, que permitirá a la red crear los nodos que le faltan en vez de solo elegirlos del catálogo. Todavía no hay nada que instalar.
