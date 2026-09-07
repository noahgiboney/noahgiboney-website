import Image from 'next/image';
import Link from 'next/link';

import type { ExperienceItem } from '@/model/experience';

export default function ExperienceRow({
  org,
  role,
  dates,
  url,
  logo,
  logoClassName,
}: ExperienceItem) {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group -mx-3 flex items-center gap-4 rounded-xl px-3 py-4 transition-colors hover:bg-zinc-500/[0.04]"
    >
      <span className="metallic-pill flex h-11 w-11 shrink-0 items-center justify-center rounded-xl">
        <Image
          src={logo}
          alt=""
          width={44}
          height={44}
          className={`h-full w-full object-contain ${logoClassName ?? ''}`}
        />
      </span>

      <span className="min-w-0 flex-1">
        <span className="block text-sm font-medium text-zinc-900">
          {role}
        </span>
        <span className="block text-sm text-zinc-500">{org}</span>
      </span>

      <span className="shrink-0 text-xs tabular-nums text-zinc-400 transition-colors group-hover:text-zinc-600">
        {dates}
      </span>
    </Link>
  );
}
