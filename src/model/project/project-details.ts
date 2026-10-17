export interface Screenshot {
  src: string;
  caption: string;
}

export interface ProjectDetails {
  slug: string;
  title: string;
  /** Omit to run the project detail page without an icon (e.g. Music Tagger). */
  appIconSrc?: string;
  /** Padding tuned per artwork: glyphs need room, full app icons fill the tile. */
  iconClassName?: string;
  githubHREF?: string;
  skills: string[];
  screenshots: Screenshot[];
  /** Wrap raw app captures in a CSS phone frame; leave off for pre-framed art. */
  deviceFrame?: boolean;
}

export const projectDetails: ProjectDetails[] = [
  {
    slug: "afterdark",
    title: "Afterdark",
    appIconSrc: "/afterdark/ghostBlack.svg",
    iconClassName: "p-2",
    skills: ["SwiftUI", "SwiftData", "Foundation Models", "Supabase"],
    deviceFrame: true,
    screenshots: [
      { src: "/afterdark/01-map.png", caption: "Haunted locations on the map" },
      { src: "/afterdark/02-story.png", caption: "Read the story behind each haunt" },
      { src: "/afterdark/03-explore.png", caption: "Explore nearby and new locations" },
      {
        src: "/afterdark/04-haunted-notifications.png",
        caption: "Get notified near a haunted location",
      },
      { src: "/afterdark/05-road-trip.png", caption: "Plan haunted road trips" },
      { src: "/afterdark/06-social.png", caption: "Climb the community leaderboards" },
    ],
  },
  // Reality Market commented out - see project.ts and project-preview.ts
  // {
  //   slug: "reality-market",
  //   title: "Reality Market",
  //   appIconSrc: "/reality-market/reality-market-app-logo.svg",
  //   iconClassName: "",
  //   skills: ["SwiftUI", "Vapor", "ARKit", "PostgreSQL"],
  //   screenshots: [
  //     {
  //       src: "/reality-market/preview1.png",
  //       caption: "Shop 3D Models",
  //     },
  //     {
  //       src: "/reality-market/preview2.png",
  //       caption: "Scan items using object capture",
  //     },
  //     {
  //       src: "/reality-market/preview3.png",
  //       caption: "Preview listings with augmented reality",
  //     },
  //     {
  //       src: "/reality-market/preview4.png",
  //       caption: "View listing details",
  //     },
  //     {
  //       src: "/reality-market/preview5.png",
  //       caption: "Manage your listings",
  //     },
  //   ],
  // },
  {
    slug: "music-tagger",
    title: "Music Tagger",
    skills: ["Swift", "AVFoundation"],
    githubHREF: "https://github.com/noahgiboney/music-tagger",
    screenshots: [],
  },
  {
    slug: "asteroid-vision",
    title: "Asteroid Vision",
    appIconSrc: "/asteroid-vision/asteroid-vision-app-logo.png",
    iconClassName: "",
    githubHREF: "https://github.com/noahgiboney/asteroid-vision",
    skills: ["SwiftUI", "MVVM", "SceneKit"],
    screenshots: [
      {
        src: "/asteroid-vision/preview1.png",
        caption: "Browse Hazardous Asteroids",
      },
      {
        src: "/asteroid-vision/preview2.png",
        caption: "Asteroid History and Orbital Data",
      },
      { src: "/asteroid-vision/preview3.png", caption: "Control Units" },
    ],
  },
];
