import React from 'react'
import data from '@/app/lib/data.json'
import { AboutVariantProps } from '@/app/lib/variants'
import Button from '@/app/ui/Button'
import { AnimatedTitle } from '@/app/ui/Animations/Title'
import { AnimatedDivider } from '@/app/ui/Animations/Divider'
import { getBreakpointStyles } from '@/app/lib/breakpointHelper'

export function AboutVariant04({ layout, align, order, breakpoint, preview }: AboutVariantProps) {
  const classes = require('./index.module.scss')

  const layouts = {
    transparent: 'dark:bg-black',
    background: 'bg-[--about-background] dark:bg-black',
    border: 'dark:bg-black',
  }

  // @ts-ignore
  const layoutsClass = layouts[layout]

  const aligns = {
    left: 'items-start text-left',
    right: 'items-end text-right',
    full: 'items-center text-center',
  }

  // @ts-ignore
  const alignsClass = aligns[align]

  const alignsDivider = {
    left: 'left center',
    right: 'right center',
    full: 'center center',
  }

  // @ts-ignore
  const alignsDividerClass = alignsDivider[align]

  return (
    <div id="about" className={layoutsClass}>
      <div
        className={getBreakpointStyles(
          `${
            order === 'desc' ? 'flex-col-reverse md:flex-row-reverse' : 'flex-col md:flex-row'
          } lg:min-h-screen flex flex-wrap px-0 md:px-16`,
          breakpoint,
          preview,
        )}
      >
        <div
          className={getBreakpointStyles(
            `${alignsClass} md:basis-7/12 flex flex-col justify-center space-y-8 px-8 md:px-16 py-20 md:py-24 lg:py-12`,
            breakpoint,
            preview,
          )}
        >
          <AnimatedTitle
            title={data.about.title}
            target="#about"
            origin={!preview ? 'translate-y-[100px]' : null}
            className={getBreakpointStyles(
              'text-[60px] lg:text-[80px] leading-[1.3] text-[--about-typo] dark:text-white',
              breakpoint,
              preview,
            )}
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
          className={getBreakpointStyles(
            `${
              layout === 'border'
                ? 'border-l-4 border-[--about-background]'
                : 'bg-[--about-background] dark:bg-black'
            } ${
              order === 'desc' ? classes.sideLeft : classes.sideRight
            } ${alignsClass} shadow-[--about-background] dark:shadow-black md:basis-5/12 flex flex-col justify-center space-y-8 px-8 md:px-12 py-20 md:py-12`,
            breakpoint,
            preview,
          )}
        >
          <AnimatedDivider
            target="#about"
            transformOrigin={alignsDividerClass}
            origin={!preview ? '' : null}
            className="bg-[--about-accent-bg] dark:bg-white h-1 w-4"
          />

          <p
            className={getBreakpointStyles(
              'mb-8 text-base font-normal text-[--about-typo] dark:text-white text-opacity-70',
              breakpoint,
              preview,
            )}
          >
            {data.about.description}
          </p>
        </div>
      </div>
    </div>
  )
}
