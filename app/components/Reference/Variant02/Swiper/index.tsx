'use client'

import React from 'react'
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
    <>
      <Quote className={`${accentBgColor} mb-8 dark:text-white size-[100px] md:size-[150px]`} />

      <Swiper slidesPerView={2} loop={true} navigation={true} modules={[Autoplay, Navigation]}>
        {references.items.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className={`${alignsClass} flex flex-col justify-start w-full h-full space-y-8 py-12 px-8 md:px-24 -translate-y-12`}
            >
              <p
                className={`${typoColor} max-w-screen-md mb-8 text-lg font-normal dark:text-white text-opacity-70`}
              >
                {item.description}
              </p>

              <h3 className={`${typoColor} text-xl font-bold dark:text-white`}>{item.title}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
