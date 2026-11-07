import type { MetadataRoute } from 'next';

import { getProjectHref, projectPreviews } from '@/model/project/project-preview';

const SITE_URL = 'https://noahgiboney.com';

// Built from the home page's project list, so unlisted projects stay out.
export default function sitemap(): MetadataRoute.Sitemap {
  const projectUrls = projectPreviews.map(({ details }) => ({
    url: `${SITE_URL}${getProjectHref(details)}`,
  }));

  return [
    { url: SITE_URL },
    ...projectUrls,
    { url: `${SITE_URL}/contact` },
    { url: `${SITE_URL}/privacy` },
  ];
}
