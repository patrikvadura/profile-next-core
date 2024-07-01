'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Popover, PopoverTrigger, PopoverContent } from '@nextui-org/react'
import colors from '@/app/lib/colors.json'
import { ColorPickerProps } from '@/app/lib/customizer'
import iro from '@jaames/iro'
import { IroColorPicker } from '@jaames/iro/dist/ColorPicker'
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
  const [colorHistory, setColorHistory] = useState<string[]>([])
  const [visiblePicker, setVisiblePicker] = useState<string | null>(null)

  const backgroundPickerRef = useRef<HTMLDivElement>(null)
  const accentBgPickerRef = useRef<HTMLDivElement>(null)
  const accentFgPickerRef = useRef<HTMLDivElement>(null)
  const typoPickerRef = useRef<HTMLDivElement>(null)
  const boxBackgroundPickerRef = useRef<HTMLDivElement>(null)
  const boxTypoPickerRef = useRef<HTMLDivElement>(null)
  const boxIconPickerRef = useRef<HTMLDivElement>(null)
  const backgroundColorPicker = useRef<IroColorPicker | null>(null)
  const accentBgColorPicker = useRef<IroColorPicker | null>(null)
  const accentFgColorPicker = useRef<IroColorPicker | null>(null)
  const typoColorPicker = useRef<IroColorPicker | null>(null)
  const boxBackgroundColorPicker = useRef<IroColorPicker | null>(null)
  const boxTypoColorPicker = useRef<IroColorPicker | null>(null)
  const boxIconColorPicker = useRef<IroColorPicker | null>(null)

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem('colorHistory') || '[]')
    setColorHistory(savedHistory)
  }, [])

  const updateColorHistory = useCallback(
    (newColor: string) => {
      const updatedHistory = [newColor, ...colorHistory.filter(color => color !== newColor)].slice(
        0,
        10,
      )
      setColorHistory(updatedHistory)
      localStorage.setItem('colorHistory', JSON.stringify(updatedHistory))
    },
    [colorHistory],
  )

  useEffect(() => {
    if (backgroundColor) {
      backgroundColor(backgroundColorValue)
    }
  }, [backgroundColor, backgroundColorValue])

  useEffect(() => {
    if (accentBgColor) {
      accentBgColor(accentBgColorValue)
    }
  }, [accentBgColor, accentBgColorValue])

  useEffect(() => {
    if (accentFgColor) {
      accentFgColor(accentFgColorValue)
    }
  }, [accentFgColor, accentFgColorValue])

  useEffect(() => {
    if (typoColor) {
      typoColor(typoColorValue)
    }
  }, [typoColor, typoColorValue])

  useEffect(() => {
    if (boxBackgroundColor) {
      boxBackgroundColor(boxBackgroundColorValue)
    }
  }, [boxBackgroundColor, boxBackgroundColorValue])

  useEffect(() => {
    if (boxTypoColor) {
      boxTypoColor(boxTypoColorValue)
    }
  }, [boxTypoColor, boxTypoColorValue])

  useEffect(() => {
    if (boxIconColor) {
      boxIconColor(boxIconColorValue)
    }
  }, [boxIconColor, boxIconColorValue])

  const initializePicker = useCallback(
    (
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
    },
    [updateColorHistory],
  )

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
  }, [initializePicker, visiblePicker, backgroundColorValue])

  useEffect(() => {
    if (visiblePicker === 'accentBg') {
      initializePicker(accentBgPickerRef, accentBgColorValue, setAccentBgColor, accentBgColorPicker)
    } else if (accentBgColorPicker.current) {
      // @ts-ignore
      accentBgColorPicker.current.off(['color:init', 'color:change'])
      accentBgColorPicker.current = null
    }
  }, [initializePicker, visiblePicker, accentBgColorValue])

  useEffect(() => {
    if (visiblePicker === 'accentFg') {
      initializePicker(accentFgPickerRef, accentFgColorValue, setAccentFgColor, accentFgColorPicker)
    } else if (accentFgColorPicker.current) {
      // @ts-ignore
      accentFgColorPicker.current.off(['color:init', 'color:change'])
      accentFgColorPicker.current = null
    }
  }, [initializePicker, visiblePicker, accentFgColorValue])

  useEffect(() => {
    if (visiblePicker === 'typo') {
      initializePicker(typoPickerRef, typoColorValue, setTypoColor, typoColorPicker)
    } else if (typoColorPicker.current) {
      // @ts-ignore
      typoColorPicker.current.off(['color:init', 'color:change'])
      typoColorPicker.current = null
    }
  }, [initializePicker, visiblePicker, typoColorValue])

  useEffect(() => {
    if (visiblePicker === 'boxBackground') {
      initializePicker(
        boxBackgroundPickerRef,
        boxBackgroundColorValue,
        setBoxBackgroundColor,
        boxBackgroundColorPicker,
      )
    } else if (boxBackgroundColorPicker.current) {
      // @ts-ignore
      boxBackgroundColorPicker.current.off(['color:init', 'color:change'])
      boxBackgroundColorPicker.current = null
    }
  }, [initializePicker, visiblePicker, boxBackgroundColorValue])

  useEffect(() => {
    if (visiblePicker === 'boxTypo') {
      initializePicker(boxTypoPickerRef, boxTypoColorValue, setBoxTypoColor, boxTypoColorPicker)
    } else if (boxTypoColorPicker.current) {
      // @ts-ignore
      boxTypoColorPicker.current.off(['color:init', 'color:change'])
      boxTypoColorPicker.current = null
    }
  }, [initializePicker, visiblePicker, boxTypoColorValue])

  useEffect(() => {
    if (visiblePicker === 'boxIcon') {
      initializePicker(boxIconPickerRef, boxIconColorValue, setBoxIconColor, boxIconColorPicker)
    } else if (boxIconColorPicker.current) {
      // @ts-ignore
      boxIconColorPicker.current.off(['color:init', 'color:change'])
      boxIconColorPicker.current = null
    }
  }, [initializePicker, visiblePicker, boxIconColorValue])

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
            Akcent - pozadí
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
        isOpen={visiblePicker === 'accentFg'}
        onClose={() => setVisiblePicker(null)}
      >
        <PopoverTrigger>
          <div
            onClick={() => togglePickerVisibility('accentFg')}
            className="flex flex-col items-start cursor-pointer"
          >
            <div style={{ backgroundColor: accentFgColorValue }} className={classes.picker} />
            Akcent - popředí
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
                    handleHistoryColorClick(color, setAccentFgColor, accentFgColorPicker.current)
                  }
                ></div>
              ))}
            </div>

            <input
              type="text"
              value={accentFgColorValue}
              onChange={e => handleHexInputChange(setAccentFgColor, accentFgColorPicker.current, e)}
              maxLength={7}
              className={classes.hex}
              onFocus={e => e.target.select()}
            />
            <div ref={accentFgPickerRef} />
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
        isOpen={visiblePicker === 'boxBackground'}
        onClose={() => setVisiblePicker(null)}
      >
        <PopoverTrigger>
          <div
            onClick={() => togglePickerVisibility('boxBackground')}
            className="flex flex-col items-start cursor-pointer"
          >
            <div style={{ backgroundColor: boxBackgroundColorValue }} className={classes.picker} />
            Box - pozadí
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
                      setBoxBackgroundColor,
                      boxBackgroundColorPicker.current,
                    )
                  }
                ></div>
              ))}
            </div>

            <input
              type="text"
              value={boxBackgroundColorValue}
              onChange={e =>
                handleHexInputChange(setBoxBackgroundColor, boxBackgroundColorPicker.current, e)
              }
              maxLength={7}
              className={classes.hex}
              onFocus={e => e.target.select()}
            />
            <div ref={boxBackgroundPickerRef} />
          </div>
        </PopoverContent>
      </Popover>

      <Popover
        placement="bottom"
        showArrow={true}
        isOpen={visiblePicker === 'boxTypo'}
        onClose={() => setVisiblePicker(null)}
      >
        <PopoverTrigger>
          <div
            onClick={() => togglePickerVisibility('boxTypo')}
            className="flex flex-col items-start cursor-pointer"
          >
            <div style={{ backgroundColor: boxTypoColorValue }} className={classes.picker} />
            Box - typografie
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
                    handleHistoryColorClick(color, setBoxTypoColor, boxTypoColorPicker.current)
                  }
                ></div>
              ))}
            </div>

            <input
              type="text"
              value={boxTypoColorValue}
              onChange={e => handleHexInputChange(setBoxTypoColor, boxTypoColorPicker.current, e)}
              maxLength={7}
              className={classes.hex}
              onFocus={e => e.target.select()}
            />
            <div ref={boxTypoPickerRef} />
          </div>
        </PopoverContent>
      </Popover>

      <Popover
        placement="bottom"
        showArrow={true}
        isOpen={visiblePicker === 'boxIcon'}
        onClose={() => setVisiblePicker(null)}
      >
        <PopoverTrigger>
          <div
            onClick={() => togglePickerVisibility('boxIcon')}
            className="flex flex-col items-start cursor-pointer"
          >
            <div style={{ backgroundColor: boxIconColorValue }} className={classes.picker} />
            Box - ikona
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
                    handleHistoryColorClick(color, setBoxIconColor, boxIconColorPicker.current)
                  }
                ></div>
              ))}
            </div>

            <input
              type="text"
              value={boxIconColorValue}
              onChange={e => handleHexInputChange(setBoxIconColor, boxIconColorPicker.current, e)}
              maxLength={7}
              className={classes.hex}
              onFocus={e => e.target.select()}
            />
            <div ref={boxIconPickerRef} />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default ColorPickerService
