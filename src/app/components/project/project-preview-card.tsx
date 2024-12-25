import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import styles from "./project-preview-card.module.css";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import StaticMetallicButton from "../metallic-button/static-metallic-button";
import { ProjectPreview } from "@model/project";
import { Separator } from "@/components/ui/separator";

export default function ProjectPreviewCard({
  title,
  description,
  appIconSrc,
  learnMoreHREF,
  skills,
  screenshot,
}: ProjectPreview) {
  return (
    <Card className="w-full flex flex-row">
      {/* Left Content */}
      <div className="w-1/2 flex flex-col space-y-4">
        <CardHeader>
          <CardTitle className="text-3xl flex items-center space-x-4">
            <Image
              src={appIconSrc}
              alt="App logo"
              width={100}
              height={100}
              className={styles.image}
            />
            <div className="flex flex-col items-start space-y-1">
              <p className="font-bold text-gray-800">{title}</p>
              <Separator />
              <div className="flex space-x-3.5 pt-1">
                {skills.map((skill, index) => (
                  <Badge key={index} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-start space-y-4 text-left">
          <p className="text-gray-800">{description}</p>
        </CardContent>
        <CardFooter>
          <Link href={learnMoreHREF}>
            <StaticMetallicButton>Learn More</StaticMetallicButton>
          </Link>
        </CardFooter>
      </div>
      <div className="w-1/2 flex justify-center pb-2">
        <Image
          src={screenshot}
          alt="App Screenshot"
          width={175}
          height={400}
          className="object-contain"
        />
      </div>
    </Card>
  );
}
