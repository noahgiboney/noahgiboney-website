import { projectDetails, type ProjectDetails } from './project-details';

export interface Project {
  details: ProjectDetails;
  intro: string;
  sections: ProjectSection[];
  appstoreHREF?: string;
}

export interface ProjectSection {
  id: string;
  title: string;
  content: string;
}

export const projects: Project[] = [
  {
    details: projectDetails[1],
    intro:
      "For my senior capstone project at Cal Poly, I built the Reality Market. The goal was to create a unique marketplace while learning and applying good software development practices along the way. Reality Market lets users transform everyday items into detailed 3D models, which can then be listed on the marketplace. Sellers can manage their listings by editing, deleting, or organizing them into categories, and buyers can save their favorite listings for later. The main shopping feed offers robust search, sorting, and filters so users can find exactly what they're looking for.",
    appstoreHREF:
      "https://apps.apple.com/us/app/reality-market/id6478195420",
    sections: [
      {
        id: "augmented-reality",
        title: "Augmented Reality",
        content:
          "What makes Reality Market unique is the use of augmented reality throughout the shopping and selling experience. Users can scan their items into 3D models, made possible by building on Apple's Object Capture sample project. This flow returns a 3D model in USDZ format, which then gets sent to storage. Scanning an item requires a phone with LiDAR hardware, found only on Pro models of the iPhone. Shoppers can also view items in AR in their own space, using Apple's Quick Look preview.",
      },
      {
        id: "using-vapor",
        title: "Using Vapor",
        content:
          "Building the app's backend with Vapor was a great experience. Using Swift on both the front end and the server kept the codebases consistent and clean. I also used the Fluent ORM to interact with the Postgres database.",
      },
    ],
  },
  {
    details: projectDetails[0],
    intro:
      "Cryptid Coordinates is an iOS app for exploring haunted locations across the United States. Discover over ten thousand haunted spots, track your visits, compete on leaderboards, and share your paranormal experiences.",
    appstoreHREF: "https://apps.apple.com/us/app/cryptid-coordinates/id6478195420",
    sections: [
      {
        id: "architecture",
        title: "Architecture",
        content:
          "The app leverages SwiftData for efficient location querying. On first load, location data is decoded from a JSON file, converted to SwiftData models, and inserted into the model context, enabling fast location-based and text searches. Firebase Auth with Apple ID simplifies onboarding, exclusive to iOS.",
      },
      {
        id: "map-integration",
        title: "Map Integration",
        content:
          "MapKit provides an immersive interface for browsing haunted locations as map markers around the user's real-time location. To keep performance smooth with a high volume of markers, the ClusterMap package handles efficient rendering. Geohashes are computed to create geographic boxes for clustering and reloading annotations as the map camera moves.",
      },
      {
        id: "features",
        title: "Features",
        content:
          "Users can browse over ten thousand haunted locations with detailed information and user-submitted stories. The app supports tracking visited locations, competing on leaderboards, and exploring nearby haunted spots via location-based search. An interactive map enhances visual exploration, and users can request new locations to expand the database.",
      },
    ],
  },
  {
    details: projectDetails[2],
    intro:
      "A command line interface for automating the conversion of audio files, tagging them with metadata, and uploading them to Apple Music. See the GitHub repository linked above for usage and source code.",
    sections: [
      {
        id: "motivation",
        title: "Motivation",
        content: "Uploading local files to Apple Music with custom metadata can take a lot of time. I built Music Tagger to speed up this process by setting audio file metadata in bulk and exporting to iTunes so the files upload straight to my cloud library."
      },
      {
        id: "how-it-works",
        title: "How It Works",
        content: "Music Tagger is designed to process a set of closely related files in bulk from a folder on your local machine — for example, songs from the same album. It uses the Swift ArgumentParser to pass options to the program, then converts all audio files to M4A (Apple's audio format) using the AVFoundation framework. Metadata is set as specified, and the song is moved to your local iTunes library. Files are processed in parallel using modern Swift concurrency. Files should already be in M4A to preserve the explicit song label. See the README in the GitHub repository for more on usage and CLI options."
      },
      {
        id: "limitations",
        title: "Limitations",
        content: "One current limitation is that it requires manual verification that files have successfully uploaded to your iTunes library. In my experience this is usually about a 95% success rate, but occasionally an upload process will crash after Music Tagger runs, which then requires a re-run."
      },
    ],
  },
  {
    details: projectDetails[3],
    intro:
      "Asteroid Vision is an iOS app to browse and filter near-earth asteroids, made possible by NASA's NEO Objects REST API. Users can explore orbital data and build a list of favorites.",
    appstoreHREF: "https://apps.apple.com/us/app/asteroid-vision/id6480248381",
    sections: [
      {
        id: "architecture",
        title: "Architecture",
        content:
          "I built this app following the MVVM pattern. An API service was responsible for fetching asteroids, using URLSession and modern Swift concurrency such as async/await and task groups. The API service fetched the JSON objects and returned them to the view model, which handled the business logic and provided the view with data for the user interface.",
      },
      {
        id: "using-observation",
        title: "Using Observation",
        content:
          "Users can change their unit preference in the unit control center. This was handled by storing an observable object in the environment and passing it as a bindable to the control center, so a single source of truth is maintained. The user's unit selection is also stored in UserDefaults.",
      },
    ],
  },
];
