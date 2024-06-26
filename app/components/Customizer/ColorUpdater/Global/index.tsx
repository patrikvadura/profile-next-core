'use client'
import React, { useEffect } from 'react'
import { ColorUpdaterProps } from '@/app/lib/customizer'

const ColorUpdaterGlobal: React.FC<ColorUpdaterProps> = ({
  primaryGlobalColor,
  secondaryGlobalColor,
  accentGlobalColor,
}) => {
  useEffect(() => {
    document.documentElement.style.setProperty('--global-primary', primaryGlobalColor)
    document.documentElement.style.setProperty('--global-secondary', secondaryGlobalColor)
    document.documentElement.style.setProperty('--global-accent', accentGlobalColor)
  }, [primaryGlobalColor, secondaryGlobalColor, accentGlobalColor])

  return null
}

export default ColorUpdaterGlobal
