'use client'
import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import TipTap from '@/app/components/Customizer/TipTap'

// Dynamické načítání Tiptap editoru pouze na klientské straně
// const TipTap = dynamic(() => import('@/app/components/Customizer/TipTap'), { ssr: false })

type Props = {
  id?: string
  type?: string
  label?: string
  name?: string
  value?: string
  isRequired?: boolean
  placeholder?: string
  onChange?: (value: any) => void
  classLabel?: string
  classInput?: string
  withLimit?: boolean
  maxLength?: number
  minLength?: number
  useWysiwyg?: boolean
}

export function Textarea({
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
  useWysiwyg = false,
}: Props) {
  const [inputValue, setInputValue] = useState(value || '')
  const [remaining, setRemaining] = useState(maxLength)

  useEffect(() => {
    if (withLimit) {
      setRemaining(maxLength - inputValue.length)
    }
  }, [inputValue, maxLength, withLimit])

  useEffect(() => {
    setInputValue(value || '')
  }, [value])

  const handleChange = (value: string) => {
    setInputValue(value)
    if (onChange) {
      onChange(value)
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
      ) : null}

      {useWysiwyg ? (
        //@ts-ignore
        <TipTap content={inputValue} onChange={handleChange} />
      ) : (
        <textarea
          name={name}
          value={inputValue}
          required={isRequired}
          id={id}
          rows={4}
          placeholder={placeholder}
          className={`${classInput} block w-full border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
          onChange={e => handleChange(e.target.value)}
        ></textarea>
      )}

      {withLimit && (
        <div className={`text-xs ${getRemainingTextColor()}`}>Zbývající znaky: {remaining}</div>
      )}
    </div>
  )
}
