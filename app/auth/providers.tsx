'use client'

import React, { useEffect, useState } from 'react'
import Preloader from '@/app/ui/Preloader/Studio'

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

  console.log('Rendering Providers with SessionProvider')

  return <>{children}</>
}
