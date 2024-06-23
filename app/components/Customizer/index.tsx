'use client'

import React, { useState, useEffect, useRef } from 'react'
import {
  optionsHero,
  optionsAbout,
  optionsService,
  optionsReference,
  optionsContact,
  optionsHeroContent,
} from '@/app/lib/customizer'
import { useHeroState } from '@/app/lib/useState/useHeroState'
import { useAboutState } from '@/app/lib/useState/useAboutState'
import { useServiceState } from '@/app/lib/useState/useServiceState'
import { useReferenceState } from '@/app/lib/useState/useReferenceState'
import { useContactState } from '@/app/lib/useState/useContactState'
import { useVisibilityState } from '@/app/lib/useState/useVisibilityState'
import { useOtherState } from '@/app/lib/useState/useOtherState'
import { calculatePreviewState } from '@/app/lib/calculatePreviewState'
import exportToJson from '@/app/lib/exportPreview'
import Header from '@/app/ui/Header'
import Footer from '@/app/ui/Footer'
import { Hero } from '@/app/components/Hero'
import { About } from '@/app/components/About'
import { Services } from '@/app/components/Services'
import { Reference } from '@/app/components/Reference'
import { Contact } from '@/app/components/Contact'
import ColorUpdaterGlobal from '@/app/components/Customizer/ColorUpdater/Global'
import { useDomain } from '@/app/components/Customizer/DNSChecker/DomainContext'
import 'react-circular-progressbar/dist/styles.css'
import ActionBarWrapper from '@/app/components/Customizer/ActionBarWrapper'
import BreakpointPreview from '@/app/components/Customizer/Breakpoint/Preview'
import { useBreakpoint } from '@/app/components/Customizer/Breakpoint/Context'
import HeaderSection from '@/app/components/Customizer/HeaderSection'
import SettingsAppearance from '@/app/components/Customizer/Settings/Appearance'
import SettingsContent from '@/app/components/Customizer/Settings/Content'
import SettingsDomain from '@/app/components/Customizer/Settings/Domain'
import SettingsSettings from '@/app/components/Customizer/Settings/Settings'

