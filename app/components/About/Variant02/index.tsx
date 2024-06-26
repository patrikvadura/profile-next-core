import React from 'react'
import { AboutVariantProps } from '@/app/lib/variants'
import Button from '@/app/ui/Button'
import { AnimatedTitle } from '@/app/ui/Animations/Title'
import { AnimatedDivider } from '@/app/ui/Animations/Divider'
import { getBreakpointStyles } from '@/app/lib/breakpointHelper'
import { ArrowRight } from '@/app/ui/Icons/Arrow/Right'

export function AboutVariant02({
  layout,
  align,
  order,
  contentTitle,
  contentButton,
  contentButtonText,
  contentButtonLink,
  boxes,
  breakpoint,
  preview,
}: AboutVariantProps) {
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
          } lg:min-h-screen flex flex-wrap px-0 lg:px-16`,
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
            title={contentTitle}
            target="#about"
            origin={!preview ? 'translate-y-[100px]' : null}
            className={getBreakpointStyles(
              'text-[60px] lg:text-[80px] leading-[1.3] text-[--about-typo] dark:text-white',
              breakpoint,
              preview,
            )}
          />

          {contentButton && (
            <Button
              asLink
              href={contentButtonLink}
              className={getBreakpointStyles(
                'bg-[var(--about-accent-bg)] dark:bg-white text-[var(--about-accent-fg)] dark:text-black',
                breakpoint,
                preview,
              )}
            >
              {contentButtonText}

              <ArrowRight size={24} />
            </Button>
          )}
        </div>

        <div
          className={getBreakpointStyles(
            `${
              layout === 'border'
                ? 'border-l-4 border-[--about-background]'
                : 'bg-[--about-background] dark:bg-black'
            } ${
              order === 'desc' ? classes.sideLeft : classes.sideRight
            } ${alignsClass} shadow-[--about-background] dark:shadow-black md:basis-5/12 flex flex-col justify-center space-y-8 px-8 lg:pl-12 py-20 md:py-12`,
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

          <div className="flex flex-col space-y-8">
            {/*//@ts-ignore*/}
            {boxes.map((box, index) => (
              <div
                key={index}
                className={getBreakpointStyles(
                  `${
                    align === 'full' ? 'flex-col items-center' : 'flex-row items-start'
                  } flex space-x-2 w-full`,
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

                <div
                  className={getBreakpointStyles(
                    'text-[var(--about-typo)] dark:text-white space-y-2',
                    breakpoint,
                    preview,
                  )}
                >
                  <h3 className="text-xl font-bold">{box.title}</h3>

                  <p className="text-sm">{box.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
