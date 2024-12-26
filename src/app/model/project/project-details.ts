export type Screenshot = {
  src: string;
  caption: string;
};

export type ProjectDetails = {
  title: string;
  appIconSrc: string;
  githubHREF?: string;
  skills: string[];
  screenshots: Screenshot[];
};

export const projectDetails: ProjectDetails[] = [
  {
    title: "Cryptid Coordinates",
    appIconSrc: "/cryptid-coordinates/cryptid-coordinates-app-logo.svg",
    githubHREF: "https://github.com/noahgiboney/cryptid-coordinates",
    skills: ["SwiftUI", "Firebase", "SwiftData", "MapKit"],
    screenshots: [
      {
        src: "/cryptid-coordinates/preview1.png",
        caption: "Explore Haunted Locations",
      },
      {
        src: "/cryptid-coordinates/preview2.png",
        caption: "History of location with personal stories from users",
      },
      {
        src: "/cryptid-coordinates/preview3.png",
        caption: "View locations on the map",
      },
      {
        src: "/cryptid-coordinates/preview4.png",
        caption: "Visit locations to detect paranormal activity",
      },
      {
        src: "/cryptid-coordinates/preview5.png",
        caption: "Compete on the leadeboard of visiting haunted locations",
      },
      {
        src: "/cryptid-coordinates/preview6.png",
        caption: "Customizable Profile. Pick out a name and avatar",
      },
    ],
  },
  {
    title: "Asteroid Vision",
    appIconSrc: "/asteroid-vision/asteroid-vision-app-logo.png",
    githubHREF: "https://github.com/noahgiboney/asteroid-vision",
    skills: ["SwiftUI", "MVVM", "Swift Concurrency", "SceneKit"],
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
