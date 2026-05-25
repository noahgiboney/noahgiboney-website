import type { IconType } from 'react-icons';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

export interface SocialLink {
  href: string;
  icon: IconType;
  ariaLabel: string;
  isExternal: boolean;
}

export function getSocialLinks(options?: {
  hideContactLink?: boolean;
}): SocialLink[] {
  const allLinks: SocialLink[] = [
    {
      href: 'https://github.com/noahgiboney',
      icon: FaGithub,
      ariaLabel: 'GitHub',
      isExternal: true,
    },
    {
      href: 'https://www.linkedin.com/in/noah-giboney-896847261/',
      icon: FaLinkedin,
      ariaLabel: 'LinkedIn',
      isExternal: true,
    },
    {
      href: 'https://www.instagram.com/noahgiboney',
      icon: FaInstagram,
      ariaLabel: 'Instagram',
      isExternal: true,
    },
    {
      href: 'https://x.com/noahgiboney',
      icon: FaXTwitter,
      ariaLabel: 'X',
      isExternal: true,
    },
    {
      href: '/contact',
      icon: MdEmail,
      ariaLabel: 'Contact',
      isExternal: false,
    },
  ];

  return allLinks.filter(
    (link) => !(options?.hideContactLink && link.href === '/contact')
  );
}
