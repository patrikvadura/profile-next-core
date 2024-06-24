'use client'

import React from 'react'
import { Box } from '@/app/lib/customizer'
import { Quote } from '@/app/ui/Icons/Quote'
import { getBreakpointStyles } from '@/app/lib/breakpointHelper'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

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

  const slidesPerView = breakpoint === 'md' ? 2 : breakpoint === 'xl' ? 2 : 1

  return (
    <>
      <Quote
        className={getBreakpointStyles(
          `${accentBgColor} mb-8 dark:text-white size-[100px] md:size-[150px]`,
          breakpoint,
          preview,
        )}
      />

      <Swiper
        slidesPerView={preview ? slidesPerView : 1}
        loop={true}
        navigation={true}
        modules={[Autoplay, Navigation]}
      >
        {boxes.map((box, index) => (
          <SwiperSlide key={index}>
            <div
              className={getBreakpointStyles(
                `${alignsClass} flex flex-col justify-start w-full h-full space-y-8 py-12 px-16 md:px-24 -translate-y-12`,
                breakpoint,
                preview,
              )}
            >
              <p
                className={getBreakpointStyles(
                  `${typoColor} max-w-screen-md mb-8 text-lg font-normal dark:text-white text-opacity-70`,
                  breakpoint,
                  preview,
                )}
              >
                {box.description}
              </p>

              <h3
                className={getBreakpointStyles(
                  `${typoColor} text-xl font-bold dark:text-white`,
                  breakpoint,
                  preview,
                )}
              >
                {box.title}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
