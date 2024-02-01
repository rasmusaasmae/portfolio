import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

import { cn } from '@/lib/utils';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const menlo = localFont({
  src: '../fonts/Menlo-Regular.woff',
  variable: '--font-menlo',
});

export const metadata: Metadata = {
  title: 'Rasmus',
  description: "Rasmus's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, menlo.variable)}>{children}</body>
    </html>
  );
}
