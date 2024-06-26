'use client'
import React, { useState } from 'react'
import { OptionSelectorProps } from '@/app/lib/customizer'

export default function Select({ title, options, selectedOption, onChange }: OptionSelectorProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  if (!options) {
    return <div>Není k dispozici</div>
  }

  return (
    <>
      <div className="relative">
        <div className="flex flex-col space-y-3">
          {title ? <div className="basis-3/12 text-sm font-semibold">{title}</div> : ''}

          <div className={`${title ? 'basis-9/12' : ''} w-full`}>
            <button
              type="button"
              className="relative w-full cursor-default bg-white py-2 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
              aria-haspopup="listbox"
              aria-expanded={isDropdownOpen}
              aria-labelledby="listbox-label"
              onClick={toggleDropdown}
            >
              {options.find((opt: { value: string }) => opt.value === selectedOption)?.label ||
                'Vyberte možnost'}

              <span className="absolute  pointer-events-none inset-y-0 right-0 ml-3 flex items-center pr-2">
                <svg
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>

            {isDropdownOpen && (
              <ul
                className="relative z-10 mt-1 max-h-32 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                tabIndex={-1}
                role="listbox"
                aria-labelledby="listbox-label"
              >
                {/*@ts-ignore*/}
                {options.map((option, index) => (
                  <li
                    key={option.value}
                    className={`text-gray-900 hover:bg-gray-100 cursor-default select-none py-2 pl-3 pr-9 ${
                      selectedOption === option.value ? 'bg-gray-100' : ''
                    }`}
                    id={`listbox-option-${index}`}
                    role="option"
                    onClick={() => {
                      onChange(option.value)
                      setIsDropdownOpen(false)
                    }}
                  >
                    <div className="flex items-center font-normal ml-3">{option.label}</div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
