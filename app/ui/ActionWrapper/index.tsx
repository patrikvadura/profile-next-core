import React from 'react'

type Props = {
  size?: 'sm' | 'base'
  children?: any
  onClick?: any
  className?: string
}

export function ActionWrapper({ size = 'base', children, onClick, className }: Props) {
  return (
    <div
      className={`flex justify-center items-center size-10 bg-black bg-opacity-[.05] rounded-full cursor-pointer ${
        size === 'base' ? 'size-10' : 'size-6'
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
