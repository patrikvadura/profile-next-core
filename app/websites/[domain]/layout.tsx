import React from 'react'
import type { Metadata } from 'next'
import Providers from '@/app/websites/providers'
import '@/app/globals.css'
import { MongoClient } from 'mongodb'

async function fetchData(domain: string) {
  const client = await MongoClient.connect(process.env.MONGODB_URI!)
  const db = client.db('studioDatabase')
  const collection = db.collection('websitesData')

  const data = await collection.findOne({ domain: domain })
  client.close()

  if (!data) {
    throw new Error('Data not found')
  }

  return data
}

export async function generateMetadata({
  params,
}: {
  params: { domain: string }
}): Promise<Metadata> {
  const { domain } = params

  let data = null
  try {
    data = await fetchData(domain)
  } catch (error) {
    console.error('Failed to fetch data', error)
  }

  const metaTitleComputed = data?.metaTitle || 'Webová vizitka | VisioSnap'
  const metaDescriptionComputed =
    data?.metaDescription ||
    'Webová vizitka vytvořeno službou VisioSnap. Levné a efektivní řešení webových vizitek, prezentačních webů pro svatby, události a další příležitosti. Neutrácejte za drahé řešení - vsaďte na jistotu.'

  return {
    metadataBase: new URL(
      process.env.NODE_ENV === 'production'
        ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL}`
        : 'http://localhost:3000',
    ),
    title: metaTitleComputed,
    description: metaDescriptionComputed,
    openGraph: {
      images: [
        {
          url: `/openGraphImage.jpg`,
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
          url: `/icon.png`,
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
