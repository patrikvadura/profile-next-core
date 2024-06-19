'use client'

import React, { useState } from 'react'
import data from '@/app/lib/dataLandingPage.json'
import { BenefitsItems, DemoWebsiteItems } from '@/app/lib/types'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { useDomain } from '@/app/components/Customizer/DNSChecker/DomainContext'
import DNSChecker from '@/app/components/LandingPage/DNSChecker'
import Header from '@/app/components/LandingPage/Header'
import { ContainerScroll } from '@/app/ui/Aceternity/container-scroll-animation'
import { FlipWords } from '@/app/ui/Aceternity/flip-words'
import { AuroraBackground } from '@/app/ui/Aceternity/aurora-background'
import { DemoWebsites } from '@/app/components/LandingPage/DemoWebsites'
import Hero from '@/app/components/LandingPage/Hero'

export default function Preview() {
  const benefits: BenefitsItems[] = data.benefits.items
  const demoWebsites: DemoWebsiteItems[] = data.demoWebsites.items
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
    <>
      <Hero />

      <div className="bg-light pt-[20rem]">
        <div className="container py-24 flex flex-row flex-wrap">
          {benefits.map((item, index) => (
            <div key={index} className="basis-1/4 flex flex-col p-8 space-y-2">
              <Icon icon={item.icon} className="text-3xl text-accent" />
              <h3 className="text-primary text-xl font-bold">{item.title}</h3>
              <p className="text-primary text-opacity-75">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <DemoWebsites websites={demoWebsites} />
    </>
  )
}
