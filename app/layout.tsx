import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from 'next/font/google'
import "./globals.css";

const jetBrains = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains',
  weight: ['400', '700'],
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: "Gigi Alcaraz",
  description: "Personal website of Gigi Alcaraz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetBrains.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
