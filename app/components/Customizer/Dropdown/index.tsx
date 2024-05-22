'use client'
import React, { useState, useRef, FunctionComponent } from 'react'
import { ToggleDropdownProps } from '@/app/lib/customizer'
import { ChevronDown } from '@/app/ui/Icons/Chevron/Down'
import { Show } from '@/app/ui/Icons/Show'
import Link from 'next/link'

const Dropdown: FunctionComponent<ToggleDropdownProps> = ({
  id,
  label,
  link,
  checked,
  toggled,
  hideToggle = false,
  onChange,
  preview,
  children,
}) => {
  const toggleState = !!toggled

  const [isOpen, setIsOpen] = useState<boolean>(toggleState)
  const ref = useRef<HTMLDivElement>(null)

  const toggleIsOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative" ref={ref}>
      <div className="flex flex-row items-center space-x-2">
        <button
          onClick={toggleIsOpen}
          className="flex items-center justify-between py-2 rounded focus:outline-none focus:shadow-outline w-full"
        >
          {!hideToggle ? (
            <label htmlFor={id} className="flex items-center font-semibold cursor-pointer">
              <input
                type="checkbox"
                id={id}
                className="sr-only peer"
                checked={checked}
                onChange={onChange}
              />
              <div className="mr-2 block relative bg-gray-200 w-12 h-6 p-1 rounded-full before:absolute before:bg-white before:w-4 before:h-4 before:p-1 before:rounded-full before:transition-all before:duration-500 before:left-1 peer-checked:before:left-7 peer-checked:bg-[#72E790]"></div>
              {label}
            </label>
          ) : (
            <div className="flex items-center text-lg font-semibold cursor-pointer">{label}</div>
          )}

          <ChevronDown
            size={24}
            className={`text-gray-300 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>

        {preview ? (
          <Link href={link ? link : '/'}>
            <Show size={24} className="text-gray-300" />
          </Link>
        ) : (
          ''
        )}
      </div>

      {isOpen && (
        <div className="relative h-auto left-0 right-0 mt-2 py-2 overflow-x-scroll">
          <div className="space-y-4">{children}</div>
        </div>
      )}
    </div>
  )
}

export default Dropdown
