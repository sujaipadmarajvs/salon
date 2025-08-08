import './globals.css';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import StructuredData from '@/components/StructuredData';
import SmoothScroller from '@/components/SmoothScroller';


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
      <body className={`font-sans`}>
        <StructuredData />

        <SmoothScroller />
        {children}

      </body>
    </html>
  );
}
