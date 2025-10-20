export type Screenshot = {
  src: string;
  caption: string;
};

export type ProjectDetails = {
  title: string;
  appIconSrc: string;
  appIconTailwind: string;
  githubHREF?: string;
  skills: string[];
  screenshots: Screenshot[];
};

export const projectDetails: ProjectDetails[] = [
  {
    title: "Cryptid Coordinates",
    appIconSrc: "/cryptid-coordinates/ghostBlack.svg",
    appIconTailwind: "w-24 h-24 rounded-2xl flex justify-center items-center object-cover shadow-md p-2",
    skills: ["SwiftUI", "SwiftData", "MapKit"],
    screenshots: [
      {
        src: "/cryptid-coordinates/preview1.png",
        caption: "Explore haunted locations",
      },
      {
        src: "/cryptid-coordinates/preview2.png",
        caption: "Share experiences",
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
        caption: "Add new locations",
      },
    ],
  },
  {
    title: "Reality Market",
    appIconSrc: "/reality-market/reality-market-app-logo.svg",
    appIconTailwind: "w-24 h-24 rounded-2xl flex justify-center items-center object-cover shadow-md",
    skills: ["SwiftUI", "Vapor", "ARKit", "PostgreSQL"],
    screenshots: [
      {
        src: "/reality-market/preview1.png",
        caption: "Shop 3D Models",
      },
      {
        src: "/reality-market/preview2.png",
        caption: "Scan items using object capture",
      },
      {
        src: "/reality-market/preview3.png",
        caption: "Preview listings with augmented reality",
      },
      {
        src: "/reality-market/preview4.png",
        caption: "View listings details",
      },
      {
        src: "/reality-market/preview5.png",
        caption: "Manage your listings",
      },
    ],
  },
  {
    title: "Asteroid Vision",
    appIconSrc: "/asteroid-vision/asteroid-vision-app-logo.png",
    appIconTailwind: "w-24 h-24 rounded-2xl flex justify-center items-center object-cover shadow-md",
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
