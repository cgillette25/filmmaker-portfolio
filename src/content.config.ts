import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const videos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/videos' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['shorts', 'dance', 'verticals']),
    youtubeId: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    featured: z.boolean().optional().default(false),
  }),
});

export const collections = { videos };
