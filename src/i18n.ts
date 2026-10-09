export type Lang = 'es' | 'en';

export const contact = {
  email: 'rodrigo@viderlab.com',
  linkedin: 'https://www.linkedin.com/in/rodrigo-diaz-velasco',
  github: 'https://github.com/theviderlab',
  cv: '/cv/rodrigo-diaz-velasco-cv.pdf',
};

/** Path to the home page and to a project page, per language. */
export const paths = {
  home: (lang: Lang) => (lang === 'es' ? '/' : '/en/'),
  project: (lang: Lang, slug: string) =>
    lang === 'es' ? `/proyectos/${slug}/` : `/en/projects/${slug}/`,
};

export const ui = {
  es: {
    meta: {
      title: 'Rodrigo Díaz Velasco · Senior AI Engineer',
      description:
        'Senior AI Engineer y líder técnico. Diseño y llevo a producción productos con LLMs, agentes y búsqueda semántica.',
    },
    nav: { work: 'Trabajo', services: 'Qué hago', path: 'Trayectoria', talks: 'Charlas', contact: 'Contacto' },
    switchLang: { label: 'EN', title: 'Read in English' },
    hero: {
      eyebrow: 'Senior AI Engineer · Líder técnico',
      title: ['Software con IA que llega a producción', 'y mueve resultados.'],
      lede:
        'Soy Rodrigo Díaz Velasco. Desde 2021 diseño y construyo productos con LLMs, agentes y búsqueda semántica, trabajando en remoto con clientes de distintos países. Antes, más de quince años en ingeniería, gestión de proyectos y una startup propia.',
      ctaWork: 'Ver trabajo',
      ctaContact: 'Hablemos',
      meta: ['Cáceres, España', 'Remoto o híbrido', 'Español · English'],
      portrait: 'Foto de Rodrigo',
      nowTitle: 'Ahora mismo',
      now: [
        'Construyendo una plataforma de gestión en Laravel + React',
        'Diseñando Zobik, una red de agentes sin controlador central',
        'Charlas de IA en Cáceres Tech',
      ],
    },
    stats: [
      { value: '+50%', label: 'reservas directas en Apartur' },
      { value: '20+', label: 'años entre ingeniería, gestión y producto' },
      { value: '9,28', label: 'nota media del Máster en IA' },
      { value: '7', label: 'países con proyectos entregados' },
    ],
    services: {
      kicker: 'Qué hago',
      title: 'De la idea al sistema en producción, sin perder de vista el negocio.',
      items: [
        {
          title: 'Agentes y LLMs en producción',
          text: 'Pipelines con LLM, RAG y búsqueda semántica que funcionan fuera de la demo: con guardrails, observabilidad y elección de modelo por coste, rendimiento y calidad.',
        },
        {
          title: 'Producto de punta a punta',
          text: 'APIs (FastAPI, Laravel), frontends en React y las integraciones que el negocio necesita: channel managers, pagos, e-commerce y analítica.',
        },
        {
          title: 'Ingeniería que se sostiene',
          text: 'Tests, CI/CD, releases automatizados y un flujo de desarrollo asistido por agentes que permite iterar rápido sin perder calidad.',
        },
        {
          title: 'Liderazgo técnico con mirada de negocio',
          text: 'Veinte años entre ingeniería, proyectos internacionales y una startup propia. Traduzco objetivos de negocio en prioridades técnicas claras.',
        },
      ],
    },
    work: {
      kicker: 'Trabajo seleccionado',
      title: 'Proyectos reales, con usuarios y datos reales.',
      more: 'Ver caso',
      private: 'La mayor parte del código de clientes vive en repositorios privados; con gusto lo recorro en una llamada.',
    },
    path: {
      kicker: 'Trayectoria',
      title: 'Ingeniero, project manager, fundador. Ahora, IA.',
      roles: [
        {
          years: '2021 — hoy',
          role: 'Senior AI Engineer / Technical Lead',
          org: 'Independiente',
          text: 'Productos con IA de punta a punta para clientes de Argentina, México y otros países: de la definición del problema al despliegue.',
        },
        {
          years: '2013 — 2021',
          role: 'Co-founder & Managing Partner',
          org: 'Invagrup · FoodTech',
          text: 'Estrategia, desarrollo de negocio y operaciones. Finalista de NAVES (IAE Business School, 2019) y reconocido en los Premios APSAL (2020).',
        },
        {
          years: '2005 — 2013',
          role: 'Project Manager · Project Engineer',
          org: 'Schneider Electric · ABB · Micro Automation · Telefónica',
          text: 'Proyectos de ingeniería en varios países, con equipos multidisciplinares y reporting a dirección.',
        },
      ],
      eduTitle: 'Formación',
      education: [
        { title: 'Máster en Inteligencia Artificial', org: 'Universidad Internacional de Valencia', detail: '2023 — 2025 · 9,28/10, tres matrículas de honor' },
        { title: 'Ingeniería Electrónica (Mecatrónica)', org: 'Instituto Tecnológico de Buenos Aires', detail: '2000 — 2006' },
        { title: 'MLOps: del experimento a la producción', org: 'Universidad de Extremadura', detail: '2026' },
      ],
    },
    talks: {
      kicker: 'Charlas y comunidad',
      title: 'Explicar la IA también es parte del trabajo.',
      photo: 'Foto de la charla en Cáceres Tech',
      featured: {
        title: '¿Un gato es más inteligente que la IA?',
        meta: 'Cáceres Tech · 21 de mayo de 2026',
        text: 'Los límites de los LLM autorregresivos (memoria estática, falta de planificación, alucinaciones), los niveles de AGI de Google DeepMind y el paso a los modelos del mundo: JEPA y DreamerV3.',
        link: 'Material de la charla',
        href: 'https://github.com/theviderlab/un-gato-es-mas-inteligente-que-la-ia',
      },
      items: [
        { title: 'Cáceres Tech', text: 'Meetup tecnológico mensual en Cáceres. Asistente habitual y ponente.', href: 'https://cacerestech.com/' },
        { title: 'Extremadura Digital Day', text: 'Colaborador del evento tecnológico anual de la región.' },
      ],
    },
    contact: {
      kicker: 'Contacto',
      title: '¿Tienes un proyecto o un rol en mente?',
      text: 'Me interesan los problemas donde la IA tiene que funcionar de verdad, con usuarios y datos reales. Escríbeme y lo hablamos.',
      cv: 'Descargar CV (PDF)',
    },
    project: {
      back: 'Volver',
      role: 'Rol',
      period: 'Período',
      stack: 'Stack',
      link: 'Enlace',
      next: 'Siguiente proyecto',
      gallery: 'Capturas',
    },
    footer: 'Hecho a mano con Astro.',
  },
  en: {
    meta: {
      title: 'Rodrigo Díaz Velasco · Senior AI Engineer',
      description:
        'Senior AI Engineer and technical lead. I design and ship products built on LLMs, agents and semantic search.',
    },
    nav: { work: 'Work', services: 'What I do', path: 'Background', talks: 'Talks', contact: 'Contact' },
    switchLang: { label: 'ES', title: 'Leer en español' },
    hero: {
      eyebrow: 'Senior AI Engineer · Technical Lead',
      title: ['AI software that ships to production', 'and moves the numbers.'],
      lede:
        "I'm Rodrigo Díaz Velasco. Since 2021 I've been designing and building products on LLMs, agents and semantic search, working remotely with clients in several countries. Before that, fifteen-plus years in engineering, project management and my own startup.",
      ctaWork: 'See the work',
      ctaContact: "Let's talk",
      meta: ['Cáceres, Spain', 'Remote or hybrid', 'English · Español'],
      portrait: 'Photo of Rodrigo',
      nowTitle: 'Right now',
      now: [
        'Building a management platform in Laravel + React',
        'Designing Zobik, an agent network with no master controller',
        'Giving AI talks at Cáceres Tech',
      ],
    },
    stats: [
      { value: '+50%', label: 'direct bookings at Apartur' },
      { value: '20+', label: 'years across engineering, management and product' },
      { value: '9.28', label: "GPA, Master's in AI (out of 10)" },
      { value: '7', label: 'countries with delivered projects' },
    ],
    services: {
      kicker: 'What I do',
      title: 'From idea to a system in production, with the business in view.',
      items: [
        {
          title: 'Agents and LLMs in production',
          text: 'LLM pipelines, RAG and semantic search that work beyond the demo: guardrails, observability, and model choice based on cost, performance and quality.',
        },
        {
          title: 'End-to-end product',
          text: 'APIs (FastAPI, Laravel), React frontends and the integrations a business actually needs: channel managers, payments, e-commerce and analytics.',
        },
        {
          title: 'Engineering that lasts',
          text: 'Tests, CI/CD, automated releases and an agent-assisted development workflow that lets me move fast without losing quality.',
        },
        {
          title: 'Technical leadership with business sense',
          text: 'Twenty years across engineering, international projects and my own startup. I turn business goals into clear technical priorities.',
        },
      ],
    },
    work: {
      kicker: 'Selected work',
      title: 'Real projects, with real users and real data.',
      more: 'Read the case',
      private: "Most client code lives in private repositories; I'm happy to walk through it on a call.",
    },
    path: {
      kicker: 'Background',
      title: 'Engineer, project manager, founder. Now, AI.',
      roles: [
        {
          years: '2021 — now',
          role: 'Senior AI Engineer / Technical Lead',
          org: 'Independent',
          text: 'End-to-end AI products for clients in Argentina, Mexico and beyond, from problem definition to deployment.',
        },
        {
          years: '2013 — 2021',
          role: 'Co-founder & Managing Partner',
          org: 'Invagrup · FoodTech',
          text: 'Strategy, business development and operations. NAVES finalist (IAE Business School, 2019) and recognized at the APSAL Awards (2020).',
        },
        {
          years: '2005 — 2013',
          role: 'Project Manager · Project Engineer',
          org: 'Schneider Electric · ABB · Micro Automation · Telefónica',
          text: 'Engineering projects across several countries, with multidisciplinary teams and executive reporting.',
        },
      ],
      eduTitle: 'Education',
      education: [
        { title: "Master's Degree in Artificial Intelligence", org: 'Universidad Internacional de Valencia', detail: '2023 — 2025 · GPA 9.28/10, three honors distinctions' },
        { title: 'Electronic Engineering (Mechatronics)', org: 'Instituto Tecnológico de Buenos Aires', detail: '2000 — 2006' },
        { title: 'MLOps: from experiment to production', org: 'Universidad de Extremadura', detail: '2026' },
      ],
    },
    talks: {
      kicker: 'Talks & community',
      title: 'Explaining AI is part of the job too.',
      photo: 'Photo of the Cáceres Tech talk',
      featured: {
        title: 'Is a cat smarter than AI?',
        meta: 'Cáceres Tech · May 21, 2026 · in Spanish',
        text: 'The limits of autoregressive LLMs (static memory, no planning, hallucinations), Google DeepMind’s levels of AGI, and the move towards world models: JEPA and DreamerV3.',
        link: 'Talk materials',
        href: 'https://github.com/theviderlab/un-gato-es-mas-inteligente-que-la-ia',
      },
      items: [
        { title: 'Cáceres Tech', text: 'Monthly tech meetup in Cáceres. Regular attendee and speaker.', href: 'https://cacerestech.com/' },
        { title: 'Extremadura Digital Day', text: "Collaborator on the region's annual technology event." },
      ],
    },
    contact: {
      kicker: 'Contact',
      title: 'Have a project or a role in mind?',
      text: "I'm drawn to problems where AI has to actually work, with real users and real data. Drop me a line and let's talk.",
      cv: 'Download CV (PDF)',
    },
    project: {
      back: 'Back',
      role: 'Role',
      period: 'Period',
      stack: 'Stack',
      link: 'Link',
      next: 'Next project',
      gallery: 'Screenshots',
    },
    footer: 'Handmade with Astro.',
  },
} as const;
