'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Popover, PopoverTrigger, PopoverContent } from '@nextui-org/react'
import colors from '@/app/lib/colors.json'
import { ColorPickerProps } from '@/app/lib/customizer'
import iro from '@jaames/iro'
import { IroColorPicker } from '@jaames/iro/dist/ColorPicker'
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
  const [colorHistory, setColorHistory] = useState<string[]>([])
  const [visiblePicker, setVisiblePicker] = useState<string | null>(null)

  const backgroundPickerRef = useRef<HTMLDivElement>(null)
  const accentBgPickerRef = useRef<HTMLDivElement>(null)
  const typoPickerRef = useRef<HTMLDivElement>(null)
  const typoLgPickerRef = useRef<HTMLDivElement>(null)
  const backgroundColorPicker = useRef<IroColorPicker | null>(null)
  const accentBgColorPicker = useRef<IroColorPicker | null>(null)
  const typoColorPicker = useRef<IroColorPicker | null>(null)
  const typoLgColorPicker = useRef<IroColorPicker | null>(null)

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem('colorHistory') || '[]')
    setColorHistory(savedHistory)
  }, [])

  useEffect(() => {
    if (backgroundColor) {
      backgroundColor(backgroundColorValue)
    }
  }, [backgroundColorValue])

  useEffect(() => {
    if (accentBgColor) {
      accentBgColor(accentBgColorValue)
    }
  }, [accentBgColorValue])

  useEffect(() => {
    if (typoColor) {
      typoColor(typoColorValue)
    }
  }, [typoColorValue])

  useEffect(() => {
    if (typoLgColor) {
      typoLgColor(typoLgColorValue)
    }
  }, [typoLgColorValue])

  const initializePicker = (
    ref: React.RefObject<HTMLDivElement>,
    color: string,
    setColor: React.Dispatch<React.SetStateAction<string>>,
    colorPickerRef: React.MutableRefObject<IroColorPicker | null>,
  ) => {
    if (ref.current && !colorPickerRef.current) {
      // @ts-ignore
      colorPickerRef.current = new iro.ColorPicker(ref.current, {
        width: 220,
        color,
      })
      // @ts-ignore
      colorPickerRef.current.on(['color:init', 'color:change'], color => {
        setColor(color.hexString)
        updateColorHistory(color.hexString)
      })
    }
  }

  useEffect(() => {
    if (visiblePicker === 'background') {
      initializePicker(
        backgroundPickerRef,
        backgroundColorValue,
        setBackgroundColor,
        backgroundColorPicker,
      )
    } else if (backgroundColorPicker.current) {
      // @ts-ignore
      backgroundColorPicker.current.off(['color:init', 'color:change'])
      backgroundColorPicker.current = null
    }
  }, [visiblePicker])

  useEffect(() => {
    if (visiblePicker === 'accentBg') {
      initializePicker(accentBgPickerRef, accentBgColorValue, setAccentBgColor, accentBgColorPicker)
    } else if (accentBgColorPicker.current) {
      // @ts-ignore
      accentBgColorPicker.current.off(['color:init', 'color:change'])
      accentBgColorPicker.current = null
    }
  }, [visiblePicker])

  useEffect(() => {
    if (visiblePicker === 'typo') {
      initializePicker(typoPickerRef, typoColorValue, setTypoColor, typoColorPicker)
    } else if (typoColorPicker.current) {
      // @ts-ignore
      typoColorPicker.current.off(['color:init', 'color:change'])
      typoColorPicker.current = null
    }
  }, [visiblePicker])

  useEffect(() => {
    if (visiblePicker === 'typoLg') {
      initializePicker(typoLgPickerRef, typoLgColorValue, setTypoLgColor, typoLgColorPicker)
    } else if (typoLgColorPicker.current) {
      // @ts-ignore
      typoLgColorPicker.current.off(['color:init', 'color:change'])
      typoLgColorPicker.current = null
    }
  }, [visiblePicker])

  const updateColorHistory = (newColor: string) => {
    const updatedHistory = [newColor, ...colorHistory.filter(color => color !== newColor)].slice(
      0,
      5,
    )
    setColorHistory(updatedHistory)
    localStorage.setItem('colorHistory', JSON.stringify(updatedHistory))
  }

  const handleHexInputChange = (
    colorSetter: React.Dispatch<React.SetStateAction<string>>,
    colorPickerInstance: IroColorPicker | null,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    let newColor = event.target.value
    if (!newColor.startsWith('#')) {
      newColor = '#' + newColor
    }
    colorSetter(newColor)
    if (/^#[0-9A-F]{6}$/i.test(newColor)) {
      if (colorPickerInstance) {
        colorPickerInstance.color.hexString = newColor
      }
      updateColorHistory(newColor)
    }
  }

  const handleHistoryColorClick = (
    color: string,
    colorSetter: React.Dispatch<React.SetStateAction<string>>,
    colorPickerInstance: IroColorPicker | null,
  ) => {
    colorSetter(color)
    if (colorPickerInstance) {
      colorPickerInstance.color.hexString = color
    }
    updateColorHistory(color)
  }

  const togglePickerVisibility = (picker: string) => {
    setVisiblePicker(prevPicker => (prevPicker === picker ? null : picker))
  }

  return (
    <div className="grid grid-cols-3 gap-y-4 text-xs">
      <Popover
        placement="bottom"
        showArrow={true}
        isOpen={visiblePicker === 'background'}
        onClose={() => setVisiblePicker(null)}
      >
        <PopoverTrigger>
          <div
            onClick={() => togglePickerVisibility('background')}
            className="flex flex-col items-start cursor-pointer"
          >
            <div style={{ backgroundColor: backgroundColorValue }} className={classes.picker} />
            Pozadí
          </div>
        </PopoverTrigger>
        <PopoverContent>
          <div className="flex flex-col space-y-2 p-4">
            <h3 className="font-semibold">Naposledy použité barvy:</h3>

            <div className="flex space-x-2">
              {colorHistory.map((color, index) => (
                <div
                  key={index}
                  style={{ backgroundColor: color }}
                  className={classes.pickerSmaller}
                  onClick={() =>
                    handleHistoryColorClick(
                      color,
                      setBackgroundColor,
                      backgroundColorPicker.current,
                    )
                  }
                ></div>
              ))}
            </div>

            <input
              type="text"
              value={backgroundColorValue}
              onChange={e =>
                handleHexInputChange(setBackgroundColor, backgroundColorPicker.current, e)
              }
              maxLength={7}
              className={classes.hex}
              onFocus={e => e.target.select()}
            />

            <div ref={backgroundPickerRef} />
          </div>
        </PopoverContent>
      </Popover>

      <Popover
        placement="bottom"
        showArrow={true}
        isOpen={visiblePicker === 'accentBg'}
        onClose={() => setVisiblePicker(null)}
      >
        <PopoverTrigger>
          <div
            onClick={() => togglePickerVisibility('accentBg')}
            className="flex flex-col items-start cursor-pointer"
          >
            <div style={{ backgroundColor: accentBgColorValue }} className={classes.picker} />
            Akcent
          </div>
        </PopoverTrigger>
        <PopoverContent>
          <div className="flex flex-col space-y-2 p-4">
            <h3 className="font-semibold">Naposledy použité barvy:</h3>

            <div className="flex space-x-2">
              {colorHistory.map((color, index) => (
                <div
                  key={index}
                  style={{ backgroundColor: color }}
                  className={classes.pickerSmaller}
                  onClick={() =>
                    handleHistoryColorClick(color, setAccentBgColor, accentBgColorPicker.current)
                  }
                ></div>
              ))}
            </div>
            <input
              type="text"
              value={accentBgColorValue}
              onChange={e => handleHexInputChange(setAccentBgColor, accentBgColorPicker.current, e)}
              maxLength={7}
              className={classes.hex}
              onFocus={e => e.target.select()}
            />

            <div ref={accentBgPickerRef} />
          </div>
        </PopoverContent>
      </Popover>

      <Popover
        placement="bottom"
        showArrow={true}
        isOpen={visiblePicker === 'typo'}
        onClose={() => setVisiblePicker(null)}
      >
        <PopoverTrigger>
          <div
            onClick={() => togglePickerVisibility('typo')}
            className="flex flex-col items-start cursor-pointer"
          >
            <div style={{ backgroundColor: typoColorValue }} className={classes.picker} />
            Typografie
          </div>
        </PopoverTrigger>
        <PopoverContent>
          <div className="flex flex-col space-y-2 p-4">
            <h3 className="font-semibold">Naposledy použité barvy:</h3>

            <div className="flex space-x-2">
              {colorHistory.map((color, index) => (
                <div
                  key={index}
                  style={{ backgroundColor: color }}
                  className={classes.pickerSmaller}
                  onClick={() =>
                    handleHistoryColorClick(color, setTypoColor, typoColorPicker.current)
                  }
                ></div>
              ))}
            </div>

            <input
              type="text"
              value={typoColorValue}
              onChange={e => handleHexInputChange(setTypoColor, typoColorPicker.current, e)}
              maxLength={7}
              className={classes.hex}
              onFocus={e => e.target.select()}
            />
            <div ref={typoPickerRef} />
          </div>
        </PopoverContent>
      </Popover>

      <Popover
        placement="bottom"
        showArrow={true}
        isOpen={visiblePicker === 'typoLg'}
        onClose={() => setVisiblePicker(null)}
      >
        <PopoverTrigger>
          <div
            onClick={() => togglePickerVisibility('typoLg')}
            className="flex flex-col items-start cursor-pointer"
          >
            <div style={{ backgroundColor: typoLgColorValue }} className={classes.picker} />
            Moving text
          </div>
        </PopoverTrigger>
        <PopoverContent>
          <div className="flex flex-col space-y-2 p-4">
            <h3 className="font-semibold">Naposledy použité barvy:</h3>

            <div className="flex space-x-2">
              {colorHistory.map((color, index) => (
                <div
                  key={index}
                  style={{ backgroundColor: color }}
                  className={classes.pickerSmaller}
                  onClick={() =>
                    handleHistoryColorClick(color, setTypoLgColor, typoLgColorPicker.current)
                  }
                ></div>
              ))}
            </div>

            <input
              type="text"
              value={typoLgColorValue}
              onChange={e => handleHexInputChange(setTypoLgColor, typoLgColorPicker.current, e)}
              maxLength={7}
              className={classes.hex}
              onFocus={e => e.target.select()}
            />
            <div ref={typoLgPickerRef} />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default ColorPickerReference
