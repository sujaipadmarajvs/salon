import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { siteConfig } from '@/config/site';
import StructuredData from '@/components/StructuredData';
import SmoothScroller from '@/components/SmoothScroller';

const sofila = localFont({
  src: [
    {
      path: '../public/fonts/sofila/SOFILA.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/sofila/SOFILA-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-sofila',
  display: 'swap',
});

const francy = localFont({
  src: [
    {
      path: '../public/fonts/francy/Francy.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-francy',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://babusalon.com'),
  title: {
    default: siteConfig.siteName,
    template: `%s | ${siteConfig.siteName}`,
  },
  description: siteConfig.description,
  keywords: [
    'salon',
    'beauty',
    'hair',
    'spa',
    'North Paravur',
    'Kerala',
    'bridal makeup',
  ],
  authors: [{ name: siteConfig.siteName }],
  creator: siteConfig.siteName,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://babusalon.com',
    title: siteConfig.siteName,
    description: siteConfig.description,
    siteName: siteConfig.siteName,
    images: [
      {
        url: '/BABU-White.png',
        width: 1200,
        height: 630,
        alt: siteConfig.siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.siteName,
    description: siteConfig.description,
    images: ['/BABU-White.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sofila.variable} ${francy.variable} font-sans`}>
        <StructuredData />

        <SmoothScroller />
        {children}

      </body>
    </html>
  );
}
