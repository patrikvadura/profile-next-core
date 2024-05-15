import React from 'react'

interface Props {
  size?: string | number
  color?: string
  className?: string
}

export const Quote: React.FC<Props> = ({ size = '32', color, className }) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
    >
      <path fill="currentColor" d="M5 17h3l2-4V7H4v6h3zm10 0h3l2-4V7h-6v6h3z" />
    </svg>
  )
}
