import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Curio Woods — Ugly Trees, Beautiful Forest",
  description:
    "Explore a digital grove where crooked trunks glow in a breathtaking forest sanctuary.",
  openGraph: {
    title: "Curio Woods — Ugly Trees, Beautiful Forest",
    description:
      "A luminous interactive experience celebrating imperfect trees in a gorgeous forest.",
    type: "website",
    url: "https://agentic-0cc1d6a2.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Curio Woods — Ugly Trees, Beautiful Forest",
    description:
      "A luminous interactive experience celebrating imperfect trees in a gorgeous forest.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
