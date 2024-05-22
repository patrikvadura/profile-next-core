import React, { ReactNode } from 'react'

type Props = {
  id?: string
  name?: string
  isRequired?: boolean
  value?: string | any
  checked?: string | any
  onChange?: string | any
  classLabel?: string
  classInput?: string
  children?: ReactNode
}

export function Radio({
  id,
  name,
  isRequired = false,
  value,
  checked,
  onChange,
  classLabel,
  classInput,
  children,
}: Props) {
  return (
    <label
      htmlFor={id}
      className={`${classLabel} ml-4 flex flex-row items-start font-semibold cursor-pointer`}
    >
      <input
        type="radio"
        id={id}
        name={name}
        className={`${classInput} peer relative mr-3 appearance-none !size-5 border rounded-full border-gray-300 cursor-pointer checked:bg-[#72E790]`}
        value={value}
        checked={checked}
        onChange={onChange}
        required={isRequired}
      />
      {children}
    </label>
  )
}
