'use client'
import React, { useState } from 'react'
import colors from '@/app/lib/colors.json'
import { ColorPickerProps } from '@/app/lib/customizer'
import classes from '../index.module.scss'

const ColorPickerGlobal: React.FC<ColorPickerProps> = ({
  primaryGlobalColor,
  secondaryGlobalColor,
  accentGlobalColor,
}) => {
  const [primaryGlobalColorValue, setPrimaryGlobalColor] = useState(colors.global.primary)
  const [secondaryGlobalColorValue, setSecondaryGlobalColor] = useState(colors.global.secondary)
  const [accentGlobalColorValue, setAccentGlobalColor] = useState(colors.global.accent)

  const handlePrimaryColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = event.target.value
    setPrimaryGlobalColor(newColor)
    if (typeof primaryGlobalColor === 'function') {
      primaryGlobalColor(newColor)
    }
  }

  const handleSecondaryColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = event.target.value
    setSecondaryGlobalColor(newColor)
    if (typeof secondaryGlobalColor === 'function') {
      secondaryGlobalColor(newColor)
    }
  }

  const handleAccentColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = event.target.value
    setAccentGlobalColor(newColor)
    if (typeof accentGlobalColor === 'function') {
      accentGlobalColor(newColor)
    }
  }

  return (
    <div className="grid grid-cols-5 gap-y-4 text-xs">
      <div className="flex flex-col items-start">
        <input
          type="color"
          value={primaryGlobalColorValue}
          className={classes.picker}
          onChange={handlePrimaryColorChange}
        />
        Primární
      </div>

      <div className="flex flex-col items-start">
        <input
          type="color"
          value={secondaryGlobalColorValue}
          className={classes.picker}
          onChange={handleSecondaryColorChange}
        />
        Sekundární
      </div>

      <div className="flex flex-col items-start">
        <input
          type="color"
          value={accentGlobalColorValue}
          className={classes.picker}
          onChange={handleAccentColorChange}
        />
        Akcent - popředí
      </div>
    </div>
  )
}

export default ColorPickerGlobal
