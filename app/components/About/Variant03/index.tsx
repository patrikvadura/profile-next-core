import React from 'react'
import data from '@/app/lib/data.json'
import { AboutVariantProps } from '@/app/lib/variants'
import { AboutData } from '@/app/lib/types'
import Button from '@/app/ui/Button'
import { AnimatedTitle } from '@/app/ui/Animations/Title'
import { AnimatedDivider } from '@/app/ui/Animations/Divider'
import { getBreakpointStyles } from '@/app/lib/breakpointHelper'

export function AboutVariant03({ layout, align, breakpoint, preview }: AboutVariantProps) {
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
    <div
      id="about"
      className={getBreakpointStyles(
        `${layoutsClass} md:pt-12 lg:pt-24 md:px-8 lg:px-24`,
        breakpoint,
        preview,
      )}
    >
      <div
        className={getBreakpointStyles(
          `${
            layout === 'border'
              ? `border-4 border-[var(--about-background)]`
              : `bg-[var(--about-background)] dark:bg-black`
          } ${alignsClass} lg:min-h-[650px] flex flex-col justify-center space-y-16 px-8 md:px-16 py-24 lg:py-12`,
          breakpoint,
          preview,
        )}
      >
        <div className="space-y-8">
          <AnimatedTitle
            title={data.about.title}
            target="#about"
            origin={!preview ? 'translate-y-[100px]' : null}
            className={getBreakpointStyles(
              'text-[40px] md:text-[48px] lg:text-[56px] leading-[1.3] font-bold text-[var(--about-typo)] dark:text-white',
              breakpoint,
              preview,
            )}
          />

          <AnimatedDivider
            target="#about"
            transformOrigin={alignsDividerClass}
            origin={!preview ? '' : null}
            className={getBreakpointStyles(
              'bg-[var(--about-accent-bg)] dark:bg-white h-1 w-4',
              breakpoint,
              preview,
            )}
          />

          <p
            className={getBreakpointStyles(
              'mb-8 text-base font-normal text-[var(--about-typo)] dark:text-white text-opacity-70',
              breakpoint,
              preview,
            )}
          >
            {data.about.description}
          </p>

          <div className="mt-12 space-x-4">
            <Button
              asLink
              href={data.about.cta.link}
              className="bg-[var(--about-accent-bg)] dark:bg-white text-[var(--about-accent-fg)] dark:text-black"
            >
              {data.about.cta.title}
            </Button>
          </div>
        </div>

        <div
          className={getBreakpointStyles(
            'flex flex-col md:flex-row flex-wrap space-y-8 md:space-y-0',
            breakpoint,
            preview,
          )}
        >
          {aboutItems.about.items.map((item: any, index: any) => (
            <div
              key={index}
              className={getBreakpointStyles(
                'md:basis-1/3 flex flex-row items-start space-x-2',
                breakpoint,
                preview,
              )}
            >
              <div
                className={getBreakpointStyles(
                  'text-xl text-[var(--about-typo)] dark:text-white opacity-50',
                  breakpoint,
                  preview,
                )}
              >
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
