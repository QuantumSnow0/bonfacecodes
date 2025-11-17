import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://bonfacecodes.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "BonfaceCodes - Full-Stack Developer | Available for Hire",
    template: "%s | BonfaceCodes",
  },
  description:
    "Bonface is a full-stack developer from Kenya specializing in modern web and mobile applications. Expert in React, Next.js, React Native, and M-Pesa integrations. Available for hire. View portfolio including Safaricom Shop Ruaka and PhoneUp Kenya.",
  keywords: [
    "full-stack developer",
    "web developer Kenya",
    "React developer",
    "Next.js developer",
    "React Native developer",
    "mobile app developer",
    "M-Pesa integration",
    "Node.js developer",
    "TypeScript developer",
    "hire developer Kenya",
    "freelance developer",
    "web development services",
    "e-commerce developer",
    "business website developer",
    "BonfaceCodes",
  ],
  authors: [{ name: "Bonface", url: siteUrl }],
  creator: "BonfaceCodes",
  publisher: "BonfaceCodes",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BonfaceCodes - Full-Stack Developer | Available for Hire",
    description:
      "Full-stack developer from Kenya specializing in React, Next.js, React Native, and M-Pesa integrations. Available for hire. View my portfolio of client projects including Safaricom Shop Ruaka and PhoneUp Kenya.",
    url: siteUrl,
    siteName: "BonfaceCodes",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "BonfaceCodes - Full-Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BonfaceCodes - Full-Stack Developer | Available for Hire",
    description:
      "Full-stack developer from Kenya. Expert in React, Next.js, React Native, and M-Pesa integrations. Available for hire.",
    images: [`${siteUrl}/og-image.jpg`],
    creator: "@bonfacecodes",
  },
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
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Bonface",
    alternateName: "BonfaceCodes",
    jobTitle: "Full-Stack Developer",
    description:
      "Full-stack developer from Kenya specializing in modern web and mobile applications",
    url: siteUrl,
    sameAs: [
      "https://github.com/QuantumSnow0",
      "https://linkedin.com/in/bonface-mbabu-9153a8159",
    ],
    knowsAbout: [
      "Web Development",
      "Mobile App Development",
      "React",
      "Next.js",
      "React Native",
      "Node.js",
      "M-Pesa Integration",
      "TypeScript",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "KE",
      addressLocality: "Nairobi",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const stored = localStorage.getItem('bonfacecodes-theme');
                if (stored === 'dark') {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <GoogleAnalytics />
        <SpeedInsights />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
