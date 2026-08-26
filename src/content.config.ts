import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const videos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/videos' }),
  schema: z.object({
    title: z.string(),
    youtubeId: z.string(),
    category: z.enum(['verticals', 'shorts', 'dance']),
    date: z.coerce.date(),
    description: z.string().optional(),
  }),
});

export const collections = { videos };
