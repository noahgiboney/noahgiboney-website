export interface WorkItem {
  company: string;
  role: string;
  detail: string;
  companyURL: string;
  image: string;
  dates: string;
}

export const workItems: WorkItem[] = [
  {
    company: "Hewlett Packard Enterprise",
    role: "Systems Software Test Engineer",
    detail: "System software test for high-performance computing.",
    companyURL: "https://www.hpe.com/us/en/home.html",
    image: "/work/hpe.svg",
    dates: "July 2025 - Present",
  },
  {
    company: "Purple Tie",
    role: "iOS Software Engineer",
    detail: "Built and refined mobile app experiences.",
    companyURL: "https://www.purpletie.com/",
    image: "/work/purpletie.svg",
    dates: "Feb 2025 - June 2025",
  },
];
