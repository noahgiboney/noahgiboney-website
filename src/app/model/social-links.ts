import { IconType } from "react-icons";
import { FaGithub, FaLinkedin ,FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export type SocialLink = {
    href: string;
    label: IconType;
};

const links: SocialLink[] = [
    { href: "https://www.linkedin.com/in/noah-giboney-896847261/", label: FaLinkedin },
    { href: "https://github.com/noahgiboney", label: FaGithub }, 
    { href: "https://www.instagram.com/noahgiboney/", label: FaInstagram },
    { href: "https://x.com", label: FaXTwitter },
    { href: "/contact", label: MdEmail }
];

export default links