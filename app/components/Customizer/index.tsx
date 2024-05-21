'use client'
import React from 'react'
import { optionsHero, optionsAbout, optionsService } from '@/app/lib/customizer'
import { useHeroState } from '@/app/lib/useState/useHeroState'
import { useAboutState } from '@/app/lib/useState/useAboutState'
import { useServiceState } from '@/app/lib/useState/useServiceState'
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
import Link from 'next/link'
import Dropdown from '@/app/components/Customizer/Dropdown'
import PreviewContainer from '@/app/components/Customizer/PreviewContainer'
import OptionsContainer from '@/app/components/Customizer/OptionsContainer'
import OptionSelector from '@/app/components/Customizer/OptionSelector'
import ColorPickerAbout from '@/app/components/Customizer/ColorPicker/About'
import ColorPickerHero from '@/app/components/Customizer/ColorPicker/Hero'
import ColorPickerService from '@/app/components/Customizer/ColorPicker/Service'
import Button from '@/app/ui/Button'
import { ArrowRight } from '@/app/ui/Icons/Arrow/Right'
import { Icon } from '@iconify/react'
import FAQ from '@/app/components/Customizer/FAQ'
import DNSChecker from '@/app/components/Customizer/DNSChecker'
import { Input } from '@/app/ui/Input'
import Head from 'next/head'
import { useDomain } from '@/app/components/Customizer/DNSChecker/DomainContext'
import DynamicFontLoader from '@/app/components/Customizer/DynamicFontLoader'
import { Lato } from 'next/font/google'

const customizerFont = Lato({ subsets: ['latin'], weight: ['300', '400', '700', '900'] })

