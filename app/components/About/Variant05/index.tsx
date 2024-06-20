import React from 'react'
import data from '@/app/lib/data.json'
import { AboutVariantProps } from '@/app/lib/variants'
import { AboutData } from '@/app/lib/types'
import Button from '@/app/ui/Button'
import { AnimatedTitle } from '@/app/ui/Animations/Title'
import { AnimatedDivider } from '@/app/ui/Animations/Divider'

export function AboutVariant05({ layout, preview }: AboutVariantProps) {
  const layouts = {
    transparent: 'dark:bg-black',
    background: 'bg-[var(--about-background)] dark:bg-black',
    border: 'dark:bg-black',
  }

  // @ts-ignore
  const layoutsClass = layouts[layout]

  return (
    <div id="about" className={`${layoutsClass} md:pt-12 lg:pt-24 md:px-8 lg:px-24`}>
      <div
        className={`${
          layout === 'border'
            ? `border-4 border-[var(--about-background)]`
            : `bg-[var(--about-background)] dark:bg-black`
        } lg:min-h-[650px] flex flex-col justify-center items-center px-8 md:px-16 py-12`}
      >
        <div className="flex flex-col justify-center items-center text-center space-y-8">
          <AnimatedTitle
            title={data.about.title}
            target="#about"
            origin={!preview ? 'translate-y-[100px]' : null}
            className={`text-[40px] md:text-[56px] leading-[1.3] font-bold text-[var(--about-typo)] dark:text-white`}
          />

          <AnimatedDivider
            target="#about"
            origin={!preview ? '' : null}
            transformOrigin="center center"
            className={`bg-[var(--about-accent-bg)] dark:bg-white h-1 w-4`}
          />

          <p
            className={`mb-8 text-base font-normal text-[var(--about-typo)] dark:text-white text-opacity-70`}
          >
            {data.about.description}
          </p>

          <div className="mt-12 space-x-4">
            <Button
              asLink
              href={data.about.cta.link}
              className={`bg-[var(--about-accent-bg)] dark:bg-white text-[var(--about-accent-fg)] dark:text-black`}
            >
              {data.about.cta.title}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
