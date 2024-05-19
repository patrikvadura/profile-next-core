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
  style?: any
  type?: 'move' | 'opacity' | 'scale'
  origin?: string
  as?: ElementType
  dangerouslySetInnerHTML?: { __html: string } | undefined
}

export function AnimatedSubtitle({
  target,
  title,
  className,
  style,
  type = 'move',
  origin,
  as: Component = 'h3',
  dangerouslySetInnerHTML,
}: ServicesProps) {
  const titleRef = useRef<HTMLElement | any>()

  useGSAP(() => {
    if (type === 'move') {
      gsap.to(titleRef.current, {
        y: 0,
        duration: 0.5,
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
        style={style}
        ref={titleRef}
        dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      />
    )
  }

  return (
    <Component className={`${className} ${origin}`} style={style} ref={titleRef}>
      {title}
    </Component>
  )
}
