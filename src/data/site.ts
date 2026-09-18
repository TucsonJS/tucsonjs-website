// Edit this file to update event details, links, and copy shown on the site.
// No CMS or API involved — this is the single source of truth for site content.

export interface SiteInfo {
  name: string;
  tagline: string;
  description: string;
}

export interface MeetupEvent {
  title: string;
  // Leave date/time as null until they're known — the event card skips
  // that line and shows a placeholder instead.
  date: string | null; // e.g. 'Thursday, October 16, 2025'
  time: string | null; // e.g. '6:00 PM – 8:00 PM MST'
  location: string;
  lumaUrl: string;
}

export interface SiteLinks {
  luma: string;
  discord: string;
  github: string;
  codeOfConduct: string;
}

export interface Sponsor {
  name: string;
  url: string;
  logo?: string;
}

export const site: SiteInfo = {
  name: 'TucsonJS',
  tagline: 'A welcoming community for web developers in Tucson, AZ.',
  description:
    'TucsonJS is dedicated to fostering a welcoming, inclusive, and uplifting community in Tucson, AZ (and surrounding areas) where web developers of all skill levels can come together to find community, professionally network, share knowledge, and grow.',
};

// One entry per upcoming meetup, soonest first. The site shows the first
// entry as the featured "Next Event" and lists any others below it.
export const events: MeetupEvent[] = [
  {
    title: 'TucsonJS Monthly Meetup',
    date: null,
    time: null,
    location: '1510 E University Blvd, Tucson, AZ',
    lumaUrl: 'https://luma.com/tucsonjs',
  },
];

export const cadence: string = 'Monthly, on the third Thursday';

export const links: SiteLinks = {
  luma: 'https://luma.com/tucsonjs',
  discord: 'https://discord.gg/genM8dKvgt',
  github: 'https://github.com/TucsonJS',
  codeOfConduct:
    'https://github.com/TucsonJS/.github/blob/main/profile/CONDUCT.md',
};

export const codeOfConductSummary: string =
  'TucsonJS is dedicated to providing a safe and comfortable environment for everyone, regardless of race, gender, sexual orientation, disability, physical appearance, body size, religion, or age. Harassment of any kind isn’t tolerated at our events or in our online spaces.';

export const sponsors: Sponsor[] = [];
