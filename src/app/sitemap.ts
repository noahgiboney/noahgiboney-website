import type { MetadataRoute } from 'next';

import { getProjectHref, projectPreviews } from '@/model/project/project-preview';

const SITE_URL = 'https://noahgiboney.com';

// Built from the home page's project list, so unlisted and hidden projects stay out.
export default function sitemap(): MetadataRoute.Sitemap {
  // Rows that link out to another site have no page here.
  const projectUrls = projectPreviews
    .filter((preview) => !preview.externalHREF)
    .map(({ details }) => ({ url: `${SITE_URL}${getProjectHref(details)}` }));

  return [
    { url: SITE_URL },
    ...projectUrls,
    { url: `${SITE_URL}/contact` },
  ];
}
