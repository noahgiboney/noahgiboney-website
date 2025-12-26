import { IconType } from "react-icons";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export type SocialLink = {
  href: string;
  label: IconType;
};

export const getSocialLinks = (currentPath: string): SocialLink[] => {
  const allLinks: SocialLink[] = [
    { href: "https://github.com/noahgiboney", label: FaGithub },
    {
      href: "https://www.linkedin.com/in/noah-giboney-896847261/",
      label: FaLinkedin,
    },
    { href: "https://www.instagram.com/noahgiboney", label: FaInstagram },
    { href: "https://x.com/noahgiboney", label: FaXTwitter },
    { href: "/contact", label: MdEmail },
  ];

  return allLinks.filter(link => link.href !== '/contact' || currentPath !== '/contact');
};