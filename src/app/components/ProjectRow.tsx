import Link from 'next/link';

import { getPreviewHref, type ProjectPreview } from '@/model/project/project-preview';

export default function ProjectRow(preview: ProjectPreview) {
  const { details, summary, externalHREF } = preview;
  const isExternal = Boolean(externalHREF);

  return (
    <Link
      href={getPreviewHref(preview)}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="nmg-row -mx-nmg-1 flex items-start px-nmg-1 py-nmg-2"
    >
      <span className="group min-w-0 flex-1">
        <span className="flex items-center gap-1.5">
          <span className="text-[15px] font-medium text-ink">
            {details.title}
          </span>
          <span
            aria-hidden
            className="text-[15px] text-ink-muted transition-transform duration-[220ms] ease-out group-hover:translate-x-1 group-hover:text-iris-deep"
          >
            {isExternal ? '↗' : '→'}
          </span>
          {isExternal ? <span className="sr-only">(opens in a new tab)</span> : null}
        </span>
        <span className="mt-0.5 block text-[15px] text-ink-body">{summary}</span>
        <span className="nmg-label mt-nmg-1 block text-[10px] uppercase">
          {details.skills.join(' · ')}
        </span>
      </span>
    </Link>
  );
}
