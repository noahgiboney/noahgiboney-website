import Link from "next/link";
import styles from "./social-links.module.css"; 
import links from "@model/social-links";
import { SocialLink } from "@model/social-links";

export default function SocialLinks() {
    return (
        <div className={styles.links}>
            {links.map((link, index) => (
                <SocialLinkItem key={index} link={link} />
            ))}
        </div>
    );
}

export function SocialLinkItem({ link }: { link: SocialLink }) {
    const Icon = link.label;
    return (
        <Link href={link.href} target="_blank" rel="noopener noreferrer" className={styles.link}>
            <Icon className="w-6 h-6" /> 
        </Link>
    );
}