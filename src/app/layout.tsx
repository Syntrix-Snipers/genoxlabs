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

const SITE_URL = "https://www.genoxlabs.com";
const SITE_NAME = "Genoxlabs";
const TITLE = "Genoxlabs | Digital Solutions, Web Development & Web3 Agency in Sri Lanka";
const DESCRIPTION =
  "Genoxlabs (Genox Labs, GenoxLab, Genex Labs) is Sri Lanka's premier digital solutions company — custom websites, web apps, mobile apps, SEO, branding and Web3 systems. Expert web development and software engineering in Colombo, Sri Lanka.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: TITLE,
    template: "%s | Genoxlabs",
  },
  description: DESCRIPTION,

  // ─── Comprehensive keyword index (brand variations + services + location) ──
  keywords: [
    // Brand name variations & common misspellings
    "Genoxlabs", "GenoxLabs", "Genox Labs", "GenoxLab", "Genox Lab",
    "Genoux Labs", "Genoux", "Genex Labs", "Genex", "Genox", "Genoxlab",
    // Core digital services
    "Digital Solutions Sri Lanka", "Web Development Sri Lanka",
    "Software Company Sri Lanka", "Mobile App Development Sri Lanka",
    "Web Design Sri Lanka", "Web Making Sri Lanka", "Website Creation Sri Lanka",
    "Custom Web Development", "Full Stack Development", "React Development",
    "Next.js Development", "Web Application Development", "Website Developer Sri Lanka",
    "Best Web Developer Sri Lanka", "Cheap Web Development Sri Lanka",
    // Web3 / Blockchain
    "Web3 Agency Sri Lanka", "Blockchain Development Sri Lanka",
    "Decentralized Applications", "Smart Contract Development", "NFT Development",
    // SEO & Marketing  
    "SEO Services Sri Lanka", "Digital Marketing Sri Lanka",
    "UI UX Design Sri Lanka", "Branding Agency Sri Lanka",
    // Location
    "Tech Company Colombo", "IT Company Sri Lanka", "Software Agency Colombo",
    "Digital Agency Sri Lanka", "Web Agency Colombo", "IT Solutions Colombo",
    "Software Development Colombo", "Technology Company Sri Lanka",
  ],

  authors: [{ name: "GenoxLabs", url: `${SITE_URL}/` }],
  creator: "GenoxLabs",
  publisher: "GenoxLabs",
  category: "Technology",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ─── Open Graph (Facebook, LinkedIn previews) ────────────────────────────
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${SITE_URL}/`,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/bannerlogo.jpeg",
        width: 1200,
        height: 630,
        alt: "Genoxlabs — Digital Solutions & Web3 Agency, Sri Lanka",
        type: "image/jpeg",
      },
      {
        url: "/sqlogo.jpeg",
        width: 512,
        height: 512,
        alt: "Genoxlabs Logo",
        type: "image/jpeg",
      },
    ],
  },

  // ─── Twitter / X Card ────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    site: "@genoxlabs",
    creator: "@genoxlabs",
    images: ["/bannerlogo.jpeg"],
  },

  // ─── Favicons & App Icons ─────────────────────────────────────────────────
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
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },

  // ─── PWA Manifest ────────────────────────────────────────────────────────
  manifest: "/site.webmanifest",

  // ─── Verification (fill in after Google Search Console setup) ────────────
  verification: {
    // google: "PASTE_YOUR_GOOGLE_VERIFICATION_CODE_HERE",
  },
};

// ─── Structured Data (Schema.org) ─────────────────────────────────────────

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": `${SITE_URL}/#organization`,
  name: "GenoxLabs",
  alternateName: ["Genox Labs", "GenoxLab", "Genex Labs", "Genoux Labs"],
  url: `${SITE_URL}/`,
  logo: {
    "@type": "ImageObject",
    "@id": `${SITE_URL}/#logo`,
    url: `${SITE_URL}/sqlogo.jpeg`,
    contentUrl: `${SITE_URL}/sqlogo.jpeg`,
    width: 512,
    height: 512,
    caption: "GenoxLabs Logo",
  },
  image: {
    "@type": "ImageObject",
    url: `${SITE_URL}/bannerlogo.jpeg`,
    width: 1200,
    height: 630,
    caption: "GenoxLabs — Digital Solutions Agency Sri Lanka",
  },
  description:
    "GenoxLabs is Sri Lanka's leading digital solutions company specialising in web development, mobile apps, Web3 systems, and digital branding.",
  foundingDate: "2023",
  areaServed: ["Sri Lanka", "Global"],
  address: {
    "@type": "PostalAddress",
    addressCountry: "LK",
    addressLocality: "Colombo",
    addressRegion: "Western Province",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: ["English", "Sinhala"],
  },
  sameAs: [
    "https://twitter.com/genoxlabs",
    "https://linkedin.com/company/genoxlabs",
    "https://github.com/genoxlabs",
    "https://facebook.com/genoxlabs",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Solutions Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile App Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web3 & Blockchain Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO & Digital Marketing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "UI/UX Design & Branding" } },
    ],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "Genoxlabs",
  alternateName: "Genox Labs | Digital Solutions Sri Lanka",
  url: `${SITE_URL}/`,
  description: DESCRIPTION,
  inLanguage: "en-US",
  publisher: { "@id": `${SITE_URL}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/?s={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/#webpage`,
  url: `${SITE_URL}/`,
  name: TITLE,
  description: DESCRIPTION,
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#organization` },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: `${SITE_URL}/bannerlogo.jpeg`,
    width: 1200,
    height: 630,
  },
  inLanguage: "en-US",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_URL}/`,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} scroll-smooth dark`}>
      <head>
        {/* ─── Favicons — explicit links guarantee all browsers show the right icon ─── */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Browser / PWA theme colour */}
        <meta name="theme-color" content="#020617" />
        <meta name="msapplication-TileColor" content="#020617" />
        <meta name="msapplication-TileImage" content="/android-chrome-192x192.png" />
        <meta name="application-name" content="Genoxlabs" />
        <meta name="apple-mobile-web-app-title" content="Genoxlabs" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* Material Symbols font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />

        {/* Structured Data — Organisation + WebSite + WebPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema, webPageSchema]),
          }}
        />
      </head>
      <body className="antialiased selection:bg-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}
