import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Plain hairline close with the legal line — no lockup. No margin-top:
  // each page's own bottom padding already separates its last section from
  // this border, so stacking a margin on top would double the gap.
  return (
    <footer className="border-t border-[color:var(--hairline)] py-nmg-4">
      <div className="mx-auto flex w-full max-w-3xl items-center justify-between gap-nmg-3 px-nmg-4 sm:px-nmg-5">
        <p className="nmg-label text-[10px]">
          © {currentYear} NMG SYSTEMS LLC
        </p>
        <Link
          href="/privacy"
          className="nmg-label text-[10px] uppercase transition-colors duration-150 hover:text-iris-deep"
        >
          Privacy
        </Link>
      </div>
    </footer>
  );
}
