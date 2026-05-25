import type { Metadata } from 'next';
import { Kanit } from 'next/font/google';
import type { ReactNode } from 'react';

import Footer from './components/Footer';
import TopNavbar from './components/TopNavbar';
import './globals.css';

const kanit = Kanit({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Noah Giboney Website',
  description: 'Personal website by Noah Giboney',
  icons: {
    icon: '/profile_old.png',
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body className={kanit.className}>
        <a
          href="#main-content"
          className="sr-only z-50 rounded-md bg-white px-4 py-2 text-black shadow focus:not-sr-only focus:absolute focus:left-4 focus:top-4"
        >
          Skip to main content
        </a>
        <TopNavbar />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
