'use client'

import data from '@/app/lib/data.json'
import classes from './index.module.scss'
import { Icon } from '@iconify/react'
import { Link } from '@nextui-org/react'
import React, { useRef } from 'react'

import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

export function Contact() {
  const title = useRef<HTMLElement | any>()
  const main = useRef<HTMLElement | any>()

  useGSAP(() => {
    gsap.to(title.current, {
      y: 0,
      scale: 1,
      transformOrigin: 'center center',
      duration: 1,
      scrollTrigger: {
        trigger: main.current,
      },
    })
  })

  return (
    <div id="contact" className={classes.section} ref={main}>
      <div className="flex flex-col items-center space-y-8 md:space-y-12">
        <h4 className={classes.subtitle}>{data.contact.subtitle}</h4>

        <h3
          dangerouslySetInnerHTML={{ __html: data.contact.title }}
          className={classes.title}
          ref={title}
        />

        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 items-center text-center">
          <Link href={`mailto:${data.contact.email}`} className={classes.cta}>
            <Icon icon="material-symbols:alternate-email" />
            {data.contact.email}
          </Link>

          <Link href={`tel:${data.contact.phone}`} className={classes.cta}>
            <Icon icon="material-symbols:call" />
            {data.contact.phone}
          </Link>

          <p className="text-contact-title text-xl font-semibold tracking-wider">
            {data.contact.address}
          </p>
        </div>
      </div>
    </div>
  )
}
