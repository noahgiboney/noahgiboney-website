import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

import Footer from './components/Footer';
import TopNavbar from './components/TopNavbar';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Noah Giboney',
  description: 'HPC Software Engineer based in Houston and Los Angeles.',
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
      <body className={`${inter.className} flex min-h-dvh flex-col`}>
        <a
          href="#main-content"
          className="sr-only z-50 rounded-md bg-white px-4 py-2 text-black shadow focus:not-sr-only focus:absolute focus:left-4 focus:top-4"
        >
          Skip to main content
        </a>
        <TopNavbar />
        <main id="main-content" tabIndex={-1} className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
