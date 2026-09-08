import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { FaAppStoreIos, FaGithub } from 'react-icons/fa';

import ExperienceRow from './components/ExperienceRow';
import ProjectRow from './components/ProjectRow';
import SocialLinks from './components/social-links/social-links';
import { educationItems, workItems } from '@/model/experience';
import { projectPreviews } from '@/model/project/project-preview';

const APP_STORE_HREF =
  'https://apps.apple.com/us/developer/noah-giboney/id1732186750';
const GITHUB_HREF = 'https://github.com/noahgiboney';

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-3xl px-nmg-4 py-nmg-6 sm:px-nmg-5 sm:py-20">
      <Intro />
      <Experience />
      <Projects />
    </div>
  );
}

function Intro() {
  return (
    <section className="flex flex-col-reverse items-start gap-nmg-5 sm:flex-row sm:items-center sm:justify-between sm:gap-nmg-6">
      <div className="flex-1">
        <h1 className="font-display text-[44px] font-bold leading-none tracking-display text-ink sm:text-[56px]">
          Noah Giboney
        </h1>

        <p className="nmg-prose mt-nmg-3 max-w-md">
          Interested in high performance computing and iOS app development.
          Based in Houston and Los Angeles.
        </p>

        <div className="mt-nmg-5 flex flex-wrap items-center gap-nmg-2">
          <SocialLinks />
        </div>
      </div>

      {/* Square portrait, hairline border — the identity keeps cards square
          and reserves round shapes for the mark (spec §4). */}
      <div className="shrink-0 self-center sm:self-auto">
        <Image
          src="/profile.png"
          alt="Noah Giboney"
          width={2009}
          height={2165}
          priority
          className="aspect-[2009/2165] w-40 border border-[color:var(--hairline-strong)] object-cover sm:w-52"
        />
      </div>
    </section>
  );
}

function Experience() {
  return (
    <Section index="01" title="Experience" slug="work · education">
      <div className="divide-y divide-[color:var(--hairline)]">
        {workItems.map((item) => (
          <ExperienceRow key={item.org} {...item} />
        ))}
        {educationItems.map((item) => (
          <ExperienceRow key={item.org} {...item} />
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section
      index="02"
      title="Portfolio"
      id="projects"
      action={
        <Link
          href={GITHUB_HREF}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="nmg-icon-button h-9 w-9"
        >
          <FaGithub className="h-4 w-4" aria-hidden />
        </Link>
      }
    >
      <div className="divide-y divide-[color:var(--hairline)]">
        {projectPreviews.map((project) => (
          <ProjectRow key={project.details.slug} {...project} />
        ))}
      </div>

      <Link
        href={APP_STORE_HREF}
        target="_blank"
        rel="noopener noreferrer"
        className="nmg-label mt-nmg-3 inline-flex items-center gap-2 transition-colors duration-150 hover:text-iris-deep"
      >
        <FaAppStoreIos className="h-4 w-4" aria-hidden />
        6,000+ DOWNLOADS ON THE APP STORE
      </Link>
    </Section>
  );
}

interface SectionProps {
  index: string;
  title: string;
  slug?: string;
  id?: string;
  action?: ReactNode;
  children: ReactNode;
}

/**
 * Section header in the brand-kit pattern: an Iris index number, the title in
 * Archivo 600 at H2 tracking, an optional mono slug, and a hairline rule.
 */
function Section({ index, title, slug, id, action, children }: SectionProps) {
  return (
    <section id={id} className="mt-nmg-6 scroll-mt-24 sm:mt-20">
      <div className="mb-nmg-1 flex items-center justify-between gap-nmg-3 border-b border-[color:var(--hairline)] pb-nmg-2">
        <div className="flex min-w-0 items-baseline gap-nmg-2">
          <span className="font-mono text-[11px] tracking-eyebrow text-iris-deep">
            {index}
          </span>
          <h2 className="font-display text-[22px] font-semibold tracking-h2 text-ink">
            {title}
          </h2>
          {slug ? (
            <span className="nmg-label hidden truncate text-[10px] uppercase sm:inline">
              {slug}
            </span>
          ) : null}
        </div>
        {action}
      </div>
      {children}
    </section>
  );
}
