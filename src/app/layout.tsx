import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Genoxlab | Cinematic Web3 Agency",
  description: "Deploying hyper-performance decentralized systems and immersive digital identities for the next generation of the internet.",
  keywords: ["Web3", "Agency", "Blockchain", "React", "Next.js", "GenoxLabs", "Innovation"],
  authors: [{ name: "GenoxLabs", url: "https://genoxlab.systems" }],
  creator: "GenoxLabs",
  publisher: "GenoxLabs",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://genoxlab.systems",
    siteName: "Genoxlab",
    title: "Genoxlab | Cinematic Web3 Agency",
    description: "Deploying hyper-performance decentralized systems and immersive digital identities.",
    images: [
      {
        url: "/bannerlogo.jpeg",
        width: 1200,
        height: 630,
        alt: "Genoxlab Agency",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
  },
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
    url: "https://genoxlab.systems",
    logo: "https://genoxlab.systems/sqlogo.jpeg",
    description: "GenoxLabs is a next-generation technology platform engineered to redefine innovation.",
    sameAs: [
      "https://twitter.com/genoxlabs",
      "https://linkedin.com/company/genoxlabs",
      "https://github.com/genoxlabs",
    ],
  };

  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} scroll-smooth dark`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased selection:bg-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}
