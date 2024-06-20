'use client'
import React, { useState } from 'react'
import colors from '@/app/lib/colors.json'
import { ColorPickerProps } from '@/app/lib/customizer'
import classes from '../index.module.scss'

const ColorPickerReference: React.FC<ColorPickerProps> = ({
  backgroundColor,
  accentBgColor,
  typoColor,
  typoLgColor,
}) => {
  const [backgroundColorValue, setBackgroundColor] = useState(colors.reference.background)
  const [accentBgColorValue, setAccentBgColor] = useState(colors.reference.accent.background)
  const [typoColorValue, setTypoColor] = useState(colors.reference.typo)
  const [typoLgColorValue, setTypoLgColor] = useState(colors.reference.typoLg)

  const handleBackgroundChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = event.target.value
    setBackgroundColor(newColor)
    if (backgroundColor) {
      backgroundColor(newColor)
    }
  }

  const handleAccentBgChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = event.target.value
    setAccentBgColor(newColor)
    if (accentBgColor) {
      accentBgColor(newColor)
    }
  }

  const handleTypoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = event.target.value
    setTypoColor(newColor)
    if (typoColor) {
      typoColor(newColor)
    }
  }

  const handleTypoLgChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = event.target.value
    setTypoLgColor(newColor)
    if (typoLgColor) {
      typoLgColor(newColor)
    }
  }

  return (
    <div className="grid grid-cols-3 gap-y-4 text-xs">
      <div className="flex flex-col items-start">
        <input
          type="color"
          value={backgroundColorValue}
          className={classes.picker}
          onChange={handleBackgroundChange}
        />
        Pozadí
      </div>

      <div className="flex flex-col items-start">
        <input
          type="color"
          value={accentBgColorValue}
          className={classes.picker}
          onChange={handleAccentBgChange}
        />
        Akcent
      </div>

      <div className="flex flex-col items-start">
        <input
          type="color"
          value={typoColorValue}
          className={classes.picker}
          onChange={handleTypoChange}
        />
        Typografie
      </div>

      <div className="flex flex-col items-start">
        <input
          type="color"
          value={typoLgColorValue}
          className={classes.picker}
          onChange={handleTypoLgChange}
        />
        Moving text
      </div>
    </div>
  )
}

export default ColorPickerReference
