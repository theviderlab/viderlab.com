import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// One markdown file per project and language: src/content/projects/<lang>/<slug>.md
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    kicker: z.string(),
    summary: z.string(),
    order: z.number(),
    size: z.enum(['large', 'small']).default('large'),
    status: z.string().optional(),
    role: z.string(),
    period: z.coerce.string(),
    stack: z.array(z.string()),
    outcome: z.object({ value: z.string(), label: z.string() }).optional(),
    link: z.object({ href: z.string(), label: z.string() }).optional(),
    // Screenshot slots: `src` is a path under src/assets/shots/ without extension.
    // The first one is the cover used on the home page.
    shots: z.array(z.object({ src: z.string(), label: z.string() })),
  }),
});

export const collections = { projects };
