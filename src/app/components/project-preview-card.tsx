import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import Image from "next/image";
import { Badge } from "@/app/components/ui/badge";
import Link from "next/link";
import StaticMetallicButton from "./metallic-button/static-metallic-button";
import { ProjectPreview } from "@/app/model/project/project-preview";
import { Separator } from "@/app/components/ui/separator";

export default function ProjectPreviewCard({
  details,
  description,
  screenshot,
  learnMoreHREF,
}: ProjectPreview) {
  return (
    <Card className="w-full flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 flex flex-col space-y-4 p-4">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl flex items-center space-x-4">
            <Image
              src={details.appIconSrc}
              alt="App logo"
              width={100}
              height={100}
              className="w-24 h-24 rounded-xl border-2 border-gray-300 bg-gray-100 flex justify-center items-center object-cover"
            />
            <div className="flex flex-col items-start space-y-1">
              <p className="font-bold text-gray-800">{details.title}</p>
              <Separator />
              <div className="flex flex-wrap gap-2 pt-1">
                {details.skills.map((skill, index) => (
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
        <CardFooter className="justify-center md:justify-start">
          <Link href={learnMoreHREF}>
            <StaticMetallicButton>Learn More</StaticMetallicButton>
          </Link>
        </CardFooter>
      </div>
      <div className="w-full md:w-1/2 flex justify-center pb-2">
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
