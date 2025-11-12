"use client";
import { FaGithub, FaAppStoreIos } from "react-icons/fa";
import Link from "next/link";
import StaticMetallicButton from "@/app/components/metallic-button/static-metallic-button";
import Image from "next/image";
import { Separator } from "@/app/components/ui/separator";
import styles from "./project-page.module.css";
import { Badge } from "@/app/components/ui/badge";
import { usePathname } from "next/navigation";
import { projects, Project } from "@/model/project/project";
import { ProjectSection } from "@/model/project/project";
import YoutubeEmbed from "@components/youtube-embed/youtube-embed";

export default function Home() {
  const pathname = usePathname();
  const projectName = pathname.split("/").pop();

  const project = projects.find(
    (proj) =>
      proj.details.title.toLowerCase().replace(/\s+/g, "-") === projectName
  );

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <ProjectPage
      details={project.details}
      intro={project.intro}
      sections={project.sections}
      appstoreHREF={project.appstoreHREF}
    />
  );
}
function ProjectPage({ details, intro, sections, appstoreHREF }: Project) {
  return (
    <div className="flex flex-col my-10 mx-[7%] sm:mx-[15%] md:mx-[12% space-y-7">
      {/* Project Details */}
      <div className="flex flex-col items-start space-y-3">
        <div className="flex items-center gap-4">
          <Image
            src={details.appIconSrc}
            alt="App logo"
            width={100}
            height={100}
            className={details.appIconTailwind}
          />
          <h2 className="text-3xl sm:text-5xl font-bold text-center sm:text-left">
            {details.title}
          </h2>
        </div>
        <Separator className="w-full mt-2" />
      </div>

      {/* Links */}      
      <div className="flex flex-col sm:flex-row gap-4 sm:space-x-4 items-center sm:items-start">
      {appstoreHREF && (
        <Link href={appstoreHREF} target="_blank">
          <StaticMetallicButton>
            <div className="flex items-center gap-2">
              <FaAppStoreIos className="text-xl" />
              <p>Download</p>
            </div>
          </StaticMetallicButton>
        </Link>
      )}
        {details.githubHREF && (
          <Link
            href={details.githubHREF}
            target="_blank"
            className="transition-transform transform hover:scale-125 hover:rotate-12 hover:text-gray-500 duration-300 ease-in-out"
          >
            <FaGithub className="text-3xl sm:text-4xl" />
          </Link>
        )}
      </div>
      {/* Introduction */}
      <p className="text-base sm:text-lg text-center sm:text-left">{intro}</p>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 sm:gap-4 justify-center sm:justify-start">
        {details.skills.map((skill, index) => (
          <Badge key={index} variant="secondary">
            {skill}
          </Badge>
        ))}
      </div>

      {/* Conditional YoutubeEmbed */}
      {details.title === "Cryptid Coordinates" && (
        <div className="flex justify-center w-full">
          <YoutubeEmbed embedId="bPAT3SDNc0g" />
        </div>
      )}

      {/* Screenshots Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 pb-4">
        {details.screenshots.map((screenshot, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              src={screenshot.src}
              alt={screenshot.caption}
              width={180}
              height={250}
              className="object-cover"
            />
            <p className="text-xs sm:text-sm text-gray-600 mt-2 text-center">
              {screenshot.caption}
            </p>
          </div>
        ))}
      </div>

      {/* Sections */}
      <div className="flex flex-col space-y-12">
        {sections.map((section, index) => (
          <SectionCell key={index} {...section} />
        ))}
      </div>
    </div>
  );
}

function SectionCell({ title, content }: ProjectSection) {
  return (
    <div className="flex flex-col space-y-5">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl sm:text-3xl">{title}</h2>
        <Separator />
      </div>
      <p className="text-sm sm:text-base">{content}</p>
    </div>
  );
}
