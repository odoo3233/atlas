import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/components/i18n-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cairo = Cairo({ subsets: ["arabic"], variable: "--font-cairo" });

export const metadata: Metadata = {
  metadataBase: new URL('https://atlas-al-sharq.com'),
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
};

export function generateViewport() {
  return {
    themeColor: [
      { media: "(prefers-color-scheme: light)", color: "#fefae0" }, // cornsilk
      { media: "(prefers-color-scheme: dark)", color: "#283618" },  // pakistan-green
    ],
    viewport: {
      width: "device-width",
      initialScale: 1,
      maximumScale: 5,
    },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body className={`${cairo.className} ${inter.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <I18nProvider>
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
