import React from 'react'
import data from '@/app/lib/data.json'
import { ServiceVariantProps } from '@/app/lib/variants'
import { ServicesData } from '@/app/lib/types'
import { AnimatedTitle } from '@/app/ui/Animations/Title'
import { ServiceIcon } from '@/app/ui/Icons/Service'

export function ServicesVariant01({
  layout,
  align,
  radius,
  servicesContentTitle,
  servicesContentBox1,
  servicesContentBox1Title,
  servicesContentBox1Content,
  servicesContentBox1Icon,
  servicesContentBox1IconShow,
  servicesContentBox2,
  servicesContentBox2Title,
  servicesContentBox2Content,
  servicesContentBox2Icon,
  servicesContentBox2IconShow,
  servicesContentBox3,
  servicesContentBox3Title,
  servicesContentBox3Content,
  servicesContentBox3Icon,
  servicesContentBox3IconShow,
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
      className={`${
        layout === 'border'
          ? `border-4 border-[var(--service-background)]`
          : `bg-[var(--service-background)] dark:bg-black`
      } ${layoutsClass} ${alignsClass} w-full pb-2 md:pb-8 lg:pb-20 pt-8 md:pt-20 lg:pt-40 flex items-center justify-center overflow-hidden`}
    >
      <div className="container">
        <AnimatedTitle
          title={servicesContentTitle || services.services.title}
          target="#services"
          origin={!preview ? 'translate-y-[100px]' : null}
          className="w-full text-[50px] font-bold text-[var(--service-typo)] dark:text-white text-center"
        />

        <div className="grid gap-12 grid-cols-1 md:grid-cols-3 px-8 md:px-8 py-20">
          {servicesContentBox1 && (
            <div
              className={`${radiusClass} ${alignsClass} flex flex-col bg-[var(--service-box-background)] dark:bg-black hover:brightness-90 p-8 space-y-4 transition duration-300 ease-in-out`}
            >
              {servicesContentBox1IconShow && (
                <ServiceIcon
                  icon={servicesContentBox1Icon}
                  className="size-[64px] text-[var(--service-box-icon)] dark:text-white"
                />
              )}
              <h3 className="text-2xl text-[var(--service-box-typo)] dark:text-white font-bold">
                {servicesContentBox1Title}
              </h3>

              <p className="text-[var(--service-box-typo)] dark:text-white text-opacity-75">
                {servicesContentBox1Content}
              </p>
            </div>
          )}

          {servicesContentBox2 && (
            <div
              className={`${radiusClass} ${alignsClass} flex flex-col bg-[var(--service-box-background)] dark:bg-black hover:brightness-90 p-8 space-y-4 transition duration-300 ease-in-out`}
            >
              {servicesContentBox2IconShow && (
                <ServiceIcon
                  icon={servicesContentBox2Icon}
                  className="size-[64px] text-[var(--service-box-icon)] dark:text-white"
                />
              )}
              <h3 className="text-2xl text-[var(--service-box-typo)] dark:text-white font-bold">
                {servicesContentBox2Title}
              </h3>

              <p className="text-[var(--service-box-typo)] dark:text-white text-opacity-75">
                {servicesContentBox2Content}
              </p>
            </div>
          )}

          {servicesContentBox3 && (
            <div
              className={`${radiusClass} ${alignsClass} flex flex-col bg-[var(--service-box-background)] dark:bg-black hover:brightness-90 p-8 space-y-4 transition duration-300 ease-in-out`}
            >
              {servicesContentBox3IconShow && (
                <ServiceIcon
                  icon={servicesContentBox3Icon}
                  className="size-[64px] text-[var(--service-box-icon)] dark:text-white"
                />
              )}
              <h3 className="text-2xl text-[var(--service-box-typo)] dark:text-white font-bold">
                {servicesContentBox3Title}
              </h3>

              <p className="text-[var(--service-box-typo)] dark:text-white text-opacity-75">
                {servicesContentBox3Content}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
