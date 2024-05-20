import React from 'react'
import data from '@/app/lib/data.json'
import { AboutVariantProps } from '@/app/lib/variants'
import { AboutData } from '@/app/lib/types'
import Button from '@/app/ui/Button'
import { AnimatedTitle } from '@/app/ui/Animations/Title'
import { AnimatedDivider } from '@/app/ui/Animations/Divider'

export function AboutVariant03({ layout, align, preview }: AboutVariantProps) {
  const aboutItems: AboutData = data

  const layouts = {
    transparent: 'dark:bg-black',
    background: 'bg-[var(--about-background)] dark:bg-black',
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
    <div id="about" className={`${layoutsClass} md:pt-12 lg:pt-24 md:px-8 lg:px-24`}>
      <div
        className={`${
          layout === 'border'
            ? `border-4 border-[var(--about-background)]`
            : `bg-[var(--about-background)] dark:bg-black`
        } ${alignsClass} lg:min-h-[650px] flex flex-col justify-center space-y-16 px-8 md:px-16 py-12`}
      >
        <div className="space-y-8">
          <AnimatedTitle
            title={data.about.title}
            target="#about"
            origin="translate-y-[100px]"
            className={`text-[40px] md:text-[56px] leading-[1.3] font-bold text-[var(--about-typo)] dark:text-white`}
          />

          <AnimatedDivider
            target="#about"
            transformOrigin={alignsDividerClass}
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

        <div className="flex flex-col md:flex-row flex-wrap">
          {aboutItems.about.items.map((item: any, index: any) => (
            <div key={index} className="md:basis-1/3 flex flex-row items-start space-x-2">
              <div className="text-xl text-[var(--about-typo)] dark:text-white opacity-50">
                {`0${index + 1}`}
              </div>

              <div className="text-[var(--about-typo)] dark:text-white space-y-2">
                <h3 className="text-xl font-bold">{item.title}</h3>

                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
