import React from 'react'
import data from '@/app/lib/data.json'
import { ServicesData } from '@/app/lib/types'
import Image from 'next/image'
import { Check } from '@/app/ui/Icons/Check'
import { AnimatedTitle } from '@/app/ui/Animations/Title'
import classes from './index.module.scss'

export function Services() {
  const services: ServicesData = data

  return (
    <div id="services" className={classes.main}>
      <div className="container">
        <AnimatedTitle
          title={services.services.title}
          target="#services"
          origin="translate-y-[100px]"
          className={classes.title}
        />

        <div className="grid gap-12 grid-cols-1 md:grid-cols-3 px-8 md:px-8 py-20">
          {services.services.items.map((item, index) => (
            <div key={index} className={classes.item}>
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
                      <Check className="me-2" />

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
