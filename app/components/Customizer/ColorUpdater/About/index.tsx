'use client'
import React, { useEffect } from 'react'
import { ColorUpdaterProps } from '@/app/lib/customizer'

const ColorUpdaterAbout: React.FC<ColorUpdaterProps> = ({
  backgroundColor,
  accentBgColor,
  accentFgColor,
  typoColor,
}) => {
  useEffect(() => {
    document.documentElement.style.setProperty('--about-background', backgroundColor)
    document.documentElement.style.setProperty('--about-accent-bg', accentBgColor)
    document.documentElement.style.setProperty('--about-accent-fg', accentFgColor)
    document.documentElement.style.setProperty('--about-typo', typoColor)
  }, [backgroundColor, accentBgColor, accentFgColor, typoColor])

  return null
}

export default ColorUpdaterAbout
