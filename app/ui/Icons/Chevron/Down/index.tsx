import React from 'react'

interface Props {
  size?: string | number
  color?: string
  className?: string
}

export const ChevronDown: React.FC<Props> = ({ size = '32', color, className }) => {
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
        d="M12 14.975q-.2 0-.375-.062T11.3 14.7l-4.6-4.6q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l3.9 3.9l3.9-3.9q.275-.275.7-.275t.7.275t.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062"
      />
    </svg>
  )
}
