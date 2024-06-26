import React from 'react'
import data from '@/app/lib/data.json'
import { HeroVariantProps } from '@/app/lib/variants'
import Image from 'next/image'
import Button from '@/app/ui/Button'
import { ArrowRight } from '@/app/ui/Icons/Arrow/Right'
import { AnimatedTitle } from '@/app/ui/Animations/Title'
import { AnimatedSubtitle } from '@/app/ui/Animations/Subtitle'
import { getBreakpointStyles } from '@/app/lib/breakpointHelper'

export function HeroVariant05({
  imageOpacity,
  preview,
  contentTitle,
  contentSubtitle,
  contentButtonPrimary,
  contentButtonPrimaryText,
  contentButtonPrimaryLink,
  contentButtonSecondary,
  contentButtonSecondaryText,
  contentButtonSecondaryLink,
  imageBackgroundUrl,
  imageBackgroundHeight,
  imageBackgroundWidth,
  breakpoint,
}: HeroVariantProps) {
  const opacityOptions = {
    '100': 'opacity-100',
    '80': 'opacity-80',
    '50': 'opacity-50',
    '30': 'opacity-30',
  }

  // @ts-ignore
  const opacityClass = opacityOptions[imageOpacity]

  return (
    <div
      id="hero"
      className={getBreakpointStyles(
        'relative w-full dark:bg-black overflow-hidden',
        breakpoint,
        preview,
      )}
    >
      <div
        className={getBreakpointStyles(
          'relative h-screen flex flex-col justify-center items-center overflow-hidden bg-[var(--hero-background)] dark:bg-black',
          breakpoint,
          preview,
        )}
      >
        <Image
          // @ts-ignore
          src={imageBackgroundUrl}
          className={getBreakpointStyles(
            `${opacityClass} absolute left-0 object-cover top-0 w-full h-full z-0`,
            breakpoint,
            preview,
          )}
          width={imageBackgroundWidth || 1050}
          height={imageBackgroundHeight || 1050}
          quality={75}
          sizes="(max-width: 480px) 200px, (max-width: 800px) 600px, 1050px"
          priority={true}
          alt="Hero"
        />

        <div
          className={getBreakpointStyles(
            'container h-full flex flex-col justify-center items-center py-24 md:py-24',
            breakpoint,
            preview,
          )}
        >
          <div className={getBreakpointStyles('p-8 xl:p-0 z-20', breakpoint, preview)}>
            <div
              className={getBreakpointStyles('max-w-screen-md text-center', breakpoint, preview)}
            >
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
