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

  return (
    <Swiper slidesPerView={1} loop={true} navigation={true} modules={[Autoplay, Navigation]}>
      {boxes.map((box, index) => (
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

            <div
              //@ts-ignore
              dangerouslySetInnerHTML={{ __html: box.description }}
              className={getBreakpointStyles(
                `prose prose-p:text-[var(--reference-typo)] dark:prose-p:text-white prose-em:text-[var(--reference-typo)] dark:prose-em:text-white prose-ul:text-[var(--reference-typo)] dark:prose-ul:text-white prose-li:text-[var(--reference-typo)] dark:prose-li:text-white prose-a:text-[var(--reference-typo)] dark:prose-a:text-white prose-strong:text-[var(--reference-typo)] dark:prose-strong:text-white ${typoColor} dark:text-white max-w-screen-md mb-8 text-xl font-normal text-opacity-70`,
                breakpoint,
                preview,
              )}
            />

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
  )
}
