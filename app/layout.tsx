// app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// 1. IMPORT GOOGLE ANALYTICS COMPONENT
import { GoogleAnalytics } from "@next/third-parties/google";

const baseURL = "https://thehaiderali.com/";
const GA_MEASUREMENT_ID = "G-HHHH287R9N";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(baseURL),
  title: "Haider Ali",
  description:
    "Haider Ali, a Data Science sophomore exploring AI, LLMs, and modern web technologies.",
  keywords: [
    "Haider Ali",
    "Data Science",
    "AI",
    "LLMs",
    "Web Development",
    "Next.js",
    "Portfolio",
  ],
  manifest: "/site.webmanifest",


  // ✅ REQUIRED FOR GOOGLE SEARCH ICON
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/profile.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/icon-192.png",
  },

  // ✅ STRONGLY RECOMMENDED
  manifest: "/site.webmanifest",

  openGraph: {
    title: "Haider Ali — Portfolio",
    description:
      "Haider Ali, a Data Science sophomore exploring AI, LLMs, and the modern web.",
    url: baseURL,
    siteName: "Haider Ali",
    images: [
      {
        url: "/assets/images/profile.png",
        width: 1200,
        height: 630,
        alt: "Haider Ali Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Haider Ali — Portfolio",
    description:
      "Haider Ali, a Data Science sophomore exploring AI, LLMs, and modern web technologies.",
    images: ["/assets/images/profile.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>

      {/* 2. ADD THE GOOGLE ANALYTICS TAG */}
      <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
    </html>
  );
}
