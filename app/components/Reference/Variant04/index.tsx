import React from 'react'
import data from '@/app/lib/data.json'
import { ReferenceItems } from '@/app/lib/types'
import { AnimatedLargeTitle } from '@/app/ui/Animations/LargeTitle'
import { SwiperComponent } from './Swiper'
import { ReferenceVariantProps } from '@/app/lib/variants'

export function ReferenceVariant04({ layout, align, preview }: ReferenceVariantProps) {
  const references: ReferenceItems = data.reference

  const layouts = {
    transparent: 'bg-transparent dark:bg-black',
    background: 'bg-[var(--reference-background)] dark:bg-black',
    border: 'border-4 border-[var(--reference-background)]',
  }

  // @ts-ignore
  const layoutsClass = layouts[layout]

  return (
    <div id="reference" className={`${layoutsClass} relative w-full py-12`}>
      <div className="container flex flex-col justify-center items-center text-center">
        <SwiperComponent
          accentBgColor="text-[var(--reference-accent-bg)]"
          typoColor="text-[var(--reference-typo)]"
          align={align}
          references={references}
        />
      </div>
    </div>
  )
}
