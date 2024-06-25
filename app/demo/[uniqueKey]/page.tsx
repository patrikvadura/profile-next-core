import React from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '@/app/ui/Header'
import Footer from '@/app/ui/Footer'
import { Hero } from '@/app/components/Hero'
import { About } from '@/app/components/About'
import { Services } from '@/app/components/Services'
import { Reference } from '@/app/components/Reference'
import { Contact } from '@/app/components/Contact'
import ColorUpdaterGlobal from '@/app/components/Customizer/ColorUpdater/Global'
import DynamicFontLoader from '@/app/components/Customizer/DynamicFontLoader'

export const metadata: Metadata = {
  title: 'Your Page Title',
  description: 'Your page description',
}

async function fetchData(uniqueKey: string) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/getData?uniqueKey=${uniqueKey}`

  console.log(`Fetching data from URL: ${url}`)

  const res = await fetch(url)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const data = await res.json()
  return data.data
}

export default async function Home({ params }: { params: { uniqueKey: string } }) {
  const uniqueKey = params.uniqueKey

  if (!uniqueKey) {
    return notFound()
  }

  let data
  try {
    data = await fetchData(uniqueKey)
    console.log('Fetched data:', data)
  } catch (error) {
    console.error('Failed to fetch data', error)
    return notFound()
  }

  if (!data) {
    return notFound()
  }

  // Ensure navigationItems and visibility are defined
  const navigationItems = data.navigationItems || []
  const visibility = {
    showHero: data.showHero || false,
    showAbout: data.showAbout || false,
    showServices: data.showServices || false,
    showReference: data.showReference || false,
    showContact: data.showContact || false,
    showHeroContentButtonPrimary: data.showHeroContentButtonPrimary || false,
    showHeroContentButtonSecondary: data.showHeroContentButtonSecondary || false,
    showAboutContentButton: data.showAboutContentButton || false,
    showContactFormOrMap: data.showContactFormOrMap || false,
    // Add other necessary default values
  }

  return (
    <>
      <DynamicFontLoader fontName={data.fontName} fontWeights={data.fontWeights} />

      <ColorUpdaterGlobal
        primaryGlobalColor={data.globalPrimary}
        secondaryGlobalColor={data.globalSecondary}
        accentGlobalColor={data.globalAccent}
      />

      <Header
        siteName={data.siteName}
        siteNameClaim={data.siteNameClaim}
        logoImage={data.logoImage}
        logoImageUrl={data.logoImageUrl}
        logoImageWidth={data.logoImageWidth}
        logoImageHeight={data.logoImageHeight}
        logoImageSize={data.logoImageSize}
        visibility={visibility}
        navigationItems={navigationItems}
      />

      {visibility.showHero && (
        <Hero
          variant={data.heroVariant}
          imageOpacity={data.heroImageOpacity}
          align={data.heroAlign}
          backgroundColor={data.heroBackground}
          accentBgColor={data.heroAccentBg}
          accentFgColor={data.heroAccentFg}
          typoColor={data.heroTypo}
          typoLgColor={data.heroTypoLg}
          contentTitle={data.heroContentTitle}
          contentSubtitle={data.heroContentSubtitle}
          contentLargeTitle={data.heroContentLargeTitle}
          contentButtonPrimary={visibility.showHeroContentButtonPrimary}
          contentButtonPrimaryText={data.heroContentButtonPrimaryText}
          contentButtonPrimaryLink={
            data.heroContentButtonPrimaryLink === null
              ? data.heroContentButtonPrimaryCustomLink
              : data.heroContentButtonPrimaryLink
          }
          contentButtonSecondary={visibility.showHeroContentButtonSecondary}
          contentButtonSecondaryText={data.heroContentButtonSecondaryText}
          contentButtonSecondaryLink={
            data.heroContentButtonSecondaryLink === null
              ? data.heroContentButtonSecondaryCustomLink
              : data.heroContentButtonSecondaryLink
          }
          imageMainUrl={
            !['01', '02', '05'].includes(data.heroVariant)
              ? data.imageMainAlternativeUrl
              : data.imageMainUrl
          }
          imageMainWidth={data.imageMainWidth}
          imageMainHeight={data.imageMainHeight}
          imageBackgroundUrl={data.imageBackgroundUrl}
          imageBackgroundWidth={data.imageBackgroundWidth}
          imageBackgroundHeight={data.imageBackgroundHeight}
        />
      )}
      {visibility.showAbout && (
        <About
          variant={data.aboutVariant}
          layout={data.aboutLayout}
          align={data.aboutAlign}
          order={data.aboutOrder}
          backgroundColor={data.aboutBackground}
          accentBgColor={data.aboutAccentBg}
          accentFgColor={data.aboutAccentFg}
          typoColor={data.aboutTypo}
          contentTitle={data.aboutContentTitle}
          contentDescription={data.aboutContentDescription}
          contentButton={visibility.showAboutContentButton}
          contentButtonText={data.aboutContentButtonTitle}
          contentButtonLink={
            data.aboutContentButtonLink === null
              ? data.aboutContentButtonCustomLink
              : data.aboutContentButtonLink
          }
          boxes={data.boxesAbout}
        />
      )}
      {visibility.showServices && (
        <Services
          variant={data.serviceVariant}
          layout={data.serviceLayout}
          align={data.serviceAlign}
          radius={data.serviceRadius}
          backgroundColor={data.serviceBackground}
          accentBgColor={data.serviceAccentBg}
          accentFgColor={data.serviceAccentFg}
          typoColor={data.serviceTypo}
          boxBackgroundColor={data.serviceBoxBackground}
          boxTypoColor={data.serviceBoxTypo}
          boxIconColor={data.serviceBoxIcon}
          servicesContentTitle={data.servicesContentTitle}
          boxes={data.boxesService}
          servicesContentBoxSpecial={data.servicesContentBoxSpecial}
          servicesContentBoxSpecialTitle={data.servicesContentBoxSpecialTitle}
          servicesContentBoxSpecialLink={
            data.servicesContentBoxSpecialLink === null
              ? data.servicesContentBoxSpecialCustomLink
              : data.servicesContentBoxSpecialLink
          }
        />
      )}
      {visibility.showReference && (
        <Reference
          variant={data.referenceVariant}
          layout={data.referenceLayout}
          align={data.referenceAlign}
          backgroundColor={data.referenceBackground}
          accentBgColor={data.referenceAccentBg}
          typoColor={data.referenceTypo}
          typoLgColor={data.referenceTypoLg}
          referenceContentTitle={data.referenceContentTitle}
          boxes={data.boxesReference}
        />
      )}
      {visibility.showContact && (
        <Contact
          variant={data.contactVariant}
          layout={data.contactLayout}
          align={data.contactAlign}
          order={data.contactOrder}
          backgroundColor={data.contactBackground}
          accentBgColor={data.contactAccentBg}
          accentFgColor={data.contactAccentFg}
          typoColor={data.contactTypo}
          contactForm={visibility.showContactFormOrMap}
          contactMap={visibility.showContactFormOrMap}
          contactRecipient={data.contactRecipient}
          contactMapAddress={data.contactMapAddress}
          contactContentTitle={data.contactContentTitle}
          contactContentSubtitle={data.contactContentSubtitle}
          contactContentInfoEmail={data.contactContentInfoEmail}
          contactContentInfoPhone={data.contactContentInfoPhone}
          contactContentInfoAddress={data.contactContentInfoAddress}
        />
      )}
      <Footer />
    </>
  )
}
