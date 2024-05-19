import React from 'react'

interface Props {
  size?: string | number
  color?: string
  className?: string
}

export const ArrowDown: React.FC<Props> = ({ size = '32', color, className }) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M11 16.175V5q0-.425.288-.712T12 4t.713.288T13 5v11.175l4.9-4.9q.3-.3.7-.288t.7.313q.275.3.287.7t-.287.7l-6.6 6.6q-.15.15-.325.213t-.375.062t-.375-.062t-.325-.213l-6.6-6.6q-.275-.275-.275-.687T4.7 11.3q.3-.3.713-.3t.712.3z"
      />
    </svg>
  )
}
