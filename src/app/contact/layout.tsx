import type { Metadata } from 'next';
import type { ReactNode } from 'react';

// The contact page is a client component, so its metadata lives here.
export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Noah Giboney about software, iOS apps, or high performance computing.',
  alternates: { canonical: '/contact' },
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
