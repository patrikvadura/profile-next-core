'use client'

import React from 'react'
import data from '@/app/lib/dataLandingPage.json'
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export const DemoWebsites = ({
  websites,
}: {
  websites: {
    image: string
  }[]
}) => {
  const firstRow = websites.slice(0, 5)
  const secondRow = websites.slice(5, 10)
  const thirdRow = websites.slice(10, 15)
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 }

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig)
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig,
  )
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig)
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig)
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig)
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 100]), springConfig)
  return (
    <div
      ref={ref}
      className="h-[250vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:600px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-16 mb-16">
          {firstRow.map(website => (
            <Item website={website} translate={translateX} key={website.image} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-16 space-x-16 ">
          {secondRow.map(website => (
            <Item website={website} translate={translateXReverse} key={website.image} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-16">
          {thirdRow.map(website => (
            <Item website={website} translate={translateX} key={website.image} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export const Header = () => {
  return (
    <div className="container relativemx-auto py-20 md:py-40 px-4 w-full left-0 top-0 z-10">
      <h1 className="max-w-screen-lg text-2xl md:text-7xl font-black text-primary dark:text-white">
        {data.demoWebsites.title}
      </h1>

      <p className="max-w-screen-md text-base md:text-xl my-8 text-primary text-opacity-75 dark:text-neutral-200">
        {data.demoWebsites.description}
      </p>

      <Link
        href="/studio"
        target="_blank"
        className="inline px-6 py-3 bg-secondary text-primary font-bold rounded-full"
      >
        Vytvořte si svoji už teď!
      </Link>
    </div>
  )
}

export const Item = ({
  website,
  translate,
}: {
  website: {
    image: string
  }
  translate: MotionValue<number>
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={website.image}
      className="group/product h-[20rem] w-[35rem] relative flex-shrink-0"
    >
      <Image
        src={website.image}
        height="600"
        width="600"
        className="object-cover object-left-top absolute h-full w-full inset-0"
        alt="Demo website"
      />
    </motion.div>
  )
}
