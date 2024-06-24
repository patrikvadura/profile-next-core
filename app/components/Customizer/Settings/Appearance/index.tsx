import React from 'react'
import Dropdown from '@/app/components/Customizer/Dropdown'
import OptionSelector from '@/app/components/Customizer/OptionSelector'
import ColorPickerGlobal from '@/app/components/Customizer/ColorPicker/Global'
import ColorPickerAbout from '@/app/components/Customizer/ColorPicker/About'
import ColorPickerHero from '@/app/components/Customizer/ColorPicker/Hero'
import ColorPickerService from '@/app/components/Customizer/ColorPicker/Service'
import ColorPickerReference from '@/app/components/Customizer/ColorPicker/Reference'
import ColorPickerContact from '@/app/components/Customizer/ColorPicker/Contact'
import ModalView from '@/app/components/Customizer/ModalView'
import { Input } from '@/app/ui/Input'
import Link from 'next/link'
import Select from '@/app/ui/Select'
import { Radio } from '@/app/ui/Radio'

interface Props {
  isModalVisible: boolean
  toggleModalVisibility: () => void
  other: any
  visibility: any
  hero: any
  about: any
  service: any
  reference: any
  contact: any
  optionsHero: any
  optionsAbout: any
  optionsService: any
  optionsReference: any
  optionsContact: any
}

