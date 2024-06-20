'use client'

import React from 'react'
import data from '@/app/lib/data.json'
import { ReferenceItems } from '@/app/lib/types'
import { Quote } from '@/app/ui/Icons/Quote'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

interface SwiperComponentProps {
  references: ReferenceItems
  accentBgColor: string
  typoColor: string
  align: string
}

export function SwiperComponent({
  references,
  accentBgColor,
  typoColor,
  align,
}: SwiperComponentProps) {
  const aligns = {
    left: 'items-start text-left',
    center: 'items-center text-center',
    right: 'items-end text-right',
  }

  // @ts-ignore
  const alignsClass = aligns[align]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 ">
      <div className="overflow-y-scroll grid grid-cols-1 gap-4">
        {references.items.map((item, index) => (
          <div key={index}>
            <div
              className={`${alignsClass} flex flex-col justify-center w-full space-y-3 py-12 px-2 -translate-y-12`}
            >
              <p
                className={`${typoColor} max-w-screen-md mb-8 font-normal dark:text-white text-opacity-70`}
              >
                {item.description}
              </p>

              <h3 className={`${typoColor} text-lg font-bold dark:text-white`}>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col justify-start items-center">
        <h2 className={`${typoColor} text-5xl font-bold`}>{data.reference.largeTitle}</h2>
        <Quote className={`${accentBgColor} dark:text-white size-[350px]`} />
      </div>
    </div>
  )
}
