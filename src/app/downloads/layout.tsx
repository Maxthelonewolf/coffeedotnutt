import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Downloads - Get Coffee & Donut TV App | Android, iOS, Firestick",
  description: "Download Coffee & Donut TV app for Android, iOS, Firestick, Smart TV, and more. Choose between Mobile App or TV App based on your device. Easy setup, instant streaming.",
  keywords: [
    "IPTV app download",
    "streaming app",
    "Android IPTV",
    "iOS IPTV",
    "Firestick app",
    "Smart TV app",
    "IPTV player",
    "streaming app download"
  ],
  openGraph: {
    title: "Download Coffee & Donut TV App | All Devices Supported",
    description: "Download our IPTV app for Android, iOS, Firestick, Smart TV, and more. Choose the perfect app for your device.",
    url: "https://www.coffeedonuttv.com/downloads",
  },
  alternates: {
    canonical: "https://www.coffeedonuttv.com/downloads",
  },
};

export default function DownloadsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
