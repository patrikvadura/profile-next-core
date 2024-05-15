'use client'

import React, { useRef, ElementType } from 'react'

import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

type ServicesProps = {
  target?: string
  title?: string
  className?: string
  origin?: string
  as?: ElementType
}

export function AnimatedLargeTitle({
  target,
  title,
  className,
  origin,
  as: Component = 'span',
}: ServicesProps) {
  const largeTitleRef = useRef<HTMLElement | any>()

  useGSAP(() => {
    gsap.to(largeTitleRef.current, {
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: target,
        start: '200px center',
        end: '300px',
        scrub: true,
      },
    })
  }, [target])

  return (
    <Component className={`${className} ${origin}`} ref={largeTitleRef}>
      {title}
    </Component>
  )
}
