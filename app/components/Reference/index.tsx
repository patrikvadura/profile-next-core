'use client'

import data from '@/app/lib/data.json'

import React, { useRef } from 'react'
import { Icon } from '@iconify/react'
import classes from './index.module.scss'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

export function Reference() {
  const title = useRef<HTMLElement | any>()
  const divider = useRef<HTMLElement | any>()
  const main = useRef<HTMLElement | any>()

  useGSAP(() => {
    gsap.to(title.current, {
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: main.current,
      },
    })

    gsap.to(divider.current, {
      y: 0,
      scaleX: 10,
      transformOrigin: 'left center',
      duration: 1,
      scrollTrigger: {
        trigger: main.current,
        scrub: true,
      },
    })
  })

  return (
    <div id="reference" className="container pt-24 py-24">
      <div className={classes.main} ref={main}>
        <div className="flex flex-col items-center space-y-8 text-center p-16">
          <Icon icon="ic:sharp-format-quote" className="text-reference-symbol text-[150px]" />

          <p className={classes.description}>{data.about.description}</p>

          <h3 className={classes.title} ref={title}>
            {data.about.title}
          </h3>
        </div>
      </div>
    </div>
  )
}
