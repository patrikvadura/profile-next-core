'use client'
import React, { useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'
import DeviceCheckAlert from './Alert'

export default function DeviceCheck({ children }: Readonly<{ children: React.ReactNode }>) {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    setIsDesktop(!isMobile)
  }, [])

  if (!isDesktop) {
    return <DeviceCheckAlert />
  }

  return { children }
}
