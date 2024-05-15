import React from 'react'

interface Props {
  size?: string | number
  color?: string
  className?: string
}

export const Check: React.FC<Props> = ({ size = '32', color, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
    >
      <path d="m10 16.4l-4-4L7.4 11l2.6 2.6L16.6 7L18 8.4z" />
    </svg>
  )
}
