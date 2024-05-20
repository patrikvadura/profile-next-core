'use client'
import React from 'react'
import { optionsHero, optionsAbout, optionsService } from '@/app/lib/customizer'
import { useHeroState } from '@/app/lib/useState/useHeroState'
import { useAboutState } from '@/app/lib/useState/useAboutState'
import { useServiceState } from '@/app/lib/useState/useServiceState'
import { useVisibilityState } from '@/app/lib/useState/useVisibilityState'
import { calculatePreviewState } from '@/app/lib/calculatePreviewState'
import exportToJson from '@/app/lib/exportPreview'
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
import ColorPickerService from '@/app/components/Customizer/ColorPicker/Service'

export default function Customizer() {
  const hero = useHeroState()
  const about = useAboutState()
  const service = useServiceState()
  const visibility = useVisibilityState()

  const { totalPrice, totalTime } = calculatePreviewState(visibility)

  const stateData = {
    ...hero,
    ...about,
    ...service,
    ...visibility,
    optionsHero,
    optionsAbout,
    optionsService,
    totalPrice,
    totalTime,
  }

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
          checked={visibility.showHero}
          link="#hero"
          preview
          toggled
          onChange={() => visibility.setShowHero(!visibility.showHero)}
        >
          <div className="space-y-4">
            <span className="mt-2 font-semibold">Barevnost sekce:</span>

            <ColorPickerHero
              backgroundColor={hero.setHeroBackground}
              accentBgColor={hero.setHeroAccentBg}
              accentFgColor={hero.setHeroAccentFg}
              typoColor={hero.setHeroTypo}
              typoLgColor={hero.setHeroTypoLg}
            />

            <OptionSelector
              title="Varianta"
              options={optionsHero.variant}
              selectedOption={hero.heroVariant}
              onChange={hero.setHeroVariant}
              visual
            />
          </div>

          <div className="space-y-4">
            {!['02', '03'].includes(hero.heroVariant) && (
              <OptionSelector
                title="Průhlednost"
                options={optionsHero.imageOpacity}
                selectedOption={hero.heroImageOpacity}
                onChange={hero.setHeroImageOpacity}
              />
            )}

            <OptionSelector
              title="Zarovnání"
              options={optionsHero.align}
              selectedOption={hero.heroAlign}
              onChange={hero.setHeroAlign}
            />
          </div>
        </Dropdown>

        <Dropdown
          label="O nás"
          id="aboutToggle"
          checked={visibility.showAbout}
          link="#about"
          preview
          onChange={() => visibility.setShowAbout(!visibility.showAbout)}
        >
          <div className="space-y-4">
            <span className="mt-2 font-semibold">Barevnost sekce:</span>

            <ColorPickerAbout
              backgroundColor={about.setAboutBackground}
              accentBgColor={about.setAboutAccentBg}
              accentFgColor={about.setAboutAccentFg}
              typoColor={about.setAboutTypo}
            />

            <OptionSelector
              title="Varianta"
              options={optionsAbout.variant}
              selectedOption={about.aboutVariant}
              onChange={about.setAboutVariant}
              visual
            />
          </div>

          <div className="space-y-4">
            <OptionSelector
              title="Layout"
              options={optionsAbout.layout}
              selectedOption={about.aboutLayout}
              onChange={about.setAboutLayout}
            />
          </div>

          <div className="space-y-4">
            <OptionSelector
              title="Zarovnání"
              options={optionsAbout.align}
              selectedOption={about.aboutAlign}
              onChange={about.setAboutAlign}
            />
          </div>

          <div className="space-y-4">
            <OptionSelector
              title="Pořadí"
              options={optionsAbout.order}
              selectedOption={about.aboutOrder}
              onChange={about.setAboutOrder}
            />
          </div>
        </Dropdown>

        <Dropdown
          label="Služby"
          id="serviceToggle"
          checked={visibility.showServices}
          link="#services"
          preview
          onChange={() => visibility.setShowServices(!visibility.showServices)}
        >
          <div className="space-y-4">
            <span className="mt-2 font-semibold">Barevnost sekce:</span>

            <ColorPickerService
              backgroundColor={service.setServiceBackground}
              accentBgColor={service.setServiceAccentBg}
              accentFgColor={service.setServiceAccentFg}
              typoColor={service.setServiceTypo}
              boxBackgroundColor={service.setServiceBoxBackground}
              boxTypoColor={service.setServiceBoxTypo}
              boxIconColor={service.setServiceBoxIcon}
            />

            <OptionSelector
              title="Varianta"
              options={optionsService.variant}
              selectedOption={service.serviceVariant}
              onChange={service.setServiceVariant}
              visual
            />
          </div>

          <div className="space-y-4">
            <OptionSelector
              title="Layout"
              options={optionsService.layout}
              selectedOption={service.serviceLayout}
              onChange={service.setServiceLayout}
            />

            <OptionSelector
              title="Zarovnání"
              options={optionsService.align}
              selectedOption={service.serviceAlign}
              onChange={service.setServiceAlign}
            />

            <OptionSelector
              title="Radius"
              options={optionsService.radius}
              selectedOption={service.serviceRadius}
              onChange={service.setServiceRadius}
            />
          </div>
        </Dropdown>

        <Dropdown
          label="Reference"
          id="referenceToggle"
          checked={visibility.showReference}
          link="#reference"
          preview
          onChange={() => visibility.setShowReference(!visibility.showReference)}
        />

        <Dropdown
          label="Portfolio"
          id="portfolioToggle"
          checked={visibility.showPortfolio}
          link="#portfolio"
          preview
          onChange={() => visibility.setShowPortfolio(!visibility.showPortfolio)}
        />

        <Dropdown
          label="Kontakt"
          id="contactToggle"
          checked={visibility.showContact}
          link="#contact"
          preview
          onChange={() => visibility.setShowContact(!visibility.showContact)}
        />

        <h3 className="text-lg font-bold pt-4">Další možnosti</h3>
        <p className="text-black text-sm text-opacity-75">
          Přizpůsobte si barevnost a rozložení jednotlivých sekcí. Sekce které nechcete mít
          videtelné, klidně můžete vypnout.
        </p>

        <Dropdown
          label="Analytika"
          id="analyticsToggle"
          checked={visibility.showAnalytics}
          onChange={() => visibility.setShowAnalytics(!visibility.showAnalytics)}
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
                checked={visibility.showAnalytics ? true : visibility.showAnalyticsCode}
                onChange={() => visibility.setShowAnalyticsCode(!visibility.showAnalyticsCode)}
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
                checked={visibility.showAnalytics ? true : visibility.showAnalyticsSetup}
                onChange={() => visibility.setShowAnalyticsSetup(!visibility.showAnalyticsSetup)}
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
          checked={visibility.showCookie}
          onChange={() => visibility.setShowCookie(!visibility.showCookie)}
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

      <PreviewContainer
        totalPrice={totalPrice}
        totalTime={totalTime}
        onExport={() => exportToJson(stateData)}
      >
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
            preview
          />
        )}
        {visibility.showReference && <Reference />}
        {visibility.showContact && <Contact />}
        <Footer />
      </PreviewContainer>
    </div>
  )
}
