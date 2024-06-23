'use client'

import React, { useEffect, useState } from 'react'
import { Hero } from '@/app/components/Hero'
import { About } from '@/app/components/About'
import { Services } from '@/app/components/Services'
import { Reference } from '@/app/components/Reference'
import { Contact } from '@/app/components/Contact/Variant01'
import Header from '@/app/ui/Header'
import Footer from '@/app/ui/Footer'
import { useHeroState } from '@/app/lib/useState/useHeroState'
import { useAboutState } from '@/app/lib/useState/useAboutState'
import { useServiceState } from '@/app/lib/useState/useServiceState'
import { useVisibilityState } from '@/app/lib/useState/useVisibilityState'
import { useOtherState } from '@/app/lib/useState/useOtherState'
import { calculatePreviewState } from '@/app/lib/calculatePreviewState'
import { useDomain } from '@/app/components/Customizer/DNSChecker/DomainContext'
import { optionsAbout, optionsHero, optionsHeroContent, optionsService } from '@/app/lib/customizer'

export default function Home() {
  const hero = useHeroState()
  const about = useAboutState()
  const service = useServiceState()
  const visibility = useVisibilityState()
  const other = useOtherState()

  const { totalPrice, totalTime } = calculatePreviewState(visibility)
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
  const { domain, availability } = useDomain()

  const stateData = {
    ...hero,
    ...about,
    ...service,
    ...visibility,
    ...other,
    optionsHero,
    optionsHeroContent,
    optionsAbout,
    optionsService,
    domain,
    availability,
    totalPrice,
    totalTime,
  }

  useEffect(() => {
    const handleStorageChange = () => {
      const newTheme = localStorage.getItem('theme')
      if (newTheme) {
        setTheme(newTheme)
      }
    }

    window.addEventListener('storage', handleStorageChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

  return (
    <>
      <Header />
      {visibility.showHero && (
        <Hero
          variant={hero.heroVariant}
          imageOpacity={hero.heroImageOpacity}
          align={hero.heroAlign}
          backgroundColor={hero.heroBackground}
          accentBgColor={hero.heroAccentBg}
          accentFgColor={hero.heroAccentFg}
          typoColor={hero.heroTypo}
          typoLgColor={hero.heroTypoLg}
          contentTitle={hero.heroContentTitle}
          contentSubtitle={hero.heroContentSubtitle}
          contentLargeTitle={hero.heroContentLargeTitle}
          contentButtonPrimary={visibility.showHeroContentButtonPrimary}
          contentButtonPrimaryText={hero.heroContentButtonPrimaryText}
          contentButtonPrimaryLink={
            hero.heroContentButtonPrimaryLink === null
              ? hero.heroContentButtonPrimaryCustomLink
              : hero.heroContentButtonPrimaryLink
          }
          contentButtonSecondary={visibility.showHeroContentButtonSecondary}
          contentButtonSecondaryText={hero.heroContentButtonSecondaryText}
          contentButtonSecondaryLink={
            hero.heroContentButtonSecondaryLink === null
              ? hero.heroContentButtonSecondaryCustomLink
              : hero.heroContentButtonSecondaryLink
          }
          imageMainUrl={
            !['01', '02', '05'].includes(hero.heroVariant)
              ? hero.imageMainAlternativeUrl
              : hero.imageMainUrl
          }
          imageMainWidth={hero.imageMainWidth}
          imageMainHeight={hero.imageMainHeight}
          //preview
        />
      )}
      {visibility.showAbout && (
        <About
          variant={about.aboutVariant}
          layout={about.aboutLayout}
          align={about.aboutAlign}
          order={about.aboutOrder}
          backgroundColor={about.aboutBackground}
          accentBgColor={about.aboutAccentBg}
          accentFgColor={about.aboutAccentFg}
          typoColor={about.aboutTypo}
          //preview
        />
      )}
      {visibility.showServices && (
        <Services
          variant={service.serviceVariant}
          layout={service.serviceLayout}
          align={service.serviceAlign}
          radius={service.serviceRadius}
          backgroundColor={service.serviceBackground}
          accentBgColor={service.serviceAccentBg}
          accentFgColor={service.serviceAccentFg}
          typoColor={service.serviceTypo}
          boxBackgroundColor={service.serviceBoxBackground}
          boxTypoColor={service.serviceBoxTypo}
          boxIconColor={service.serviceBoxIcon}
          servicesContentTitle={service.servicesContentTitle}
          servicesContentBox1={service.servicesContentBox1}
          servicesContentBox1Title={service.servicesContentBox1Title}
          servicesContentBox1Content={service.servicesContentBox1Content}
          servicesContentBox1Icon={service.servicesContentBox1Icon}
          servicesContentBox1IconShow={service.servicesContentBox1IconShow}
          servicesContentBox2={service.servicesContentBox2}
          servicesContentBox2Title={service.servicesContentBox2Title}
          servicesContentBox2Content={service.servicesContentBox2Content}
          servicesContentBox2Icon={service.servicesContentBox2Icon}
          servicesContentBox2IconShow={service.servicesContentBox2IconShow}
          servicesContentBox3={service.servicesContentBox3}
          servicesContentBox3Title={service.servicesContentBox3Title}
          servicesContentBox3Content={service.servicesContentBox3Content}
          servicesContentBox3Icon={service.servicesContentBox3Icon}
          servicesContentBox3IconShow={service.servicesContentBox3IconShow}
          //preview
        />
      )}
      {visibility.showReference && <Reference />}
      {visibility.showContact && <Contact />}
      <Footer />
    </>
  )
}
