export type WorkItem = {
  company: string;
  role: string;
  detail: string;
  companyURL: string;
  image: string
  dates: string;

};

export const WorkItems: WorkItem[] = [
    {
        company: "Hewlett Packard Enterprise",
        role: "Systems Software Test Engineer",
        detail: "Systems ",
        companyURL: "https://www.hpe.com/us/en/home.html",
        image: "/public/work/hpe.svg",
        dates: "July 2025 - Present"
    },
    {
      company: "Hewlett Packard Enterprise",
      role: "iOS Software Engineer",
      detail: "",
      companyURL: "https://www.hpe.com/us/en/home.html",
      image: "https://www.purpletie.com/",
      dates: "Feb 2025 - June 2025"
  }
]
