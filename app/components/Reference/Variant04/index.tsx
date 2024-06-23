import React from 'react'
import data from '@/app/lib/data.json'
import { ReferenceItems } from '@/app/lib/types'
import { SwiperComponent } from './Swiper'
import { ReferenceVariantProps } from '@/app/lib/variants'
import { getBreakpointStyles } from '@/app/lib/breakpointHelper'

export function ReferenceVariant04({ layout, align, breakpoint, preview }: ReferenceVariantProps) {
  const references: ReferenceItems = data.reference

  const layouts = {
    transparent: 'bg-transparent dark:bg-black',
    background: 'bg-[var(--reference-background)] dark:bg-black',
    border: 'border-4 border-[var(--reference-background)]',
  }

  // @ts-ignore
  const layoutsClass = layouts[layout]

  return (
    <div
      id="reference"
      className={getBreakpointStyles(`${layoutsClass} relative w-full py-12`, breakpoint, preview)}
    >
      <div
        className={getBreakpointStyles(
          'container flex flex-col justify-center items-center text-center',
          breakpoint,
          preview,
        )}
      >
        <SwiperComponent
          accentBgColor="text-[var(--reference-accent-bg)]"
          typoColor="text-[var(--reference-typo)]"
          align={align}
          references={references}
          breakpoint={breakpoint}
          preview={preview}
        />
      </div>
    </div>
  )
}
