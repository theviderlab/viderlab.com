---
title: Un agente que adapta el CV a cada oferta sin inventar nada
kicker: tailored-cv · Open source · Agentes de IA
summary: Skills para Claude Code y OpenCode que adaptan el CV y la carta de presentación a cada oferta y generan PDFs optimizados para ATS. Parten de un perfil profesional que crece con el uso. También graban y transcriben entrevistas en local para preparar la siguiente.
order: 6
size: small
status: Open source
role: Diseño y desarrollo (proyecto personal)
period: Sep 2026 — hoy
stack: [Claude Code, OpenCode, Agent skills, Markdown, Node.js, Chrome headless, Python, Whisper, uv]
outcome: { value: '100%', label: 'local para el audio de entrevistas' }
link: { href: 'https://github.com/theviderlab/tailored-cv', label: 'Repositorio en GitHub' }
shots:
  - { src: tailored-cv/cover, label: 'Oferta y CV adaptado en PDF' }
  - { src: tailored-cv/questions, label: 'El agente pregunta lo que falta en el perfil' }
  - { src: tailored-cv/prep, label: 'Hoja de preparación de una entrevista' }
---

## El problema

Adaptar el CV a cada oferta lleva tiempo y, si no se hace, los filtros ATS descartan la candidatura antes de que la lea una persona. Pedírselo a un LLM genérico tiene otro problema: rellena los huecos inventando experiencia que no tienes.

## La idea central

Un **perfil profesional que crece con el uso** y funciona como fuente de verdad. Cuando una oferta pide algo que no está registrado, el agente te pregunta, guarda la respuesta con su origen y fecha, y la reutiliza en las siguientes candidaturas. Cada dato del CV sale del perfil o de algo que confirmaste. Lo que dijiste que no sabes queda anotado para que no vuelva a preguntarlo.

## Cómo funciona

1. **Lee la oferta** desde el enlace o el texto pegado.
2. **La contrasta con tu perfil** y clasifica cada requisito: ya registrado, carencia conocida o desconocido.
3. **Te pregunta lo que no está claro** en un solo mensaje y guarda las respuestas en el perfil.
4. **Escribe el CV y la carta adaptados**, te muestra qué cambió y de dónde sale cada dato, y genera los PDFs cuando los apruebas.
5. **Registra la candidatura** y te avisa si ya postulaste a esa empresa.

## Qué incluye

- **cv-tailor:** adapta el CV y la carta a una oferta y genera los PDFs.
- **profile-audit:** revisa el perfil contra buenas prácticas ATS (fechas sin mes, logros sin métricas, siglas sin desarrollar) y te pregunta lo necesario para corregirlo.
- **interview:** graba la entrevista (micrófono y audio de la llamada en pistas separadas), la transcribe en tu equipo con Whisper y revisa tus respuestas. Alimenta un **banco de preguntas** agrupadas por lo que evalúan, con el historial de cómo respondiste cada una. Con `/interview prep` estima qué preguntas son más probables para ese puesto y etapa, y pone primero las que peor respondes.
- **Build de Markdown a PDF** con Node y Chrome o Edge en modo headless: una columna, texto seleccionable, sin tablas ni imágenes que confundan al ATS.

## Decisiones de diseño

- **Skills en lugar de una aplicación.** La lógica son instrucciones para el agente y los datos son archivos Markdown. No hay base de datos ni interfaz que mantener, y el perfil se puede leer y editar a mano.
- **Privacidad por diseño.** El audio de las entrevistas nunca sale del equipo: solo la transcripción llega al modelo. Tus datos viven en `workspace/`, fuera del repositorio, y se pueden versionar en un repo privado aparte.
- **Red de seguridad contra fugas.** Un hook de pre-commit bloquea cualquier commit al repo de la herramienta que incluya archivos del workspace o texto que coincida con tus datos personales.
- **Multilenguaje.** El agente te habla en tu idioma, el perfil se guarda en inglés y el CV sigue el idioma de la oferta. Los encabezados de los PDFs salen de un archivo de traducciones ampliable.

## Empezar

Requisitos: Node 18+ y Chrome o Edge.

```sh
git clone https://github.com/theviderlab/tailored-cv.git
cd tailored-cv
cp -r workspace.example workspace
cd cv && npm install
```

Abre el proyecto con Claude Code y pídele *"crea mi perfil a partir de este CV"* pegando tu CV, o directamente:

```
/cv-tailor https://www.linkedin.com/jobs/view/1234567890
```

La grabación de entrevistas es opcional, funciona en Windows y requiere [uv](https://docs.astral.sh/uv/). Los detalles están en el [README del repositorio](https://github.com/theviderlab/tailored-cv#readme).
