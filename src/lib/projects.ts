import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n';

export type Project = CollectionEntry<'projects'> & { slug: string };

/** Projects of one language, sorted by `order`. */
export async function getProjects(lang: Lang): Promise<Project[]> {
  const entries = await getCollection('projects', (e) => e.id.startsWith(`${lang}/`));
  return entries
    .map((e) => ({ ...e, slug: e.id.slice(lang.length + 1) }))
    .sort((a, b) => a.data.order - b.data.order);
}
