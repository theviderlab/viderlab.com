---
title: Un agente que recupera ingresos no facturados y no escribe nada sin tu aprobación
kicker: Revenue Leakage Agent · Agentes de IA
summary: Un agente conversacional que compara contratos con facturas, explica qué se facturó mal y propone correcciones. Un detector determinista hace las cuentas, el LLM las explica y cada escritura se detiene en una tarjeta de aprobación. Una demo funcional con datos sintéticos.
order: 7
size: small
status: Demo open source
role: Diseño y desarrollo (proyecto de portfolio)
period: Nov 2026
stack: [LangGraph, LangChain, Claude, OpenRouter, Python, FastAPI, Pydantic, SQLite, React, TypeScript, Tailwind, pytest, Vitest, Playwright, Bruno, GitHub Actions]
outcome: { value: '0', label: 'escrituras sin aprobación humana' }
link: { href: 'https://github.com/theviderlab/revenue-leakage-agent', label: 'Repositorio en GitHub (MIT)' }
shots:
  - { src: revenue-leakage-agent/cover, label: 'El agente propone una factura de recuperación y espera la aprobación' }
---

## El problema

Un contrato de suscripción dice qué hay que facturar y cuándo. Los sistemas de facturación se desvían: se salta un mes, una factura sale en otra moneda, un contrato se modifica a mitad de trimestre y nadie actualiza el calendario. La diferencia entre lo que prometen los contratos y lo que se facturó es la fuga de ingresos (*revenue leakage*). Encontrarla exige conciliar cada contrato con cada factura, período a período.

Un LLM explica bien ese tipo de análisis, pero no hace las cuentas de forma fiable. Y un agente que emite facturas necesita un freno firme antes de tocar la contabilidad.

## La idea central

Repartir el trabajo: **el código calcula, el LLM explica y una persona aprueba.**

- **Un detector determinista** (sin LLM) lista cada período esperado de cada contrato como correcto, faltante, facturado de menos o de más, neto de notas de crédito y en la moneda del contrato. Lo que no puede ubicar va a un residuo explícito en vez de adivinarse.
- **El LLM** llama al detector como herramienta, explica los resultados en lenguaje claro y marca las hipótesis como hipótesis. Nunca calcula un importe.
- **Cada corrección** (factura de recuperación, nota de crédito, modificación de contrato) se valida contra el detector y se detiene en una tarjeta de aprobación. Un "sí" escrito en el chat no es una aprobación.

## Cómo funciona

1. **Investigar:** *"Revisa todos los contratos en busca de fugas de ingresos."* El agente ejecuta el detector y resume lo que encontró.
2. **Proponer:** *"Propón una factura de recuperación para febrero en PLN-1001."* La propuesta se contrasta con los resultados: el agente no puede proponer una corrección para un período que no falta.
3. **Aprobar:** la tarjeta muestra el importe y la evidencia. Solo el botón Aprobar escribe.
4. **Verificar o deshacer:** las acciones aprobadas van a un sandbox de solo escritura al final, con registro de auditoría. Al repetir la revisión el período aparece resuelto, y deshacer marca la acción como revertida en vez de borrarla.

## Decisiones de diseño

- **La aprobación humana vive en el grafo, no en el prompt.** Un `interrupt()` de LangGraph detiene cada escritura y cada reversión. La aprobación lleva el id de su interrupción, así que una tarjeta vieja o repetida no puede aprobar nada.
- **El estado lo escriben solo las herramientas.** El contrato activo, los resultados y las propuestas son hechos que registran las herramientas, nunca se extraen del texto del LLM. Un checkpointer en SQLite mantiene viva una aprobación pendiente aunque se reinicie el servidor.
- **Los supuestos que los datos no deciden son explícitos.** La fecha de corte, el calendario de períodos o cómo se prorratea una modificación se configuran en un panel que solo cambia el usuario. Si un supuesto cambia el resultado de un contrato, su confianza baja y no admite propuestas.
- **Búsqueda por clave, no por similitud.** Los registros y los conceptos del dominio tienen nombres exactos, así que el agente los busca por clave en lugar de usar embeddings.
- **Cada decisión, por escrito.** Cuarenta decisiones de diseño, cada una con las alternativas descartadas y por qué.

## Calidad

Cada capa de tests comprueba algo que las demás no: pytest para el detector contra una tabla de resultados esperados y para el grafo con un LLM guionado, Vitest para la interfaz, una colección de Bruno con 51 peticiones por HTTP real, un test end-to-end con Playwright del flujo de aprobación y evals contra el modelo real que comprueban qué herramientas se llamaron, nunca la redacción. Tres jobs de CI en GitHub Actions.

## Probarlo

Un backend simulado con una conversación guionada levanta toda la interfaz sin clave de API:

```sh
git clone https://github.com/theviderlab/revenue-leakage-agent.git
cd revenue-leakage-agent
make install
make dev AGENT_BACKEND=mock
```

Con cualquier endpoint compatible con OpenAI (se desarrolló con Claude Sonnet vía OpenRouter), copia `.env.example` a `.env`, pon la clave y ejecuta `make dev`. Los detalles están en el [README del repositorio](https://github.com/theviderlab/revenue-leakage-agent#readme).
