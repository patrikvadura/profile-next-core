import data from '@/app/lib/data.json'
import React from 'react'
import Image from 'next/image'
import Button from '@/app/ui/Button'
import { ArrowRight } from '@/app/ui/Icons/Arrow/Right'
import { AnimatedTitle } from '@/app/ui/Animations/Title'
import { AnimatedSubtitle } from '@/app/ui/Animations/Subtitle'
import { AnimatedLargeTitle } from '@/app/ui/Animations/LargeTitle'
import classes from './index.module.scss'

export function Hero() {
  return (
    <div className="w-full relative overflow-hidden bg-light-hero-background">
      <Image
        src={data.profile.image}
        className={classes.profileImage}
        width={1050}
        height={1050}
        quality={75}
        sizes="(max-width: 480px) 200px, (max-width: 800px) 600px, 1050px"
        priority={true}
        alt={data.profile.name}
      />

      <div className={classes.gradientOverlay} />

      <div className="md:h-screen lg:h-[950px] flex flex-col justify-center items-start py-32 md:pt-0">
        <div className="container p-8 xl:p-0 z-20">
          <div className="max-w-screen-md text-left">
            <AnimatedSubtitle
              title={data.hero.subtitle}
              target="body"
              origin="translate-y-[100px]"
              className={classes.subtitle}
            />

            <AnimatedTitle
              title={data.hero.title}
              target="body"
              origin="translate-y-[100px]"
              className={classes.title}
            />

            <div className="mt-12 space-x-4">
              <Button asLink href={data.hero.cta.primary.link} className={classes.cta}>
                {data.hero.cta.primary.title}

                <ArrowRight size={24} />
              </Button>

              <Button asLink href={data.hero.cta.secondary.link} className={classes.ctaPlain}>
                {data.hero.cta.secondary.title}
              </Button>
            </div>

            <AnimatedLargeTitle
              title={data.hero.largeTitle}
              target="body"
              origin="-translate-x-full"
              className={classes.largeTitle}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
