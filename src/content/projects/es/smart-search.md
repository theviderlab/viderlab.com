---
title: Búsqueda semántica para e-commerce
kicker: Smart Search · E-commerce · IA aplicada
summary: Una plataforma de búsqueda que entiende lo que el cliente quiere decir. Un pipeline con LLM procesa el catálogo y las búsquedas en lenguaje natural se convierten en filtros estructurados.
order: 2
role: Dirección técnica de un equipo de dos desarrolladores; frontend completo
period: Dic 2025 — Jul 2026
stack: [Python, FastAPI, LangChain, OpenRouter, OpenAI embeddings, Pinecone, LangSmith, React, TypeScript, PostgreSQL, WooCommerce]
link: { href: 'https://theviderlab.github.io/smart-search-project', label: 'Página del proyecto' }
shots:
  - { src: smart-search/cover, label: 'Búsqueda en lenguaje natural' }
  - { src: smart-search/dashboard, label: 'Dashboard: métricas del pipeline' }
  - { src: smart-search/taxonomies, label: 'Aprobación de taxonomías' }
---

## El reto

La búsqueda por palabras clave falla justo cuando el cliente describe lo que necesita en vez de nombrar el producto. El objetivo era una búsqueda que entendiera la intención y respetara las restricciones concretas (precio, categoría, atributos) sin inventar resultados.

## Qué construimos

- **Pipeline de contenido en cinco etapas:** descubrimiento de URLs, parsing de HTML a JSON estructurado, resúmenes con LLM, indexación de vectores en Pinecone y búsqueda.
- **Buscador híbrido:** similitud vectorial más mejora de la consulta con LLM y extracción de filtros estructurados desde el lenguaje natural, combinados con filtros en base de datos. Todo asíncrono y con fallbacks ante errores.
- **Taxonomías con supervisión humana:** el LLM propone una clasificación jerárquica del catálogo y una persona la aprueba antes de publicarla.
- **Independiente del modelo:** OpenRouter como gateway, así que cambiar de proveedor es cambiar la configuración. Trazas en LangSmith.
- **Dashboard de administración** en React y TypeScript: cuentas, métricas del pipeline, búsqueda interactiva y aprobación de taxonomías.
- **Plugin para WooCommerce:** búsqueda semántica sobre el catálogo de la tienda, con indexación en segundo plano cada vez que cambia un producto.

## Calidad

API en FastAPI con OpenAPI autogenerado y errores estándar (RFC 7807), unos 126 archivos de tests con pytest, más de 50 endpoints cubiertos con tests de API y monitorización con Sentry.
