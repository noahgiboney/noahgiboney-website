"use client";
import Image from "next/image";
import styles from "./page.module.css";
import SocialLinks from "./components/social-links/social-links";
import { MdLocationPin } from "react-icons/md";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import PageBody from "./components/pagebody/pagebody";

export default function Home() {
  const handleClick = () => {
    alert("Metallic button clicked!");
  };

  return (
    <PageBody title="">
      <AboutMeCard />
    </PageBody>
  );
}

function AboutMeCard() {
  return (
    <Card>
      <div className={styles.cardContent}>
        <div className={styles.textContent}>
          <CardHeader>
            <CardTitle className="text-7xl">Noah Giboney</CardTitle>
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
