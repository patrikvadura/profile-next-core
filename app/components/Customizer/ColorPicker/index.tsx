'use client'
import React, { useState } from 'react'
import colors from '@/app/lib/colors.json'
import { ColorPickerProps } from '@/app/lib/customizer'
import classes from './index.module.scss'

const ColorPicker: React.FC<ColorPickerProps> = ({ primaryColor, secondaryColor, accentColor }) => {
  const [primaryColorValue, setPrimaryColor] = useState(colors.primary)
  const [secondaryColorValue, setSecondaryColor] = useState(colors.secondary)
  const [accentColorValue, setAccentColor] = useState(colors.accent)

  const handlePrimaryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = event.target.value
    setPrimaryColor(newColor)
    if (primaryColor) {
      primaryColor(newColor)
    }
  }

  const handleSecondaryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = event.target.value
    setSecondaryColor(newColor)
    if (secondaryColor) {
      secondaryColor(newColor)
    }
  }

  const handleAccentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = event.target.value
    setAccentColor(newColor)
    if (accentColor) {
      accentColor(newColor)
    }
  }

  return (
    <div className="flex flex-row flex-wrap justify-between">
      <div className="basis-1/3 flex flex-row items-center">
        <input
          type="color"
          value={primaryColorValue}
          className={classes.picker}
          onChange={handlePrimaryChange}
        />
        Primární
      </div>

      <div className="basis-1/3 flex flex-row items-center">
        <input
          type="color"
          value={secondaryColorValue}
          className={classes.picker}
          onChange={handleSecondaryChange}
        />
        Sekundární
      </div>

      <div className="basis-1/3 flex flex-row items-center">
        <input
          type="color"
          value={accentColorValue}
          className={classes.picker}
          onChange={handleAccentChange}
        />
        Doplňková
      </div>
    </div>
  )
}

export default ColorPicker
