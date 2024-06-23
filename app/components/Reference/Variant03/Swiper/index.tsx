'use client'

import React from 'react'
import { ReferenceItems } from '@/app/lib/types'
import { Quote } from '@/app/ui/Icons/Quote'
import { getBreakpointStyles } from '@/app/lib/breakpointHelper'

interface SwiperComponentProps {
  references: ReferenceItems
  accentBgColor: string
  typoColor: string
  align: string
  breakpoint?: any | undefined
  preview?: boolean
}

export function SwiperComponent({
  references,
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
        'grid grid-cols-1 md:grid-cols-2 gap-4 px-8 md:px-0',
        breakpoint,
        preview,
      )}
    >
      {references.items.map((item, index) => (
        <div
          key={index}
          className={getBreakpointStyles(
            `${alignsClass} flex flex-col justify-start w-full space-y-3 py-12 px-2 -translate-y-12`,
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
            {item.description}
          </p>

          <h3
            className={getBreakpointStyles(
              `${typoColor} text-lg font-bold dark:text-white`,
              breakpoint,
              preview,
            )}
          >
            {item.title}
          </h3>
        </div>
      ))}
    </div>
  )
}
