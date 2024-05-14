'use client'

import data from '@/app/lib/data.json'
import React from 'react'
import Link from 'next/link'
import classes from './index.module.scss'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

export function About() {
  useGSAP(() => {
    gsap.to('.title', {
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '#about',
      },
    })

    gsap.to('.divider', {
      y: 0,
      scaleX: 10,
      transformOrigin: 'left center',
      duration: 1,
      scrollTrigger: {
        trigger: '#about',
        scrub: true,
      },
    })
  })

  return (
    <div id="about" className="md:pt-12 lg:pt-24 md:px-8 lg:px-24">
      <div className={classes.main}>
        <div className="max-w-screen-md space-y-8 text-left py-12 px-8 md:p-16">
          <h3 className={`${classes.title} title`}>{data.about.title}</h3>

          <div className={`${classes.divider} divider`} />

          <p className={classes.description}>{data.about.description}</p>

          <div className="mt-12 space-x-4">
            <Link href={data.about.cta.link} className={classes.cta}>
              {data.about.cta.title}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
