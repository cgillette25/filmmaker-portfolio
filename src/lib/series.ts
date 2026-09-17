/* Mini-series. An episode references one of these by id, and the series page
   groups its episodes under this title and logline. */

export interface Series {
  id: string;
  title: string;
  blurb: string;
}

export const SERIES: Series[] = [
  {
    id: 'oops-we-elected-a-dictator',
    title: 'Ooops! We Elected a Dictator!!',
    blurb:
      'This vertical political sitcom satire follows a young married couple who goes back in time to change the outcome of the election after their world gets turned upside down.',
  },
];

export const seriesById = (id?: string) => SERIES.find((s) => s.id === id);
