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
      "Discover Haunted Locations: Browse a list of over ten thousand haunted spots across the United States, each with detailed information and spine-chilling stories told by other users. Visit & Compete: Track the locations you've visited and climb the leaderboard. Challenge your friends and see who can visit the most haunted sites. Explore Nearby: Find haunted locations near you with the app's location-based search and share your ghost hunting experience. Interactive Map: View and navigate to haunted places with an easy-to-use map interface, allowing your exploration to be visual. Request a location: Know of spot not in our system? File a request to broaden the ecosystem.",
    appstoreHREF:
      "https://apps.apple.com/us/app/cryptid-coordinates/id6478195420",
    sections: [
      {
        title: "Opitmization with SwiftData",
        content:
          "In order to greatly optimize performance of this app, I used SwiftData for location querying. On the the users first load of the app, locations objects are decoded from a JSON file and then converted to SwiftData models and inserted into the model context. This allows lightning fast querying of locations, great for location based searches, text searches, etc.",
      },
      {
        title: "MapKit",
        content:
          "MapKit is a great framework that offers an immersive way to browse haunted locations as map markers around users real time location. There is a high volume of locations on the map so I used ClusterMap as a package dependecy to improve performace of rendering markers on the map. Another way of optimizing the map was to compute a geohash, which is essentially a geographical box where the coordinates lies and you can control the degree of that hash. Geohashes were used as a basis for clustering and reloading the annotations when the camera moved.",
      },
      {
        title: "Authentication",
        content:
          "In order to maintain my user base, I am using Apple ID to authenticate users through Firebase Auth. This simplified onboarding for users, as the app is exclusive to iOS.",
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
