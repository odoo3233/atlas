import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Atlas Al-Sharq - شركة أطلس الشرق",
  description:
    "شركة أطلس الشرق للاستشارات الاقتصادية والتجارية - Leading economic and commercial consultancy in the Middle East",
  keywords:
    "Atlas Al-Sharq, أطلس الشرق, consultancy, استشارات, economic, اقتصادية, commercial, تجارية",
  authors: [{ name: "Atlas Al-Sharq" }],
  creator: "Atlas Al-Sharq",
  publisher: "Atlas Al-Sharq",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/assets/logo.png", type: "image/png" },
    ],
    apple: "/assets/logo.png",
  },
  openGraph: {
    title: "Atlas Al-Sharq - شركة أطلس الشرق",
    description:
      "Leading economic and commercial consultancy in the Middle East",
    images: ["/assets/logo.png"],
    locale: "ar_SA",
    alternateLocale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atlas Al-Sharq - شركة أطلس الشرق",
    description:
      "Leading economic and commercial consultancy in the Middle East",
    images: ["/assets/logo.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#d4893d" },
    { media: "(prefers-color-scheme: dark)", color: "#2d1810" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
