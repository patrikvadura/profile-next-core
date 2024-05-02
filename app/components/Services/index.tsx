'use client'

import data from '@/app/lib/data.json'

import React, { useRef } from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import classes from './index.module.scss'

import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

interface ListItem {
  label: string
  id: number
}

interface ServiceItem {
  title: string
  icon: string
  image: string
  description: string
  list: { listItems: ListItem[] }
  id: number
}

interface Data {
  services: {
    items: ServiceItem[]
    title: string
    style: string
  }
}

export function Services() {
  // @ts-ignore
  const services: Data = data

  const title = useRef<HTMLElement | any>()
  const main = useRef<HTMLElement | any>()

  useGSAP(() => {
    gsap.to(title.current, {
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: main.current,
      },
    })
  })

  return (
    <div id="services" className={classes.main} ref={main}>
      <div className="container">
        <h2 className={classes.title} ref={title}>
          {services.services.title}
        </h2>

        <div className="grid gap-12 grid-cols-1 md:grid-cols-3 px-8 md:px-8 py-20">
          {services.services.items.map((item, index) => (
            <div
              key={index}
              className={`${classes.item} ${
                services.services.style === 'border' ? classes.itemBorder : classes.itemBackground
              }`}
            >
              {item.image ? (
                <Image src={item.image} width={80} height={80} loading="lazy" alt={item.title} />
              ) : (
                <Icon icon={item.icon} className="text-[40px]" />
              )}
              <h3 className={classes.subtitle}>{item.title}</h3>

              {item.description ? (
                <p className={classes.text}>{item.description}</p>
              ) : (
                <ul className="text-center md:text-left">
                  {item.list.listItems.map((listItem, index) => (
                    <li
                      key={index}
                      className={`${classes.text} flex flex-row justify-center md:justify-start items-center`}
                    >
                      <Icon icon="material-symbols:check-small" className="mr-2" />
                      {listItem.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
