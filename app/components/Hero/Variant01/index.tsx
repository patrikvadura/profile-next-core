'use client'
import React from 'react'
import data from '@/app/lib/data.json'
import { HeroVariantProps } from '@/app/lib/variants'
import Image from 'next/image'
import Button from '@/app/ui/Button'
import { ArrowRight } from '@/app/ui/Icons/Arrow/Right'
import { AnimatedTitle } from '@/app/ui/Animations/Title'
import { AnimatedSubtitle } from '@/app/ui/Animations/Subtitle'
import { AnimatedLargeTitle } from '@/app/ui/Animations/LargeTitle'
import { useHeroState } from '@/app/lib/useState/useHeroState'
import { getBreakpointStyles } from '@/app/lib/breakpointHelper'

export function HeroVariant01({
  imageOpacity,
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
  breakpoint,
}: HeroVariantProps) {
  const hero = useHeroState()

  const opacityOptions = {
    '100': 'opacity-100',
    '80': 'opacity-80',
    '50': 'opacity-50',
    '30': 'opacity-30',
  }

  // @ts-ignore
  const opacityClass = opacityOptions[imageOpacity]

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
      className={getBreakpointStyles(
        `${alignsClass} w-full relative md:h-screen lg:h-[950px] flex flex-col items-center overflow-hidden bg-[var(--hero-background)] dark:bg-black`,
        breakpoint,
        preview,
      )}
    >
      <Image
        // @ts-ignore
        src={imageMainUrl}
        className={getBreakpointStyles(
          `${opacityClass} absolute right-0 object-cover bottom-0 size-[600px] md:size-[850px] lg:size-[1050px] lg:translate-y-[120px] md:translate-x-[60px] z-0`,
          breakpoint,
          preview,
        )}
        width={imageMainWidth || 1050}
        height={imageMainHeight || 1050}
        quality={75}
        sizes="(max-width: 480px) 200px, (max-width: 800px) 600px, 1050px"
        priority={true}
        alt="Hero"
      />

      <div
        className={getBreakpointStyles(
          'container flex flex-col items-start py-32 md:pt-0',
          breakpoint,
          preview,
        )}
      >
        <div className={getBreakpointStyles('p-8 xl:p-0 z-20', breakpoint, preview)}>
          <div className={getBreakpointStyles('max-w-screen-md text-left', breakpoint, preview)}>
            <AnimatedSubtitle
              title={contentSubtitle || data.hero.subtitle}
              target="body"
              origin="translate-y-[50px]"
              className={getBreakpointStyles(
                'mb-8 text-xl font-normal tracking-[.3rem] text-[var(--hero-typo)] dark:text-white',
                breakpoint,
                preview,
              )}
            />

            <AnimatedTitle
              title={contentTitle || data.hero.title}
              target="body"
              origin="translate-y-[100px]"
              className={getBreakpointStyles(
                'text-[40px] md:text-[70px] leading-[1.5] text-[var(--hero-typo)] dark:text-white font-bold',
                breakpoint,
                preview,
              )}
            />

            <div className={getBreakpointStyles('mt-12 space-x-4', breakpoint, preview)}>
              {contentButtonPrimary && (
                <Button
                  asLink
                  href={contentButtonPrimaryLink || data.hero.cta.primary.link}
                  className={getBreakpointStyles(
                    'bg-[var(--hero-accent-bg)] dark:bg-white text-[var(--hero-accent-fg)] dark:text-black',
                    breakpoint,
                    preview,
                  )}
                >
                  {contentButtonPrimaryText || data.hero.cta.primary.title}

                  <ArrowRight size={24} />
                </Button>
              )}

              {contentButtonSecondary && (
                <Button
                  asLink
                  href={contentButtonSecondaryLink || data.hero.cta.secondary.link}
                  className={getBreakpointStyles(
                    'bg-transparent text-[var(--hero-typo)] dark:text-white hover:underline',
                    breakpoint,
                    preview,
                  )}
                >
                  {contentButtonSecondaryText || data.hero.cta.secondary.title}
                </Button>
              )}
            </div>

            <AnimatedLargeTitle
              title={contentLargeTitle || data.hero.largeTitle}
              target="body"
              origin={!preview ? '-translate-x-full' : null}
              className={getBreakpointStyles(
                'absolute -left-[20px] bottom-0 text-[300px] leading-[0] font-bold text-[var(--hero-typo-lg)] dark:text-white',
                breakpoint,
                preview,
              )}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
