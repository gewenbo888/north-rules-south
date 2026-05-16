import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://north-rules-south.psyverse.fun"),
  title: "North Rules South · 北治南 — A Theory of Conquest Dynasties",
  description:
    "The matrix of twelve civilizations where Northern peoples ruled Southern ones — Manchu Qing, Mughal India, Ottoman Caliphate, Qajar Persia, Holy Roman Germany, the Japanese Empire, and the Anglo-Saxon order that dissolved them all.",
  keywords: [
    "北治南",
    "conquest dynasty",
    "Manchu Qing",
    "Mughal Empire",
    "Ottoman Empire",
    "Qajar Persia",
    "Holy Roman Empire",
    "Anglo-Saxon",
    "Pax Britannica",
    "civilizational analysis",
    "nomadic conquest",
    "world history",
    "wude",
    "martial virtue",
    "Pax Americana",
  ],
  authors: [{ name: "Gewenbo", url: "https://psyverse.fun" }],
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      "zh-CN": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "North Rules South · 北治南" }],
    title: "North Rules South · 北治南",
    description:
      "Twelve civilizations, four millennia, one pattern: forest, steppe, and sea-faring Northerners conquering the great agrarian Souths.",
    url: "https://north-rules-south.psyverse.fun/",
    siteName: "Psyverse",
    type: "website",
    locale: "en_US",
    alternateLocale: ["zh_CN"],
  },
  twitter: {
    images: ["/twitter-image.png"],
    card: "summary_large_image",
    title: "North Rules South · 北治南",
    description: "A theory of conquest dynasties — and the Anglo-Saxon order that dissolved them.",
  },
  robots: { index: true, follow: true },
  other: { "theme-color": "#0c0d10" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Script
          src="https://analytics-dashboard-two-blue.vercel.app/tracker.js"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}
