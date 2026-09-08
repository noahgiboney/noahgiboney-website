'use client';

import Link from 'next/link';
import type { MouseEvent } from 'react';
import { GiMaterialsScience } from 'react-icons/gi';

const navLinks = [
  { href: '/#projects', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
];

export default function TopNavbar() {
  // Next's built-in hash-scroll for same-page Links can be flaky on iOS
  // Safari (it depends on router/scroll-restoration internals). Scrolling
  // explicitly here makes the jump deterministic across browsers.
  function handleNavClick(event: MouseEvent<HTMLAnchorElement>, href: string) {
    const hashIndex = href.indexOf('#');
    if (hashIndex === -1) return;

    const path = href.slice(0, hashIndex) || '/';
    const hash = href.slice(hashIndex + 1);

    if (window.location.pathname !== path) return;

    const target = document.getElementById(hash);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.pushState(null, '', href);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--hairline)] bg-background/80 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-3xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          aria-label="Noah Giboney"
          className="text-zinc-900 transition-colors hover:text-zinc-500"
        >
          <GiMaterialsScience className="h-6 w-6" aria-hidden />
        </Link>

        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(event) => handleNavClick(event, link.href)}
              className="text-sm text-zinc-500 transition-colors hover:text-zinc-900"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
