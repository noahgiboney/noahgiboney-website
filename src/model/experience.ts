export interface ExperienceItem {
  org: string;
  role: string;
  dates: string;
  /** Omit for entries with nowhere to link out to; the row renders inert. */
  url?: string;
  logo: string;
  /** Extra padding differs per logo artwork, so each entry tunes its own. */
  logoClassName?: string;
}

export const workItems: ExperienceItem[] = [
  {
    org: 'Hewlett Packard Enterprise',
    role: 'HPC Software Engineer',
    dates: '2025 — Present',
    url: 'https://www.hpe.com/us/en/home.html',
    logo: '/work/hpe.svg',
    logoClassName: 'p-2',
  },
  {
    org: 'NMG Systems',
    role: 'Founder',
    dates: '2026 — Present',
    logo: '/brand/nmg-mark-on-light.svg',
    logoClassName: 'p-1.5',
  },
  {
    org: 'Purple Tie',
    role: 'iOS Software Engineer',
    dates: '2025',
    url: 'https://www.purpletie.com/',
    logo: '/work/purpletie.svg',
    logoClassName: 'p-1.5',
  },
];

export const educationItems: ExperienceItem[] = [
  {
    org: 'Cal Poly, San Luis Obispo',
    role: 'B.S. Computer Science',
    dates: '2025',
    url: 'https://www.calpoly.edu/major/computer-science',
    logo: '/slo-logo.svg',
    logoClassName: 'p-1.5',
  },
];
