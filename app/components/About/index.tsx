import React from 'react'
import data from '@/app/lib/data.json'
import Button from '@/app/ui/Button'
import { AnimatedTitle } from '@/app/ui/Animations/Title'
import { AnimatedDivider } from '@/app/ui/Animations/Divider'
import classes from './index.module.scss'

export function About() {
  return (
    <div id="about" className="md:pt-12 lg:pt-24 md:px-8 lg:px-24 dark:bg-black">
      <div className={classes.main}>
        <div className="max-w-screen-md space-y-8 text-left py-12 px-8 md:p-16">
          <AnimatedTitle
            title={data.about.title}
            target="#about"
            origin="translate-y-[100px]"
            className={classes.title}
          />

          <AnimatedDivider target="#about" className={classes.divider} />

          <p className={classes.description}>{data.about.description}</p>

          <div className="mt-12 space-x-4">
            <Button asLink href={data.about.cta.link} className={classes.cta}>
              {data.about.cta.title}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
