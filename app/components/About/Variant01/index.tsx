import React from 'react'
import data from '@/app/lib/data.json'
import { AboutVariantProps } from '@/app/lib/variants'
import Button from '@/app/ui/Button'
import { AnimatedTitle } from '@/app/ui/Animations/Title'
import { AnimatedDivider } from '@/app/ui/Animations/Divider'
import { getBreakpointStyles } from '@/app/lib/breakpointHelper'

export function AboutVariant01({ layout, align, breakpoint, preview }: AboutVariantProps) {
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
          } ${alignsClass} container md:h-[650px] flex flex-col justify-center space-y-8 px-8 md:px-16 py-24 md:py-12`,
          breakpoint,
          preview,
        )}
      >
        <AnimatedTitle
          title={data.about.title}
          target="#about"
          origin={!preview ? 'translate-y-[100px]' : null}
          className={getBreakpointStyles(
            'max-w-screen-md text-[40px] md:text-[56px] leading-[1.3] font-bold text-[var(--about-typo)] dark:text-white',
            breakpoint,
            preview,
          )}
        />

        <AnimatedDivider
          target="#about"
          origin={!preview ? '' : null}
          transformOrigin={alignsDividerClass}
          className={getBreakpointStyles(
            'bg-[var(--about-accent-bg)] dark:bg-white h-1 w-4',
            breakpoint,
            preview,
          )}
        />

        <p
          className={getBreakpointStyles(
            'max-w-screen-md mb-8 text-base font-normal text-[var(--about-typo)] dark:text-white text-opacity-70',
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
            className={getBreakpointStyles(
              'bg-[var(--about-accent-bg)] dark:bg-white text-[var(--about-accent-fg)] dark:text-black',
              breakpoint,
              preview,
            )}
          >
            {data.about.cta.title}
          </Button>
        </div>
      </div>
    </div>
  )
}
