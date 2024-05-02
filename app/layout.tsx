import data from '@/app/lib/data.json'

import type { Metadata } from 'next'
import React from 'react'
import Head from 'next/head'
import Script from 'next/script'
import { Providers } from '@/app/providers'
import Header from '@/app/ui/Header'
import Footer from '@/app/ui/Footer'
import { Hind } from 'next/font/google'
import './globals.css'

const defaultFont = Hind({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

export const metadata: Metadata = {
  metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
  title: data.meta.title,
  description: data.meta.description,
  openGraph: {
    images: [data.meta.openGraph],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const gtmID: string | undefined = data.profile.gtm.id

  return (
    <html lang="cs-CZ" className="scroll-smooth" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/icon?<generated>" type="image/png" sizes="32x32" />
      </Head>

      {data.profile.gtm.status ? (
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
            })(window,document,'script','dataLayer','${gtmID}');
                      `,
          }}
          strategy="lazyOnload"
        />
      ) : (
        ''
      )}

      <body className={defaultFont.className} suppressHydrationWarning>
        <Providers>
          {data.profile.gtm.status ? (
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${gtmID}`}
                height="0"
                width="0"
                className="hidden invisible"
              ></iframe>
            </noscript>
          ) : (
            ''
          )}

          <Header />
          {children}

          <Footer />
        </Providers>
      </body>
    </html>
  )
}