export default function SettingsAppearance({
  isModalVisible,
  toggleModalVisibility,
  other,
  visibility,
  hero,
  about,
  service,
  reference,
  contact,
  optionsHero,
  optionsAbout,
  optionsService,
  optionsReference,
  optionsContact,
}: Props) {
  return (
    <ModalView title="Vzhled" isVisible={isModalVisible} toggleVisibility={toggleModalVisibility}>
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
              obrázcích, atd.
            </p>
            <ColorPickerGlobal
              primaryGlobalColor={other.setGlobalPrimary}
              secondaryGlobalColor={other.setGlobalSecondary}
              accentGlobalColor={other.setGlobalPrimary}
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
                onChange={e => other.setFontName(e.target.value)}
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
                onChange={e => other.setFontWeights(e.target.value)}
                classLabel="!text-black"
              />
              <p className="text-black text-xs text-opacity-75">
                Zadejte preferované tloušťky fontů (optimálně alespoň 2). Jednotlivé tloušťky
                oddělte středníkem a seřaďte od nejmenší po největší.
              </p>
            </div>
          </div>
        </Dropdown>

        <h3 className="text-primary text-lg font-bold pt-4">Volba sekcí</h3>
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
            <span className="mt-2 text-primary font-semibold">Barevnost sekce:</span>
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
            {!['05'].includes(hero.heroVariant) && (
              <OptionSelector
                title="Zarovnání"
                options={optionsHero.align}
                selectedOption={hero.heroAlign}
                onChange={hero.setHeroAlign}
              />
            )}
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
            <span className="mt-2 text-primary font-semibold">Barevnost sekce:</span>
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
            {!['05'].includes(about.aboutVariant) && (
              <OptionSelector
                title="Zarovnání"
                options={optionsAbout.align}
                selectedOption={about.aboutAlign}
                onChange={about.setAboutAlign}
              />
            )}
          </div>
          <div className="space-y-4">
            {!['05'].includes(about.aboutVariant) && (
              <OptionSelector
                title="Pořadí"
                options={optionsAbout.order}
                selectedOption={about.aboutOrder}
                onChange={about.setAboutOrder}
              />
            )}
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
            <span className="mt-2 text-primary font-semibold">Barevnost sekce:</span>
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
            {!['02'].includes(service.serviceVariant) && (
              <OptionSelector
                title="Radius"
                options={optionsService.radius}
                selectedOption={service.serviceRadius}
                onChange={service.setServiceRadius}
              />
            )}
          </div>
        </Dropdown>

        <Dropdown
          label="Reference"
          id="referenceToggle"
          checked={visibility.showReference}
          link="#reference"
          preview
          onChange={() => visibility.setShowReference(!visibility.showReference)}
        >
          <div className="space-y-4">
            <span className="mt-2 text-primary font-semibold">Barevnost sekce:</span>

            <ColorPickerReference
              backgroundColor={reference.setReferenceBackground}
              accentBgColor={reference.setReferenceAccentBg}
              typoColor={reference.setReferenceTypo}
              typoLgColor={reference.setReferenceTypoLg}
            />

            <OptionSelector
              title="Varianta"
              options={optionsReference.variant}
              selectedOption={reference.referenceVariant}
              onChange={reference.setReferenceVariant}
              visual
            />
          </div>

          <div className="space-y-4">
            <OptionSelector
              title="Layout"
              options={optionsReference.layout}
              selectedOption={reference.referenceLayout}
              onChange={reference.setReferenceLayout}
            />

            <OptionSelector
              title="Zarovnání"
              options={optionsReference.align}
              selectedOption={reference.referenceAlign}
              onChange={reference.setReferenceAlign}
            />
          </div>
        </Dropdown>
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
        >
          <div className="space-y-4">
            <span className="mt-2 text-primary font-semibold">Barevnost sekce:</span>
            <ColorPickerContact
              backgroundColor={contact.setContactBackground}
              accentBgColor={contact.setContactAccentBg}
              accentFgColor={contact.setContactAccentFg}
              typoColor={contact.setContactTypo}
            />
            <OptionSelector
              title="Varianta"
              options={optionsContact.variant}
              selectedOption={contact.contactVariant}
              onChange={contact.setContactVariant}
              visual
            />
          </div>

          <div className="space-y-4">
            {!['03', '04'].includes(contact.contactVariant) && (
              <Dropdown
                label="Kontaktní formulář"
                id="contactFormOrMap"
                checked={visibility.showContactFormOrMap}
                onChange={() =>
                  visibility.setShowContactFormOrMap(!visibility.showContactFormOrMap)
                }
              >
                <div className="ml-4 flex flex-col justify-start space-y-4">
                  <Input
                    type="text"
                    value={contact.contactRecipient}
                    onChange={e => contact.setContactRecipient(e.target.value)}
                    label="Kam se mají zprávy odeslat?"
                    classLabel="!text-black"
                  />

                  <p className="text-black text-xs font-normal opacity-75">
                    Uveďte vaši emailovou adresu, na kterou se budou vyplněné formuláře odesílat.
                  </p>
                </div>
              </Dropdown>
            )}

            {['04'].includes(contact.contactVariant) && (
              <Dropdown
                label="Mapa"
                id="contactFormOrMap"
                checked={visibility.showContactFormOrMap}
                onChange={() =>
                  visibility.setShowContactFormOrMap(!visibility.showContactFormOrMap)
                }
              >
                <div className="ml-4 flex flex-col justify-start space-y-4">
                  <Input
                    type="text"
                    value={contact.contactMapAddress}
                    onChange={e => contact.setContactMapAddress(e.target.value)}
                    label="Adresa"
                    classLabel="!text-black"
                  />

                  <p className="text-black text-xs font-normal opacity-75">
                    Uveďte adresu vašeho bydliště nebo sídla firmy zobrazovanou na mapě.
                  </p>
                </div>
              </Dropdown>
            )}

            {!['02'].includes(contact.contactVariant) && (
              <OptionSelector
                title="Layout"
                options={optionsContact.layout}
                selectedOption={contact.contactLayout}
                onChange={contact.setContactLayout}
              />
            )}
            <OptionSelector
              title="Zarovnání"
              options={optionsContact.align}
              selectedOption={contact.contactAlign}
              onChange={contact.setContactAlign}
            />
          </div>
        </Dropdown>
      </div>
    </ModalView>
  )
}
