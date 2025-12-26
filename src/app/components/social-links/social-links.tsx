import Link from "next/link";
import styles from "./social-links.module.css";
import { getSocialLinks} from "@/model/social-links";
import { SocialLink } from "@/model/social-links";
import { usePathname } from 'next/navigation'

export default function SocialLinks() {
  const pathname = usePathname();
  const links = getSocialLinks(pathname);

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
    <Link
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.link}
    >
      <Icon className="w-6 h-6" />
    </Link>
  );
}
