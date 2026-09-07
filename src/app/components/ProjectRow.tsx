import Image from 'next/image';
import Link from 'next/link';

import { getProjectHref, type ProjectPreview } from '@/model/project/project-preview';

export default function ProjectRow({ details, summary }: ProjectPreview) {
  return (
    <Link
      href={getProjectHref(details)}
      className="group -mx-3 flex items-start gap-4 rounded-xl px-3 py-4 transition-colors hover:bg-zinc-500/[0.04]"
    >
      <span className="metallic-pill flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl">
        <Image
          src={details.appIconSrc}
          alt=""
          width={44}
          height={44}
          className={`h-full w-full object-contain ${details.iconClassName}`}
        />
      </span>

      <span className="min-w-0 flex-1">
        <span className="flex items-center gap-1.5">
          <span className="text-sm font-medium text-zinc-900">
            {details.title}
          </span>
          <span
            aria-hidden
            className="text-sm text-zinc-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-pink-400"
          >
            &rarr;
          </span>
        </span>
        <span className="mt-0.5 block text-sm text-zinc-500">{summary}</span>
        <span className="mt-2 block text-xs text-zinc-400">
          {details.skills.join(' · ')}
        </span>
      </span>
    </Link>
  );
}
