import { projectDetails, type ProjectDetails } from './project-details';

export interface Project {
  details: ProjectDetails;
  intro: string;
  /** Short feature list shown right under the screenshots. */
  features?: ProjectFeature[];
  sections: ProjectSection[];
  appstoreHREF?: string;
}

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectSection {
  id: string;
  title: string;
  content: string;
}

export const projects: Project[] = [
  // Reality Market commented out - see project-details.ts
  // {
  //   details: projectDetails[1],
  //   intro:
  //     "For my senior capstone project at Cal Poly, I built the Reality Market. The goal was to create a unique marketplace while learning and applying good software development practices along the way. Reality Market lets users transform everyday items into detailed 3D models, which can then be listed on the marketplace. Sellers can manage their listings by editing, deleting, or organizing them into categories, and buyers can save their favorite listings for later. The main shopping feed offers robust search, sorting, and filters so users can find exactly what they're looking for.",
  //   appstoreHREF:
  //     "https://apps.apple.com/us/app/reality-market/id6478195420",
  //   sections: [
  //     {
  //       id: "augmented-reality",
  //       title: "Augmented Reality",
  //       content:
  //         "What makes Reality Market unique is the use of augmented reality throughout the shopping and selling experience. Users can scan their items into 3D models, made possible by building on Apple's Object Capture sample project. This flow returns a 3D model in USDZ format, which then gets sent to storage. Scanning an item requires a phone with LiDAR hardware, found only on Pro models of the iPhone. Shoppers can also view items in AR in their own space, using Apple's Quick Look preview.",
  //     },
  //     {
  //       id: "using-vapor",
  //       title: "Using Vapor",
  //       content:
  //         "Building the app's backend with Vapor was a great experience. Using Swift on both the front end and the server kept the codebases consistent and clean. I also used the Fluent ORM to interact with the Postgres database.",
  //     },
  //   ],
  // },
  {
    details: projectDetails[0],
    intro:
      "Afterdark is an iOS app for finding the haunted places around you. Browse over ten thousand haunted locations across the United States, get a notification when you drive past one, plan a road trip through the spookiest stops nearby, and hear each location's story told back to you by an on-device AI.",
    appstoreHREF: "https://apps.apple.com/us/app/cryptid-coordinates/id6478195420",
    features: [
      {
        title: "Haunted Map",
        description:
          "Every haunted location on one map, with photo pins that cluster and shrink as you zoom out.",
      },
      {
        title: "Haunted Notifications",
        description:
          "A heads-up when you come within a mile of a haunted location, even with the app closed.",
      },
      {
        title: "Haunted Road Trips",
        description:
          "Pick up to ten stops and Afterdark orders them into the shortest drive, with driving directions between each.",
      },
      {
        title: "Echoes",
        description:
          "A short horror story inspired by a location's lore, written on device in one of four voices: Explorer, Campfire, Lost Journal or Case File.",
      },
      {
        title: "Visits",
        description:
          "Check in when you're actually at a location to build your visit history.",
      },
      {
        title: "Leaderboards",
        description:
          "Compete with the community on most visits and most locations added.",
      },
      {
        title: "Community Stories",
        description:
          "Comment with your own experiences, and see what's trending across the app.",
      },
      {
        title: "Add Locations",
        description:
          "Submit a haunted location with a photo, and it joins the map once it's reviewed.",
      },
      {
        title: "Saved Locations",
        description: "Bookmark the places you want to visit next.",
      },
      {
        title: "Afterdark+",
        description:
          "A monthly, yearly or lifetime upgrade that unlocks every location, notifications, road trips and Echoes.",
      },
    ],
    sections: [
      {
        id: "location-data",
        title: "Location Data",
        content:
          "Locations live in a remote backend and are mirrored on device with SwiftData, so search, Near You and the map all read from a local store and keep working offline. The first launch pages through the whole table by id, and every launch after that only fetches rows edited or deleted since the last sync. The sync watermark is taken from the newest row actually read rather than the device clock, so clock skew can never skip a change.",
      },
      {
        id: "haunted-notifications",
        title: "Haunted Notifications",
        content:
          "iOS only lets an app watch twenty regions at a time, so Afterdark uses CLMonitor to geofence the twenty closest locations the user hasn't been notified about, and re-picks them as the user moves. When the user crosses into one, iOS relaunches the app in the background to send the notification. Each location only notifies once, with a cooldown between alerts, and the notified list syncs with the remote backend so a reinstall doesn't repeat them.",
      },
      {
        id: "road-trips",
        title: "Road Trips",
        content:
          "Stops are ordered without any network requests: a nearest neighbor pass builds a route from straight-line distances, then 2-opt reverses any stretch where the route doubles back on itself. Driving directions for each leg are then requested from MapKit together, and a leg that fails falls back to a straight line so the rest of the trip still shows.",
      },
      {
        id: "echoes",
        title: "Echoes",
        content:
          "Echoes use Apple's Foundation Models framework to write stories entirely on device, with no server and no cost per story. The model generates into a @Generable type with guided fields for the title and story, and the text streams in as it's written. Each narrative voice has its own instructions, so the same location reads differently as a campfire tale or a case file.",
      },
      {
        id: "community-safety",
        title: "Community Safety",
        content:
          "Comments and usernames run through a content filter that catches profanity, slurs and the usual disguises like look-alike characters and stretched letters, while still allowing the words a haunted location app needs. Users can report comments they find objectionable and block other users, which hides that user's comments from them.",
      },
    ],
  },
  {
    details: projectDetails[1],
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
    details: projectDetails[2],
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
