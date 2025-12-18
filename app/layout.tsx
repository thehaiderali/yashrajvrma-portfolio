import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const baseURL = "https://thehaiderali.com";
const GA_MEASUREMENT_ID = "G-HHHH287R9N";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(baseURL),
  title: {
    default: "Haider Ali | Data Science & AI ",
    template: "%s | Haider Ali"
  },
  description: "Personal portfolio of Haider Ali. Building and exploring projects in Data Science, AI, and modern web development.",
  keywords: [
    "Haider Ali", 
    "Data Science Portfolio", 
    "AI Learning", 
    "LLM Projects", 
    "Next.js Developer", 
    "Tech Student Portfolio"
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/profile.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Haider Ali | Data Science & AI ",
    description: "Building and exploring the intersection of AI, LLMs, and the modern web.",
    url: baseURL,
    siteName: "Haider Ali",
    locale: "en_US",
    type: "website",
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
    title: "Haider Ali | AI & Data Science",
    description: "Documenting my journey in Data Science, AI, and web development.",
    images: ["/assets/images/profile.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Haider Ali",
    "url": baseURL,
    "jobTitle": "Data Science & AI Developer",
    "description": "Haider Ali is a developer building projects in Data Science and exploring AI and LLM integrations."
  };

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
      <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
    </html>
  );
}