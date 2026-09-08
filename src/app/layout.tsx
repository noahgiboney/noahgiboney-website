import type { Metadata, Viewport } from 'next';
import { Archivo, IBM_Plex_Sans, JetBrains_Mono } from 'next/font/google';
import type { ReactNode } from 'react';

import Footer from './components/Footer';
import TopNavbar from './components/TopNavbar';
import './globals.css';

// BRAND_SPEC.md §3 — Archivo is the display/UI face, JetBrains Mono carries
// eyebrows and meta, IBM Plex Sans carries long-form body copy.
const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-archivo',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-plex',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://noahgiboney.com'),
  title: {
    default: 'Noah Giboney',
    template: '%s — Noah Giboney',
  },
  description: 'HPC Software Engineer based in Houston and Los Angeles.',
  icons: {
    icon: [
      { url: '/brand/favicon-32.svg', type: 'image/svg+xml' },
      { url: '/brand/favicon.ico', sizes: '32x32' },
    ],
    apple: [{ url: '/brand/nmg-app-icon-180.png', sizes: '180x180' }],
  },
  openGraph: {
    title: 'Noah Giboney',
    description: 'HPC Software Engineer based in Houston and Los Angeles.',
    siteName: 'NMG Systems LLC',
    type: 'website',
    images: [{ url: '/brand/og-card.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Noah Giboney',
    description: 'HPC Software Engineer based in Houston and Los Angeles.',
    images: ['/brand/og-card.png'],
  },
};

export const viewport: Viewport = {
  themeColor: '#0E0F12',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${jetbrainsMono.variable} ${plexSans.variable}`}
    >
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main-content"
          className="nmg-button nmg-button-primary sr-only z-50 focus:not-sr-only focus:absolute focus:left-nmg-5 focus:top-nmg-2"
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
