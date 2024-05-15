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
  type?: 'move' | 'opacity' | 'scale'
  origin?: string
  as?: ElementType
  dangerouslySetInnerHTML?: { __html: string } | undefined
}

export function AnimatedTitle({
  target,
  title,
  className,
  type = 'move',
  origin,
  as: Component = 'h2',
  dangerouslySetInnerHTML,
}: ServicesProps) {
  const titleRef = useRef<HTMLElement | any>()

  useGSAP(() => {
    if (type === 'move') {
      gsap.to(titleRef.current, {
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: target,
        },
      })
    } else if (type === 'opacity') {
      gsap.to(titleRef.current, {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: target,
        },
      })
    } else if (type === 'scale') {
      gsap.to(titleRef.current, {
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: target,
        },
      })
    }
  }, [target])

  if (dangerouslySetInnerHTML) {
    return (
      <Component
        className={`${className} ${origin}`}
        ref={titleRef}
        dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      />
    )
  }

  return (
    <Component className={`${className} ${origin}`} ref={titleRef}>
      {title}
    </Component>
  )
}
