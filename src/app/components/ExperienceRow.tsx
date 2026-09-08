import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';

import type { ExperienceItem } from '@/model/experience';

export default function ExperienceRow({
  org,
  role,
  dates,
  url,
  logo,
  logoClassName,
}: ExperienceItem) {
  const body = (
    <>
      <span className="nmg-tile h-11 w-11 shrink-0 overflow-hidden">
        <Image
          src={logo}
          alt=""
          width={44}
          height={44}
          className={`h-full w-full object-contain ${logoClassName ?? ''}`}
        />
      </span>

      <span className="min-w-0 flex-1">
        <span className="block text-[15px] font-medium text-ink">{role}</span>
        <span className="block text-[15px] text-ink-body">{org}</span>
      </span>

      <span className="nmg-label shrink-0 text-[10px] tabular-nums uppercase transition-colors duration-150 group-hover:text-iris-deep">
        {dates}
      </span>
    </>
  );

  return <Row url={url}>{body}</Row>;
}

const ROW_CLASSES =
  'group -mx-nmg-1 flex items-center gap-nmg-2 px-nmg-1 py-nmg-2';

interface RowProps {
  url?: string;
  children: ReactNode;
}

/** Entries without a destination stay in the list but are not interactive. */
function Row({ url, children }: RowProps) {
  if (!url) {
    return <div className={ROW_CLASSES}>{children}</div>;
  }

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`nmg-row ${ROW_CLASSES}`}
    >
      {children}
    </Link>
  );
}
