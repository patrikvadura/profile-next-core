import React from 'react'
import data from '@/app/lib/data.json'
import { ReferenceItems } from '@/app/lib/types'
import { AnimatedLargeTitle } from '@/app/ui/Animations/LargeTitle'
import { SwiperComponent } from './Swiper'
import { ReferenceVariantProps } from '@/app/lib/variants'
import { getBreakpointStyles } from '@/app/lib/breakpointHelper'

export function ReferenceVariant01({ layout, align, breakpoint, preview }: ReferenceVariantProps) {
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
      className={getBreakpointStyles(
        `${layoutsClass} relative w-full lg:h-screen py-12 md:py-24 overflow-hidden`,
        breakpoint,
        preview,
      )}
    >
      <div
        className={getBreakpointStyles(
          'items-center md:items-center text-center md:text-center container lg:h-[650px] flex flex-col justify-center',
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

      <AnimatedLargeTitle
        title={data.reference.largeTitle}
        target="#reference"
        origin={!preview ? '-translate-x-full' : null}
        className={getBreakpointStyles(
          'absolute -left-[20px] bottom-0 text-[300px] leading-[0] font-bold text-[var(--reference-typo-lg)] dark:text-white',
          breakpoint,
          preview,
        )}
      />
    </div>
  )
}
