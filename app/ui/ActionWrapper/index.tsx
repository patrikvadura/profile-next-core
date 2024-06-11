import React from 'react'

type Props = {
  children?: any
  onClick?: any
  className?: string
}

export function ActionWrapper({ children, onClick, className }: Props) {
  return (
    <div
      className={`flex justify-center items-center size-10 bg-light rounded-full cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
