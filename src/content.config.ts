import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/* The CMS writes `null` (or an empty string) into optional fields that were left
   blank, rather than omitting them. Zod's .optional() only accepts `undefined`,
   so every optional field goes through this and treats blank as "not set". */
const blankable = <T extends z.ZodTypeAny>(schema: T) =>
  z.preprocess((v) => (v === null || v === '' ? undefined : v), schema.optional());

const videos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/videos' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['shorts', 'dance', 'verticals', 'series']),
    youtubeId: z.string(),
    /** optional: leave it out rather than guess a release date */
    date: blankable(z.coerce.date()),
    description: blankable(z.string()),
    /** a blank checkbox can arrive as null too */
    featured: z.preprocess((v) => v ?? false, z.boolean()),
    /** small tag on the card, e.g. LATEST */
    badge: blankable(z.string()),
    /** lower numbers sort first within a category; falls back to date */
    order: blankable(z.number()),
    /** episodes only: which series this belongs to, and its number */
    series: blankable(z.string()),
    episode: blankable(z.number()),
  }),
});

const series = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/series' }),
  schema: z.object({
    title: z.string(),
    blurb: blankable(z.string()),
    order: blankable(z.number()),
  }),
});

export const collections = { videos, series };
