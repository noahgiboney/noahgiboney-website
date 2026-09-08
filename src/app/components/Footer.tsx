export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Plain hairline close with the legal line — no lockup. No margin-top:
  // each page's own bottom padding already separates its last section from
  // this border, so stacking a margin on top would double the gap.
  return (
    <footer className="border-t border-[color:var(--hairline)] py-nmg-4">
      <div className="mx-auto w-full max-w-3xl px-nmg-4 sm:px-nmg-5">
        <p className="nmg-label text-[10px]">
          © {currentYear} NMG SYSTEMS LLC
        </p>
      </div>
    </footer>
  );
}
