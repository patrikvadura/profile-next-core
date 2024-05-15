'use client'

import React from 'react'
import classes from './index.module.scss'
import { ReferenceItems } from '@/app/lib/types'
import { Quote } from '@/app/ui/Icons/Quote'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

interface SwiperComponentProps {
  references: ReferenceItems
}

export function SwiperComponent({ references }: SwiperComponentProps) {
  return (
    <Swiper slidesPerView={1} loop={true} navigation={true} modules={[Autoplay, Navigation]}>
      {references.items.map((item, index) => (
        <SwiperSlide key={index}>
          <div className={classes.item}>
            <Quote className={classes.quote} />

            <p className={classes.description}>{item.description}</p>

            <h3 className={classes.title}>{item.title}</h3>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
