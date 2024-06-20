'use client'
import React, { useState } from 'react'
import colors from '@/app/lib/colors.json'
import { ColorPickerProps } from '@/app/lib/customizer'
import classes from '../index.module.scss'

const ColorPickerService: React.FC<ColorPickerProps> = ({
  backgroundColor,
  accentBgColor,
  accentFgColor,
  typoColor,
  boxBackgroundColor,
  boxTypoColor,
  boxIconColor,
}) => {
  const [backgroundColorValue, setBackgroundColor] = useState(colors.service.background)
  const [accentBgColorValue, setAccentBgColor] = useState(colors.service.accent.background)
  const [accentFgColorValue, setAccentFgColor] = useState(colors.service.accent.foreground)
  const [typoColorValue, setTypoColor] = useState(colors.service.typo)
  const [boxBackgroundColorValue, setBoxBackgroundColor] = useState(colors.service.box.background)
  const [boxTypoColorValue, setBoxTypoColor] = useState(colors.service.box.typo)
  const [boxIconColorValue, setBoxIconColor] = useState(colors.service.box.icon)

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

  const handleBoxBackgroundChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = event.target.value
    setBoxBackgroundColor(newColor)
    if (boxBackgroundColor) {
      boxBackgroundColor(newColor)
    }
  }

  const handleBoxTypoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = event.target.value
    setBoxTypoColor(newColor)
    if (boxTypoColor) {
      boxTypoColor(newColor)
    }
  }

  const handleBoxIconChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = event.target.value
    setBoxIconColor(newColor)
    if (boxIconColor) {
      boxIconColor(newColor)
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
        Akcent - pozadí
      </div>

      <div className="flex flex-col items-start">
        <input
          type="color"
          value={accentFgColorValue}
          className={classes.picker}
          onChange={handleAccentFgChange}
        />
        Akcent - popředí
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
          value={boxBackgroundColorValue}
          className={classes.picker}
          onChange={handleBoxBackgroundChange}
        />
        Box - pozadí
      </div>

      <div className="flex flex-col items-start">
        <input
          type="color"
          value={boxTypoColorValue}
          className={classes.picker}
          onChange={handleBoxTypoChange}
        />
        Box - typografie
      </div>

      <div className="flex flex-col items-start">
        <input
          type="color"
          value={boxIconColorValue}
          className={classes.picker}
          onChange={handleBoxIconChange}
        />
        Box - ikona
      </div>
    </div>
  )
}

export default ColorPickerService
