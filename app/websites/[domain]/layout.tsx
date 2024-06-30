import React from 'react'
import type { Metadata } from 'next'
import Providers from '@/app/websites/providers'
import '@/app/globals.css'

export async function generateMetadata({
  params,
}: {
  params: { domain: string }
}): Promise<Metadata> {
  const domain = params.domain

  const websiteURL =
    process.env.NODE_ENV === 'production'
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL}`
      : 'http://localhost:3000/'

  const url = `${websiteURL}/api/getData?domain=${domain}`
  const res = await fetch(url)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const { data } = (await res.json()) || {}

  const metaTitleComputed = data.metaTitle || 'Webová vizitka | VisioSnap'
  const metaDescriptionComputed =
    data.metaDescription ||
    'Webová vizitka vytvořeno službou VisioSnap. Levné a efektivní řešení webových vizitek, prezentačních webů pro svatby, události a další příležitosti. Neutrácejte za drahé řešení - vsaďte na jistotu.'

  return {
    metadataBase: new URL(`${websiteURL}`),
    title: metaTitleComputed,
    description: metaDescriptionComputed,
    openGraph: {
      images: [
        {
          url: `<generated>`,
          width: 1200,
          height: 630,
          alt: 'OpenGraph Image',
          type: 'image/jpeg',
        },
      ],
    },
    icons: {
      icon: [
        {
          url: `/icon?<generated>`,
          sizes: '32x32',
          type: 'image/png',
        },
      ],
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="cs-CZ" className="scroll-smooth" suppressHydrationWarning>
      <Providers>{children}</Providers>
    </html>
  )
}