'use client'

import React, { useState } from 'react'
import { ModalViewProps } from '@/app/lib/customizer'
import { Icon } from '@iconify/react'
import { Popover, PopoverTrigger, PopoverContent, Button } from '@nextui-org/react'

const ModalView = ({ isVisible, toggleVisibility, title, children }: ModalViewProps) => {
  const [isDragging, setIsDragging] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const [isResizing, setIsResizing] = useState(false)
  const [size, setSize] = useState({ width: 400, height: 500 })
  const [resizeOffset, setResizeOffset] = useState({ x: 0, y: 0 })

  const handleMouseDownDrag = (e: {
    preventDefault: () => void
    clientX: number
    clientY: number
  }) => {
    e.preventDefault()
    setIsDragging(true)
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    })
  }

  const handleMouseMoveDrag = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isDragging) {
      e.preventDefault()
      setPosition({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y,
      })
    }
  }

  const handleMouseUpDrag = () => {
    setIsDragging(false)
  }

  const handleMouseDownResize = (e: { preventDefault: () => void; clientX: any; clientY: any }) => {
    e.preventDefault()
    setIsResizing(true)
    setResizeOffset({
      x: e.clientX,
      y: e.clientY,
    })
  }

  const handleMouseMoveResize = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isResizing) {
      e.preventDefault()
      const deltaX = resizeOffset.x - e.clientX
      const deltaY = resizeOffset.y - e.clientY
      setSize(prevSize => ({
        width: Math.max(100, prevSize.width + deltaX), // Zajištění minimální šířky
        height: Math.max(100, prevSize.height + deltaY), // Zajištění minimální výšky
      }))
      setResizeOffset({
        x: e.clientX,
        y: e.clientY,
      })
    }
  }

  const handleMouseUpResize = () => {
    setIsResizing(false)
  }

  if (!isVisible) return null

  return (
    <div
      className="top-8 right-8 absolute bg-white bg-opacity-75 backdrop-blur rounded-2xl p-4 z-[9999]"
      style={{
        width: size.width,
        height: size.height,
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      onMouseMove={e => {
        handleMouseMoveDrag(e)
        handleMouseMoveResize(e)
      }}
      onMouseUp={() => {
        handleMouseUpDrag()
        handleMouseUpResize()
      }}
    >
      <div className="group relative h-full w-full">
        <div className="p-4 h-full w-full overflow-scroll">
          <div className="flex flex-row justify-between items-center w-full border-b-2 border-black border-opacity-[.05] pb-2 mb-2">
            <h3 className="text-primary text-lg font-bold">{title}</h3>

            <Popover placement="bottom" offset={20} showArrow>
              <PopoverTrigger>
                <Icon icon="ic:baseline-more-vert" className="text-primary text-lg" />
              </PopoverTrigger>

              <PopoverContent>
                <div className="flex flex-col items-center space-y-2 px-1 py-2">
                  <span className="text-tiny">Potřebuji poradit</span>
                  <span className="text-red-500 text-tiny">Resetovat</span>
                  <span
                    className="text-tiny hover:underline cursor-pointer"
                    onClick={toggleVisibility}
                  >
                    Skrýt
                  </span>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          {children}
        </div>
        <div
          onMouseDown={handleMouseDownDrag}
          className={`opacity-0 group-hover:opacity-100 absolute -top-8 -right-8 transition-all duration-300 ease-in-out -z-1 ${
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
        >
          <div className="size-[32px] border-t-8 border-r-8 border-light opacity-30 rounded-tr-full" />
        </div>

        <div
          onMouseDown={handleMouseDownResize}
          className={`opacity-0 group-hover:opacity-100 absolute -bottom-2 -left-2 transition-all duration-300 ease-in-out -z-1 ${
            isResizing ? 'cursor-se-resize' : 'cursor-sw-resize'
          }`}
        >
          <div className="size-[16px] border-b-4 border-l-4 border-primary opacity-30 rounded-bl-full" />
        </div>
      </div>
    </div>
  )
}

export default ModalView
