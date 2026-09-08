import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaAppStoreIos, FaGithub } from 'react-icons/fa';

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
    <article className="mx-auto w-full max-w-3xl px-nmg-4 py-nmg-6 sm:px-nmg-5 sm:py-20">
      <Link
        href="/#projects"
        className="nmg-label text-[10px] uppercase transition-colors duration-150 hover:text-iris-deep"
      >
        &larr; Portfolio
      </Link>

      <header className="mt-nmg-5 flex items-center gap-nmg-2">
        {details.appIconSrc ? (
          <span className="nmg-tile h-16 w-16 shrink-0 overflow-hidden">
            <Image
              src={details.appIconSrc}
              alt=""
              width={64}
              height={64}
              className={`h-full w-full object-contain ${details.iconClassName ?? ''}`}
            />
          </span>
        ) : null}
        <div className="min-w-0">
          <h1 className="font-display text-[30px] font-bold tracking-h1 text-ink sm:text-[38px] sm:tracking-display">
            {details.title}
          </h1>
          <p className="nmg-label mt-1 text-[10px] uppercase">
            {details.skills.join(' · ')}
          </p>
        </div>
      </header>

      <p className="nmg-prose mt-nmg-5">{intro}</p>

      <div className="mt-nmg-5 flex flex-wrap items-center gap-nmg-2">
        {appstoreHREF ? (
          <Link
            href={appstoreHREF}
            target="_blank"
            rel="noopener noreferrer"
            className="nmg-button nmg-button-primary"
          >
            <FaAppStoreIos className="h-4 w-4" aria-hidden />
            Download
          </Link>
        ) : null}

        {details.githubHREF ? (
          <Link
            href={details.githubHREF}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${details.title} on GitHub`}
            className="nmg-icon-button h-11 w-11"
          >
            <FaGithub className="h-[18px] w-[18px]" aria-hidden />
          </Link>
        ) : null}
      </div>

      {details.slug === 'cryptid-coordinates' ? (
        <div className="mt-nmg-6">
          <YoutubeEmbed embedId="bPAT3SDNc0g" />
        </div>
      ) : null}

      {details.screenshots.length > 0 ? (
        <div className="mt-nmg-6 grid grid-cols-2 gap-nmg-4 sm:grid-cols-3">
          {details.screenshots.map((screenshot) => (
            <figure key={screenshot.src} className="flex flex-col gap-nmg-2">
              <Image
                src={screenshot.src}
                alt={screenshot.caption}
                width={360}
                height={780}
                className="w-full object-contain"
              />
              <figcaption className="nmg-label">
                {screenshot.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      ) : null}

      <div className="mt-nmg-6 flex flex-col gap-nmg-6">
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
      <h2 className="border-b border-[color:var(--hairline)] pb-nmg-2 font-display text-[22px] font-semibold tracking-h2 text-ink">
        {title}
      </h2>
      <p className="nmg-prose mt-nmg-3">{content}</p>
    </section>
  );
}
