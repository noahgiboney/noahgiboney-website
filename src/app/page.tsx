"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import SocialLinks from "./components/social-links/social-links";
import { MdLocationPin } from "react-icons/md";
import { FaAppStoreIos, FaCircle } from "react-icons/fa";
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
import { projectPreviews } from "./model/project/project-preview";
import { Separator } from "@/app/components/ui/separator";
import ProjectPreviewCard from "@/app/components/project-preview-card";
import { Badge } from "@/app/components/ui/badge";

export default function Home() {
  return (
    <div className="my-10 flex flex-col mx-[7%] sm:mx-[15%] md:mx-[12%] space-y-14">
      <AboutMeCard />
      <ProjectsSection />
      <InterestsSection />
    </div>
  );
}

function AboutMeCard() {
  return (
    <Card>
      <div className={styles.cardContent}>
        <div className={styles.textContent}>
          <CardHeader>
            <CardTitle className="text-5xl sm:text-7xl">Noah Giboney</CardTitle>
            <CardDescription className="text-xl">
              Computer Science @ Cal Poly, San Luis Obispo
              <div className={styles.location}>
                <MdLocationPin />
                San Luis Obispo, CA
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              I am a student with a strong focus in iOS App Development. I also
              enjoy exploring other parts of the Apple ecosystem, Android, and
              web development. In my free time I like to play soccer and lift
              weights.
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

function ProjectsSection() {
  return (
    <div className="flex flex-col justify-start space-y-5 px-7 sm:px-0">
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
        <CarouselNext variant="secondary" />
      </Carousel>
    </div>
  );
}

function InterestsSection() {
  return (
    <div className="flex flex-col space-y-5">
      <h2 className="text-3xl sm:text-4xl font-bold px-3 sm:px-5">
        Hobbies and Interests
      </h2>
      <Separator />
      <div className="flex flex-col space-y-6 sm:px-5 items-start">
        {/* Hobbies Section */}
        <ul className="flex flex-wrap justify-center gap-5 sm:gap-10 list-none">
          <Badge variant="outline" className="text-lg sm:text-xl">
            Software
          </Badge>
          <Badge variant="outline" className="text-lg sm:text-xl">
            Soccer
          </Badge>
          <Badge variant="outline" className="text-lg sm:text-xl">
            Circuits and Electronics
          </Badge>
          <Badge variant="outline" className="text-lg sm:text-xl">
            Cars
          </Badge>
          <Badge variant="outline" className="text-lg sm:text-xl">
            Music
          </Badge>
          <Badge variant="outline" className="text-lg sm:text-xl">
            Health and Fitness
          </Badge>
        </ul>

        {/* Images Section */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/gti.jpg"
                alt="GTI"
                width={200}
                height={200}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="text-xs sm:text-sm text-gray-500">My MK7 GTI</p>
          </div>
          <div className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/circuit.jpg"
              alt="Eternal Atake"
              width={200}
              height={200}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/vinny.jpg"
                alt="Eternal Atake"
                width={200}
                height={200}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="text-xs sm:text-sm text-gray-500">Vinny: My Dog</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/ea.jpg"
                alt="Eternal Atake"
                width={200}
                height={200}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="text-xs sm:text-sm text-gray-500">
              Eternal Atake: My Favorite Album
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/ea2.jpeg"
                alt="Eternal Atake"
                width={200}
                height={200}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="text-xs sm:text-sm text-gray-500">
              Paar In The Mars: My Favorite Song
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
