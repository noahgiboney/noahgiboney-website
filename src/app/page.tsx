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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";
import { projectPreviews } from "../model/project/project-preview";
import { Separator } from "@/app/components/ui/separator";
import ProjectPreviewCard from "@/app/components/ProjectPreviewCard";
import { Badge } from "@/app/components/ui/badge";

export default function Home() {
  return (
    <div className="my-10 flex flex-col mx-[7%] sm:mx-[15%] md:mx-[12%] space-y-14">
      <NameSection />
      <AboutMeSection />
      <ProjectsSection />
    </div>
  );
}

function NameSection() {
  return (
    <Card>
      <div className={styles.cardContent}>
        <div className={styles.textContent}>
          <CardHeader>
            <CardTitle className="text-5xl sm:text-7xl">Noah Giboney</CardTitle>
            <CardDescription className="text-xl">
              <div className={styles.location}>
                <MdLocationPin />
                HTX & LA
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Welcome to my website, my space to reflect on the journeys I have
              taken, and those yet unseen.
            </p>
          </CardContent>
          <CardFooter>
            <SocialLinks />
          </CardFooter>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/profilepicture1.png"
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

function AboutMeSection() {
  return (
    <div className="flex flex-col justify-start space-y-5 px-7 sm:px-0">
      <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 px-5">
        About me
      </h2>
      <Card>
        <CardContent className="flex flex-col sm:flex-row sm:justify-around items-center gap-6 py-5">
          <div className="flex items-center gap-3 w-full sm:flex-1">
            <div className="flex-shrink-0 bg-white rounded-lg shadow-sm border border-gray-200">
              <Link
                href="https://www.calpoly.edu/major/computer-science"
                target="_blank"
              >
                <Image
                  src={"/slo-logo.svg"}
                  alt="Cal Poly logo"
                  className="w-[70px] h-[70px] py-1 shadow-md"
                  width={70}
                  height={70}
                />
              </Link>
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-bold text-lg">B.S Computer Science</p>
              <p className="text-sm text-gray-600">Cal Poly, San Luis Obispo</p>
              <p className="text-sm text-gray-500 line-clamp-3">
                Graduated class of 2025. Learn by doing.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full sm:flex-1">
            <div className="flex-shrink-0 bg-white rounded-lg shadow-sm border border-gray-200">
              <Link
                href="https://www.hpe.com/us/en/greenlake.html?utm_campaign=FY25_CD_GB_GD_AMS_NA_Simplify_Hybrid_Cloud_management&utm_medium=PS&utm_source=GG&utm_content=521124404&plid=PSF-00000449&ef_id=CjwKCAiAu67KBhAkEiwAY0jAlVkyaYnNaMZTCa1L0mfyrVGYhj_g5AsmF9EQO5z7hqrtnYUo4GEaIhoC2TUQAvD_BwE:G:s&s_kwcid=AL!13472!3!!!!x!!!22034838876!&gad_source=1&gad_campaignid=22050296106&gbraid=0AAAAACRP5IA5IDKzAzwcUrD5Uk8ULhrr_&gclid=CjwKCAiAu67KBhAkEiwAY0jAlVkyaYnNaMZTCa1L0mfyrVGYhj_g5AsmF9EQO5z7hqrtnYUo4GEaIhoC2TUQAvD_BwE"
                target="_blank"
              >
                <Image
                  src={"/work/hpe.svg"}
                  alt="HPE Logo"
                  className="w-[70px] h-[70px] px-2 shadow-md"
                  width={70}
                  height={70}
                />
              </Link>
            </div>
            <div className="min-w-0 flex-1 px-2">
              <p className="font-bold text-lg">System Test Engineer</p>
              <p className="text-sm text-gray-600">
                Hewlett Packard Enterprise
              </p>
              <p className="text-sm text-gray-500 line-clamp-3">
                System software test for high performance computing.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full sm:flex-1">
            <div className="flex-shrink-0 w-[79px] h-[79px] rounded-lg overflow-hidden shadow-md">
              <Link
                href={
                  "https://www.youtube.com/watch?v=juoznBaQbJE&list=PLC-tfB9OwTFHdk7GnG1CAoxUr4rbV2rci"
                }
                target="_blank"
              >
                <Image
                  src="/ea.jpg"
                  alt="Eternal Atake cover art"
                  width={79}
                  height={79}
                  className="object-cover w-full h-full"
                />
              </Link>
            </div>
            <div className="min-w-0 flex-1 px-2">
              <p className="font-bold text-lg">Eternal Atake</p>
              <p className="text-sm text-gray-600">Lil Uzi Vert</p>
              <p className="text-sm text-gray-500 line-clamp-3">
                My favorite album of all time.
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex flex-col items-start space-y-3 w-full">
            <div className="flex flex-col">
              <p className="text-lg">Interests</p>
              <Separator />
            </div>
            <ul className="flex flex-wrap justify-start gap-4 list-none">
              <Badge variant="secondary" className="text">
                Soccer
              </Badge>
              <Badge variant="secondary">Systems Programming</Badge>
              <Badge variant="secondary">iOS Development</Badge>
              <Badge variant="secondary">Music</Badge>
              <Badge variant="secondary">Fitness</Badge>
              <Badge variant="secondary">Health</Badge>
            </ul>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

function ProjectsSection() {
  return (
    <div className="flex flex-col justify-start space-y-5 px-7 sm:px-0">
      <div className="flex flex-col space-y-5 px-5">
        <h2 className="text-4xl font-bold text-gray-800">Projects</h2>
        <Link
          href="https://apps.apple.com/us/developer/noah-giboney/id1732186750"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 hover:text-gray-500 origin-center"
        >
          <FaAppStoreIos className="text-3xl transition-transform transform hover:scale-125 hover:rotate-12 hover:text-gray-500 duration-300 ease-in-out" />
          <p className="text-xl font-medium">6000+ App Store Downloads</p>
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
        <CarouselNext variant="secondary" />
      </Carousel>
    </div>
  );
}
