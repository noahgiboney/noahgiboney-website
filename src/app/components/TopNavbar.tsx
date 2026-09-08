'use client';

import Link from 'next/link';
import type { MouseEvent } from 'react';

import NmgLogo from './nmg-logo/nmg-logo';

const navLinks = [{ href: '/#projects', label: 'Portfolio' }];

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
    // Deliberately no pushState: parking #projects in the address bar meant
    // every later refresh re-jumped to that section. Direct /#projects links
    // still work — the browser resolves the anchor on load.
  }

  return (
    // Spec §4 — hairline bottom border, 20px/28px padding, horizontal lockup.
    <header className="sticky top-0 z-40 border-b border-[color:var(--hairline)] bg-background/85 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-3xl items-center justify-between gap-nmg-4 px-nmg-4 py-nmg-3 sm:px-nmg-5">
        <Link
          href="/"
          role="img"
          aria-label="NMG Systems LLC"
          className="rounded-button"
        >
          <NmgLogo variant="horizontal" theme="light" size={19} dotSize={11} animate />
        </Link>

        <div className="flex items-center gap-nmg-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(event) => handleNavClick(event, link.href)}
              className="text-[15px] font-medium text-ink-body transition-colors duration-150 hover:text-ink"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="nmg-button nmg-button-secondary !px-nmg-3 !py-2 text-[15px]"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
