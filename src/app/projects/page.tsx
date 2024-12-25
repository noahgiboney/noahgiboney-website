import { FaGithub } from "react-icons/fa";
import projectPreviews from "@model/project"; // Adjust the import path
import PageBody from "../components/pagebody/pagebody";
import ProjectPreviewCard from "../components/project/project-preview-card"; // Adjust the import path
import Link from "next/link";
import { FaAppStoreIos } from "react-icons/fa";

export default function ProjectsPage() {
  return (
    <PageBody title="Projects">
      <div className="flex text-4xl space-x-10">
        <Link
          href="https://github.com/noahgiboney"
          target="_blank"
          className="transition-transform transform hover:scale-125 hover:rotate-12 hover:text-gray-500 duration-300 ease-in-out"
        >
          <FaGithub />
        </Link>
        <Link
          href="https://apps.apple.com/us/developer/noah-giboney/id1732186750"
          target="_blank"
          className="transition-transform transform hover:scale-125 hover:rotate-12 hover:text-gray-500 duration-300 ease-in-out"
        >
          <FaAppStoreIos />
        </Link>
      </div>
      {projectPreviews.map((project, index) => (
        <ProjectPreviewCard key={index} {...project} />
      ))}
    </PageBody>
  );
}
