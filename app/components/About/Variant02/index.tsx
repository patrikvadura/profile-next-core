import React from 'react'
import data from '@/app/lib/data.json'
import { AboutVariant02Props } from '@/app/lib/variants'
import Button from '@/app/ui/Button'
import { AnimatedTitle } from '@/app/ui/Animations/Title'
import { AnimatedDivider } from '@/app/ui/Animations/Divider'

export function AboutVariant02({ layout, align, order }: AboutVariant02Props) {
  const classes = require('./index.module.scss')

  const layouts = {
    transparent: 'dark:bg-black',
    background: 'bg-[--about-background] dark:bg-black',
    border: 'dark:bg-black',
  }

  const layoutsClass = layouts[layout]

  const aligns = {
    left: 'items-start text-left',
    right: 'items-end text-right',
    full: 'items-center text-center',
  }

  const alignsClass = aligns[align]

  const alignsDivider = {
    left: 'left center',
    right: 'right center',
    full: 'center center',
  }

  const alignsDividerClass = alignsDivider[align]

  return (
    <div id="about" className={layoutsClass}>
      <div
        className={`${
          order === 'desc' ? 'flex-col-reverse md:flex-row-reverse' : 'flex-col md:flex-row'
        } lg:min-h-screen flex flex-wrap px-0 md:px-16`}
      >
        <div
          className={`${alignsClass} md:basis-7/12 flex flex-col justify-center space-y-8 px-8 md:px-16 py-20 md:py-12`}
        >
          <AnimatedTitle
            title={data.about.title}
            target="#about"
            origin="translate-y-[100px]"
            className="text-[60px] md:text-[80px] leading-[1.3] text-[--about-typo] dark:text-white"
          />

          <Button
            asLink
            href={data.about.cta.link}
            className="mt-12 bg-[--about-accent-bg] dark:bg-white text-[--about-accent-fg] dark:text-black"
          >
            {data.about.cta.title}
          </Button>
        </div>

        <div
          className={`${
            layout === 'border'
              ? 'border-l-4 border-[--about-background]'
              : 'bg-[--about-background] dark:bg-black'
          } ${
            order === 'desc' ? classes.sideLeft : classes.sideRight
          } ${alignsClass} shadow-[--about-background] md:basis-5/12 flex flex-col justify-center space-y-8 px-8 md:px-12 py-20 md:py-12`}
        >
          <AnimatedDivider
            target="#about"
            transformOrigin={alignsDividerClass}
            className="bg-[--about-accent-bg] dark:bg-white h-1 w-4"
          />

          <p className="mb-8 text-base font-normal text-[--about-typo] dark:text-white text-opacity-70">
            {data.about.description}
          </p>
        </div>
      </div>
    </div>
  )
}
