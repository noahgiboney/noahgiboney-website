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
    <div className="mx-auto w-full max-w-3xl px-6 py-14 sm:py-20">
      <Intro />
      <Experience />
      <Projects />
    </div>
  );
}

function Intro() {
  return (
    <section className="flex flex-col-reverse items-start gap-8 sm:flex-row sm:items-center sm:justify-between sm:gap-12">
      <div className="flex-1">
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
          Noah Giboney
        </h1>

        <p className="mt-4 max-w-md text-[15px] leading-relaxed text-zinc-500">
          Interested in high performance computing and iOS app development. Based in Houston and Los Angeles.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <SocialLinks />
        </div>
      </div>

      <div className="shrink-0">
        <Image
          src="/profile.png"
          alt="Noah Giboney"
          width={2009}
          height={2165}
          priority
          className="aspect-[2009/2165] w-40 rounded-2xl object-cover shadow-[0_1px_2px_rgba(24,24,27,0.06),0_18px_40px_-24px_rgba(24,24,27,0.45)] ring-1 ring-zinc-900/10 sm:w-56"
        />
      </div>
    </section>
  );
}

function Experience() {
  return (
    <Section title="Experience">
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
      title="Projects"
      id="projects"
      action={
        <Link
          href={GITHUB_HREF}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-zinc-400 transition-colors hover:text-zinc-900"
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
        className="mt-6 inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-zinc-900"
      >
        <FaAppStoreIos className="h-4 w-4" aria-hidden />
        6,000+ downloads on the App Store
      </Link>
    </Section>
  );
}

interface SectionProps {
  title: string;
  id?: string;
  action?: ReactNode;
  children: ReactNode;
}

function Section({ title, id, action, children }: SectionProps) {
  return (
    <section id={id} className="mt-16 scroll-mt-24 sm:mt-20">
      <div className="mb-2 flex items-center justify-between gap-4 border-b border-[color:var(--hairline)] pb-3">
        <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-400">
          {title}
        </h2>
        {action}
      </div>
      {children}
    </section>
  );
}
