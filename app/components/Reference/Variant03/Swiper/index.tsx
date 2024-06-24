'use client'

import React from 'react'
import { Box } from '@/app/lib/customizer'
import { Quote } from '@/app/ui/Icons/Quote'
import { getBreakpointStyles } from '@/app/lib/breakpointHelper'

interface SwiperComponentProps {
  boxes: Box[]
  accentBgColor: string
  typoColor: string
  align: string
  breakpoint?: any | undefined
  preview?: boolean
}

export function SwiperComponent({
  boxes,
  accentBgColor,
  typoColor,
  align,
  breakpoint,
  preview,
}: SwiperComponentProps) {
  const aligns = {
    left: 'items-start text-left',
    center: 'items-center text-center',
    right: 'items-end text-right',
  }

  // @ts-ignore
  const alignsClass = aligns[align]

  return (
    <div
      className={getBreakpointStyles(
        'grid grid-cols-1 md:grid-cols-2 gap-4 px-8 md:px-0 w-full',
        breakpoint,
        preview,
      )}
    >
      {boxes.map((box, index) => (
        <div
          key={index}
          className={getBreakpointStyles(
            `${alignsClass} flex flex-col justify-start items-center w-full space-y-3 py-12 px-2 -translate-y-12`,
            breakpoint,
            preview,
          )}
        >
          <Quote
            className={getBreakpointStyles(
              `${accentBgColor} dark:text-white size-[60px]`,
              breakpoint,
              preview,
            )}
          />

          <p
            className={getBreakpointStyles(
              `${typoColor} max-w-screen-md mb-8 font-normal dark:text-white text-opacity-70`,
              breakpoint,
              preview,
            )}
          >
            {box.description}
          </p>

          <h3
            className={getBreakpointStyles(
              `${typoColor} text-lg font-bold dark:text-white`,
              breakpoint,
              preview,
            )}
          >
            {box.title}
          </h3>
        </div>
      ))}
    </div>
  )
}
