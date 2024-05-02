'use client'

import data from '@/app/lib/data.json'

import React, { useRef } from 'react'
import Image from 'next/image'
import { Link } from '@nextui-org/react'
import { Icon } from '@iconify/react'
import classes from './index.module.scss'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

export function Hero() {
  const title = useRef<HTMLElement | any>()
  const subtitle = useRef<HTMLElement | any>()
  const largeTitle = useRef<HTMLElement | any>()
  const image = useRef<HTMLElement | any>()

  useGSAP(() => {
    gsap.to(title.current, {
      y: 0,
      duration: 1,
    })

    gsap.to(subtitle.current, {
      y: 0,
      duration: 0.5,
    })

    gsap.to(largeTitle.current, {
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: 'body',
        start: '200px',
        end: '500px',
        scrub: true,
      },
    })

    gsap.to(image.current, {
      opacity: 1,
      duration: 2,
    })
  })

  return (
    <div className="w-full relative overflow-hidden bg-hero-background">
      <Image
        src={data.profile.image}
        className={classes.profileImage}
        width={1050}
        height={1050}
        loading="lazy"
        ref={image}
        alt={data.profile.name}
      />

      <div className={classes.gradientOverlay} />

      <div className="md:h-screen lg:h-[950px] flex flex-col justify-center items-start py-32 md:pt-0">
        <div className="container p-8 xl:p-0 z-20">
          <div className="max-w-screen-md text-left">
            <h3 className={classes.subtitle} ref={subtitle}>
              {data.hero.subtitle}
            </h3>

            <h2 className={classes.title} ref={title}>
              {data.hero.title}
            </h2>

            <div className="mt-12 space-x-4">
              <Link href={data.hero.cta.primary.link} className={classes.cta}>
                {data.hero.cta.primary.title}
                <Icon icon="material-symbols:arrow-forward-rounded" />
              </Link>

              <Link href={data.hero.cta.secondary.link} className={classes.ctaSecondary}>
                {data.hero.cta.secondary.title}
              </Link>
            </div>

            <p className={classes.largeTitle} ref={largeTitle}>
              {data.hero.largeTitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
