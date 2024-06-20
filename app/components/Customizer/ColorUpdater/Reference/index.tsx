'use client'

import React, { useEffect } from 'react'
import { ColorUpdaterProps } from '@/app/lib/customizer'

const ColorPickerService: React.FC<ColorUpdaterProps> = ({
  backgroundColor,
  accentBgColor,
  typoColor,
  typoLgColor,
}) => {
  useEffect(() => {
    document.documentElement.style.setProperty('--reference-background', backgroundColor)
    document.documentElement.style.setProperty('--reference-accent-bg', accentBgColor)
    document.documentElement.style.setProperty('--reference-typo', typoColor)
    document.documentElement.style.setProperty('--reference-typo-lg', typoLgColor)
  }, [backgroundColor, accentBgColor, typoColor, typoLgColor])

  return null
}

export default ColorPickerService
