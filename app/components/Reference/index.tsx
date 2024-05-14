'use client'

import data from '@/app/lib/data.json'
import React from 'react'
import classes from './index.module.scss'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Autoplay, Navigation } from 'swiper/modules'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

export function Reference() {
  useGSAP(() => {
    gsap.to('.largeTitle', {
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '#reference',
        start: '200px center',
        end: '300px',
        scrub: true,
      },
    })
  })

  return (
    <div id="reference" className={classes.wrapper}>
      <div className={classes.main}>
        <Swiper slidesPerView={1} loop={true} navigation={true} modules={[Autoplay, Navigation]}>
          {data.reference.items.map((item: { title: string; description: string; id: number }) => (
            <SwiperSlide key={item.id}>
              <div className={classes.item}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  className={classes.quote}
                  viewBox="0 0 24 24"
                >
                  <path fill="currentColor" d="M5 17h3l2-4V7H4v6h3zm10 0h3l2-4V7h-6v6h3z" />
                </svg>

                <p className={classes.description}>{item.description}</p>

                <h3 className={classes.title}>{item.title}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <p className={`${classes.largeTitle} largeTitle`}>{data.reference.largeTitle}</p>
    </div>
  )
}
