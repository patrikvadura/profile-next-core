'use client'
import React from 'react'
import { optionsHero, optionsAbout, optionsService, optionsHeroContent } from '@/app/lib/customizer'
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
import ColorPickerGlobal from '@/app/components/Customizer/ColorPicker/Global'
import ColorPickerAbout from '@/app/components/Customizer/ColorPicker/About'
import ColorPickerHero from '@/app/components/Customizer/ColorPicker/Hero'
import ColorPickerService from '@/app/components/Customizer/ColorPicker/Service'
import ColorUpdaterGlobal from '@/app/components/Customizer/ColorUpdater/Global'
import Button from '@/app/ui/Button'
import { ArrowRight } from '@/app/ui/Icons/Arrow/Right'
import { Icon } from '@iconify/react'
import FAQ from '@/app/components/Customizer/FAQ'
import DNSChecker from '@/app/components/Customizer/DNSChecker'
import { Input } from '@/app/ui/Input'
import { Textarea } from '@/app/ui/Textarea'
import { Radio } from '@/app/ui/Radio'
import Select from '@/app/ui/Select'
import Head from 'next/head'
import { useDomain } from '@/app/components/Customizer/DNSChecker/DomainContext'
import DynamicFontLoader from '@/app/components/Customizer/DynamicFontLoader'
import { Lato } from 'next/font/google'
import OpenGraphPreview from '@/app/components/Customizer/OpenGraphPreview'
import UploadComponent from '@/app/components/Customizer/UploadComponent'
import { Progress } from '@nextui-org/react'

const customizerFont = Lato({ subsets: ['latin'], weight: ['300', '400', '700', '900'] })

