import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
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
  title: "Genoxlab | Digital Solutions & Web3 Agency in Sri Lanka",
  description: "Genoxlab is a leading digital solutions company in Sri Lanka, deploying hyper-performance decentralized systems, custom web applications, and immersive digital identities.",
  keywords: ["Digital Solutions Sri Lanka", "Web3 Agency", "Software Company", "GenoxLabs", "Sri Lankan Tech Company", "Web Development", "App Development"],
  authors: [{ name: "GenoxLabs", url: "https://www.genoxlabs.com/" }],
  creator: "GenoxLabs",
  publisher: "GenoxLabs",
  metadataBase: new URL("https://www.genoxlabs.com"),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.genoxlabs.com/",
    siteName: "Genoxlab",
    title: "Genoxlab | Digital Solutions & Web3 Agency in Sri Lanka",
    description: "Leading digital solutions company in Sri Lanka. Deploying hyper-performance software systems and immersive digital identities.",
    images: [
      {
        url: "/bannerlogo.jpeg",
        width: 1200,
        height: 630,
        alt: "Genoxlab Digital Solutions Agency",
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
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GenoxLabs",
    url: "https://www.genoxlabs.com/",
    logo: {
      "@type": "ImageObject",
      "url": "https://www.genoxlabs.com/sqlogo.jpeg",
      "width": 512,
      "height": 512
    },
    image: [
      "https://www.genoxlabs.com/bannerlogo.jpeg",
      "https://www.genoxlabs.com/sqlogo.jpeg"
    ],
    description: "GenoxLabs is a leading digital solutions company in Sri Lanka, engineering next-generation technological platforms.",
    address: {
      "@type": "PostalAddress",
      "addressCountry": "LK",
      "addressLocality": "Sri Lanka"
    },
    sameAs: [
      "https://twitter.com/genoxlabs",
      "https://linkedin.com/company/genoxlabs",
      "https://github.com/genoxlabs",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Genoxlab | Digital Solutions & Web3 Agency",
    url: "https://www.genoxlabs.com/",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.genoxlabs.com/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} scroll-smooth dark`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationSchema, websiteSchema]) }}
        />
      </head>
      <body className="antialiased selection:bg-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}
