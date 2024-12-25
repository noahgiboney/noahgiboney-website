"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import SocialLinks from "./components/social-links/social-links";
import { MdLocationPin } from "react-icons/md";
import { FaAppStoreIos } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import PageBody from "./components/pagebody/pagebody";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import projectPreviews from "@model/project";
import ProjectPreviewCard from "@/app/components/project/project-preview-card";

export default function Home() {
  return (
    <div className="mt-10 flex flex-col">
      <AboutMeCard />
      <ProjectsSection />
      {/* <InterestsSection /> */}
    </div>
  );
}

function AboutMeCard() {
  return (
    <Card className="mx-[30%] sm:mx-[15%]">
      <div className={styles.cardContent}>
        <div className={styles.textContent}>
          <CardHeader>
            <CardTitle className="text-7xl">Noah Giboney</CardTitle>
            <CardDescription className="text-xl">
              Computer Science @ Cal Poly, San Luis Obispo
              {/* <div className={styles.location}>
                <MdLocationPin />
                San Luis Obispo, CA
              </div> */}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              I'm a fourth-year Computer Science student at Cal Poly, San Luis
              Obispo, specializing in iOS software engineering. Check out my
              apps and learn more about me below.
            </p>
          </CardContent>
          <CardFooter>
            <SocialLinks />
          </CardFooter>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={"/profilepicture1.png"}
            alt="Noah Giboney"
            className={styles.image}
            width={300}
            height={300}
          />
        </div>
      </div>
    </Card>
  );
}

export function ProjectsSection() {
  return (
    <div className="flex flex-col justify-start space-y-5 py-10mx-[30%] sm:mx-[15%] mt-10">
      <div className="flex flex-col space-y-5 px-5">
        <h2 className="text-4xl font-bold text-gray-800">Projects</h2>
        <Link
          href="/projects"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 hover:text-gray-500 origin-center"
        >
          <FaAppStoreIos className="text-3xl transition-transform transform hover:scale-125 hover:rotate-12 hover:text-gray-500 duration-300 ease-in-out" />
          <p className="text-lg font-medium">3000+ App Store Downloads</p>
        </Link>
      </div>
      <Carousel>
        <CarouselContent>
          {projectPreviews.map((project, index) => (
            <CarouselItem key={index}>
              <ProjectPreviewCard {...project} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious variant="secondary" />
        <CarouselNext variant="secondary"/>
      </Carousel>
    </div>
  );
}

export function InterestsSection() {
  return (
    <div className="flex flex-col justify-start w-full space-y-5 mx-[30%] sm:mx-[15%]">
      <div className="px-5">
        <h2 className="text-4xl">Interests</h2>
        <p className="text-xl">What I like to do in my free time.</p>
      </div>
    </div>
  );
}
