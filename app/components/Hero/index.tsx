'use client'

import data from '@/app/lib/data.json'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import classes from './index.module.scss'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

export function Hero() {
  useGSAP(() => {
    gsap.to('.title', {
      y: 0,
      duration: 1,
    })

    gsap.to('.subtitle', {
      y: 0,
      duration: 0.5,
    })

    gsap.to('.largeTitle', {
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: 'body',
        start: '200px',
        end: '500px',
        scrub: true,
      },
    })
  })

  return (
    <div className="w-full relative overflow-hidden bg-light-hero-background">
      <Image
        src={data.profile.image}
        className={classes.profileImage}
        width={1050}
        height={1050}
        quality={75}
        sizes="(max-width: 480px) 200px, (max-width: 800px) 600px, 1050px"
        priority={true}
        alt={data.profile.name}
      />

      <div className={classes.gradientOverlay} />

      <div className="md:h-screen lg:h-[950px] flex flex-col justify-center items-start py-32 md:pt-0">
        <div className="container p-8 xl:p-0 z-20">
          <div className="max-w-screen-md text-left">
            <h3 className={`${classes.subtitle} subtitle`}>{data.hero.subtitle}</h3>

            <h2 className={`${classes.title} title`}>{data.hero.title}</h2>

            <div className="mt-12 space-x-4">
              <Link href={data.hero.cta.primary.link} className={classes.cta}>
                {data.hero.cta.primary.title}

                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M16.175 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.175l-4.9-4.9q-.3-.3-.288-.7t.313-.7q.3-.275.7-.288t.7.288l6.6 6.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-6.6 6.6q-.275.275-.687.275T11.3 19.3q-.3-.3-.3-.712t.3-.713z"
                  />
                </svg>
              </Link>

              <Link href={data.hero.cta.secondary.link} className={classes.ctaSecondary}>
                {data.hero.cta.secondary.title}
              </Link>
            </div>

            <p className={`${classes.largeTitle} largeTitle`}>{data.hero.largeTitle}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
