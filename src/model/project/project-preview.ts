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
      'iOS app for exploring over 10,000 haunted locations across the United States.',
  },
  {
    details: projectDetails[1],
    summary:
      'iOS app for scanning everyday items into 3D models, then listing and previewing them in augmented reality.',
  },
  {
    details: projectDetails[2],
    summary:
      'Command line tool for converting audio files, tagging metadata, and exporting them in bulk.',
  },
  {
    details: projectDetails[3],
    summary:
      'iOS app for browsing and filtering near-earth asteroids with their history and orbital data.',
  },
];

export function getProjectHref(details: ProjectDetails): string {
  return `/projects/${details.slug}`;
}
