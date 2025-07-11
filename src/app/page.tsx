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
import { projectPreviews } from "../model/project/project-preview";
import { Separator } from "@/app/components/ui/separator";
import ProjectPreviewCard from "@/app/components/ProjectPreviewCard";
import { Badge } from "@/app/components/ui/badge";
import AboutMeItem from "./components/AboutMeItem";

export default function Home() {
  return (
    <div className="my-10 flex flex-col mx-[7%] sm:mx-[15%] md:mx-[12%] space-y-14">
      <NameCard />
      <ProjectsSection />
      <AboutMeSection />
    </div>
  );
}

function NameCard() {
  return (
    <Card>
      <div className={styles.cardContent}>
        <div className={styles.textContent}>
          <CardHeader>
            <CardTitle className="text-5xl sm:text-7xl">Noah Giboney</CardTitle>
            <CardDescription className="text-xl">
              <div className={styles.location}>
                <MdLocationPin />
                Houston, TX
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Welcome to my website. This is my corner of the internet where I
              share a litle bit about my journey in life.
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
        <h2 className="text-4xl font-bold text-gray-800">Work</h2>
        <Link
          href="https://apps.apple.com/us/developer/noah-giboney/id1732186750"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 hover:text-gray-500 origin-center"
        >
          <FaAppStoreIos className="text-3xl transition-transform transform hover:scale-125 hover:rotate-12 hover:text-gray-500 duration-300 ease-in-out" />
          <p className="text-xl font-medium">3000+ App Store Downloads</p>
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

function AboutMeSection() {
  return (
    <div className="flex flex-col space-y-5">
      <h2 className="text-3xl sm:text-4xl font-bold px-3 sm:px-5">About Me</h2>
      <div className="flex flex-col space-y-6 sm:px-5 items-start">
        {/* Hobbies Section */}
        <ul className="flex flex-wrap justify-center gap-5 sm:gap-10 list-none">
          <Badge variant="outline" className="text-lg sm:text-xl">
            Programming
          </Badge>
          <Badge variant="outline" className="text-lg sm:text-xl">
            Soccer
          </Badge>
          <Badge variant="outline" className="text-lg sm:text-xl">
            Music
          </Badge>
        </ul>

        {/* Items Section */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
          <AboutMeItem photo="/gti.jpg" photoAlt="GTI" caption="My MK7 GTI" />
          <AboutMeItem
            photo="/ea.jpg"
            photoAlt="Eternal Atake"
            caption="Eternal Atake: My Favorite Album"
          />
          <AboutMeItem
            photo="/ea2.jpeg"
            photoAlt="Eternal Atake 2"
            caption=" Paar In The Mars: My Favorite Song"
          />
        </div>
      </div>
    </div>
  );
}
