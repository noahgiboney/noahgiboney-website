import Link from "next/link";
import styles from "./social-links.module.css"; 
import links from "@model/social-links";
import { SocialLink } from "@model/social-links";

export default function SocialLinks() {
    return (
        <div className={styles.links}>
            {links.map((link, index) => (
                <SocialLink key={index} link={link} />
            ))}
        </div>
    );
}

function SocialLink({ link }: { link: SocialLink }) {
    const Icon = link.label;
    return (
        <Link href={link.href} target="_blank" rel="noopener noreferrer" className={styles.link}>
            <Icon className="w-6 h-6" /> 
        </Link>
    );
}