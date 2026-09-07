import Link from 'next/link';
import { GiMaterialsScience } from 'react-icons/gi';

const navLinks = [
  { href: '/#projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export default function TopNavbar() {
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
