import Link from 'next/link';

import { getSocialLinks, type SocialLink } from '@/model/social-links';

type SocialLinksVariant = 'icon' | 'text';

interface SocialLinksProps {
  hideContactLink?: boolean;
  variant?: SocialLinksVariant;
}

export default function SocialLinks({
  hideContactLink = false,
  variant = 'icon',
}: SocialLinksProps) {
  const links = getSocialLinks({ hideContactLink });

  return (
    <ul
      className={
        variant === 'icon'
          ? 'flex list-none flex-wrap items-center gap-nmg-1'
          : 'flex list-none flex-wrap items-center gap-x-nmg-4 gap-y-nmg-1'
      }
    >
      {links.map((link) => (
        <li key={link.href}>
          <SocialLinkItem link={link} variant={variant} />
        </li>
      ))}
    </ul>
  );
}

interface SocialLinkItemProps {
  link: SocialLink;
  variant: SocialLinksVariant;
}

function SocialLinkItem({ link, variant }: SocialLinkItemProps) {
  const Icon = link.icon;

  return (
    <Link
      href={link.href}
      target={link.isExternal ? '_blank' : undefined}
      rel={link.isExternal ? 'noopener noreferrer' : undefined}
      aria-label={variant === 'icon' ? link.ariaLabel : undefined}
      className={
        variant === 'icon'
          ? 'nmg-icon-button h-11 w-11'
          : 'text-[15px] text-ink-body transition-colors duration-150 hover:text-iris-deep'
      }
    >
      {variant === 'icon' ? (
        <Icon className="h-[18px] w-[18px]" aria-hidden />
      ) : (
        link.label
      )}
    </Link>
  );
}
