import { ProjectDetails } from "./project-details";
import { projectDetails } from "./project-details";

export type ProjectPreview = {
  details: ProjectDetails;
  description: string;
  screenshot: string;
  learnMoreHREF: string;
};

export const projectPreviews: ProjectPreview[] = [
  {
    details: projectDetails[0],
    description:
      "Reality market is the marketplace of the future. Shop, sell, and preview items for sale in augmented reality. Find listings near you and scan items using object capture to create listings.",
    screenshot: "/reality-market/preview1.png",
    learnMoreHREF: "/projects/reality-market",
  },
  {
    details: projectDetails[1],
    description:
      "Cryptid Coordinates is a platform for exploring haunted locations. Explore over 10,000 locations across the United States, share spooky stories, and compete to visit the most haunted locations.",
    screenshot: "/cryptid-coordinates/preview1.png",
    learnMoreHREF: "/projects/cryptid-coordinates",
  },
  {
    details: projectDetails[2],
    description:
      "Asteroid Vision is an iOS app for searching and browsing asteroids. Each asteroid includes its extensive history and orbital data.",
    screenshot: "/asteroid-vision/preview1.png",
    learnMoreHREF: "/projects/asteroid-vision",
  },
];
