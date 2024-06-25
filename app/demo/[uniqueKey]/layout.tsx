import React from 'react'
import type { Metadata } from 'next'
import Providers from '@/app/demo/providers'
import '@/app/globals.css'

export async function generateMetadata({
  params,
}: {
  params: { uniqueKey: string }
}): Promise<Metadata> {
  const uniqueKey = params.uniqueKey
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/getData?uniqueKey=${uniqueKey}`
  const res = await fetch(url)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const { data } = await res.json()

  return {
    metadataBase: new URL(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`),
    title: data.metaTitle || 'Webová vizitka | VisioSnap',
    description:
      data.metaDescription ||
      'Webová vizitka vytvořeno službou VisioSnap. Levné a efektivní řešení webových vizitek, prezentačních webů pro svatby, události a další příležitosti. Neutrácejte za drahé řešení - vsaďte na jistotu.',
    openGraph: {
      images: [
        {
          url: `<generated>`,
          width: 1200,
          height: 630,
          alt: data.metaTitle || 'OpenGraph Image',
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
