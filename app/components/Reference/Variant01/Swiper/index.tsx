'use client'

import React from 'react'
import { ReferenceItems } from '@/app/lib/types'
import { Quote } from '@/app/ui/Icons/Quote'
import { getBreakpointStyles } from '@/app/lib/breakpointHelper'

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
    <Swiper slidesPerView={1} loop={true} navigation={true} modules={[Autoplay, Navigation]}>
      {references.items.map((item, index) => (
        <SwiperSlide key={index}>
          <div
            className={getBreakpointStyles(
              `${alignsClass} flex flex-col justify-start w-full h-full space-y-8 py-12 px-16 md:px-24 -translate-y-12`,
              breakpoint,
              preview,
            )}
          >
            <Quote
              className={getBreakpointStyles(
                `${accentBgColor} dark:text-white size-[100px] md:size-[150px]`,
                breakpoint,
                preview,
              )}
            />

            <p
              className={getBreakpointStyles(
                `${typoColor} max-w-screen-md mb-8 text-xl font-normal dark:text-white text-opacity-70`,
                breakpoint,
                preview,
              )}
            >
              {item.description}
            </p>

            <h3
              className={getBreakpointStyles(
                `${typoColor} text-xl font-bold dark:text-white`,
                breakpoint,
                preview,
              )}
            >
              {item.title}
            </h3>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
