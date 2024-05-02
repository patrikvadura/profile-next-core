'use client'

import data from '@/app/lib/data.json'

import React, { useRef } from 'react'

import { Icon } from '@iconify/react'
import classes from './index.module.scss'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Autoplay, Navigation, Pagination } from 'swiper/modules'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

export function Reference() {
  const largeTitle = useRef<HTMLElement | any>()
  const main = useRef<HTMLElement | any>()

  useGSAP(() => {
    gsap.to(largeTitle.current, {
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: main.current,
        start: '200px center',
        end: '300px',
        scrub: true,
      },
    })
  })

  return (
    <div id="reference" className={classes.wrapper} ref={main}>
      <div className={classes.main}>
        <Swiper slidesPerView={1} loop={true} navigation={true} modules={[Autoplay, Navigation]}>
          {data.reference.items.map((item: { title: string; description: string; id: number }) => (
            <SwiperSlide key={item.id}>
              <div className={classes.item}>
                <Icon icon="ic:sharp-format-quote" className={classes.quote} />

                <p className={classes.description}>{item.description}</p>

                <h3 className={classes.title}>{item.title}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <p className={classes.largeTitle} ref={largeTitle}>
        {data.reference.largeTitle}
      </p>
    </div>
  )
}
