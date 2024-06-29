import React from 'react'
import data from '@/app/lib/data.json'
import { ServiceVariantProps } from '@/app/lib/variants'
import { ServicesData } from '@/app/lib/types'
import { AnimatedTitle } from '@/app/ui/Animations/Title'
import { ServiceIcon } from '@/app/ui/Icons/Service'
import { ArrowDown } from '@/app/ui/Icons/Arrow/Down'
import Link from 'next/link'
import { getBreakpointStyles } from '@/app/lib/breakpointHelper'

export function ServicesVariant03({
  layout,
  align,
  radius,
  servicesContentTitle,
  boxes,
  servicesContentBoxSpecial,
  servicesContentBoxSpecialTitle,
  servicesContentBoxSpecialLink,
  breakpoint,
  preview,
}: ServiceVariantProps) {
  const services: ServicesData = data

  const layouts = {
    transparent: 'bg-transparent dark:bg-black',
    background: 'bg-[var(--about-background)] dark:bg-black',
    border: 'dark:bg-black',
  }

  // @ts-ignore
  const layoutsClass = layouts[layout]

  const aligns = {
    left: 'items-center md:items-start text-center md:text-left',
    center: 'items-center md:items-center text-center md:text-center',
    right: 'items-center md:items-end text-center md:text-right',
  }

  // @ts-ignore
  const alignsClass = aligns[align]

  const radiuses = {
    none: '',
    rounded: 'rounded-2xl',
  }

  // @ts-ignore
  const radiusClass = radiuses[radius]

  return (
    <div
      id="services"
      className={getBreakpointStyles(
        `${
          layout === 'border'
            ? `border-4 border-[var(--service-background)]`
            : `bg-[var(--service-background)] dark:bg-black`
        } ${layoutsClass} ${alignsClass} w-full pb-2 md:pb-8 lg:pb-20 pt-8 md:pt-20 lg:pt-40 flex items-center justify-center overflow-hidden`,
        breakpoint,
        preview,
      )}
    >
      <div
        className={getBreakpointStyles('container px-4 lg:px-0 py-8 md:py-0', breakpoint, preview)}
      >
        <div
          className={getBreakpointStyles(
            'grid gap-12 grid-cols-1 md:grid-cols-3 items-center px-8',
            breakpoint,
            preview,
          )}
        >
          <AnimatedTitle
            title={servicesContentTitle || services.services.title}
            target="#services"
            origin={!preview ? 'translate-y-[100px]' : null}
            className={getBreakpointStyles(
              'md:col-span-2 w-full text-[40px] md:text-[60px] lg:text-[80px] text-[var(--service-typo)] dark:text-white text-center md:text-left md:pr-12',
              breakpoint,
              preview,
            )}
          />

          {servicesContentBoxSpecial && (
            <Link
              href={servicesContentBoxSpecialLink}
              className="text-[var(--hero-typo)] dark:text-white"
            >
              <div
                className={getBreakpointStyles(
                  `${radiusClass} ${alignsClass} md:col-span-1 flex flex-col bg-[var(--service-accent-bg)] dark:bg-black hover:brightness-90 px-8 py-20 space-y-8 transition duration-300 ease-in-out`,
                  breakpoint,
                  preview,
                )}
              >
                <h3 className="text-2xl text-[var(--service-accent-fg)] dark:text-white">
                  {servicesContentBoxSpecialTitle}
                </h3>
                <ArrowDown className="size-[32px] text-[var(--service-accent-fg)] dark:text-white" />
              </div>
            </Link>
          )}
        </div>

        <div
          className={getBreakpointStyles(
            'grid gap-12 grid-cols-1 md:grid-cols-3 px-8 md:px-8 pt-10 pb-20',
            breakpoint,
            preview,
          )}
        >
          {/*//@ts-ignore*/}
          {boxes.map((box, index) => (
            <div
              key={index}
              className={getBreakpointStyles(
                `${radiusClass} ${alignsClass} flex flex-col bg-[var(--service-box-background)] dark:bg-black hover:brightness-90 p-8 space-y-4 transition duration-300 ease-in-out`,
                breakpoint,
                preview,
              )}
            >
              {box.iconShow && (
                <ServiceIcon
                  icon={box.icon}
                  className={getBreakpointStyles(
                    'size-[64px] text-[var(--service-box-icon)] dark:text-white',
                    breakpoint,
                    preview,
                  )}
                />
              )}
              <h3
                className={getBreakpointStyles(
                  'text-2xl text-[var(--service-box-typo)] dark:text-white font-bold',
                  breakpoint,
                  preview,
                )}
              >
                {box.title}
              </h3>

              <div
                //@ts-ignore
                dangerouslySetInnerHTML={{ __html: box.content }}
                className={getBreakpointStyles(
                  'prose prose-p:text-[var(--service-box-typo)] prose-em:text-[var(--service-box-typo)] prose-ul:text-[var(--service-box-typo)] prose-li:text-[var(--service-box-typo)] prose-a:text-[var(--service-box-typo)] prose-strong:text-[var(--service-box-typo)] max-w-screen-md text-[var(--service-box-typo)] dark:text-white text-opacity-75',
                  breakpoint,
                  preview,
                )}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
