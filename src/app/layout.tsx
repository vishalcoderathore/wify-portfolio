import { Geist, Geist_Mono } from 'next/font/google';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://annanditabhati.com'),
  title: 'Annandita Bhati | Product Manager',
  description:
    "I'm Annandita Bhati, a Product Manager passionate about solving complex problems, driving innovation, and creating impactful products.",
  keywords: ['Product Manager', 'UX', 'Strategy', 'Innovation', 'Portfolio', 'Technology'],
  authors: [
    { name: 'Annandita Bhati', url: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://annanditabhati.com') },
  ],
  openGraph: {
    title: 'Annandita Bhati | Product Manager',
    description: 'Exploring, learning, and building impactful products that drive value.',
    url: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://annanditabhati.com'),
    siteName: 'Annandita Bhati | Portfolio',
    images: [
      {
        url: '/seo-preview.png',
        width: 1200,
        height: 630,
        alt: 'Annandita Bhati Portfolio Preview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Annandita Bhati | Product Manager',
    description: 'Exploring, learning, and building impactful products that drive value.',
    images: ['/seo-preview.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
