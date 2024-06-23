'use client'

import React, { useEffect } from 'react'
import { ColorUpdaterProps } from '@/app/lib/customizer'

const ColorUpdaterContact: React.FC<ColorUpdaterProps> = ({
  backgroundColor,
  accentBgColor,
  accentFgColor,
  typoColor,
}) => {
  useEffect(() => {
    document.documentElement.style.setProperty('--contact-background', backgroundColor)
    document.documentElement.style.setProperty('--contact-accent-bg', accentBgColor)
    document.documentElement.style.setProperty('--contact-accent-fg', accentFgColor)
    document.documentElement.style.setProperty('--contact-typo', typoColor)
  }, [backgroundColor, accentBgColor, accentFgColor, typoColor])

  return null
}

export default ColorUpdaterContact
