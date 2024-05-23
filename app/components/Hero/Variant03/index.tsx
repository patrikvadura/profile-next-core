import React from 'react'
import data from '@/app/lib/data.json'
import { HeroVariantProps } from '@/app/lib/variants'
import Image from 'next/image'
import Button from '@/app/ui/Button'
import { ArrowRight } from '@/app/ui/Icons/Arrow/Right'
import { AnimatedTitle } from '@/app/ui/Animations/Title'
import { AnimatedSubtitle } from '@/app/ui/Animations/Subtitle'
import { AnimatedLargeTitle } from '@/app/ui/Animations/LargeTitle'

export function HeroVariant03({
  align,
  preview,
  contentTitle,
  contentSubtitle,
  contentLargeTitle,
  contentButtonPrimary,
  contentButtonPrimaryText,
  contentButtonPrimaryLink,
  contentButtonSecondary,
  contentButtonSecondaryText,
  contentButtonSecondaryLink,
  imageMainUrl,
  imageMainWidth,
  imageMainHeight,
}: HeroVariantProps) {
  const aligns = {
    start: 'justify-start md:pt-40',
    center: 'justify-center md:pt-12',
    end: 'justify-end md:pb-24',
  }

  // @ts-ignore
  const alignsClass = aligns[align]

  return (
    <div id="hero" className="relative w-full dark:bg-black overflow-hidden">
      <AnimatedLargeTitle
        title={contentLargeTitle || data.hero.largeTitle}
        target="body"
        origin={!preview ? 'translate-x-full' : null}
        className="verticalText absolute rotate-180 right-[14rem] -bottom-[2rem] z-10 text-[300px] leading-[0] font-bold text-[var(--hero-typo-lg)] dark:text-white"
      />

      <Image
        // @ts-ignore
        src={imageMainUrl}
        className={`absolute right-0 object-contain bottom-0 size-[600px] md:size-[950px] lg:size-[980px] lg:translate-y-[120px] translate-x-[60px] z-10`}
        width={imageMainWidth || 1050}
        height={imageMainHeight || 1050}
        quality={75}
        sizes="(max-width: 480px) 200px, (max-width: 800px) 600px, 1050px"
        priority={true}
        alt="Hero"
      />

      <div
        className={`${alignsClass} relative md:h-screen lg:h-[950px] flex flex-col items-start overflow-hidden bg-gradient-to-r from-[var(--hero-background)] dark:from-black to-white dark:to-black from-70% to-70%`}
      >
        <div className={`container flex flex-col items-start py-32 md:pt-0`}>
          <div className="p-8 xl:p-0 z-20">
            <div className="max-w-screen-md text-left">
              <AnimatedSubtitle
                title={contentSubtitle || data.hero.subtitle}
                target="body"
                origin="translate-y-[50px]"
                className="mb-8 text-xl font-normal tracking-[.3rem] text-[var(--hero-typo)] dark:text-white"
              />

              <AnimatedTitle
                title={contentTitle || data.hero.title}
                target="body"
                origin="translate-y-[100px]"
                className="text-[40px] md:text-[70px] leading-[1.5] text-[var(--hero-typo)] dark:text-white font-bold"
              />

              <div className="mt-12 space-x-4">
                {contentButtonPrimary && (
                  <Button
                    asLink
                    href={contentButtonPrimaryLink || data.hero.cta.primary.link}
                    className="bg-[var(--hero-accent-bg)] dark:bg-white text-[var(--hero-accent-fg)] dark:text-black"
                  >
                    {contentButtonPrimaryText || data.hero.cta.primary.title}

                    <ArrowRight size={24} />
                  </Button>
                )}

                {contentButtonSecondary && (
                  <Button
                    asLink
                    href={contentButtonSecondaryLink || data.hero.cta.secondary.link}
                    className="bg-transparent text-[var(--hero-typo)] dark:text-white hover:underline"
                  >
                    {contentButtonSecondaryText || data.hero.cta.secondary.title}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
