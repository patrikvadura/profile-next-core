'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Popover, PopoverTrigger, PopoverContent } from '@nextui-org/react'
import colors from '@/app/lib/colors.json'
import { ColorPickerProps } from '@/app/lib/customizer'
import iro from '@jaames/iro'
import { IroColorPicker } from '@jaames/iro/dist/ColorPicker'
import classes from '../index.module.scss'

const ColorPickerGlobal: React.FC<ColorPickerProps> = ({
  primaryGlobalColor,
  secondaryGlobalColor,
  accentGlobalColor,
}) => {
  const [primaryGlobalColorValue, setPrimaryGlobalColor] = useState(colors.global.primary)
  const [secondaryGlobalColorValue, setSecondaryGlobalColor] = useState(colors.global.secondary)
  const [accentGlobalColorValue, setAccentGlobalColor] = useState(colors.global.accent)
  const [colorHistory, setColorHistory] = useState<string[]>([])
  const [visiblePicker, setVisiblePicker] = useState<string | null>(null)

  const primaryPickerRef = useRef<HTMLDivElement>(null)
  const secondaryPickerRef = useRef<HTMLDivElement>(null)
  const accentPickerRef = useRef<HTMLDivElement>(null)
  const primaryColorPicker = useRef<IroColorPicker | null>(null)
  const secondaryColorPicker = useRef<IroColorPicker | null>(null)
  const accentColorPicker = useRef<IroColorPicker | null>(null)

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem('colorHistory') || '[]')
    setColorHistory(savedHistory)
  }, [])

  useEffect(() => {
    if (primaryGlobalColor) {
      primaryGlobalColor(primaryGlobalColorValue)
    }
  }, [primaryGlobalColorValue])

  useEffect(() => {
    if (secondaryGlobalColor) {
      secondaryGlobalColor(secondaryGlobalColorValue)
    }
  }, [secondaryGlobalColorValue])

  useEffect(() => {
    if (accentGlobalColor) {
      accentGlobalColor(accentGlobalColorValue)
    }
  }, [accentGlobalColorValue])

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
    if (visiblePicker === 'primary') {
      initializePicker(
        primaryPickerRef,
        primaryGlobalColorValue,
        setPrimaryGlobalColor,
        primaryColorPicker,
      )
    } else if (primaryColorPicker.current) {
      // @ts-ignore
      primaryColorPicker.current.off(['color:init', 'color:change'])
      primaryColorPicker.current = null
    }
  }, [visiblePicker])

  useEffect(() => {
    if (visiblePicker === 'secondary') {
      initializePicker(
        secondaryPickerRef,
        secondaryGlobalColorValue,
        setSecondaryGlobalColor,
        secondaryColorPicker,
      )
    } else if (secondaryColorPicker.current) {
      // @ts-ignore
      secondaryColorPicker.current.off(['color:init', 'color:change'])
      secondaryColorPicker.current = null
    }
  }, [visiblePicker])

  useEffect(() => {
    if (visiblePicker === 'accent') {
      initializePicker(
        accentPickerRef,
        accentGlobalColorValue,
        setAccentGlobalColor,
        accentColorPicker,
      )
    } else if (accentColorPicker.current) {
      // @ts-ignore
      accentColorPicker.current.off(['color:init', 'color:change'])
      accentColorPicker.current = null
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
        isOpen={visiblePicker === 'primary'}
        onClose={() => setVisiblePicker(null)}
      >
        <PopoverTrigger>
          <div
            onClick={() => togglePickerVisibility('primary')}
            className="flex flex-col items-start cursor-pointer"
          >
            <div style={{ backgroundColor: primaryGlobalColorValue }} className={classes.picker} />
            Primární
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
                      setPrimaryGlobalColor,
                      primaryColorPicker.current,
                    )
                  }
                ></div>
              ))}
            </div>

            <input
              type="text"
              value={primaryGlobalColorValue}
              onChange={e =>
                handleHexInputChange(setPrimaryGlobalColor, primaryColorPicker.current, e)
              }
              maxLength={7}
              className={classes.hex}
              onFocus={e => e.target.select()}
            />

            <div ref={primaryPickerRef} />
          </div>
        </PopoverContent>
      </Popover>

      <Popover
        placement="bottom"
        showArrow={true}
        isOpen={visiblePicker === 'secondary'}
        onClose={() => setVisiblePicker(null)}
      >
        <PopoverTrigger>
          <div
            onClick={() => togglePickerVisibility('secondary')}
            className="flex flex-col items-start cursor-pointer"
          >
            <div
              style={{ backgroundColor: secondaryGlobalColorValue }}
              className={classes.picker}
            />
            Sekundární
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
                      setSecondaryGlobalColor,
                      secondaryColorPicker.current,
                    )
                  }
                ></div>
              ))}
            </div>

            <input
              type="text"
              value={secondaryGlobalColorValue}
              onChange={e =>
                handleHexInputChange(setSecondaryGlobalColor, secondaryColorPicker.current, e)
              }
              maxLength={7}
              className={classes.hex}
              onFocus={e => e.target.select()}
            />

            <div ref={secondaryPickerRef} />
          </div>
        </PopoverContent>
      </Popover>

      <Popover
        placement="bottom"
        showArrow={true}
        isOpen={visiblePicker === 'accent'}
        onClose={() => setVisiblePicker(null)}
      >
        <PopoverTrigger>
          <div
            onClick={() => togglePickerVisibility('accent')}
            className="flex flex-col items-start cursor-pointer"
          >
            <div style={{ backgroundColor: accentGlobalColorValue }} className={classes.picker} />
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
                    handleHistoryColorClick(color, setAccentGlobalColor, accentColorPicker.current)
                  }
                ></div>
              ))}
            </div>

            <input
              type="text"
              value={accentGlobalColorValue}
              onChange={e =>
                handleHexInputChange(setAccentGlobalColor, accentColorPicker.current, e)
              }
              maxLength={7}
              className={classes.hex}
              onFocus={e => e.target.select()}
            />
            <div ref={accentPickerRef} />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
export default ColorPickerGlobal
