export type ProjectPreview = {
  title: string;
  description: string;
  appIconSrc: string;
  learnMoreHREF: string;
  skills: string[];
  screenshot: string;
};

export type Project = {
  title: string;
  intro: string;
  skills: string[];
  appStoreHREF: string;
  githubHREF?: string;
  appIconSrc: string;
  screenshots: string[];
};

const projectPreviews: ProjectPreview[] = [
  {
    title: "Cryptid Coordinates",
    description:
      "Cryptid Coordinates is platform for exploring haunted locations. Explore over 10,000 locations across the United State, share spooky stories, and compete to visit the most haunted locations. Learn more below and check it out on the app store.",
    appIconSrc: "/cryptid-coordinates/cryptid-coordinates-app-logo.svg",
    learnMoreHREF: "/projects/cryptid-coordinates",
    skills: ["SwiftUI", "Firebase", "SwiftData", "MapKit"],
    screenshot: "/cryptid-coordinates/preview1.png",

  },
  {
    title: "Asteroid Vision",
    description:
      "Asteroid Vision is an iOS app for searching and browsing asteroids. Each asteroid includes its extensive history and orbital data.",
    appIconSrc: "/asteroid-vision/asteroid-vision-app-logo.png",
    learnMoreHREF: "/projects/asteroid-vision",
    skills: ["SwiftUI", "MVVM", "Swift Concurrency"],
    screenshot: "/asteroid-vision/preview1.png",
  },
];

export default projectPreviews;
