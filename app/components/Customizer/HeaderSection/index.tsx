import React from 'react'
import Head from 'next/head'
import DynamicFontLoader from '@/app/components/Customizer/DynamicFontLoader'
import HeaderCustomizer from '@/app/components/Customizer/HeaderCustomizer'

interface Props {
  fontName: string
  fontWeights: string[] | any | undefined
}

export default function HeaderSection({ fontName, fontWeights }: Props) {
  // @ts-ignore
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>

      <DynamicFontLoader fontName={fontName} fontWeights={fontWeights} />
    </>
  )
}
