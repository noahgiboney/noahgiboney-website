import { FaGithub } from "react-icons/fa";
import { projectPreviews } from "@/model/project/project-preview";
import ProjectPreviewCard from "../components/ProjectPreviewCard";
import Link from "next/link";
import { FaAppStoreIos } from "react-icons/fa";

export default function ProjectsPage() {
  return (
    <div className="my-10 flex flex-col mx-[7%] sm:mx-[15%] md:mx-[12%] space-y-10">
      <div className="flex flex-col items-center space-y-5">
        <h1 className="text-5xl"> Projects</h1>
        <div className="flex text-3xl space-x-10">
          <Link
            href="https://github.com/noahgiboney"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-125 hover:rotate-12 hover:text-gray-500 duration-300 ease-in-out"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://apps.apple.com/us/developer/noah-giboney/id1732186750"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-125 hover:rotate-12 hover:text-gray-500 duration-300 ease-in-out"
          >
            <FaAppStoreIos />
          </Link>
        </div>
      </div>
      {projectPreviews.map((project) => (
        <ProjectPreviewCard key={project.details.slug} {...project} />
      ))}
    </div>
  );
}
