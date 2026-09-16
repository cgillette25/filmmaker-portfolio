/* One place that defines the three categories: the URL slug, the label shown
   in the nav and headings, the blurb, and which accent colour it carries. */

export type CategoryId = 'shorts' | 'dance' | 'verticals';

export interface Category {
  id: CategoryId;
  label: string;
  blurb: string;
  dot: string;
}

export const CATEGORIES: Category[] = [
  {
    id: 'shorts',
    label: 'Short Films',
    blurb: 'Narrative work, from one-minute jokes to festival cuts.',
    dot: 'var(--orange)',
  },
  {
    id: 'dance',
    label: 'Dance Films',
    blurb: 'Movement pieces made with choreographers and companies.',
    dot: 'var(--indigo)',
  },
  {
    id: 'verticals',
    label: 'Verticals',
    blurb: 'Short-form built for the phone, made to be watched twice.',
    dot: 'var(--cream)',
  },
];

export const categoryLabel = (id: CategoryId) =>
  CATEGORIES.find((c) => c.id === id)?.label ?? id;
