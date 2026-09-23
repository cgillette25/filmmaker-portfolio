/* Site-wide links and contact details. Change them here, not in the pages. */

export const SITE = {
  name: 'Cohan Co. Productions',
  tagline: 'A production company that helps creators tell their story.',
  youtube: 'https://www.youtube.com/@Cohan.co.productions',
  email: 'cohanco.productions@gmail.com',
};

export interface Person {
  name: string;
  role: string;
  bio: string;
  photo: string;
  tone: 'indigo' | 'orange';
  rotate: number;
}

export const TEAM: Person[] = [
  {
    name: 'Ash Cohan',
    role: 'Founder. Writer, Director, Producer',
    bio: "Ash founded Cohan Co. and writes, directs and produces its films. With a BFA in Screenwriting from Chapman University, Ash's goal is to tell compelling stories in original ways. Having written and directed an eleven episode mini-series and over a dozen short/dance films, she hopes to reach a wide audience with everything she makes.",
    photo: '/collage/ash.jpg',
    tone: 'indigo',
    rotate: -5,
  },
  {
    name: 'Chaz Gillette',
    role: 'Producer',
    bio: 'Chaz produces at Cohan Co. and acts in indie shorts and commercial work. He also builds audience, with over 100 million organic views across his own channels in the past year.',
    photo: '/collage/chaz.jpg',
    tone: 'orange',
    rotate: 4,
  },
];
