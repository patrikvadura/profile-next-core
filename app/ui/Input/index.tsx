import React from 'react'

type Props = {
  id?: string
  type?: string
  label?: string
  name?: string
  value?: string
  isRequired?: boolean
  placeholder?: string
  onChange?: string | any
  classLabel?: string
  classInput?: string
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
}: Props) {
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
        value={value}
        required={isRequired}
        placeholder={placeholder}
        id={id}
        autoComplete="email"
        className={`${classInput} block w-full border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
        onChange={onChange}
      />
    </div>
  )
}
