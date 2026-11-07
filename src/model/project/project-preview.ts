import { projectDetails, type ProjectDetails } from './project-details';

export interface ProjectPreview {
  details: ProjectDetails;
  /** One line, written to fit on a single row of the home page list. */
  summary: string;
}

export const projectPreviews: ProjectPreview[] = [
  {
    details: projectDetails[0],
    summary:
      'iOS app for exploring over 10,500 haunted places across the globe.',
  },
  {
    details: projectDetails[1],
    summary:
      'Command line tool for converting audio files, tagging metadata, and exporting them in bulk.',
  },
  // Asteroid Vision is unlisted: reachable at /projects/asteroidvision but not shown here.
];

export function getProjectHref(details: ProjectDetails): string {
  return `/projects/${details.slug}`;
}
