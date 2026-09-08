export default function Footer() {
  // Plain closing band — no lockup, no legal line, just a Surface-tinted
  // strip so the page has a visible, deliberate end rather than trailing
  // off into the background (a bare 1px hairline read as invisible). No
  // margin-top: each page's own bottom padding already separates its last
  // section from this border, so stacking a margin on top doubled the gap.
  return (
    <footer className="border-t border-[color:var(--hairline-strong)] bg-carbon/[0.02] py-nmg-4" />
  );
}
