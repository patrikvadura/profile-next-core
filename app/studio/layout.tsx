import React from 'react'
import type { Metadata } from 'next'
import data from '@/app/lib/dataCustomizer.json'
import Script from 'next/script'
import Providers from '@/app/providers'
import HeaderCustomizer from '@/app/components/Customizer/HeaderCustomizer'
import { Inter } from 'next/font/google'
import '@/app/globals.css'

const customizerFont = Inter({ subsets: ['latin'], weight: ['300', '400', '700', '900'] })

export const metadata: Metadata = {
  metadataBase: new URL(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`),
  title: data.meta.title,
  description: data.meta.description,
  openGraph: {
    images: [
      {
        url: `/assets/img/studio/openGraph.jpg`,
        width: 1200,
        height: 630,
        alt: data.meta.openGraph.alt,
        type: 'image/jpeg',
      },
    ],
  },
  icons: {
    icon: [
      {
        url: `/assets/img/studio/favicon.ico`,
        sizes: '32x32',
        type: 'image/png',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const gtmCustomizerID: string | undefined = data.gtm.id

  return (
    <html lang="cs-CZ" className="scroll-smooth" suppressHydrationWarning>
      {data.gtm.status ? (
        <Script
          id="Google Analytics"
          data-category="analytics"
          data-service="Google Analytics"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmCustomizerID}');
                      `,
          }}
          strategy="lazyOnload"
        />
      ) : (
        ''
      )}
      <Providers>
        <body className={customizerFont.className} suppressHydrationWarning>
          {data.gtm.status ? (
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${gtmCustomizerID}`}
                height="0"
                width="0"
                className="hidden invisible"
              ></iframe>
            </noscript>
          ) : (
            ''
          )}
          <div className="bg-primary w-screen h-screen flex flex-row overflow-hidden">
            <HeaderCustomizer />
            {children}
          </div>
        </body>
      </Providers>
    </html>
  )
}
