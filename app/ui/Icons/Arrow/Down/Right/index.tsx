import React from 'react'

interface Props {
  size?: string | number
  className?: string
}

export const ArrowDownRight: React.FC<Props> = ({ size = '32', className }) => {
  return (
    <svg width={size} height={size} className={`${className} stroke-current`} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7 7l10 10m0-9v9H8" />
    </svg>
  )
}
