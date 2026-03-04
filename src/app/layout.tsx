import type { Metadata } from "next";
import "./globals.css";
import { ClientBody } from "./ClientBody";
import StructuredData from "@/components/StructuredData";

const siteUrl = "https://www.coffeedonuttv.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Coffee & Donut TV - Premium IPTV Streaming Service | 9,500+ Channels",
    template: "%s | Coffee & Donut TV"
  },
  description: "Premium IPTV streaming service with 9,500+ live channels, 125,000+ movies & series. Watch in 4K quality on any device. Starting at $6/month. 24-hour free trial available.",
  keywords: [
    "IPTV",
    "streaming service",
    "live TV",
    "movies",
    "TV series",
    "entertainment",
    "4K streaming",
    "premium IPTV",
    "streaming channels",
    "on-demand content",
    "Firestick",
    "Android TV",
    "Smart TV",
    "streaming platform"
  ],
  authors: [{ name: "Coffee & Donut TV" }],
  creator: "Coffee & Donut TV",
  publisher: "Coffee & Donut TV",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "https://ext.same-assets.com/2445618519/4009277168.png", sizes: "any" },
    ],
    apple: [
      { url: "https://ext.same-assets.com/2445618519/4009277168.png", sizes: "180x180" },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Coffee & Donut TV",
    title: "Coffee & Donut TV - Premium IPTV Streaming Service",
    description: "Stream 9,500+ live channels, 125,000+ movies & series in 4K quality. Premium IPTV service starting at $6/month. Free 24-hour trial available.",
    images: [
      {
        url: "https://ext.same-assets.com/2445618519/4009277168.png",
        width: 1200,
        height: 630,
        alt: "Coffee & Donut TV - Premium Streaming Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coffee & Donut TV - Premium IPTV Streaming Service",
    description: "Stream 9,500+ live channels, 125,000+ movies & series in 4K quality. Starting at $6/month.",
    images: ["https://ext.same-assets.com/2445618519/4009277168.png"],
    creator: "@coffeedonuttv",
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
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "entertainment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <StructuredData />
      </head>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
