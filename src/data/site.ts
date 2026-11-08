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
  // Calendar day of the event, 'YYYY-MM-DD'. Used to drop the event from
  // the page the day after it happens. Leave null while the date is TBD
  // so the event keeps showing.
  isoDate: string | null;
  location: string;
  // Leave null until the Luma event is created — the card hides the
  // RSVP button until then.
  lumaUrl: string | null;
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
    title: 'TucsonJS November Meetup',
    date: 'Thursday, November 19th',
    time: '5:00 pm - 9:00 pm',
    isoDate: '2026-11-19',
    location: '1510 E University Blvd, Tucson, AZ',
    lumaUrl: null,
  },
  {
    title: 'TucsonJS December Meetup',
    date: 'Thursday, December 17th',
    time: 'TBD',
    isoDate: '2026-12-17',
    location: '1510 E University Blvd, Tucson, AZ',
    lumaUrl: null,
  },
];

export const cadence: string = 'Monthly, (usually) on the third Thursday';

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
