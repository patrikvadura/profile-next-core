'use client'

import React, { useState, useEffect } from 'react'

type Props = {
  id?: string
  type?: string
  label?: string
  name?: string
  value?: string
  isRequired?: boolean
  placeholder?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  classLabel?: string
  classInput?: string
  withLimit?: boolean
  maxLength?: number
  minLength?: number
  defaultValue?: string | undefined
}

export function Input({
  id,
  type,
  label,
  name,
  value,
  isRequired,
  placeholder,
  onChange,
  classLabel,
  classInput,
  withLimit = false,
  maxLength = 160,
  minLength = 150,
  defaultValue,
}: Props) {
  const [inputValue, setInputValue] = useState(value || '')
  const [remaining, setRemaining] = useState(maxLength)

  useEffect(() => {
    if (withLimit) {
      setRemaining(maxLength - inputValue.length)
    }
  }, [inputValue, maxLength, withLimit])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setInputValue(newValue)
    if (withLimit) {
      setRemaining(maxLength - newValue.length)
    }
    if (onChange) {
      onChange(e)
    }
  }

  const getRemainingTextColor = () => {
    if (remaining < 0) {
      return 'text-red-500'
    } else if (remaining >= 0 && remaining <= maxLength - minLength) {
      return 'text-green-500'
    } else {
      return 'text-yellow-500'
    }
  }

  return (
    <div className="flex flex-col gap-2">
      {label ? (
        <label
          htmlFor={id}
          className={`${classLabel} block text-sm font-semibold leading-6 text-contact-typo dark:text-white`}
        >
          {label}
        </label>
      ) : (
        ''
      )}

      <input
        type={type}
        name={name}
        value={inputValue}
        required={isRequired}
        placeholder={placeholder}
        id={id}
        autoComplete="true"
        className={`${classInput} block w-full border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
        onChange={handleChange}
        defaultValue={defaultValue}
      />

      {withLimit && (
        <div className={`text-xs ${getRemainingTextColor()}`}>Zbývající znaky: {remaining}</div>
      )}
    </div>
  )
}
