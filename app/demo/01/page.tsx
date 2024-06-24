import React from 'react'
import type { Metadata } from 'next'
import data from '@/app/lib/data.json'
import Script from 'next/script'
import Header from '@/app/ui/Header'
import Footer from '@/app/ui/Footer'
import { Hero } from '@/app/components/Hero'
import { About } from '@/app/components/About'
import { Services } from '@/app/components/Services'
import { Reference } from '@/app/components/Reference'
import { Contact } from '@/app/components/Contact'
import { useHeroState } from '@/app/lib/useState/useHeroState'
import { useAboutState } from '@/app/lib/useState/useAboutState'
import { useServiceState } from '@/app/lib/useState/useServiceState'
import { useVisibilityState } from '@/app/lib/useState/useVisibilityState'
import { useOtherState } from '@/app/lib/useState/useOtherState'
import { useReferenceState } from '@/app/lib/useState/useReferenceState'
import { useContactState } from '@/app/lib/useState/useContactState'
import ColorUpdaterGlobal from '@/app/components/Customizer/ColorUpdater/Global'

export const metadata: Metadata = {
  metadataBase: new URL(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`),
  title: data.meta.title,
  description: data.meta.description,
  openGraph: {
    images: [
      {
        url: `<generated>`,
        width: 1200,
        height: 630,
        alt: data.meta.openGraph.alt,
        type: 'image/jpeg',
      },
    ],
  },
  icons: {
    icon: [
      {
        url: `/icon?<generated>`,
        sizes: '32x32',
        type: 'image/png',
      },
    ],
  },
}

export default function Home() {
  const hero = useHeroState()
  const about = useAboutState()
  const service = useServiceState()
  const reference = useReferenceState()
  const contact = useContactState()
  const visibility = useVisibilityState()
  const other = useOtherState()

  const gtmID: string | undefined = data.profile.gtm.id

  return (
    <>
      {data.profile.gtm.status ? (
        <Script
          id="Google Analytics"
          data-category="analytics"
          data-service="Google Analytics"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmID}');
                      `,
          }}
          strategy="lazyOnload"
        />
      ) : (
        ''
      )}

      <body suppressHydrationWarning>
        {data.profile.gtm.status ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmID}`}
              height="0"
              width="0"
              className="hidden invisible"
            ></iframe>
          </noscript>
        ) : (
          ''
        )}

        <ColorUpdaterGlobal
          primaryGlobalColor={other.globalPrimary}
          secondaryGlobalColor={other.globalSecondary}
          accentGlobalColor={other.globalAccent}
        />

        <Header
          siteName={other.siteName}
          siteNameClaim={other.siteNameClaim}
          logoImage={other.logoImage}
          logoImageUrl={other.logoImageUrl}
          logoImageWidth={other.logoImageWidth}
          logoImageHeight={other.logoImageHeight}
          logoImageSize={other.logoImageSize}
          visibility={visibility}
          navigationItems={other.navigationItems}
        />

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
            contentTitle={about.aboutContentTitle}
            contentDescription={about.aboutContentDescription}
            contentButton={visibility.showAboutContentButton}
            contentButtonText={about.aboutContentButtonTitle}
            contentButtonLink={
              about.aboutContentButtonLink === null
                ? about.aboutContentButtonCustomLink
                : about.aboutContentButtonLink
            }
            boxes={about.boxes}
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
            boxes={service.boxes}
            servicesContentBoxSpecial={service.servicesContentBoxSpecial}
            servicesContentBoxSpecialTitle={service.servicesContentBoxSpecialTitle}
            servicesContentBoxSpecialLink={
              service.servicesContentBoxSpecialLink === null
                ? service.servicesContentBoxSpecialCustomLink
                : service.servicesContentBoxSpecialLink
            }
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
            referenceContentTitle={reference.referenceContentTitle}
            boxes={reference.boxes}
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
            contactForm={visibility.showContactFormOrMap}
            contactMap={visibility.showContactFormOrMap}
            contactRecipient={contact.contactRecipient}
            contactMapAddress={contact.contactMapAddress}
            contactContentTitle={contact.contactContentTitle}
            contactContentSubtitle={contact.contactContentSubtitle}
            contactContentInfoEmail={contact.contactContentInfoEmail}
            contactContentInfoPhone={contact.contactContentInfoPhone}
            contactContentInfoAddress={contact.contactContentInfoAddress}
          />
        )}
        <Footer />
      </body>
    </>
  )
}
