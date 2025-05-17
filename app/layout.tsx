import type { Metadata } from 'next';
import { NTR } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: "Raghul's Portfolio",
  description:
    'React devdeloper having 4+ years of experience in building web applications using React, Next.js, and TypeScript.',
};

const ntr = NTR({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-ntr',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ntr.className}>{children}</body>
    </html>
  );
}
