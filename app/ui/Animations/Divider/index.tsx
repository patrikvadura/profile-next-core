'use client'

import React, { useRef } from 'react'

import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

type ServicesProps = {
  target?: string
  className?: string
  origin?: string
}

export function AnimatedDivider({ target, className, origin }: ServicesProps) {
  const dividerRef = useRef<HTMLElement | any>()

  useGSAP(() => {
    gsap.to(dividerRef.current, {
      y: 0,
      scaleX: 10,
      transformOrigin: 'left center',
      duration: 1,
      scrollTrigger: {
        trigger: target,
        scrub: true,
      },
    })
  }, [target])

  return <div className={`${className} ${origin}`} ref={dividerRef} />
}
