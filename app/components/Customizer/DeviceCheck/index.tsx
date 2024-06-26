'use client'
import React, { useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'
import DeviceCheckAlert from './Alert'

interface Props {
  disable?: boolean
  children?: React.ReactNode
}

export default function DeviceCheck({ children, disable }: Props) {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    setIsDesktop(!isMobile)
  }, [])

  if (!disable && !isDesktop) {
    return <DeviceCheckAlert />
  }

  return <>{children}</>
}
