import React from 'react'
import data from '@/app/lib/data.json'
import { HeroVariantProps } from '@/app/lib/variants'
import Image from 'next/image'
import Button from '@/app/ui/Button'
import { ArrowRight } from '@/app/ui/Icons/Arrow/Right'
import { AnimatedTitle } from '@/app/ui/Animations/Title'
import { AnimatedSubtitle } from '@/app/ui/Animations/Subtitle'
import { AnimatedLargeTitle } from '@/app/ui/Animations/LargeTitle'

export function HeroVariant01({ imageOpacity, align, preview }: HeroVariantProps) {
  const aligns = {
    start: 'justify-start md:pt-40',
    center: 'justify-center md:pt-12',
    end: 'justify-end md:pb-24',
  }

  // @ts-ignore
  const alignsClass = aligns[align]

  return (
    <div
      id="hero"
      className={`${alignsClass} w-full relative md:h-screen lg:h-[950px] flex flex-col items-center overflow-hidden bg-[var(--hero-background)] dark:bg-black`}
    >
      <Image
        src={data.profile.image}
        className={`opacity-${imageOpacity} absolute right-0 object-cover bottom-0 size-[600px] md:size-[850px] lg:size-[1050px] lg:translate-y-[120px] translate-x-[60px] z-0`}
        width={1050}
        height={1050}
        quality={75}
        sizes="(max-width: 480px) 200px, (max-width: 800px) 600px, 1050px"
        priority={true}
        alt={data.profile.name}
      />

      <div className={`container flex flex-col items-start py-32 md:pt-0`}>
        <div className="p-8 xl:p-0 z-20">
          <div className="max-w-screen-md text-left">
            <AnimatedSubtitle
              title={data.hero.subtitle}
              target="body"
              origin="translate-y-[50px]"
              className="mb-8 text-xl font-normal tracking-[.3rem] text-[var(--hero-typo)] dark:text-white"
            />

            <AnimatedTitle
              title={data.hero.title}
              target="body"
              origin="translate-y-[100px]"
              className="text-[40px] md:text-[70px] leading-[1.5] text-[var(--hero-typo)] dark:text-white font-bold"
            />

            <div className="mt-12 space-x-4">
              <Button
                asLink
                href={data.hero.cta.primary.link}
                className="bg-[var(--hero-accent-bg)] dark:bg-white text-[var(--hero-accent-fg)] dark:text-black"
              >
                {data.hero.cta.primary.title}

                <ArrowRight size={24} />
              </Button>

              <Button
                asLink
                href={data.hero.cta.secondary.link}
                className="bg-transparent text-[var(--hero-typo)] dark:text-white hover:underline"
              >
                {data.hero.cta.secondary.title}
              </Button>
            </div>

            <AnimatedLargeTitle
              title={data.hero.largeTitle}
              target="body"
              origin={!preview ? '-translate-x-full' : null}
              className="absolute -left-[20px] bottom-0 text-[300px] leading-[0] font-bold text-[var(--hero-typo-lg)] dark:text-white"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
