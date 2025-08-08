import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { siteConfig } from '@/config/site';
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
  title: siteConfig.siteName,
  description: siteConfig.description,
  keywords: 'salon, beauty, hair, spa, North Paravur, Kerala, bridal makeup',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sofila.variable} ${francy.variable} font-sans`}>
        <SmoothScroller />
        {children}
      </body>
    </html>
  );
}
