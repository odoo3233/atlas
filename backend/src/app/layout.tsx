import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { ThemeProvider } from '@/components/theme-provider'
import { I18nProvider } from '@/components/i18n-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Atlas Al-Sharq | Exhibitions & Conferences',
  description: 'Organizing exhibitions and events, connecting businesses between China and Saudi Arabia',
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  // Default to Arabic (RTL) if no locale is specified
  const dir = params.locale === 'en' || params.locale === 'zh' ? 'ltr' : 'rtl'
  
  return (
    <html lang={params.locale || 'ar'} dir={dir}>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <I18nProvider>
            {children}
          </I18nProvider>
        </ThemeProvider>
        <Script id="ms-clarity" strategy="afterInteractive">   
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "kqj8qj8qj8");
        `}
        </Script>
      </body>
    </html>
  )
}
