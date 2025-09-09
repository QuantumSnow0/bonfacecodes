import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "BonfaceCodes - Full-Stack Developer | Available for Hire",
  description:
    "Hi, I'm Bonface - I build modern web & mobile apps. Turning ideas into code. Available for hire. Featured project: FreshBusket.co.ke (for sale)",
  viewport:
    "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
  keywords: [
    "developer",
    "web development",
    "mobile apps",
    "React",
    "Next.js",
    "Node.js",
    "M-Pesa",
    "Kenya",
    "hire developer",
    "FreshBusket",
  ],
  authors: [{ name: "Bonface" }],
  creator: "BonfaceCodes",
  openGraph: {
    title: "BonfaceCodes - Full-Stack Developer | Available for Hire",
    description:
      "Hi, I'm Bonface - I build modern web & mobile apps. Turning ideas into code. Available for hire.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://bonfacecodes.vercel.app",
    siteName: "BonfaceCodes",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BonfaceCodes - Full-Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BonfaceCodes - Full-Stack Developer | Available for Hire",
    description:
      "Hi, I'm Bonface - I build modern web & mobile apps. Turning ideas into code. Available for hire.",
    images: [
      `${
        process.env.NEXT_PUBLIC_SITE_URL || "https://bonfacecodes.vercel.app"
      }/og-image.jpg`,
    ],
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
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
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
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
