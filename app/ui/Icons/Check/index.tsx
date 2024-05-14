import React from 'react'

interface Props {
  size?: string | number
  className?: string
}

export const Check: React.FC<Props> = ({ size = '32', className }) => {
  return (
    <svg width={size} height={size} className={`${className} stroke-current`} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 12l5 5L20 7" />
    </svg>
  )
}
