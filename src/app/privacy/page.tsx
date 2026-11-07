import type { Metadata } from 'next';
import Link from 'next/link';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How noahgiboney.com handles your information.',
  alternates: { canonical: '/privacy' },
};

const LAST_UPDATED = 'November 7, 2026';

export default function PrivacyPage() {
  return (
    <article className="mx-auto w-full max-w-3xl px-nmg-4 py-nmg-6 sm:px-nmg-5 sm:py-20">
      <p className="nmg-eyebrow">Legal</p>
      <h1 className="mt-nmg-2 font-display text-[30px] font-bold tracking-h1 text-ink sm:text-[38px] sm:tracking-display">
        Privacy Policy
      </h1>
      <p className="nmg-label mt-nmg-2 text-[10px] uppercase">
        Last updated {LAST_UPDATED}
      </p>

      <p className="nmg-prose mt-nmg-5">
        This policy covers noahgiboney.com, run by NMG Systems LLC. The short
        version: this site does not use analytics, ads, or tracking cookies,
        and the only personal information it collects is what you choose to
        send through the contact form.
      </p>

      <PolicySection title="Contact form">
        When you use the contact form, your name, email address, and message
        are sent to me by email through EmailJS, a third-party email service.
        I use this information only to reply to you. It is never sold or
        shared for marketing.
      </PolicySection>

      <PolicySection title="Cookies and tracking">
        This site sets no cookies and runs no analytics or advertising
        scripts. Fonts are served from this site, not loaded from a
        third party.
      </PolicySection>

      <PolicySection title="Server logs">
        Like most websites, the hosting provider may keep standard request
        logs, such as IP address, browser type, and pages visited, for
        security and reliability. These logs are not used to identify you.
      </PolicySection>

      <PolicySection title="Links to other sites">
        This site links to other services, such as the App Store, GitHub, and
        social networks. Those sites have their own privacy policies, which
        apply once you leave this site.
      </PolicySection>

      <PolicySection title="Your choices">
        You can ask me to delete any message you have sent through the contact
        form. Send a request through the{' '}
        <Link
          href="/contact"
          className="text-ink underline underline-offset-2 transition-colors duration-150 hover:text-iris-deep"
        >
          contact page
        </Link>
        .
      </PolicySection>

      <PolicySection title="Changes">
        If this policy changes, the date at the top of this page will be
        updated.
      </PolicySection>
    </article>
  );
}

interface PolicySectionProps {
  title: string;
  children: ReactNode;
}

function PolicySection({ title, children }: PolicySectionProps) {
  return (
    <section className="mt-nmg-6">
      <h2 className="border-b border-[color:var(--hairline)] pb-nmg-2 font-display text-[22px] font-semibold tracking-h2 text-ink">
        {title}
      </h2>
      <p className="nmg-prose mt-nmg-3">{children}</p>
    </section>
  );
}
