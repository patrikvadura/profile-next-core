import React from 'react'
import data from '@/app/lib/data.json'
import { ServiceVariantProps } from '@/app/lib/variants'
import { ServicesData } from '@/app/lib/types'
import Image from 'next/image'
import Link from 'next/link'
import { Check } from '@/app/ui/Icons/Check'
import { AnimatedTitle } from '@/app/ui/Animations/Title'
import { ServiceIcon } from '@/app/ui/Icons/Service'

export function ServicesVariant02({ layout, align, radius, preview }: ServiceVariantProps) {
  const services: ServicesData = data

  return (
    <div
      id="services"
      className="w-full bg-[var(--service-background)] dark:bg-black pb-2 md:pb-8 lg:pb-20 pt-8 md:pt-20 lg:pt-40 flex items-center justify-center overflow-hidden"
    >
      <div className="container">
        <AnimatedTitle
          title={services.services.title}
          target="#services"
          origin="translate-y-[100px]"
          className="w-full text-[50px] font-bold text-[var(--service-typo)] dark:text-white text-center"
        />

        <div className="grid gap-12 grid-cols-1 md:grid-cols-3 px-8 md:px-8 py-20">
          {services.services.items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center md:items-start text-center md:text-left dark:bg-black hover:brightness-90 p-8 space-y-4 transition duration-300 ease-in-out"
            >
              {item.image ? (
                <Image
                  src={item.image}
                  width={80}
                  height={80}
                  quality={50}
                  sizes="(max-width: 800px) 60px, 80px"
                  className="dark:grayscale dark:invert"
                  loading="lazy"
                  alt={item.title}
                />
              ) : (
                <ServiceIcon
                  icon={item.icon}
                  className="size-[64px] text-[var(--service-box-icon)]"
                />
              )}
              <h3 className="text-2xl text-[var(--service-typo)] dark:text-white font-bold">
                {item.title}
              </h3>

              {item.description ? (
                <p className="text-[var(--service-typo)] dark:text-white text-opacity-75">
                  {item.description}
                </p>
              ) : (
                <div className="text-center md:text-left">
                  <p className="text-[var(--service-typo)] flex flex-row justify-center md:justify-start items-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua.
                  </p>

                  <div className="mt-6">
                    <Link href="#" className="underline">
                      Zobrazit více
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
