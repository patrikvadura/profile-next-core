'use client'
import React, { useEffect } from 'react'
import { ColorUpdaterProps } from '@/app/lib/customizer'

const ColorPickerService: React.FC<ColorUpdaterProps> = ({
  backgroundColor,
  accentBgColor,
  accentFgColor,
  typoColor,
  boxBackgroundColor,
  boxTypoColor,
  boxIconColor,
}) => {
  useEffect(() => {
    document.documentElement.style.setProperty('--service-background', backgroundColor)
    document.documentElement.style.setProperty('--service-accent-bg', accentBgColor)
    document.documentElement.style.setProperty('--service-accent-fg', accentFgColor)
    document.documentElement.style.setProperty('--service-typo', typoColor)
    document.documentElement.style.setProperty('--service-box-background', boxBackgroundColor)
    document.documentElement.style.setProperty('--service-box-typo', boxTypoColor)
    document.documentElement.style.setProperty('--service-box-icon', boxIconColor)
  }, [
    backgroundColor,
    accentBgColor,
    accentFgColor,
    typoColor,
    boxBackgroundColor,
    boxTypoColor,
    boxIconColor,
  ])

  return null
}

export default ColorPickerService
