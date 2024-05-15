import React from 'react'
import data from '@/app/lib/data.json'
import { ReferenceItems } from '@/app/lib/types'
import classes from './index.module.scss'
import { AnimatedLargeTitle } from '@/app/ui/Animations/LargeTitle'
import { SwiperComponent } from '@/app/components/Reference/Swiper'

export function Reference() {
  const references: ReferenceItems = data.reference

  return (
    <div id="reference" className={classes.wrapper}>
      <div className={classes.main}>
        <SwiperComponent references={references} />
      </div>

      <AnimatedLargeTitle
        title={data.reference.largeTitle}
        target="#reference"
        origin="-translate-x-full"
        className={classes.largeTitle}
      />
    </div>
  )
}
