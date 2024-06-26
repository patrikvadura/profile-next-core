'use client'

import React from 'react'
import data from '@/app/lib/dataLandingPage.json'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useDomain } from '@/app/components/Customizer/DNSChecker/DomainContext'
import DNSChecker from '@/app/components/LandingPage/DNSChecker'
import Header from '@/app/components/LandingPage/Header'
import { ContainerScroll } from '@/app/ui/Aceternity/container-scroll-animation'
import { FlipWords } from '@/app/ui/Aceternity/flip-words'
import { AuroraBackground } from '@/app/ui/Aceternity/aurora-background'

export default function Hero() {
  const { domain, availability } = useDomain()

  const stateData = {
    domain,
    availability,
  }

  const words = [
    'webovou vizitku',
    'prezentační web produktu',
    'jednoduchý firemní web',
    'svatební pozvánku',
    'upoutávku události nebo akce',
    'webovky baru nebo restaurace',
  ]

  return (
    <div className="relative bg-primary dark:bg-black h-screen w-screen flex flex-col justify-start items-center">
      <Image
        src="https://profile-next-core.s3.eu-north-1.amazonaws.com/images/andrej-lisakov-W3RqrBgKEro-unsplash.jpeg"
        width={1920}
        height={1920}
        className="absolute left-0 top-0 mx-auto h-full w-full object-cover object-center z-0 opacity-70 dark:opacity-10 dark:grayscale mix-blend-multiply dark:mix-blend-normal"
        alt="VisioSnap"
      />

      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className="w-screen h-screen !z-0"
        ></motion.div>
      </AuroraBackground>

      <Header />

      <div className="relative w-[120vw] -mt-[105vh] z-10">
        <Image
          src="/assets/img/landingPage/hero/hero_symbols.svg"
          width={1920}
          height={1920}
          className="absolute left-1/2 -translate-x-1/2 top-[15rem] h-auto w-full object-cover object-center z-0"
          alt="VisioSnap"
        />

        <ContainerScroll
          titleComponent={
            <div className="mx-auto mb-24 p-4 relative flex flex-col items-center space-y-8 z-1">
              <h1 className="text-center text-white text-4xl font-black leading-relaxed max-w-screen-lg">
                Vytvořte si{' '}
                <span className="text-accent underline decoration-wavy">již od 3 000 Kč</span> sami
                kvalitní a moderní
                <FlipWords words={words} />
              </h1>

              <DNSChecker />
            </div>
          }
        >
          <Image
            src={`/assets/img/landingPage/hero/hero_device_preview.png`}
            alt="VisioSnap"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </div>
  )
}
