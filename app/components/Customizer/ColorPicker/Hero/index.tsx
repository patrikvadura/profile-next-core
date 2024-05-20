'use client'
import React, { useState } from 'react'
import colors from '@/app/lib/colors.json'
import { ColorPickerProps } from '@/app/lib/customizer'
import classes from '../index.module.scss'

const ColorPickerHero: React.FC<ColorPickerProps> = ({
  backgroundColor,
  accentBgColor,
  accentFgColor,
  typoColor,
  typoLgColor,
}) => {
  const [backgroundColorValue, setBackgroundColor] = useState(colors.hero.background)
  const [accentBgColorValue, setAccentBgColor] = useState(colors.hero.accent.background)
  const [accentFgColorValue, setAccentFgColor] = useState(colors.hero.accent.foreground)
  const [typoColorValue, setTypoColor] = useState(colors.hero.typo)
  const [typoLgColorValue, setTypoLgColor] = useState(colors.hero.typoLg)

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

  const handleTypoLgChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = event.target.value
    setTypoLgColor(newColor)
    if (typoLgColor) {
      typoLgColor(newColor)
    }
  }

  return (
    <div className="flex flex-row flex-wrap justify-between gap-y-4 text-xs">
      <div className="basis-1/5 flex flex-col items-start">
        <input
          type="color"
          value={backgroundColorValue}
          className={classes.picker}
          onChange={handleBackgroundChange}
        />
        Pozadí
      </div>

      <div className="basis-1/5 flex flex-col items-start">
        <input
          type="color"
          value={accentBgColorValue}
          className={classes.picker}
          onChange={handleAccentBgChange}
        />
        Akcent - pozadí
      </div>

      <div className="basis-1/5 flex flex-col items-start">
        <input
          type="color"
          value={accentFgColorValue}
          className={classes.picker}
          onChange={handleAccentFgChange}
        />
        Akcent - popředí
      </div>

      <div className="basis-1/5 flex flex-col items-start">
        <input
          type="color"
          value={typoColorValue}
          className={classes.picker}
          onChange={handleTypoChange}
        />
        Typografie
      </div>

      <div className="basis-1/5 flex flex-col items-start">
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

export default ColorPickerHero
