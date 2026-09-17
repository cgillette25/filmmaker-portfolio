import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const videos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/videos' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['shorts', 'dance', 'verticals', 'series']),
    youtubeId: z.string(),
    /** optional: leave it out rather than guess a release date */
    date: z.coerce.date().optional(),
    description: z.string().optional(),
    featured: z.boolean().optional().default(false),
    /** small tag on the card, e.g. LATEST */
    badge: z.string().optional(),
    /** lower numbers sort first within a category; falls back to date */
    order: z.number().optional(),
    /** episodes only: which series this belongs to, and its number */
    series: z.string().optional(),
    episode: z.number().optional(),
  }),
});

export const collections = { videos };
