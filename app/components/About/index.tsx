'use client'

import data from '@/app/lib/data.json'

import React, { useRef } from 'react'
import { Divider, Link } from '@nextui-org/react'
import { Icon } from '@iconify/react'
import classes from './index.module.scss'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

export function About() {
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
    <div id="about" className="md:pt-12 lg:pt-24 md:px-8 lg:px-24">
      <div className={classes.main} ref={main}>
        <div className="max-w-screen-md space-y-8 text-left py-12 px-8 md:p-16">
          <h3 className={classes.title} ref={title}>
            {data.about.title}
          </h3>

          <Divider orientation="horizontal" ref={divider} className={classes.divider} />

          <p className={classes.description}>{data.about.description}</p>

          <div className="mt-12 space-x-4">
            <Link href={data.about.cta.link} className={classes.cta}>
              {data.about.cta.title}
              <Icon icon="material-symbols:arrow-forward-rounded" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
