import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Atlas Al-Sharq - شركة أطلس الشرق",
  description: "شركة أطلس الشرق للاستشارات الاقتصادية والتجارية",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
