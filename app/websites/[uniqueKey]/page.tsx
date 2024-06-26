import React from 'react'
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

async function fetchData(uniqueKey: string) {
  const websiteURL =
    process.env.NODE_ENV === 'production'
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL}`
      : 'http://localhost:3000/'

  const url = `${websiteURL}/api/getData?uniqueKey=${uniqueKey}`

  //console.log(`Fetching data from URL: ${url}`)

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
    //console.log('Fetched data:', data)
  } catch (error) {
    console.error('Failed to fetch data', error)
    return notFound()
  }

  if (!data) {
    return notFound()
  }

  // Destrukturování dat s výchozími hodnotami
  const {
    navigationItems = [],
    fontName = 'Default Font',
    fontWeights = '400;700',
    globalPrimary = '#000000',
    globalSecondary = '#FFFFFF',
    globalAccent = '#FF0000',
    siteName = 'Default Site Name',
    siteNameClaim = 'Default Site Claim',
    logoImage = false,
    logoImageUrl = '',
    logoImageWidth = 0,
    logoImageHeight = 0,
    logoImageSize = 100,
    cookieShow = false,
    boxesSocialSites = [],
    heroVariant = 'defaultVariant',
    heroImageOpacity = '1',
    heroAlign = 'center',
    heroBackground = '#FFFFFF',
    heroAccentBg = '#000000',
    heroAccentFg = '#FFFFFF',
    heroTypo = '#000000',
    heroTypoLg = '#FFFFFF',
    heroContentTitle = 'Default Title',
    heroContentSubtitle = 'Default Subtitle',
    heroContentLargeTitle = 'Default Large Title',
    heroContentButtonPrimaryText = 'Default Button Text',
    heroContentButtonPrimaryLink = '#',
    heroContentButtonPrimaryCustomLink = '#',
    heroContentButtonSecondaryText = 'Default Button Text',
    heroContentButtonSecondaryLink = '#',
    heroContentButtonSecondaryCustomLink = '#',
    imageMainUrl = '',
    imageMainWidth = 0,
    imageMainHeight = 0,
    imageBackgroundUrl = '',
    imageBackgroundWidth = 0,
    imageBackgroundHeight = 0,
    showHero = false,
    showAbout = false,
    showServices = false,
    showReference = false,
    showContact = false,
    showHeroContentButtonPrimary = false,
    showHeroContentButtonSecondary = false,
    showAboutContentButton = false,
    showContactFormOrMap = false,
    aboutVariant = 'defaultVariant',
    aboutLayout = 'defaultLayout',
    aboutAlign = 'left',
    aboutOrder = 'asc',
    aboutBackground = '#FFFFFF',
    aboutAccentBg = '#000000',
    aboutAccentFg = '#FFFFFF',
    aboutTypo = '#000000',
    aboutContentTitle = 'Default Title',
    aboutContentDescription = 'Default Description',
    aboutContentButtonTitle = 'Default Button Text',
    aboutContentButtonLink = '#',
    aboutContentButtonCustomLink = '#',
    boxesAbout = [],
    serviceVariant = 'defaultVariant',
    serviceLayout = 'defaultLayout',
    serviceAlign = 'left',
    serviceRadius = 'defaultRadius',
    serviceBackground = '#FFFFFF',
    serviceAccentBg = '#000000',
    serviceAccentFg = '#FFFFFF',
    serviceTypo = '#000000',
    serviceBoxBackground = '#FFFFFF',
    serviceBoxTypo = '#000000',
    serviceBoxIcon = '#000000',
    servicesContentTitle = 'Default Content Title',
    boxesService = [],
    servicesContentBoxSpecial = false,
    servicesContentBoxSpecialTitle = 'Default Title',
    servicesContentBoxSpecialLink = '#',
    servicesContentBoxSpecialCustomLink = '#',
    referenceVariant = 'defaultVariant',
    referenceLayout = 'defaultLayout',
    referenceAlign = 'left',
    referenceBackground = '#FFFFFF',
    referenceAccentBg = '#000000',
    referenceTypo = '#000000',
    referenceTypoLg = '#FFFFFF',
    referenceContentTitle = 'Default Title',
    boxesReference = [],
    contactVariant = 'defaultVariant',
    contactLayout = 'defaultLayout',
    contactAlign = 'left',
    contactOrder = 'asc',
    contactBackground = '#FFFFFF',
    contactAccentBg = '#000000',
    contactAccentFg = '#FFFFFF',
    contactTypo = '#000000',
    contactRecipient = 'default@contact.com',
    contactMapAddress = 'Default Address',
    contactContentTitle = 'Default Title',
    contactContentSubtitle = 'Default Subtitle',
    contactContentInfoEmail = 'default@contact.com',
    contactContentInfoPhone = '000-000-0000',
    contactContentInfoAddress = 'Default Address',
  } = data

  return (
    <>
      <DynamicFontLoader fontName={fontName} fontWeights={fontWeights} />

      <ColorUpdaterGlobal
        primaryGlobalColor={globalPrimary}
        secondaryGlobalColor={globalSecondary}
        accentGlobalColor={globalAccent}
      />

      <div className="fontDefault">
        <Header
          siteName={siteName}
          siteNameClaim={siteNameClaim}
          logoImage={logoImage}
          logoImageUrl={logoImageUrl}
          logoImageWidth={logoImageWidth}
          logoImageHeight={logoImageHeight}
          logoImageSize={logoImageSize}
          visibility={{ showHero, showAbout, showServices, showReference, showContact }}
          navigationItems={navigationItems}
        />

        {showHero && (
          <Hero
            variant={heroVariant}
            imageOpacity={heroImageOpacity}
            align={heroAlign}
            backgroundColor={heroBackground}
            accentBgColor={heroAccentBg}
            accentFgColor={heroAccentFg}
            typoColor={heroTypo}
            typoLgColor={heroTypoLg}
            contentTitle={heroContentTitle}
            contentSubtitle={heroContentSubtitle}
            contentLargeTitle={heroContentLargeTitle}
            contentButtonPrimary={showHeroContentButtonPrimary}
            contentButtonPrimaryText={heroContentButtonPrimaryText}
            contentButtonPrimaryLink={
              heroContentButtonPrimaryLink === null
                ? heroContentButtonPrimaryCustomLink
                : heroContentButtonPrimaryLink
            }
            contentButtonSecondary={showHeroContentButtonSecondary}
            contentButtonSecondaryText={heroContentButtonSecondaryText}
            contentButtonSecondaryLink={
              heroContentButtonSecondaryLink === null
                ? heroContentButtonSecondaryCustomLink
                : heroContentButtonSecondaryLink
            }
            imageMainUrl={imageMainUrl}
            imageMainWidth={imageMainWidth}
            imageMainHeight={imageMainHeight}
            imageBackgroundUrl={imageBackgroundUrl}
            imageBackgroundWidth={imageBackgroundWidth}
            imageBackgroundHeight={imageBackgroundHeight}
          />
        )}
        {showAbout && (
          <About
            variant={aboutVariant}
            layout={aboutLayout}
            align={aboutAlign}
            order={aboutOrder}
            backgroundColor={aboutBackground}
            accentBgColor={aboutAccentBg}
            accentFgColor={aboutAccentFg}
            typoColor={aboutTypo}
            contentTitle={aboutContentTitle}
            contentDescription={aboutContentDescription}
            contentButton={showAboutContentButton}
            contentButtonText={aboutContentButtonTitle}
            contentButtonLink={
              aboutContentButtonLink === null
                ? aboutContentButtonCustomLink
                : aboutContentButtonLink
            }
            boxes={boxesAbout}
          />
        )}
        {showServices && (
          <Services
            variant={serviceVariant}
            layout={serviceLayout}
            align={serviceAlign}
            radius={serviceRadius}
            backgroundColor={serviceBackground}
            accentBgColor={serviceAccentBg}
            accentFgColor={serviceAccentFg}
            typoColor={serviceTypo}
            boxBackgroundColor={serviceBoxBackground}
            boxTypoColor={serviceBoxTypo}
            boxIconColor={serviceBoxIcon}
            servicesContentTitle={servicesContentTitle}
            boxes={boxesService}
            servicesContentBoxSpecial={servicesContentBoxSpecial}
            servicesContentBoxSpecialTitle={servicesContentBoxSpecialTitle}
            servicesContentBoxSpecialLink={
              servicesContentBoxSpecialLink === null
                ? servicesContentBoxSpecialCustomLink
                : servicesContentBoxSpecialLink
            }
          />
        )}
        {showReference && (
          <Reference
            variant={data.referenceVariant || 'defaultVariant'}
            layout={data.referenceLayout || 'defaultLayout'}
            align={data.referenceAlign || 'left'}
            backgroundColor={data.referenceBackground || '#FFFFFF'}
            accentBgColor={data.referenceAccentBg || '#000000'}
            typoColor={data.referenceTypo || '#000000'}
            typoLgColor={data.referenceTypoLg || '#FFFFFF'}
            referenceContentTitle={data.referenceContentTitle || 'Default Title'}
            boxes={data.boxesReference || []}
          />
        )}
        {showContact && (
          <Contact
            variant={data.contactVariant || 'defaultVariant'}
            layout={data.contactLayout || 'defaultLayout'}
            align={data.contactAlign || 'left'}
            order={data.contactOrder || 'asc'}
            backgroundColor={data.contactBackground || '#FFFFFF'}
            accentBgColor={data.contactAccentBg || '#000000'}
            accentFgColor={data.contactAccentFg || '#FFFFFF'}
            typoColor={data.contactTypo || '#000000'}
            contactForm={showContactFormOrMap}
            contactMap={showContactFormOrMap}
            contactRecipient={data.contactRecipient || 'default@contact.com'}
            contactMapAddress={data.contactMapAddress || 'Default Address'}
            contactContentTitle={data.contactContentTitle || 'Default Title'}
            contactContentSubtitle={data.contactContentSubtitle || 'Default Subtitle'}
            contactContentInfoEmail={data.contactContentInfoEmail || 'default@contact.com'}
            contactContentInfoPhone={data.contactContentInfoPhone || '000-000-0000'}
            contactContentInfoAddress={data.contactContentInfoAddress || 'Default Address'}
          />
        )}
        <Footer cookieShow={data.cookieShow || false} boxes={data.boxesSocialSites || []} />
      </div>
    </>
  )
}
