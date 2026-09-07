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
          ? 'flex list-none flex-wrap items-center gap-2'
          : 'flex list-none flex-wrap items-center gap-x-5 gap-y-2'
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
          ? 'metallic-icon h-11 w-11'
          : 'text-sm text-zinc-500 transition-colors hover:text-zinc-900'
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
