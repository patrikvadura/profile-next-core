import React from 'react'
import Customizer from '@/app/components/Customizer'
import { DomainProvider } from '@/app/components/Customizer/DNSChecker/DomainContext'

export default function Preview() {
  return (
    <DomainProvider>
      <Customizer />
    </DomainProvider>
  )
}
