import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

const BASE_URL = "https://genox.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "GenoxLabs — Next Level Innovation | Coming Soon",
    template: "%s | GenoxLabs",
  },
  description:
    "GenoxLabs is arriving at genox.com — a next-generation platform engineered to redefine innovation. Join the frontier. Something extraordinary is coming.",
  keywords: [
    "GenoxLabs",
    "genox.com",
    "Genox",
    "innovation",
    "technology",
    "AI platform",
    "next-gen tech",
    "coming soon",
    "software",
    "enterprise AI",
    "developer tools",
    "zero-latency",
    "tech startup",
  ],
  authors: [{ name: "GenoxLabs", url: BASE_URL }],
  creator: "GenoxLabs",
  publisher: "GenoxLabs",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "GenoxLabs",
    title: "GenoxLabs — Next Level Innovation | Coming Soon",
    description:
      "GenoxLabs is arriving at genox.com — a next-generation platform engineered to redefine innovation. Something extraordinary is coming.",
    images: [
      {
        url: "/bannerlogo.jpeg",
        width: 1200,
        height: 400,
        alt: "GenoxLabs — Next Level Innovation",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@genoxlabs",
    creator: "@genoxlabs",
    title: "GenoxLabs — Next Level Innovation | Coming Soon",
    description:
      "GenoxLabs is arriving at genox.com — a next-generation platform engineered to redefine innovation. Something extraordinary is coming.",
    images: ["/bannerlogo.jpeg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/android-chrome-192x192.png",
        color: "#800080",
      },
    ],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: BASE_URL,
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GenoxLabs",
    url: BASE_URL,
    logo: `${BASE_URL}/sqlogo.jpeg`,
    description:
      "GenoxLabs is a next-generation technology platform engineered to redefine innovation.",
    sameAs: [
      "https://twitter.com/genoxlabs",
      "https://linkedin.com/company/genoxlabs",
      "https://github.com/genoxlabs",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      url: BASE_URL,
    },
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="theme-color" content="#800080" />
        <meta name="color-scheme" content="dark" />
        <meta name="msapplication-TileColor" content="#800080" />
        <meta name="msapplication-TileImage" content="/android-chrome-192x192.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
