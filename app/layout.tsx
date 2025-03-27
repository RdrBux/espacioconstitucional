import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import FixScaling from "@/components/fix-scaling";
import { Analytics } from '@vercel/analytics/next';

const sourceSerif = localFont({
  src: [
    {
      path: './fonts/source-serif-pro-latin-400-normal.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/source-serif-pro-latin-600-normal.woff2',
      weight: '600',
      style: 'normal'
    }
  ],
  variable: '--font-source-serif'
})


const sourceSans = localFont({
  src: [
    {
      path: './fonts/source-sans-pro-latin-400-normal.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/source-sans-pro-latin-600-normal.woff2',
      weight: '600',
      style: 'normal'
    }
  ],
  variable: '--font-source-sans'
})


export const metadata: Metadata = {
  title: "Espacio Constitucional",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${sourceSerif.variable} ${sourceSans.variable} text-slate-900 font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
      <FixScaling />
    </html>
  );
}
