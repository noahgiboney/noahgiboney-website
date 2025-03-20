import { ProjectDetails, projectDetails } from "./project-details";

export type Project = {
  details: ProjectDetails;
  intro: string;
  sections: ProjectSection[];
  appstoreHREF: string;
};

export type ProjectSection = {
  title: string;
  content: string;
};

export const projects: Project[] = [
  {
    details: projectDetails[0],
    intro:
      "For my senior capstone project at Cal Poly, I developed the Reality Market. The goal of this app was to create a unique marketplace while learning and applying good software devleopment practices along the way. The Reality Market allows users to transform everyday items into detailed 3D models, which can then be listed on the marketplace. Sellers can manage their listings by editing, deleting, or organizing them into categories. The app also allows users to save their favorite listings for later viewing. The main shopping feed consists of robust search functionality, sorting options, and filters to help users discover exactly what they’re looking for efficiently.",
    appstoreHREF:
      "https://apps.apple.com/us/app/reality-market/id6478195420",
    sections: [
      {
        title: "Augmented Reality",
        content:
          "What makes the Reality Market unique is the incorperation of augmented reality within the shopping and selling experience. Users are able to scan their items into 3D models. This was made possbile by utalizing the object capture sample project provided made by apple. This flow returns a 3D Model in USDZ format, which then gets sent to storage. In order to scan an item, users will need to have a phone with LiDAR hardware. This is found only on pro models of the iPhone. Shoppers are also to view items in AR, in their own space. This is made possible by using apples quick look preivew view.",
      },
      {
        title: "Using Vapor",
        content:
          "Using vapor to build the apps backend was a great experince. Using swift on the front-end and the sever was a great experience and I felt it kept the codebases very consistent and clean. I also used the Fluent ORM to interact with the postgres database. ",
      },
    ],
  },
  {
    details: projectDetails[1],
    intro:
      "Asteroid Visison is an iOS app to browse browse and filter asteroids. This was made possible by the NASA NEO Objects REST API. Users can explore orbital data and build a list of favorites.",
    appstoreHREF: "https://apps.apple.com/us/app/asteroid-vision/id6480248381",
    sections: [
      {
        title: "Architecture",
        content:
          "I built this app following the MVVM pattern. I had an API service that was responsible for fetching the asteroids. For this service, I used URLSession and modern swift concurrency, using things like async await and group tasks. The API service fetched the JSON objects and returned it the viewmodel, which perfomred the buisness logic and provided the view the data for the user interface.",
      },
      {
        title: "Using Observation",
        content:
          "Users can change their unit preference in the unit control center. This was handled by storing an observerable object in the environment and passing this a bindable to the control center, so that one source of truth is maintained. Users unit selection are also stored in UserDefaults.",
      },
    ],
  },
];
