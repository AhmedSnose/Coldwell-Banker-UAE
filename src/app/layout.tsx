import React from 'react';
import { APP_METADATA } from '@/constants';
import '../styles/index.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: APP_METADATA.title,
  description: APP_METADATA.description,
  keywords: APP_METADATA.keywords,
  author: APP_METADATA.author,
  openGraph: {
    title: APP_METADATA.title,
    description: APP_METADATA.description,
    url: APP_METADATA.url,
    siteName: 'Squid Design Services',
    images: [
      {
        url: APP_METADATA.image,
        width: 1200,
        height: 630,
        alt: APP_METADATA.title,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: APP_METADATA.title,
    description: APP_METADATA.description,
    images: [APP_METADATA.image],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}
      </body>
    </html>
  );
}
