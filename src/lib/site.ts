/* Site-wide links and contact details. Change them here, not in the pages. */

export const SITE = {
  name: 'Cohan Co. Productions',
  tagline: 'A production company that helps creators tell their story.',
  youtube: 'https://www.youtube.com/@Cohan.co.productions',
  email: 'hello@cohanco.com',
};

export interface Person {
  name: string;
  role: string;
  bio: string;
  tone: 'indigo' | 'orange';
  rotate: number;
}

export const TEAM: Person[] = [
  {
    name: 'Ash Cohan',
    role: 'Founder. Writer, Director, Producer',
    bio: 'Ash founded Cohan Co. and writes, directs and produces its films. She graduated from Chapman University with a screenwriting major, and connects artists and teams to tell the stories they want to tell.',
    tone: 'indigo',
    rotate: -5,
  },
  {
    name: 'Chaz Gillette',
    role: 'Producer',
    bio: 'Chaz produces at Cohan Co. and acts in indie shorts and commercial work. He also builds audience, with over 100 million organic views across his own channels in the past year.',
    tone: 'orange',
    rotate: 4,
  },
];
