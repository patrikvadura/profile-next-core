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

  // Nastavení výchozích hodnot pro případ, že některé vlastnosti chybí
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
  }

  const metaTitle = data.metaTitle || 'Default Meta Title'
  const metaDescription = data.metaDescription || 'Default Meta Description'
  const fontName = data.fontName || 'Default Font'
  const fontWeights = data.fontWeights || '400;700'
  const globalPrimary = data.globalPrimary || '#000000'
  const globalSecondary = data.globalSecondary || '#FFFFFF'
  const globalAccent = data.globalAccent || '#FF0000'
  const siteName = data.siteName || 'Default Site Name'
  const siteNameClaim = data.siteNameClaim || 'Default Site Claim'
  const logoImage = data.logoImage || false
  const logoImageUrl = data.logoImageUrl || ''
  const logoImageWidth = data.logoImageWidth || 0
  const logoImageHeight = data.logoImageHeight || 0
  const logoImageSize = data.logoImageSize || 100
  const cookieShow = data.cookieShow || false
  const boxesSocialSites = data.boxesSocialSites || []

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
          visibility={visibility}
          navigationItems={navigationItems}
        />

        {visibility.showHero && (
          <Hero
            variant={data.heroVariant || 'defaultVariant'}
            imageOpacity={data.heroImageOpacity || '1'}
            align={data.heroAlign || 'center'}
            backgroundColor={data.heroBackground || '#FFFFFF'}
            accentBgColor={data.heroAccentBg || '#000000'}
            accentFgColor={data.heroAccentFg || '#FFFFFF'}
            typoColor={data.heroTypo || '#000000'}
            typoLgColor={data.heroTypoLg || '#FFFFFF'}
            contentTitle={data.heroContentTitle || 'Default Title'}
            contentSubtitle={data.heroContentSubtitle || 'Default Subtitle'}
            contentLargeTitle={data.heroContentLargeTitle || 'Default Large Title'}
            contentButtonPrimary={visibility.showHeroContentButtonPrimary}
            contentButtonPrimaryText={data.heroContentButtonPrimaryText || 'Default Button Text'}
            contentButtonPrimaryLink={
              data.heroContentButtonPrimaryLink === null
                ? data.heroContentButtonPrimaryCustomLink || '#'
                : data.heroContentButtonPrimaryLink
            }
            contentButtonSecondary={visibility.showHeroContentButtonSecondary}
            contentButtonSecondaryText={
              data.heroContentButtonSecondaryText || 'Default Button Text'
            }
            contentButtonSecondaryLink={
              data.heroContentButtonSecondaryLink === null
                ? data.heroContentButtonSecondaryCustomLink || '#'
                : data.heroContentButtonSecondaryLink
            }
            imageMainUrl={data.imageMainUrl || ''}
            imageMainWidth={data.imageMainWidth || 0}
            imageMainHeight={data.imageMainHeight || 0}
            imageBackgroundUrl={data.imageBackgroundUrl || ''}
            imageBackgroundWidth={data.imageBackgroundWidth || 0}
            imageBackgroundHeight={data.imageBackgroundHeight || 0}
          />
        )}
        {visibility.showAbout && (
          <About
            variant={data.aboutVariant || 'defaultVariant'}
            layout={data.aboutLayout || 'defaultLayout'}
            align={data.aboutAlign || 'left'}
            order={data.aboutOrder || 'asc'}
            backgroundColor={data.aboutBackground || '#FFFFFF'}
            accentBgColor={data.aboutAccentBg || '#000000'}
            accentFgColor={data.aboutAccentFg || '#FFFFFF'}
            typoColor={data.aboutTypo || '#000000'}
            contentTitle={data.aboutContentTitle || 'Default Title'}
            contentDescription={data.aboutContentDescription || 'Default Description'}
            contentButton={visibility.showAboutContentButton}
            contentButtonText={data.aboutContentButtonTitle || 'Default Button Text'}
            contentButtonLink={
              data.aboutContentButtonLink === null
                ? data.aboutContentButtonCustomLink || '#'
                : data.aboutContentButtonLink
            }
            boxes={data.boxesAbout || []}
          />
        )}
        {visibility.showServices && (
          <Services
            variant={data.serviceVariant || 'defaultVariant'}
            layout={data.serviceLayout || 'defaultLayout'}
            align={data.serviceAlign || 'left'}
            radius={data.serviceRadius || 'defaultRadius'}
            backgroundColor={data.serviceBackground || '#FFFFFF'}
            accentBgColor={data.serviceAccentBg || '#000000'}
            accentFgColor={data.serviceAccentFg || '#FFFFFF'}
            typoColor={data.serviceTypo || '#000000'}
            boxBackgroundColor={data.serviceBoxBackground || '#FFFFFF'}
            boxTypoColor={data.serviceBoxTypo || '#000000'}
            boxIconColor={data.serviceBoxIcon || '#000000'}
            servicesContentTitle={data.servicesContentTitle || 'Default Content Title'}
            boxes={data.boxesService || []}
            servicesContentBoxSpecial={data.servicesContentBoxSpecial || false}
            servicesContentBoxSpecialTitle={data.servicesContentBoxSpecialTitle || 'Default Title'}
            servicesContentBoxSpecialLink={
              data.servicesContentBoxSpecialLink === null
                ? data.servicesContentBoxSpecialCustomLink || '#'
                : data.servicesContentBoxSpecialLink
            }
          />
        )}
        {visibility.showReference && (
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
        {visibility.showContact && (
          <Contact
            variant={data.contactVariant || 'defaultVariant'}
            layout={data.contactLayout || 'defaultLayout'}
            align={data.contactAlign || 'left'}
            order={data.contactOrder || 'asc'}
            backgroundColor={data.contactBackground || '#FFFFFF'}
            accentBgColor={data.contactAccentBg || '#000000'}
            accentFgColor={data.contactAccentFg || '#FFFFFF'}
            typoColor={data.contactTypo || '#000000'}
            contactForm={visibility.showContactFormOrMap}
            contactMap={visibility.showContactFormOrMap}
            contactRecipient={data.contactRecipient || 'default@contact.com'}
            contactMapAddress={data.contactMapAddress || 'Default Address'}
            contactContentTitle={data.contactContentTitle || 'Default Title'}
            contactContentSubtitle={data.contactContentSubtitle || 'Default Subtitle'}
            contactContentInfoEmail={data.contactContentInfoEmail || 'default@contact.com'}
            contactContentInfoPhone={data.contactContentInfoPhone || '000-000-0000'}
            contactContentInfoAddress={data.contactContentInfoAddress || 'Default Address'}
          />
        )}
        <Footer cookieShow={cookieShow} boxes={boxesSocialSites} />
      </div>
    </>
  )
}
