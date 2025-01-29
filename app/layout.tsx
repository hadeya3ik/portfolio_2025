import type { Metadata } from "next";
import localfont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"


export const metadata: Metadata = {
  title: "Hadeya Ikram",
  description: "Hadeya Ikram",
};

const ppNeueMontreal = localfont({
  src: [
    {
      path: "../fonts/PPNeueMontreal-Bold.otf",
      weight: '700',
      style: 'normal',
    },
    {
      path: "../fonts/PPNeueMontreal-Medium.otf",
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/PPNeueMontreal-Book.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/PPNeueMontreal-Italic.otf',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-ppneuemonteal', 
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics/>
      <body className={`${ppNeueMontreal.className} bg-black text-white`}>{children}</body>
    </html>
  );
}
