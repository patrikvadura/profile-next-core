import React, { useState } from 'react'
import { ModalViewProps } from '@/app/lib/customizer'
import { Icon } from '@iconify/react'
import { ActionWrapper } from '@/app/ui/ActionWrapper'

const ActionBar = ({ children }: ModalViewProps) => {
  const [isHidden, setIsHidden] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const toggleVisibility = () => {
    setIsHidden(!isHidden)
  }

  const handleMouseDown = (e: { preventDefault: () => void; clientX: number; clientY: number }) => {
    e.preventDefault()
    setIsDragging(true)
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    })
  }

  const handleMouseMove = (e: { preventDefault: () => void; clientX: number; clientY: number }) => {
    if (isDragging) {
      e.preventDefault()
      setPosition({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y,
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  return (
    <div
      className={`absolute right-8 bottom-8 bg-white rounded-full shadow-xl z-50`}
      style={{
        transform: `translate(${isHidden ? '-24' : position.x}px, ${
          isHidden ? '0' : position.y
        }px)`,
        cursor: isDragging ? 'grabbing' : 'grab',
        userSelect: 'none',
      }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div
        className={`group relative w-full h-full flex flex-row items-center justify-between ${
          isHidden ? 'p-3' : 'p-4'
        }`}
      >
        {!isHidden && <>{children}</>}

        <ActionWrapper className="z-20" onClick={toggleVisibility}>
          <Icon
            icon={
              isHidden
                ? 'material-symbols:visibility-outline-rounded'
                : 'material-symbols:visibility-off-outline-rounded'
            }
            className="text-primary hover:text-opacity-100 text-xl"
          />
        </ActionWrapper>

        {!isHidden && (
          <div
            onMouseDown={handleMouseDown}
            className={`opacity-0 group-hover:opacity-100 absolute -top-5 -right-5 transition-all duration-300 ease-in-out -z-1 ${
              isDragging ? 'cursor-grabbing' : 'cursor-grab'
            }`}
          >
            <div className="size-[48px] border-t-8 border-r-8 border-light opacity-30 rounded-tr-full" />
          </div>
        )}
      </div>
    </div>
  )
}

export default ActionBar
