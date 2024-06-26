import React from 'react'
import Customizer from '@/app/components/Customizer'
import Providers from '@/app/studio/providers'
import data from '@/app/lib/dataLandingPage.json'
import Head from 'next/head'

export default function Preview() {
  return (
    <Providers>
      <Customizer />
    </Providers>
  )
}
