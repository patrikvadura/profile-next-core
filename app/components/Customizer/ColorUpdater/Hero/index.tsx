'use client'
import React, { useEffect } from 'react'
import { ColorUpdaterProps } from '@/app/lib/customizer'

const ColorUpdaterHero: React.FC<ColorUpdaterProps> = ({
  backgroundColor,
  accentBgColor,
  accentFgColor,
  typoColor,
  typoLgColor,
}) => {
  useEffect(() => {
    document.documentElement.style.setProperty('--hero-background', backgroundColor)
    document.documentElement.style.setProperty('--hero-accent-bg', accentBgColor)
    document.documentElement.style.setProperty('--hero-accent-fg', accentFgColor)
    document.documentElement.style.setProperty('--hero-typo', typoColor)
    document.documentElement.style.setProperty('--hero-typo-lg', typoLgColor)
  }, [backgroundColor, accentBgColor, accentFgColor, typoColor, typoLgColor])

  return null
}

export default ColorUpdaterHero