export default function Customizer() {
  const hero = useHeroState()
  const about = useAboutState()
  const service = useServiceState()
  const visibility = useVisibilityState()
  const other = useOtherState()

  const { totalPrice, totalTime } = calculatePreviewState(visibility)

  const { domain } = useDomain()

  const stateData = {
    ...hero,
    ...about,
    ...service,
    ...visibility,
    ...other,
    optionsHero,
    optionsAbout,
    optionsService,
    totalPrice,
    totalTime,
  }

  const steps = ['Vzhled', 'Obsah', 'Doména', 'Nastavení', 'Shrnutí']

  const nextStep = () => {
    other.setCurrentStep(Math.min(other.currentStep + 1, steps.length - 1))
  }

  const previousStep = () => {
    other.setCurrentStep(Math.max(other.currentStep - 1, 0))
  }

  return (
    <div className="h-screen flex flex-row overflow-hidden">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>

      <DynamicFontLoader fontName={other.fontName} fontWeights={other.fontWeights} />

      <OptionsContainer className={customizerFont.className}>
        <div className="flex justify-center items-center">
          <div className="flex space-x-8">
            {steps.slice(0, -1).map((step, index) => (
              <button
                key={index}
                className={`flex flex-row items-center text-base pt-4 ${
                  other.currentStep === index
                    ? 'text-black font-bold'
                    : 'text-black text-opacity-50'
                }`}
                onClick={() => other.setCurrentStep(index)}
              >
                <span
                  className={`flex justify-center items-center mr-2 size-10 rounded-full ${
                    other.currentStep === index
                      ? 'border-2 border-[#72E790] text-[#72E790] font-bold'
                      : 'border border-gray-200 text-black text-opacity-30 font-normal'
                  }`}
                >
                  {index + 1}
                </span>{' '}
                {step}
              </button>
            ))}
          </div>
        </div>

        {other.currentStep === 0 && (
          <div className="space-y-2">
            <h3 className="text-lg font-bold pt-4">Typografie</h3>
            <p className="text-black text-sm text-opacity-75">
              Zvolte si vlastní font, který nejlépe vyhovuje vašim potřebám a vašemu stylu.
            </p>

            <div className="space-y-2 py-3">
              <Input
                id="fontSetup"
                value={other.fontName}
                type="text"
                label="Zadejte název fontu"
                onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
                  other.setFontName(e.target.value)
                }
                classLabel="!text-black"
              />

              <p className="text-black text-xs text-opacity-75">
                Font si můžete vybrat z knihovny{' '}
                <Link href="https://fonts.google.com" target="_blank" className="underline">
                  Google Fonts
                </Link>
                , stačí pouze zkopírovat název a vložit sem.
              </p>

              <Input
                id="fontSetup"
                value={other.fontWeights}
                type="text"
                label="Zadejte požadované tloušťky"
                onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
                  other.setFontWeights(e.target.value)
                }
                classLabel="!text-black"
              />

              <p className="text-black text-xs text-opacity-75">
                Zadejte preferované tloušťky fontů (optimálně alespoň 2). Jednotlivé tloušťky
                oddělte středníkem a seřaďte od nejmenší po největší.
              </p>
            </div>

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

                <div className="pt-4">
                  <span className="font-semibold">Volba ikon:</span>

                  <div>
                    Vlastní ikonu si můžete vybrat z databáze{' '}
                    <Link href="https://icones.js.org/collection/all" className="underline">
                      Icones
                    </Link>
                  </div>
                </div>
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
          </div>
        )}

        {other.currentStep === 1 && (
          <div>
            <p>Žádný obsah</p>
          </div>
        )}

        {other.currentStep === 2 && (
          <div className="flex flex-col space-y-4 pt-4">
            <h3 className="text-lg font-bold pt-4">
              Název vaší domény <span className="font-normal opacity-50">(ověřte dostupnost)</span>
            </h3>

            <DNSChecker />

            <div className="flex flex-col space-y-2">
              <label
                htmlFor="dnsTransfer"
                className="ml-4 flex flex-row items-start font-semibold cursor-pointer"
              >
                <input
                  type="checkbox"
                  id="dnsTransfer"
                  className="peer relative mr-3 appearance-none !size-5 border rounded-full border-gray-300 cursor-pointer checked:bg-[#72E790]"
                  checked={visibility.showDnsTransfer}
                  onChange={() => visibility.setShowDnsTransfer(!visibility.showDnsTransfer)}
                />
                <div className="w-full flex flex-row justify-between items-center">
                  <span>Převedu doménu k VisioSnap</span>
                  <span className="text-sm font-normal opacity-50">250 Kč/rok</span>
                </div>
              </label>

              {visibility.showDnsTransfer ? (
                <div className="ml-12 space-y-4">
                  <Input
                    type="text"
                    value={other.dnsTransferCode}
                    onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
                      other.setDnsTransferCode(e.target.value)
                    }
                    label="Zadejte autorizační kód pro převod"
                    placeholder="XXXX-AAAA-BBBB-CCCC"
                    classLabel="!text-black"
                  />

                  <p className="text-black text-xs font-normal opacity-75">
                    Autorizační kód obsahuje 16 znaků. Kód můžete získat zde:{' '}
                    <Link
                      href="https://www.nic.cz/whois/send-password"
                      target="_blank"
                      className="underline"
                    >
                      www.nic.cz
                    </Link>
                  </p>
                </div>
              ) : (
                ''
              )}
            </div>

            <div className="flex flex-col space-y-2">
              <label
                htmlFor="dnsSelf"
                className="ml-4 flex flex-row items-start font-semibold cursor-pointer"
              >
                <input
                  type="checkbox"
                  id="dnsSelf"
                  className="peer relative mr-3 appearance-none !size-5 border rounded-full border-gray-300 cursor-pointer checked:bg-[#72E790]"
                  checked={visibility.showDnsSelf}
                  onChange={() => visibility.setShowDnsSelf(!visibility.showDnsSelf)}
                />
                <div className="w-full flex flex-row justify-between items-center">
                  <span>Nastavím si sám DNS záznamy</span>
                  <span className="text-sm font-normal opacity-50">zdarma</span>
                </div>
              </label>

              {visibility.showDnsSelf ? (
                <div className="ml-12 space-y-4">
                  <p className="text-black text-sm font-normal opacity-75">
                    Následující DNS přiřaďte k vaší doméně:
                  </p>

                  <div className="bg-gray-50 p-4">
                    <p className="text-black text-sm font-normal opacity-50">
                      <table className="w-full">
                        <tr className="font-semibold">
                          <td>Doména</td>
                          <td>Typ</td>
                          <td>Hodnota</td>
                          <td>Priorita</td>
                          <td>TTL</td>
                        </tr>

                        <tr>
                          <td>{domain ? domain : 'vaše doména'}</td>
                          <td>A</td>
                          <td>76.76.21.21</td>
                          <td>0</td>
                          <td>600</td>
                        </tr>

                        <tr>
                          <td>www.{domain ? domain : 'vaše doména'}</td>
                          <td>CNAME</td>
                          <td>cname.vercel-dns.com</td>
                          <td>0</td>
                          <td>600</td>
                        </tr>
                      </table>
                    </p>
                  </div>

                  <p className="text-black text-xs font-normal opacity-75">
                    Kontrolu vašeho nastavení můžete provést zde:{' '}
                    <Link href="https://dnschecker.org" target="_blank" className="underline">
                      www.dnschecker.org
                    </Link>
                  </p>
                </div>
              ) : (
                ''
              )}
            </div>

            <div className="flex flex-col space-y-2">
              <label
                htmlFor="dnsHelp"
                className="ml-4 flex flex-row items-start font-semibold cursor-pointer"
              >
                <input
                  type="checkbox"
                  id="dnsHelp"
                  className="peer relative mr-3 appearance-none !size-5 border rounded-full border-gray-300 cursor-pointer checked:bg-[#72E790]"
                  checked={visibility.showDnsHelp}
                  onChange={() => visibility.setShowDnsHelp(!visibility.showDnsHelp)}
                />
                <div className="w-full flex flex-row justify-between items-center">
                  <span>Potřebuji pomoci nastavit DNS záznamy</span>
                  <span className="text-sm font-normal opacity-50">500 Kč</span>
                </div>
              </label>
            </div>
          </div>
        )}

        {other.currentStep === 3 && (
          <div className="space-y-2">
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
                    onChange={() =>
                      visibility.setShowAnalyticsSetup(!visibility.showAnalyticsSetup)
                    }
                  />
                  <span>Základní nastavení</span>
                </label>

                <div className="ml-12">
                  <p className="text-black text-sm font-normal opacity-75">
                    Pomůžem vám vytvořit základní nastavení GTM a GA4 pro spolehlivý start do
                    marketingu sledování konverzí.
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
          </div>
        )}

        {other.currentStep === 4 && (
          <div className="flex flex-col space-y-4 pt-4">
            <Icon icon="mingcute:thumb-up-line" className="text-[90px] text-gray-200" />

            <h3 className="text-lg font-bold pt-4">
              Úspěšně jste prošli nastavením vaší webové vizitky
            </h3>

            <p className="text-black text-sm text-opacity-75">
              Nyní již zbývá jen, vaše preferované nastavení nám odeslat a my už se postaráme o
              zbytek.
            </p>

            <FAQ />
          </div>
        )}

        <div className="flex justify-end space-x-2 !mt-12">
          {other.currentStep > 0 && other.currentStep < steps.length - 1 && (
            <Button className="bg-[#E5E5E9] rounded-full !normal-case" onClick={previousStep}>
              Zpět
            </Button>
          )}
          {other.currentStep < steps.length - 2 && (
            <Button className="bg-[#72E790] rounded-full !normal-case" onClick={nextStep}>
              Další <ArrowRight size={16} />
            </Button>
          )}
          {other.currentStep === steps.length - 2 && (
            <Button className="bg-[#72E790] rounded-full !normal-case" onClick={nextStep}>
              Dokončit <ArrowRight size={16} />
            </Button>
          )}
        </div>
      </OptionsContainer>

      <PreviewContainer
        totalPrice={totalPrice}
        totalTime={totalTime}
        onExport={() => exportToJson(stateData)}
        //className={defaultFont.className}
        classPreview="fontDefault"
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