export default function Customizer() {
  const hero = useHeroState()
  const about = useAboutState()
  const service = useServiceState()
  const reference = useReferenceState()
  const contact = useContactState()
  const visibility = useVisibilityState()
  const other = useOtherState()

  const { totalPrice, totalTime } = calculatePreviewState(visibility)

  const { domain, availability } = useDomain()
  const { breakpoint } = useBreakpoint()

  // State data for export

  const stateData = {
    ...hero,
    ...about,
    ...service,
    ...reference,
    ...contact,
    ...visibility,
    ...other,
    optionsHero,
    optionsHeroContent,
    optionsAbout,
    optionsService,
    optionsReference,
    optionsContact,
    domain,
    availability,
    totalPrice,
    totalTime,
  }

  // Visibility (modals, bars)
  const [isModalVisible, setIsModalVisible] = useState(false)

  const toggleModalVisibility = () => {
    setIsModalVisible(!isModalVisible)
  }

  // Steps
  const steps = ['Vzhled', 'Obsah', 'Doména', 'Nastavení']

  const handleStepClick = (index: number) => {
    if (other.currentStep === index && isModalVisible) {
      if (setIsModalVisible) {
        setIsModalVisible(false)
      }
    } else {
      setIsModalVisible(false)
      setTimeout(() => {
        other.setCurrentStep(index)
        setIsModalVisible(true)
      }, 100)
    }
  }

  // Progress checker validation
  const [statesChanged, setStatesChanged] = useState({
    domainChanged: false,
    heroContentTitleChanged: false,
    heroContentSubtitleChanged: false,
  })

  const initialRender = useRef(true)
  const previousStates = useRef({
    domain: domain,
    heroContentTitle: hero.heroContentTitle,
    heroContentSubtitle: hero.heroContentSubtitle,
  })

  useEffect(() => {
    if (!initialRender.current) {
      // Content
      if (hero.heroContentTitle !== previousStates.current.heroContentTitle) {
        setStatesChanged(prevState => ({ ...prevState, heroContentTitleChanged: true }))
        previousStates.current.heroContentTitle = hero.heroContentTitle
      }
      if (hero.heroContentSubtitle !== previousStates.current.heroContentSubtitle) {
        setStatesChanged(prevState => ({ ...prevState, heroContentSubtitleChanged: true }))
        previousStates.current.heroContentSubtitle = hero.heroContentSubtitle
      }

      // Domain
      if (domain !== previousStates.current.domain) {
        setStatesChanged(prevState => ({ ...prevState, domainChanged: true }))
        previousStates.current.domain = domain
      }
    }
  }, [domain, hero.heroContentTitle, hero.heroContentSubtitle])

  useEffect(() => {
    initialRender.current = false
  }, [])

  const calculateProgress = () => {
    const totalStates = Object.keys(statesChanged).length
    const completedStates = Object.values(statesChanged).filter(Boolean).length
    return (completedStates / totalStates) * 100
  }

  return (
    <div className="bg-primary w-screen h-screen flex flex-row overflow-hidden">
      <HeaderSection fontName={other.fontName} fontWeights={other.fontWeights} />

      {other.currentStep === 0 && (
        <SettingsAppearance
          isModalVisible={isModalVisible}
          toggleModalVisibility={toggleModalVisibility}
          other={other}
          visibility={visibility}
          hero={hero}
          about={about}
          service={service}
          reference={reference}
          contact={contact}
          optionsHero={optionsHero}
          optionsAbout={optionsAbout}
          optionsService={optionsService}
          optionsReference={optionsReference}
          optionsContact={optionsContact}
        />
      )}

      {other.currentStep === 1 && (
        <SettingsContent
          isModalVisible={isModalVisible}
          toggleModalVisibility={toggleModalVisibility}
          other={other}
          visibility={visibility}
          hero={hero}
          service={service}
          optionsHeroContent={optionsHeroContent}
        />
      )}

      {other.currentStep === 2 && (
        <SettingsDomain
          isModalVisible={isModalVisible}
          toggleModalVisibility={toggleModalVisibility}
          other={other}
          visibility={visibility}
          availability={availability}
        />
      )}

      {other.currentStep === 3 && (
        <SettingsSettings
          isModalVisible={isModalVisible}
          toggleModalVisibility={toggleModalVisibility}
          other={other}
          visibility={visibility}
          hero={hero}
        />
      )}

      <BreakpointPreview currentBreakpoint={other.currentBreakpoint}>
        <ColorUpdaterGlobal
          primaryGlobalColor={other.globalPrimary}
          secondaryGlobalColor={other.globalSecondary}
          accentGlobalColor={other.globalAccent}
        />

        <Header breakpoint={breakpoint} preview />

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
            imageBackgroundUrl={hero.imageBackgroundUrl}
            imageBackgroundWidth={hero.imageBackgroundWidth}
            imageBackgroundHeight={hero.imageBackgroundHeight}
            breakpoint={breakpoint}
            preview
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
            breakpoint={breakpoint}
            preview
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
            servicesContentBoxSpecial={service.servicesContentBoxSpecial}
            servicesContentBoxSpecialTitle={service.servicesContentBoxSpecialTitle}
            servicesContentBoxSpecialLink={
              service.servicesContentBoxSpecialLink === null
                ? service.servicesContentBoxSpecialCustomLink
                : service.servicesContentBoxSpecialLink
            }
            breakpoint={breakpoint}
            preview
          />
        )}
        {visibility.showReference && (
          <Reference
            variant={reference.referenceVariant}
            layout={reference.referenceLayout}
            align={reference.referenceAlign}
            backgroundColor={reference.referenceBackground}
            accentBgColor={reference.referenceAccentBg}
            typoColor={reference.referenceTypo}
            typoLgColor={reference.referenceTypoLg}
            breakpoint={breakpoint}
            preview
          />
        )}
        {visibility.showContact && (
          <Contact
            variant={contact.contactVariant}
            layout={contact.contactLayout}
            align={contact.contactAlign}
            order={contact.contactOrder}
            backgroundColor={contact.contactBackground}
            accentBgColor={contact.contactAccentBg}
            accentFgColor={contact.contactAccentFg}
            typoColor={contact.contactTypo}
            breakpoint={breakpoint}
            preview
          />
        )}
        <Footer breakpoint={breakpoint} preview />
      </BreakpointPreview>

      <ActionBarWrapper
        steps={steps}
        other={other}
        isModalVisible={isModalVisible}
        handleStepClick={handleStepClick}
        totalPrice={totalPrice}
        totalTime={totalTime}
        calculateProgress={calculateProgress}
        exportToJson={exportToJson}
        stateData={stateData}
        domain={domain}
      />
    </div>
  )
}
