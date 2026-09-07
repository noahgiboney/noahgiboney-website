import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaAppStoreIos, FaGithub } from 'react-icons/fa';

import StaticMetallicButton from '@/app/components/metallic-button/static-metallic-button';
import YoutubeEmbed from '@/app/components/youtube-embed/youtube-embed';
import {
  projects,
  type Project,
  type ProjectSection,
} from '@/model/project/project';

interface ProjectPageProps {
  params: Promise<{ projectName: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ projectName: project.details.slug }));
}

export default async function ProjectRoute({ params }: ProjectPageProps) {
  const { projectName } = await params;
  const project = projects.find(
    (currentProject) => currentProject.details.slug === projectName
  );

  if (!project) {
    notFound();
  }

  return <ProjectPage {...project} />;
}

function ProjectPage({ details, intro, sections, appstoreHREF }: Project) {
  return (
    <article className="mx-auto w-full max-w-3xl px-6 py-14 sm:py-20">
      <Link
        href="/#projects"
        className="text-sm text-zinc-400 transition-colors hover:text-zinc-900"
      >
        &larr; Projects
      </Link>

      <header className="mt-8 flex items-center gap-4">
        <span className="metallic-pill flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl">
          <Image
            src={details.appIconSrc}
            alt=""
            width={64}
            height={64}
            className={`h-full w-full object-contain ${details.iconClassName}`}
          />
        </span>
        <div className="min-w-0">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            {details.title}
          </h1>
          <p className="mt-1 text-xs text-zinc-400">
            {details.skills.join(' · ')}
          </p>
        </div>
      </header>

      <p className="mt-8 text-[15px] leading-relaxed text-zinc-600">{intro}</p>

      <div className="mt-8 flex flex-wrap items-center gap-5">
        {appstoreHREF ? (
          <Link
            href={appstoreHREF}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link"
          >
            <StaticMetallicButton>
              <FaAppStoreIos className="h-4 w-4" aria-hidden />
              Download
            </StaticMetallicButton>
          </Link>
        ) : null}

        {details.githubHREF ? (
          <Link
            href={details.githubHREF}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${details.title} on GitHub`}
            className="metallic-icon h-11 w-11"
          >
            <FaGithub className="h-[18px] w-[18px]" aria-hidden />
          </Link>
        ) : null}
      </div>

      {details.slug === 'cryptid-coordinates' ? (
        <div className="mt-12">
          <YoutubeEmbed embedId="bPAT3SDNc0g" />
        </div>
      ) : null}

      {details.screenshots.length > 0 ? (
        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3">
          {details.screenshots.map((screenshot) => (
            <figure key={screenshot.src} className="flex flex-col gap-3">
              <Image
                src={screenshot.src}
                alt={screenshot.caption}
                width={360}
                height={780}
                className="w-full object-contain"
              />
              <figcaption className="text-xs leading-relaxed text-zinc-400">
                {screenshot.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      ) : null}

      <div className="mt-16 flex flex-col gap-12">
        {sections.map((section) => (
          <SectionCell key={section.id} {...section} />
        ))}
      </div>
    </article>
  );
}

function SectionCell({ title, content }: ProjectSection) {
  return (
    <section>
      <h2 className="border-b border-[color:var(--hairline)] pb-3 text-xs font-medium uppercase tracking-[0.18em] text-zinc-400">
        {title}
      </h2>
      <p className="mt-4 text-[15px] leading-relaxed text-zinc-600">
        {content}
      </p>
    </section>
  );
}
