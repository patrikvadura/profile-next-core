'use client'
import React, { useState, useMemo } from 'react'
import { optionsHero, optionsAbout } from '@/app/lib/customizer'
import { calculateTotals } from '@/app/lib/pricing'
import Header from '@/app/ui/Header'
import Footer from '@/app/ui/Footer'
import { Hero } from '@/app/components/Hero'
import { About } from '@/app/components/About'
import { Services } from '@/app/components/Services'
import { Reference } from '@/app/components/Reference'
import { Contact } from '@/app/components/Contact'
import Dropdown from '@/app/components/Customizer/Dropdown'
import PreviewContainer from '@/app/components/Customizer/PreviewContainer'
import OptionsContainer from '@/app/components/Customizer/OptionsContainer'
import OptionSelector from '@/app/components/Customizer/OptionSelector'
import ColorPickerAbout from '@/app/components/Customizer/ColorPicker/About'
import ColorPickerHero from '@/app/components/Customizer/ColorPicker/Hero'

export default function Preview() {
  // Parameters
  const [heroVariant, setHeroVariant] = useState('01')
  const [heroImageOpacity, setHeroImageOpacity] = useState('30')
  const [heroAlign, setHeroAlign] = useState('center')

  const [aboutVariant, setAboutVariant] = useState('01')
  const [aboutLayout, setAboutLayout] = useState('transparent')
  const [aboutAlign, setAboutAlign] = useState('left')
  const [aboutOrder, setAboutOrder] = useState('asc')

  // Visibility
  const [showHero, setShowHero] = useState(true)
  const [showAbout, setShowAbout] = useState(true)
  const [showServices, setShowServices] = useState(true)
  const [showReference, setShowReference] = useState(true)
  const [showPortfolio, setShowPortfolio] = useState(false)
  const [showContact, setShowContact] = useState(true)
  const [showAnalytics, setShowAnalytics] = useState(false)
  const [showAnalyticsCode, setShowAnalyticsCode] = useState(false)
  const [showAnalyticsSetup, setShowAnalyticsSetup] = useState(false)
  const [showCookie, setShowCookie] = useState(false)

  // Colors
  const [heroBackground, setHeroBackground] = useState()
  const [heroAccentBg, setHeroAccentBg] = useState()
  const [heroAccentFg, setHeroAccentFg] = useState()
  const [heroTypo, setHeroTypo] = useState()
  const [heroTypoLg, setHeroTypoLg] = useState()

  const [aboutBackground, setAboutBackground] = useState()
  const [aboutAccentBg, setAboutAccentBg] = useState()
  const [aboutAccentFg, setAboutAccentFg] = useState()
  const [aboutTypo, setAboutTypo] = useState()

  const { totalPrice, totalTime } = useMemo(() => {
    return calculateTotals({
      hero: showHero,
      about: showAbout,
      services: showServices,
      reference: showReference,
      portfolio: showPortfolio,
      contact: showContact,
      analytics: showAnalytics,
      analyticsCode: !showAnalytics && showAnalyticsCode,
      analyticsSetup: !showAnalytics && showAnalyticsSetup,
      cookie: showCookie,
    })
  }, [
    showHero,
    showAbout,
    showServices,
    showReference,
    showPortfolio,
    showContact,
    showAnalytics,
    showAnalyticsCode,
    showAnalyticsSetup,
    showCookie,
  ])

  return (
    <div className="h-screen flex flex-row overflow-hidden">
      <OptionsContainer>
        <h3 className="text-lg font-bold pt-4">Volba sekcí</h3>
        <p className="text-black text-sm text-opacity-75">
          Přizpůsobte si barevnost a rozložení jednotlivých sekcí. Sekce které nechcete mít
          videtelné, klidně můžete vypnout.
        </p>

        <Dropdown
          label="Hero sekce"
          id="heroToggle"
          checked={showHero}
          link="#hero"
          preview
          toggled
          onChange={() => setShowHero(!showHero)}
        >
          <div className="space-y-4">
            <span className="mt-2 font-semibold">Barevnost sekce:</span>

            <ColorPickerHero
              backgroundColor={setHeroBackground}
              accentBgColor={setHeroAccentBg}
              accentFgColor={setHeroAccentFg}
              typoColor={setHeroTypo}
              typoLgColor={setHeroTypoLg}
            />

            <OptionSelector
              title="Varianta"
              options={optionsHero.variant}
              selectedOption={heroVariant}
              onChange={setHeroVariant}
              visual
            />
          </div>

          <div className="space-y-4">
            {!['02', '03'].includes(heroVariant) && (
              <OptionSelector
                title="Průhlednost"
                options={optionsHero.imageOpacity}
                selectedOption={heroImageOpacity}
                onChange={setHeroImageOpacity}
              />
            )}

            <OptionSelector
              title="Zarovnání"
              options={optionsHero.align}
              selectedOption={heroAlign}
              onChange={setHeroAlign}
            />
          </div>
        </Dropdown>

        <Dropdown
          label="O nás"
          id="aboutToggle"
          checked={showAbout}
          link="#about"
          preview
          onChange={() => setShowAbout(!showAbout)}
        >
          <div className="space-y-4">
            <span className="mt-2 font-semibold">Barevnost sekce:</span>

            <ColorPickerAbout
              backgroundColor={setAboutBackground}
              accentBgColor={setAboutAccentBg}
              accentFgColor={setAboutAccentFg}
              typoColor={setAboutTypo}
            />

            <OptionSelector
              title="Varianta"
              options={optionsAbout.variant}
              selectedOption={aboutVariant}
              onChange={setAboutVariant}
              visual
            />
          </div>

          <div className="space-y-4">
            <OptionSelector
              title="Layout"
              options={optionsAbout.layout}
              selectedOption={aboutLayout}
              onChange={setAboutLayout}
            />
          </div>

          <div className="space-y-4">
            <OptionSelector
              title="Zarovnání"
              options={optionsAbout.align}
              selectedOption={aboutAlign}
              onChange={setAboutAlign}
            />
          </div>

          <div className="space-y-4">
            <OptionSelector
              title="Pořadí"
              options={optionsAbout.order}
              selectedOption={aboutOrder}
              onChange={setAboutOrder}
            />
          </div>
        </Dropdown>

        <Dropdown
          label="Služby"
          id="serviceToggle"
          checked={showServices}
          link="#service"
          preview
          onChange={() => setShowServices(!showServices)}
        />

        <Dropdown
          label="Reference"
          id="referenceToggle"
          checked={showReference}
          link="#reference"
          preview
          onChange={() => setShowReference(!showReference)}
        />

        <Dropdown
          label="Portfolio"
          id="portfolioToggle"
          checked={showPortfolio}
          link="#portfolio"
          preview
          onChange={() => setShowPortfolio(!showPortfolio)}
        />

        <Dropdown
          label="Kontakt"
          id="contactToggle"
          checked={showContact}
          link="#contact"
          preview
          onChange={() => setShowContact(!showContact)}
        />

        <h3 className="text-lg font-bold pt-4">Další možnosti</h3>
        <p className="text-black text-sm text-opacity-75">
          Přizpůsobte si barevnost a rozložení jednotlivých sekcí. Sekce které nechcete mít
          videtelné, klidně můžete vypnout.
        </p>

        <Dropdown
          label="Analytika"
          id="analyticsToggle"
          checked={showAnalytics}
          onChange={() => setShowAnalytics(!showAnalytics)}
        >
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="AnalyticsCode"
              className="ml-4 flex items-start font-semibold cursor-pointer"
            >
              <input
                type="checkbox"
                id="AnalyticsCode"
                className="peer relative mr-3 appearance-none w-5 h-5 border rounded-full border-gray-300 cursor-pointer checked:bg-[#72E790]"
                checked={showAnalytics ? true : showAnalyticsCode}
                onChange={() => setShowAnalyticsCode(!showAnalyticsCode)}
              />

              <span>Instalace měřících kódů</span>
            </label>

            <div className="ml-12">
              <p className="text-black text-sm font-normal opacity-75">
                Zapojení Google Tag Manager a Google Analytics kódů do vaší vizitky.
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <label
              htmlFor="AnalyticsSetup"
              className="ml-4 flex flex-row items-start font-semibold cursor-pointer"
            >
              <input
                type="checkbox"
                id="AnalyticsSetup"
                className="peer relative mr-3 appearance-none !size-5 border rounded-full border-gray-300 cursor-pointer checked:bg-[#72E790]"
                checked={showAnalytics ? true : showAnalyticsSetup}
                onChange={() => setShowAnalyticsSetup(!showAnalyticsSetup)}
              />

              <span>Základní nastavení</span>
            </label>

            <div className="ml-12">
              <p className="text-black text-sm font-normal opacity-75">
                Pomůžem vám vytvořit základní nastavení GTM a GA4 pro spolehlivý start do marketingu
                sledování konverzí.
              </p>
            </div>
          </div>
        </Dropdown>

        <Dropdown
          label="Cookie consent"
          id="cookieToggle"
          checked={showCookie}
          onChange={() => setShowCookie(!showCookie)}
        >
          <div className="ml-4 flex flex-col justify-start">
            <p className="text-black text-sm font-normal opacity-75">
              V zájmu evropské legislativy doporučujeme v kombinaci s analytickými měřícími kódy
              implementovat do vaší vizitky i Cookie consent lištu. Tímto se zároveň zříkáme
              jakékoliv odpovědnosti za absenci lišty na vašem webu.
            </p>
          </div>
        </Dropdown>
      </OptionsContainer>

      <PreviewContainer totalPrice={totalPrice} totalTime={totalTime}>
        <Header />
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
            preview
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
            preview
          />
        )}
        {showServices && <Services />}
        {showReference && <Reference />}
        {showContact && <Contact />}
        <Footer />
      </PreviewContainer>
    </div>
  )
}
