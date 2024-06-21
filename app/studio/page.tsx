import React from 'react'
import Customizer from '@/app/components/Customizer'
import Providers from '@/app/studio/providers'

export default function Preview() {
  return (
    <Providers>
      <Customizer />
    </Providers>
  )
}
