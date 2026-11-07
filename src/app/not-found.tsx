import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page not found',
};

export default function NotFound() {
  return (
    <div className="mx-auto w-full max-w-3xl px-nmg-4 py-nmg-6 sm:px-nmg-5 sm:py-20">
      <p className="nmg-eyebrow">Error 404</p>
      <h1 className="mt-nmg-2 font-display text-[30px] font-bold tracking-h1 text-ink sm:text-[38px] sm:tracking-display">
        Page not found
      </h1>
      <p className="nmg-prose mt-nmg-2 max-w-md">
        The page you are looking for does not exist or has moved.
      </p>

      <div className="mt-nmg-5 flex flex-wrap items-center gap-nmg-2">
        <Link href="/" className="nmg-button nmg-button-primary">
          Back home
        </Link>
        <Link href="/#projects" className="nmg-button nmg-button-secondary">
          View portfolio
        </Link>
      </div>
    </div>
  );
}
