import { projectDetails, type ProjectDetails } from './project-details';

export interface ProjectPreview {
  details: ProjectDetails;
  /** One line, written to fit on a single row of the home page list. */
  summary: string;
  /** Link out to this URL instead of the project's page on this site. */
  externalHREF?: string;
}

export const projectPreviews: ProjectPreview[] = [
  {
    details: projectDetails[0],
    summary:
      'iOS app for exploring 11,500+ haunted locations across the globe, with 8,000+ downloads on the App Store.',
    externalHREF: 'https://afterdark-app.vercel.app',
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

/** Where a home page row points: the project's own site, or its page here. */
export function getPreviewHref(preview: ProjectPreview): string {
  return preview.externalHREF ?? getProjectHref(preview.details);
}
