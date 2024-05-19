'use client'
import React, { useState } from 'react'
import colors from '@/app/lib/colors.json'
import { ColorPickerAboutProps } from '@/app/lib/customizer'
import classes from '../index.module.scss'

const ColorPickerAbout: React.FC<ColorPickerAboutProps> = ({
  backgroundColor,
  accentBgColor,
  accentFgColor,
  typoColor,
}) => {
  const [backgroundColorValue, setBackgroundColor] = useState(colors.about.background)
  const [accentBgColorValue, setAccentBgColor] = useState(colors.about.accent.background)
  const [accentFgColorValue, setAccentFgColor] = useState(colors.about.accent.foreground)
  const [typoColorValue, setTypoColor] = useState(colors.about.typo)

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

  const handleAccentFgChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = event.target.value
    setAccentFgColor(newColor)
    if (accentFgColor) {
      accentFgColor(newColor)
    }
  }

  const handleTypoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = event.target.value
    setTypoColor(newColor)
    if (typoColor) {
      typoColor(newColor)
    }
  }

  return (
    <div className="flex flex-row flex-wrap justify-between gap-y-4 text-xs">
      <div className="basis-1/4 flex flex-col items-start">
        <input
          type="color"
          value={backgroundColorValue}
          className={classes.picker}
          onChange={handleBackgroundChange}
        />
        Pozadí
      </div>

      <div className="basis-1/4 flex flex-col items-start">
        <input
          type="color"
          value={accentBgColorValue}
          className={classes.picker}
          onChange={handleAccentBgChange}
        />
        Akcent - pozadí
      </div>

      <div className="basis-1/4 flex flex-col items-start">
        <input
          type="color"
          value={accentFgColorValue}
          className={classes.picker}
          onChange={handleAccentFgChange}
        />
        Akcent - popředí
      </div>

      <div className="basis-1/4 flex flex-col items-start">
        <input
          type="color"
          value={typoColorValue}
          className={classes.picker}
          onChange={handleTypoChange}
        />
        Typografie
      </div>
    </div>
  )
}

export default ColorPickerAbout
