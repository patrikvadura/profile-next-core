'use client'

import data from '@/app/lib/data.json'
import classes from './index.module.scss'
import React from 'react'
import Link from 'next/link'
// import { Form } from '@/app/components/Contact/Form'

import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

export function Contact() {
  useGSAP(() => {
    gsap.to('.title', {
      y: 0,
      scale: 1,
      transformOrigin: 'center center',
      duration: 1,
      scrollTrigger: {
        trigger: '#contact',
      },
    })
  })

  return (
    <div id="contact" className={classes.section}>
      <div className="flex flex-col items-center space-y-8 md:space-y-12">
        <h4 className={classes.subtitle}>{data.contact.subtitle}</h4>

        <h3
          dangerouslySetInnerHTML={{ __html: data.contact.title }}
          className={`${classes.title} title`}
        />

        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 items-center text-center">
          <Link href={`mailto:${data.contact.email}`} className={classes.cta}>
            {data.contact.email}
          </Link>

          <Link href={`tel:${data.contact.phone}`} className={classes.cta}>
            {data.contact.phone}
          </Link>

          <p className="text-contact-title text-xl font-semibold tracking-wider">
            {data.contact.address}
          </p>
        </div>

        {/*<Form />*/}
      </div>
    </div>
  )
}
