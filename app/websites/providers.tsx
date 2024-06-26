'use client'

import React, { useEffect, useState } from 'react'
import Preloader from '@/app/ui/Preloader/Websites'

interface Props {
  children?: React.ReactNode
}

export default function Providers({ children }: Props) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading process
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Preloader />
  }

  return <>{children}</>
}
