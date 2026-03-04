import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Trial - 24 Hour IPTV Trial | Coffee & Donut TV",
  description: "Start your free 24-hour IPTV trial today. No credit card required. Get instant access to 9,500+ live channels and 125,000+ movies & series. Experience premium streaming in 4K quality.",
  keywords: [
    "free IPTV trial",
    "IPTV trial",
    "streaming trial",
    "free trial",
    "24 hour trial",
    "IPTV test",
    "streaming service trial"
  ],
  openGraph: {
    title: "Free 24-Hour IPTV Trial | Coffee & Donut TV",
    description: "Start your free 24-hour IPTV trial. No credit card required. Access 9,500+ channels and 125,000+ movies instantly.",
    url: "https://coffeedonuttv.com/free-trial",
  },
  alternates: {
    canonical: "https://coffeedonuttv.com/free-trial",
  },
};

export default function FreeTrialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
