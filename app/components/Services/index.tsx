'use client'

import data from '@/app/lib/data.json'

import React from 'react'
import Image from 'next/image'
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

  useGSAP(() => {
    gsap.to('.title', {
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '#services',
      },
    })
  })

  return (
    <div id="services" className={classes.main}>
      <div className="container">
        <h2 className={`${classes.title} title`}>{services.services.title}</h2>

        <div className="grid gap-12 grid-cols-1 md:grid-cols-3 px-8 md:px-8 py-20">
          {services.services.items.map((item, index) => (
            <div
              key={index}
              className={`${classes.item} ${
                services.services.style === 'border' ? classes.itemBorder : classes.itemBackground
              }`}
            >
              {item.image ? (
                <Image
                  src={item.image}
                  width={80}
                  height={80}
                  quality={50}
                  sizes="(max-width: 800px) 60px, 80px"
                  loading="lazy"
                  alt={item.title}
                />
              ) : (
                <div className="text-[40px]">{item.icon}</div>
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        className="mr-2"
                        viewBox="0 0 24 24"
                      >
                        <path fill="currentColor" d="m10 16.4l-4-4L7.4 11l2.6 2.6L16.6 7L18 8.4z" />
                      </svg>
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
