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
      "The number on platform for exploring haunted locations. Explore over 10,000 locations across the United States, share spooky stories, and compete to visit the most haunted locations.",
    screenshot: "/cryptid-coordinates/preview1.png",
    learnMoreHREF: "/projects/cryptid-coordinates",
  },
  {
    details: projectDetails[1],
    description:
      "The future of shopping is here. Shop, sell, and preview items for sale in augmented reality. Find listings near you and scan items using object capture to create listings.",
    screenshot: "/reality-market/preview1.png",
    learnMoreHREF: "/projects/reality-market",
  },
  {
    details: projectDetails[2],
    description:
      "Browse and search for asteroids. Each asteroid includes its extensive history and orbital data.",
    screenshot: "/asteroid-vision/preview1.png",
    learnMoreHREF: "/projects/asteroid-vision",
  },
];