export default function Customizer() {
  const hero = useHeroState()
  const about = useAboutState()
  const service = useServiceState()
  const visibility = useVisibilityState()
  const other = useOtherState()

  const { totalPrice, totalTime } = calculatePreviewState(visibility)

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

  const steps = ['Vzhled', 'Obsah', 'Doména', 'Nastavení', 'Shrnutí']

  const nextStep = () => {
    other.setCurrentStep(Math.min(other.currentStep + 1, steps.length - 1))
  }

  const previousStep = () => {
    other.setCurrentStep(Math.max(other.currentStep - 1, 0))
  }

  const [value, setValue] = React.useState(0)

  React.useEffect(() => {
    const calculateProgress = () => {
      return (other.currentStep / (steps.length - 1)) * 100
    }

    setValue(calculateProgress())
  }, [other.currentStep, steps.length])

  return (
    <div className="h-screen flex flex-row overflow-hidden">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>

      <DynamicFontLoader fontName={other.fontName} fontWeights={other.fontWeights} />

      <OptionsContainer className={customizerFont.className}>
        <div className="flex flex-col justify-center items-start space-y-4">
          <Progress
            aria-label="Downloading..."
            size="sm"
            value={value}
            color="primary"
            showValueLabel={true}
            className="w-full text-black text-opacity-50"
          />

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
            <Dropdown
              label="Globální barevnost"
              id="globalColorsToggle"
              link="#hero"
              toggled
              hideToggle
            >
              <div className="space-y-4">
                <p className="text-black text-sm text-opacity-75">
                  Definice barev, které slouží pro zobrazení ve faviconě, Open Graph náhledových
                  obrázcích, atd.{' '}
                </p>

                <ColorPickerGlobal
                  primaryGlobalColor={other.setGlobalPrimary}
                  secondaryGlobalColor={other.setGlobalSecondary}
                  accentGlobalColor={other.setGlobalPrimary}
                />

                <ColorUpdaterGlobal
                  primaryGlobalColor={other.globalPrimary}
                  secondaryGlobalColor={other.globalSecondary}
                  accentGlobalColor={other.globalAccent}
                />
              </div>
            </Dropdown>

            <Dropdown label="Typografie" id="typoToggle" link="#hero" hideToggle>
              <div className="space-y-4">
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
              </div>
            </Dropdown>

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
          </div>
        )}

        {other.currentStep === 1 && (
          <div className="flex flex-col space-y-4 pt-4">
            {visibility.showHero && (
              <Dropdown
                label="Hero sekce"
                id="contentHeroToggle"
                link="#hero"
                preview
                toggled
                hideToggle
              >
                <div className="space-y-4">
                  <Input
                    type="text"
                    value={hero.heroContentTitle}
                    onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
                      hero.setHeroContentTitle(e.target.value)
                    }
                    label="Hlavní nadpis"
                    classLabel="!text-black"
                  />

                  <Input
                    type="text"
                    value={hero.heroContentSubtitle}
                    onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
                      hero.setHeroContentSubtitle(e.target.value)
                    }
                    label="Podnadpis"
                    classLabel="!text-black"
                  />

                  <Input
                    type="text"
                    value={hero.heroContentLargeTitle}
                    onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
                      hero.setHeroContentLargeTitle(e.target.value)
                    }
                    label="Velký text"
                    withLimit
                    maxLength={9}
                    minLength={4}
                    classLabel="!text-black"
                  />

                  {!['01', '02', '05'].includes(hero.heroVariant) ? (
                    <UploadComponent
                      imageUrl={hero.imageMainAlternativeUrl}
                      imageWidth={hero.imageMainWidth}
                      imageHeight={hero.imageMainHeight}
                      setImageUrl={hero.setImageMainAlternativeUrl}
                      setImageWidth={hero.setImageMainWidth}
                      setImageHeight={hero.setImageMainHeight}
                    />
                  ) : (
                    <UploadComponent
                      imageUrl={hero.imageMainUrl}
                      imageWidth={hero.imageMainWidth}
                      imageHeight={hero.imageMainHeight}
                      setImageUrl={hero.setImageMainUrl}
                      setImageWidth={hero.setImageMainWidth}
                      setImageHeight={hero.setImageMainHeight}
                    />
                  )}

                  <Dropdown
                    label="Základní tlačítko"
                    id="heroButtonPrimaryToggle"
                    checked={visibility.showHeroContentButtonPrimary}
                    onChange={() =>
                      visibility.setShowHeroContentButtonPrimary(
                        !visibility.showHeroContentButtonPrimary,
                      )
                    }
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        type="text"
                        value={hero.heroContentButtonPrimaryText}
                        onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
                          hero.setHeroContentButtonPrimaryText(e.target.value)
                        }
                        label="Text tlačítka"
                        classLabel="!text-black"
                      />

                      <Select
                        title="Odkaz tlačítka"
                        options={optionsHeroContent.buttonLink}
                        selectedOption={hero.heroContentButtonPrimaryLink}
                        onChange={hero.setHeroContentButtonPrimaryLink}
                      />

                      {hero.heroContentButtonPrimaryLink === null && (
                        <Input
                          type="text"
                          value={hero.heroContentButtonPrimaryCustomLink}
                          onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
                            hero.setHeroContentButtonPrimaryCustomLink(e.target.value)
                          }
                          label="Vlastní odkaz"
                          classLabel="!text-black"
                        />
                      )}
                    </div>
                  </Dropdown>

                  <Dropdown
                    label="Doplňkové tlačítko"
                    id="heroButtonSecondaryToggle"
                    checked={visibility.showHeroContentButtonSecondary}
                    onChange={() =>
                      visibility.setShowHeroContentButtonSecondary(
                        !visibility.showHeroContentButtonSecondary,
                      )
                    }
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        type="text"
                        value={hero.heroContentButtonSecondaryText}
                        onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
                          hero.setHeroContentButtonSecondaryText(e.target.value)
                        }
                        label="Text tlačítka"
                        classLabel="!text-black"
                      />

                      <Select
                        title="Odkaz tlačítka"
                        options={optionsHeroContent.buttonLink}
                        selectedOption={hero.heroContentButtonSecondaryLink}
                        onChange={hero.setHeroContentButtonSecondaryLink}
                      />

                      {hero.heroContentButtonSecondaryLink === null && (
                        <Input
                          type="text"
                          value={hero.heroContentButtonSecondaryCustomLink}
                          onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
                            hero.setHeroContentButtonSecondaryCustomLink(e.target.value)
                          }
                          label="Vlastní odkaz"
                          classLabel="!text-black"
                        />
                      )}
                    </div>
                  </Dropdown>
                </div>
              </Dropdown>
            )}
            {visibility.showServices && (
              <Dropdown
                label="Služby"
                id="contentServicesToggle"
                link="#services"
                preview
                toggled
                hideToggle
              >
                <div className="space-y-4">
                  <Input
                    type="text"
                    value={service.servicesContentTitle}
                    onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
                      service.setServicesContentTitle(e.target.value)
                    }
                    label="Hlavní nadpis"
                    classLabel="!text-black"
                  />

                  <Dropdown
                    label="První box"
                    id="contentServicesBox1Toggle"
                    checked={service.servicesContentBox1}
                    onChange={() => service.setServicesContentBox1(!service.servicesContentBox1)}
                  >
                    <div className="space-y-4">
                      <Input
                        type="text"
                        value={service.servicesContentBox1Title}
                        onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
                          service.setServicesContentBox1Title(e.target.value)
                        }
                        label="Nadpis"
                        classLabel="!text-black"
                      />

                      <Textarea
                        type="text"
                        value={service.servicesContentBox1Content}
                        onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
                          service.setServicesContentBox1Content(e.target.value)
                        }
                        label="Popisek"
                        classLabel="!text-black"
                      />

                      <Dropdown
                        label="Chci zobrazit ikonku"
                        id="contentServicesIcon1Toggle"
                        checked={service.servicesContentBox1IconShow}
                        onChange={() =>
                          service.setServicesContentBox1IconShow(
                            !service.servicesContentBox1IconShow,
                          )
                        }
                      >
                        <div className="space-y-4">
                          <Input
                            type="text"
                            value={service.servicesContentBox1Icon}
                            onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
                              service.setServicesContentBox1Icon(e.target.value)
                            }
                            label="Název ikonky"
                            classLabel="!text-black"
                          />

                          <p className="text-sm text-black text-opacity-75">
                            Vybrat vlastní ikonku si můžete z téhle databáze{' '}
                            <Link
                              href="https://icones.js.org/collection/all"
                              target="_blank"
                              className="underline"
                            >
                              Iconify
                            </Link>
                            . Stačí zkopírovat její názv a vložit sem.
                          </p>
                        </div>
                      </Dropdown>
                    </div>
                  </Dropdown>

                  <Dropdown
                    label="Druhý box"
                    id="contentServicesBox2Toggle"
                    checked={service.servicesContentBox2}
                    onChange={() => service.setServicesContentBox2(!service.servicesContentBox2)}
                  >
                    <div className="space-y-4">
                      <Input
                        type="text"
                        value={service.servicesContentBox2Title}
                        onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
                          service.setServicesContentBox2Title(e.target.value)
                        }
                        label="Nadpis"
                        classLabel="!text-black"
                      />

                      <Textarea
                        type="text"
                        value={service.servicesContentBox2Content}
                        onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
                          service.setServicesContentBox2Content(e.target.value)
                        }
                        label="Popisek"
                        classLabel="!text-black"
                      />

                      <Dropdown
                        label="Chci zobrazit ikonku"
                        id="contentServicesIcon2Toggle"
                        checked={service.servicesContentBox2IconShow}
                        onChange={() =>
                          service.setServicesContentBox2IconShow(
                            !service.servicesContentBox2IconShow,
                          )
                        }
                      >
                        <div className="space-y-4">
                          <Input
                            type="text"
                            value={service.servicesContentBox1Icon}
                            onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
                              service.setServicesContentBox1Icon(e.target.value)
                            }
                            label="Název ikonky"
                            classLabel="!text-black"
                          />

                          <p className="text-sm text-black text-opacity-75">
                            Vybrat vlastní ikonku si můžete z téhle databáze{' '}
                            <Link
                              href="https://icones.js.org/collection/all"
                              target="_blank"
                              className="underline"
                            >
                              Iconify
                            </Link>
                            . Stačí zkopírovat její názv a vložit sem.
                          </p>
                        </div>
                      </Dropdown>
                    </div>
                  </Dropdown>

                  <Dropdown
                    label="Třetí box"
                    id="contentServicesBox3Toggle"
                    checked={service.servicesContentBox3}
                    onChange={() => service.setServicesContentBox3(!service.servicesContentBox3)}
                  >
                    <div className="space-y-4">
                      <Input
                        type="text"
                        value={service.servicesContentBox3Title}
                        onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
                          service.setServicesContentBox3Title(e.target.value)
                        }
                        label="Nadpis"
                        classLabel="!text-black"
                      />

                      <Textarea
                        type="text"
                        value={service.servicesContentBox3Content}
                        onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
                          service.setServicesContentBox3Content(e.target.value)
                        }
                        label="Popisek"
                        classLabel="!text-black"
                      />

                      <Dropdown
                        label="Chci zobrazit ikonku"
                        id="contentServicesIcon3Toggle"
                        checked={service.servicesContentBox3IconShow}
                        onChange={() =>
                          service.setServicesContentBox3IconShow(
                            !service.servicesContentBox3IconShow,
                          )
                        }
                      >
                        <div className="space-y-4">
                          <Input
                            type="text"
                            value={service.servicesContentBox3Icon}
                            onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
                              service.setServicesContentBox3Icon(e.target.value)
                            }
                            label="Název ikonky"
                            classLabel="!text-black"
                          />

                          <p className="text-sm text-black text-opacity-75">
                            Vybrat vlastní ikonku si můžete z téhle databáze{' '}
                            <Link
                              href="https://icones.js.org/collection/all"
                              target="_blank"
                              className="underline"
                            >
                              Iconify
                            </Link>
                            . Stačí zkopírovat její názv a vložit sem.
                          </p>
                        </div>
                      </Dropdown>
                    </div>
                  </Dropdown>
                </div>
              </Dropdown>
            )}
          </div>
        )}

        {other.currentStep === 2 && (
          <div className="flex flex-col space-y-4 pt-4">
            <h3 className="text-lg font-bold pt-4">
              Název vaší domény{' '}
              <span className="text-sm font-normal opacity-50">(ověřte dostupnost)</span>
            </h3>

            <DNSChecker />

            {availability !== null && (
              <fieldset id="dnsOption" className="pt-4 space-y-4">
                {availability ? (
                  <div className="flex flex-col space-y-2">
                    <Radio
                      id="dnsBuy"
                      name="dnsOption"
                      checked={visibility.selectedDnsOption === 'dnsTransfer'}
                      onChange={() => {
                        visibility.setSelectedDnsOption('dnsTransfer')
                        visibility.setShowDnsTransfer(true)
                        visibility.setShowDnsSelf(false)
                        visibility.setShowDnsHelp(false)
                      }}
                    >
                      <div className="w-full flex flex-row justify-between items-center">
                        <span>Zakoupit doménu u VisioSnap</span>
                        <span className="text-sm font-normal opacity-50">250 Kč/rok</span>
                      </div>
                    </Radio>

                    {visibility.selectedDnsOption === 'dnsTransfer' && (
                      <div className="ml-12 space-y-4">
                        <p className="text-black text-xs font-normal opacity-75">
                          Doménu za vás zakoupíme a vše zařídíme - již se nemusíte o nic víc starat.
                        </p>

                        <h3 className="pt-2 text-black font-semibold">Zadejte fakturační údaje</h3>

                        <div className="grid grid-cols-2 gap-4">
                          <Input
                            type="text"
                            value={other.domainBuyName}
                            onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
                              other.setDomainBuyName(e.target.value)
                            }
                            label="Jméno a příjmení / firma"
                            classLabel="!text-black"
                          />

                          <Input
                            type="email"
                            value={other.domainBuyEmail}
                            onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
                              other.setDomainBuyEmail(e.target.value)
                            }
                            label="Emailová adresa"
                            classLabel="!text-black"
                          />

                          <Input
                            type="adresa"
                            value={other.domainBuyAddress}
                            onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
                              other.setDomainBuyAddress(e.target.value)
                            }
                            label="Adresa"
                            classLabel="!text-black"
                          />

                          <Input
                            type="text"
                            value={other.domainBuyVAT}
                            onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
                              other.setDomainBuyVAT(e.target.value)
                            }
                            label="IČO"
                            classLabel="!text-black"
                          />
                        </div>

                        <Radio
                          id="dnsBuyInfoAccept"
                          name="dnsBuyInfoAccept"
                          classLabel="!ml-0"
                          checked={visibility.selectedBuyInfoAccept === 'dnsBuyInfoAccept'}
                          onChange={() => {
                            visibility.setSelectedBuyInfoAccept('dnsBuyInfoAccept')
                            visibility.setSelectedBuyInfoAccepted(true)
                          }}
                        >
                          <span>Souhlasím s předáním osobních údajů</span>
                        </Radio>
                      </div>
                    )}
                  </div>
                ) : (
                  <fieldset id="dnsOption" className="pt-4 space-y-4">
                    <div className="flex flex-col space-y-2">
                      <label
                        htmlFor="dnsTransfer"
                        className="ml-4 flex flex-row items-start font-semibold cursor-pointer"
                      >
                        <input
                          type="radio"
                          id="dnsTransfer"
                          name="dnsOption"
                          className="peer relative mr-3 appearance-none !size-5 border rounded-full border-gray-300 cursor-pointer checked:bg-[#72E790]"
                          checked={visibility.selectedDnsOption === 'dnsTransfer'}
                          onChange={() => {
                            visibility.setSelectedDnsOption('dnsTransfer')
                            visibility.setShowDnsTransfer(true)
                            visibility.setShowDnsSelf(false)
                            visibility.setShowDnsHelp(false)
                          }}
                        />
                        <div className="w-full flex flex-row justify-between items-center">
                          <span>Převedu doménu k VisioSnap</span>
                          <span className="text-sm font-normal opacity-50">250 Kč/rok</span>
                        </div>
                      </label>

                      {visibility.selectedDnsOption === 'dnsTransfer' && (
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
                      )}
                    </div>

                    <div className="flex flex-col space-y-2">
                      <label
                        htmlFor="dnsSelf"
                        className="ml-4 flex flex-row items-start font-semibold cursor-pointer"
                      >
                        <input
                          type="radio"
                          id="dnsSelf"
                          name="dnsOption"
                          className="peer relative mr-3 appearance-none !size-5 border rounded-full border-gray-300 cursor-pointer checked:bg-[#72E790]"
                          checked={visibility.selectedDnsOption === 'dnsSelf'}
                          onChange={() => {
                            visibility.setSelectedDnsOption('dnsSelf')
                            visibility.setShowDnsTransfer(false)
                            visibility.setShowDnsSelf(true)
                            visibility.setShowDnsHelp(false)
                          }}
                        />
                        <div className="w-full flex flex-row justify-between items-center">
                          <span>Nastavím si sám DNS záznamy</span>
                          <span className="text-sm font-normal opacity-50">zdarma</span>
                        </div>
                      </label>

                      {visibility.selectedDnsOption === 'dnsSelf' && (
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
                            <Link
                              href="https://dnschecker.org"
                              target="_blank"
                              className="underline"
                            >
                              www.dnschecker.org
                            </Link>
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col space-y-2">
                      <label
                        htmlFor="dnsHelp"
                        className="ml-4 flex flex-row items-start font-semibold cursor-pointer"
                      >
                        <input
                          type="radio"
                          id="dnsHelp"
                          name="dnsOption"
                          className="peer relative mr-3 appearance-none !size-5 border rounded-full border-gray-300 cursor-pointer checked:bg-[#72E790]"
                          checked={visibility.selectedDnsOption === 'dnsHelp'}
                          onChange={() => {
                            visibility.setSelectedDnsOption('dnsHelp')
                            visibility.setShowDnsTransfer(false)
                            visibility.setShowDnsSelf(false)
                            visibility.setShowDnsHelp(true)
                          }}
                        />
                        <div className="w-full flex flex-row justify-between items-center">
                          <span>Potřebuji pomoci nastavit DNS záznamy</span>
                          <span className="text-sm font-normal opacity-50">500 Kč</span>
                        </div>
                      </label>
                    </div>
                  </fieldset>
                )}
              </fieldset>
            )}
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

            <Dropdown label="SEO meta nastavení" id="metaToggle" hideToggle>
              <div className="flex flex-col justify-start space-y-4">
                <p className="text-black text-sm font-normal opacity-75">
                  Meta nastavení slouží pro správnou definici vašich webových stránek ve výsledcích
                  vyhledávání.
                </p>

                <Input
                  type="text"
                  value={other.metaTitle}
                  onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
                    other.setMetaTitle(e.target.value)
                  }
                  label="Meta titulek"
                  isRequired
                  classLabel="!text-black"
                  withLimit
                  maxLength={60}
                  minLength={50}
                />

                <Input
                  type="text"
                  value={other.metaDescription}
                  onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
                    other.setMetaDescription(e.target.value)
                  }
                  label="Meta popisek"
                  isRequired
                  classLabel="!text-black"
                  withLimit
                />

                <div className="p-4 flex-col bg-gray-50 space-y-2">
                  <div className="text-sm text-black text-opacity-50 mb-3">Náhled:</div>

                  <OpenGraphPreview
                    title={hero.heroContentTitle}
                    subtitle={hero.heroContentSubtitle}
                    name={other.metaTitle}
                  />

                  <div className="pt-4 flex flex-row items-center space-x-2">
                    <div className="size-8 flex items-center justify-center rounded-full bg-[var(--global-primary)]">
                      <span className="text-sm invert">PI</span>
                    </div>

                    <div className="flex flex-col text-sm leading-[1.1]">
                      <span>{other.metaTitle}</span>
                      <span className="underline">{domain || 'vasedomena.cz'}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold">{other.metaTitle}</h3>
                    <p className="text-sm opacity-75">{other.metaDescription}</p>
                  </div>
                </div>
              </div>
            </Dropdown>

            <h3 className="text-lg font-bold pt-4">Informace o vás</h3>
            <p className="text-black text-sm text-opacity-75">
              Abychom vás lépe poznali a mohli s vámi dále komunikovat, poprosíme vás o zadání
              základních kontaktních informací.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <Input
                type="text"
                value={other.contactName}
                onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
                  other.setContactName(e.target.value)
                }
                label="Jméno a příjmení"
                isRequired
                classLabel="!text-black"
              />

              <Input
                type="text"
                value={other.contactCompany}
                onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
                  other.setContactCompany(e.target.value)
                }
                label="Firma"
                isRequired
                classLabel="!text-black"
              />

              <Input
                type="email"
                value={other.contactEmail}
                onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
                  other.setContactEmail(e.target.value)
                }
                label="Emailová adresa"
                isRequired
                classLabel="!text-black"
              />

              <Input
                type="phone"
                value={other.contactPhone}
                onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
                  other.setContactPhone(e.target.value)
                }
                label="Telefonní číslo"
                isRequired
                classLabel="!text-black"
              />
            </div>
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
        onExport={() => exportToJson(stateData, domain)}
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