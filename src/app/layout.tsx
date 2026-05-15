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
  keywords: [
    "Genoxlabs", "Genox Labs", "GenoxLab", "Genex Labs", "Web Development Sri Lanka",
    "Software Company Sri Lanka", "Mobile App Development Sri Lanka", "Web Design Sri Lanka",
    "Web3 Agency Sri Lanka", "Blockchain Development Sri Lanka", "SEO Services Sri Lanka",
    "Digital Agency Colombo", /* ... rest of your keywords */
  ],
  authors: [{ name: "GenoxLabs", url: SITE_URL }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    images: [
      { url: "/bannerlogo.jpeg", width: 1200, height: 630, alt: "Genoxlabs" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/bannerlogo.jpeg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} scroll-smooth dark`}>
      <head>
        {/* Material Symbols */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema, webPageSchema]),
          }}
        />
      </head>

      <body
        className="antialiased selection:bg-primary selection:text-white"
        suppressHydrationWarning={true}   // ← This fixes the error
      >
        {children}
      </body>
    </html>
  );
}

// ─── Structured Data (Schema.org) ─────────────────────────────────────────
const organizationSchema = { /* ... your existing organizationSchema ... */ };
const websiteSchema = { /* ... your existing websiteSchema ... */ };
const webPageSchema = { /* ... your existing webPageSchema ... */ };