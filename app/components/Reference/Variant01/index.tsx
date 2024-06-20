import React from 'react'
import data from '@/app/lib/data.json'
import { ReferenceItems } from '@/app/lib/types'
import { AnimatedLargeTitle } from '@/app/ui/Animations/LargeTitle'
import { SwiperComponent } from '@/app/components/Reference/Swiper'
import { ReferenceVariantProps } from '@/app/lib/variants'

export function ReferenceVariant01({ layout, align, preview }: ReferenceVariantProps) {
  const references: ReferenceItems = data.reference

  const layouts = {
    transparent: 'bg-transparent dark:bg-black',
    background: 'bg-[var(--about-background)] dark:bg-black',
    border: 'dark:bg-black',
  }

  // @ts-ignore
  const layoutsClass = layouts[layout]

  const aligns = {
    left: 'items-center md:items-start text-center md:text-left',
    center: 'items-center md:items-center text-center md:text-center',
    right: 'items-center md:items-end text-center md:text-right',
  }

  // @ts-ignore
  const alignsClass = aligns[align]

  return (
    <div
      id="reference"
      className="relative w-full lg:h-screen py-12 md:py-24 bg-reference-background dark:bg-black overflow-hidden"
    >
      <div
        className={`${alignsClass} container lg:h-[650px] flex flex-col justify-center items-start`}
      >
        <SwiperComponent references={references} />
      </div>

      <AnimatedLargeTitle
        title={data.reference.largeTitle}
        target="#reference"
        origin={!preview ? '-translate-x-full' : null}
        className="absolute -left-[20px] bottom-0 text-[300px] leading-[0] font-bold text-reference-typo-lg dark:text-white"
      />
    </div>
  )
}
