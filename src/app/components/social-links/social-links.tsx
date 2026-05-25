import Link from 'next/link';

import { getSocialLinks, type SocialLink } from '@/model/social-links';

import styles from './social-links.module.css';

interface SocialLinksProps {
  hideContactLink?: boolean;
}

export default function SocialLinks({
  hideContactLink = false,
}: SocialLinksProps) {
  const links = getSocialLinks({ hideContactLink });

  return (
    <div className={styles.links}>
      {links.map((link) => (
        <SocialLinkItem key={link.href} link={link} />
      ))}
    </div>
  );
}

interface SocialLinkItemProps {
  link: SocialLink;
}

export function SocialLinkItem({ link }: SocialLinkItemProps) {
  const Icon = link.icon;

  return (
    <Link
      href={link.href}
      target={link.isExternal ? '_blank' : undefined}
      rel={link.isExternal ? 'noopener noreferrer' : undefined}
      aria-label={link.ariaLabel}
      className={styles.link}
    >
      <Icon className="w-6 h-6" />
    </Link>
  );
}
