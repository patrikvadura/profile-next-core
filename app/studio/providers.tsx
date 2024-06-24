'use client'

import React, { useEffect, useState } from 'react'
import { BreakpointProvider } from '@/app/components/Customizer/Breakpoint/Context'
import { DomainProvider } from '@/app/components/Customizer/DNSChecker/DomainContext'
import Preloader from '@/app/ui/Preloader/Studio'
import DeviceCheck from '@/app/components/Customizer/DeviceCheck'

interface Props {
  children?: React.ReactNode
}

export default function Providers({ children }: Props) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading process
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Preloader />
  }

  return (
    <DomainProvider>
      <BreakpointProvider>
        <DeviceCheck>{children}</DeviceCheck>
      </BreakpointProvider>
    </DomainProvider>
  )
}
