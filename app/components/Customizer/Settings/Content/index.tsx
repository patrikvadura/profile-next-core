'use client'
import React from 'react'
import { Slider } from '@nextui-org/react'
import Dropdown from '@/app/components/Customizer/Dropdown'
import { Input } from '@/app/ui/Input'
import { Textarea } from '@/app/ui/Textarea'
import Select from '@/app/ui/Select'
import Link from 'next/link'
import UploadComponent from '@/app/components/Customizer/UploadComponent'
import ModalView from '@/app/components/Customizer/ModalView'
import { Icon } from '@iconify/react'

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
  optionsHeroContent: any
  optionsAboutContent: any
  optionsGlobal: any
  navigationItems: any
}

export default function SettingsContent({
  isModalVisible,
  toggleModalVisibility,
  visibility,
  other,
  hero,
  about,
  service,
  reference,
  contact,
  optionsHeroContent,
  optionsAboutContent,
  optionsGlobal,
  navigationItems,
}: Props) {
  const handleAboutDescriptionChange = (value: string) => {
    about.setAboutContentDescription(value)
  }

  const handleBoxDescriptionChange = (index: number, value: string) => {
    about.updateBoxAbout(index, 'description', value)
  }

  const handleBoxServiceContentChange = (index: number, value: string) => {
    service.updateBoxService(index, 'content', value)
  }

  const handleBoxReferenceDescriptionChange = (index: number, value: string) => {
    reference.updateBoxReference(index, 'description', value)
  }

  return (
    <ModalView title="Obsah" isVisible={isModalVisible} toggleVisibility={toggleModalVisibility}>
      <div className="flex flex-col space-y-4 pt-4">
        <Dropdown label="Globální nastavení" id="contentGlobalToggle" hideToggle>
          <div className="space-y-4">
            <h3 className="text-primary text-base font-bold">Logo / identita</h3>

            <Input
              type="text"
              value={other.siteName}
              onChange={e => other.setSiteName(e.target.value)}
              label="Jméno"
              classLabel="!text-black"
            />
            <Input
              type="text"
              value={other.siteNameClaim}
              onChange={e => other.setSiteNameClaim(e.target.value)}
              label="Claim"
              classLabel="!text-black"
            />

            <Dropdown
              label="Logo"
              id="otherLogoToggle"
              checked={other.logoImage}
              onChange={() => other.setLogoImage(!other.logoImage)}
            >
              <div className="grid grid-cols-1 gap-4">
                <UploadComponent
                  imageUrl={other.logoImageUrl}
                  imageWidth={other.logoImageWidth}
                  imageHeight={other.logoImageHeight}
                  setImageUrl={other.setLogoImageUrl}
                  setImageWidth={other.setLogoImageWidth}
                  setImageHeight={other.setLogoImageHeight}
                />

                <h4 className="text-primary text-sm font-semibold">Velikost loga</h4>

                <Slider
                  size="sm"
                  step={1}
                  maxValue={600}
                  minValue={10}
                  aria-label="Velikost loga"
                  value={other.logoImageSize}
                  onChange={value => other.setLogoImageSize(value)}
                  className="max-w-md"
                />
              </div>
            </Dropdown>

            <hr className="border-primary border opacity-10" />

            <Dropdown label="Navigace" id="navigationSettingsToggle" hideToggle>
              <div className="space-y-4">
                {/*//@ts-ignore*/}
                {navigationItems.map((item, index) => (
                  <Dropdown
                    key={index}
                    label={item.title}
                    id={`navigationItemToggle${index}`}
                    checked={visibility[item.visibilityState]}
                    onChange={() =>
                      visibility[
                        `set${
                          item.visibilityState.charAt(0).toUpperCase() +
                          item.visibilityState.slice(1)
                        }`
                      ](!visibility[item.visibilityState])
                    }
                  >
                    <div className="space-y-4">
                      <Input
                        type="text"
                        value={item.title}
                        onChange={e => item.setTitle(e.target.value)}
                        label="Název"
                        classLabel="!text-black"
                      />
                    </div>
                  </Dropdown>
                ))}
              </div>
            </Dropdown>

            <Dropdown label="Sociální sítě" id="socialSitesSettingsToggle" hideToggle>
              <div className="space-y-4">
                {/*//@ts-ignore*/}
                {other.boxesSocialSites.map((box, index) => (
                  <Dropdown
                    key={index}
                    label={`Sociální síť ${index + 1}`}
                    id={`socialSitesBox${index + 1}Toggle`}
                    checked={true}
                    hideToggle
                    onChange={() => {}}
                  >
                    <div className="space-y-4">
                      <Select
                        title="Sociální síť"
                        options={optionsGlobal.socialSites}
                        selectedOption={box.value}
                        onChange={value => {
                          const selectedOption = optionsGlobal.socialSites.find(
                            (option: { value: string }) => option.value === value,
                          )
                          other.handleSocialSiteChange(index, selectedOption)
                        }}
                      />

                      <Input
                        type="text"
                        value={box.href}
                        onChange={e => other.updateBoxSocialSites(index, 'href', e.target.value)}
                        label="Odkaz"
                        classLabel="!text-black"
                      />

                      <button
                        type="button"
                        onClick={() => other.removeBoxSocialSites(index)}
                        className="w-full flex flex-row justify-end items-center text-red-500 text-xs font-bold"
                      >
                        <Icon
                          icon="material-symbols:delete-outline-rounded"
                          className="mr-1 text-base"
                        />
                        Odebrat
                      </button>
                    </div>
                  </Dropdown>
                ))}

                <button
                  type="button"
                  onClick={other.addBoxSocialSites}
                  className="w-full flex flex-row justify-end items-center text-primary text-xs font-bold"
                >
                  <Icon
                    icon="material-symbols:add-circle-outline-rounded"
                    className="mr-1 text-base"
                  />
                  Přidat síť
                </button>
              </div>
            </Dropdown>
          </div>
        </Dropdown>

        {visibility.showHero && (
          <>
            <hr className="border-primary border opacity-10" />

            <Dropdown label="Hero sekce" id="contentHeroToggle" link="#hero" preview hideToggle>
              <div className="space-y-4">
                <Input
                  type="text"
                  value={hero.heroContentTitle}
                  onChange={e => hero.setHeroContentTitle(e.target.value)}
                  label="Hlavní nadpis"
                  classLabel="!text-black"
                />
                <Input
                  type="text"
                  value={hero.heroContentSubtitle}
                  onChange={e => hero.setHeroContentSubtitle(e.target.value)}
                  label="Podnadpis"
                  classLabel="!text-black"
                />
                <Input
                  type="text"
                  value={hero.heroContentLargeTitle}
                  onChange={e => hero.setHeroContentLargeTitle(e.target.value)}
                  label="Velký text"
                  withLimit
                  maxLength={9}
                  minLength={4}
                  classLabel="!text-black"
                />

                {!['05'].includes(hero.heroVariant) && (
                  <>
                    <h4 className="text-sm font-semibold">Profilová fotografie</h4>
                    <UploadComponent
                      imageUrl={hero.imageMainUrl}
                      imageWidth={hero.imageMainWidth}
                      imageHeight={hero.imageMainHeight}
                      setImageUrl={hero.setImageMainUrl}
                      setImageWidth={hero.setImageMainWidth}
                      setImageHeight={hero.setImageMainHeight}
                    />
                  </>
                )}

                {['04', '05'].includes(hero.heroVariant) && (
                  <>
                    <h4 className="text-sm font-semibold">Pozadí</h4>
                    <UploadComponent
                      imageUrl={hero.imageBackgroundUrl}
                      imageWidth={hero.imageBackgroundWidth}
                      imageHeight={hero.imageBackgroundHeight}
                      setImageUrl={hero.setImageBackgroundUrl}
                      setImageWidth={hero.setImageBackgroundWidth}
                      setImageHeight={hero.setImageBackgroundHeight}
                    />
                  </>
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
                  <div className="grid grid-cols-1 gap-4">
                    <Input
                      type="text"
                      value={hero.heroContentButtonPrimaryText}
                      onChange={e => hero.setHeroContentButtonPrimaryText(e.target.value)}
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
                        onChange={e => hero.setHeroContentButtonPrimaryCustomLink(e.target.value)}
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
                  <div className="grid grid-cols-1 gap-4">
                    <Input
                      type="text"
                      value={hero.heroContentButtonSecondaryText}
                      onChange={e => hero.setHeroContentButtonSecondaryText(e.target.value)}
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
                        onChange={e => hero.setHeroContentButtonSecondaryCustomLink(e.target.value)}
                        label="Vlastní odkaz"
                        classLabel="!text-black"
                      />
                    )}
                  </div>
                </Dropdown>
              </div>
            </Dropdown>
          </>
        )}

        {visibility.showAbout && (
          <>
            <hr className="border-primary border opacity-10" />
            <Dropdown label="O nás" id="contentAboutToggle" link="#about" preview hideToggle>
              <div className="space-y-4">
                <Input
                  type="text"
                  value={about.aboutContentTitle}
                  onChange={e => about.setAboutContentTitle(e.target.value)}
                  label="Hlavní nadpis"
                  classLabel="!text-black"
                />

                <Textarea
                  type="text"
                  value={about.aboutContentDescription}
                  onChange={handleAboutDescriptionChange}
                  label="Popisek"
                  classLabel="!text-black"
                  useWysiwyg
                />

                <Dropdown
                  label="Zobrazit tlačítko"
                  id="aboutButtonToggle"
                  checked={visibility.showAboutContentButton}
                  onChange={() =>
                    visibility.setShowAboutContentButton(!visibility.showAboutContentButton)
                  }
                >
                  <div className="grid grid-cols-1 gap-4">
                    <Input
                      type="text"
                      value={about.aboutContentButtonTitle}
                      onChange={e => about.setAboutContentButtonTitle(e.target.value)}
                      label="Text tlačítka"
                      classLabel="!text-black"
                    />

                    <Select
                      title="Odkaz tlačítka"
                      options={optionsAboutContent.buttonLink}
                      selectedOption={about.aboutContentButtonLink}
                      onChange={about.setAboutContentButtonLink}
                    />

                    {about.aboutContentButtonLink === null && (
                      <Input
                        type="text"
                        value={about.aboutContentButtonCustomLink}
                        onChange={e => about.setAboutContentButtonCustomLink(e.target.value)}
                        label="Vlastní odkaz"
                        classLabel="!text-black"
                      />
                    )}
                  </div>
                </Dropdown>

                {/*//@ts-ignore*/}
                {about.boxesAbout.map((box, index) => (
                  <Dropdown
                    key={index}
                    label={`Box ${index + 1}`}
                    id={`contentAboutBox${index + 1}Toggle`}
                    checked={true} // Add any condition if necessary
                    onChange={() => {}} // Add any action if necessary
                  >
                    <div className="space-y-4">
                      <Input
                        type="text"
                        value={box.title}
                        onChange={e => about.updateBoxAbout(index, 'title', e.target.value)}
                        label="Nadpis"
                        classLabel="!text-black"
                      />

                      <Textarea
                        type="text"
                        value={box.description}
                        onChange={value => handleBoxDescriptionChange(index, value)}
                        label="Popisek"
                        classLabel="!text-black"
                        useWysiwyg
                      />

                      <button
                        type="button"
                        onClick={() => about.removeBoxAbout(index)}
                        className="w-full flex flex-row justify-end items-center text-red-500 text-xs font-bold"
                      >
                        <Icon
                          icon="material-symbols:delete-outline-rounded"
                          className="mr-1 text-base"
                        ></Icon>
                        Odebrat
                      </button>
                    </div>
                  </Dropdown>
                ))}

                <button
                  type="button"
                  onClick={about.addBoxAbout}
                  className="w-full flex flex-row justify-end items-center text-primary text-xs font-bold"
                >
                  <Icon
                    icon="material-symbols:add-circle-outline-rounded"
                    className="mr-1 text-base"
                  ></Icon>
                  Přidat box
                </button>
              </div>
            </Dropdown>
          </>
        )}

        {visibility.showServices && (
          <>
            <hr className="border-primary border opacity-10" />

            <Dropdown label="Služby" id="contentServicesToggle" link="#services" preview hideToggle>
              <div className="space-y-4">
                <Input
                  type="text"
                  value={service.servicesContentTitle}
                  onChange={e => service.setServicesContentTitle(e.target.value)}
                  label="Hlavní nadpis"
                  classLabel="!text-black"
                />

                {/*//@ts-ignore*/}
                {service.boxesService.map((box, index) => (
                  <Dropdown
                    key={index}
                    label={`Služba ${index + 1}`}
                    id={`contentServicesBox${index + 1}Toggle`}
                    checked={box.iconShow}
                    onChange={() => service.updateBox(index, 'iconShow', !box.iconShow)}
                  >
                    <div className="space-y-4">
                      <Input
                        type="text"
                        value={box.title}
                        onChange={e => service.updateBoxService(index, 'title', e.target.value)}
                        label="Nadpis"
                        classLabel="!text-black"
                      />

                      <Textarea
                        type="text"
                        value={box.content}
                        onChange={value => handleBoxServiceContentChange(index, value)}
                        label="Popisek"
                        classLabel="!text-black"
                        useWysiwyg
                      />

                      <Dropdown
                        label="Chci zobrazit ikonku"
                        id={`contentServicesIcon${index + 1}Toggle`}
                        checked={box.iconShow}
                        onChange={() => service.updateBoxService(index, 'iconShow', !box.iconShow)}
                      >
                        <div className="space-y-4">
                          <Input
                            type="text"
                            value={box.icon}
                            onChange={e => service.updateBoxService(index, 'icon', e.target.value)}
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
                            . Stačí zkopírovat její název a vložit sem.
                          </p>
                        </div>
                      </Dropdown>

                      <button
                        type="button"
                        onClick={() => service.removeBoxService(index)}
                        className="w-full flex flex-row justify-end items-center text-red-500 text-xs font-bold"
                      >
                        <Icon
                          icon="material-symbols:delete-outline-rounded"
                          className="mr-1 text-base"
                        ></Icon>
                        Odebrat
                      </button>
                    </div>
                  </Dropdown>
                ))}

                <button
                  type="button"
                  onClick={service.addBoxService}
                  className="w-full flex flex-row justify-end items-center text-primary text-xs font-bold"
                >
                  <Icon
                    icon="material-symbols:add-circle-outline-rounded"
                    className="mr-1 text-base"
                  ></Icon>
                  Přidat službu
                </button>

                {['03'].includes(service.serviceVariant) && (
                  <>
                    <hr className="border-primary opacity-10" />

                    <Dropdown
                      label="Speciální box"
                      id="contentServicesBoxSpecialToggle"
                      checked={service.servicesContentBoxSpecial}
                      onChange={() =>
                        service.setServicesContentBoxSpecial(!service.servicesContentBoxSpecial)
                      }
                    >
                      <div className="space-y-4">
                        <Input
                          type="text"
                          value={service.servicesContentBoxSpecialTitle}
                          onChange={e => service.setServicesContentBoxSpecialTitle(e.target.value)}
                          label="Nadpis"
                          classLabel="!text-black"
                        />
                        <Select
                          title="Odkaz tlačítka"
                          options={optionsHeroContent.buttonLink}
                          selectedOption={service.servicesContentBoxSpecialLink}
                          onChange={service.setServicesContentBoxSpecialLink}
                        />
                        {service.servicesContentBoxSpecialLink === null && (
                          <Input
                            type="text"
                            value={service.servicesContentBoxSpecialCustomLink}
                            onChange={e =>
                              service.setServicesContentBoxSpecialCustomLink(e.target.value)
                            }
                            label="Vlastní odkaz"
                            classLabel="!text-black"
                          />
                        )}
                      </div>
                    </Dropdown>
                  </>
                )}
              </div>
            </Dropdown>
          </>
        )}

        {visibility.showReference && (
          <>
            <hr className="border-primary border opacity-10" />

            <Dropdown
              label="Reference"
              id="contentReferenceToggle"
              link="#reference"
              preview
              hideToggle
            >
              <div className="space-y-4">
                {!['04'].includes(reference.referenceVariant) ? (
                  <Input
                    type="text"
                    value={reference.referenceContentTitle}
                    onChange={e => reference.setReferenceContentTitle(e.target.value)}
                    label="Hlavní nadpis"
                    withLimit
                    maxLength={9}
                    minLength={4}
                    classLabel="!text-black"
                  />
                ) : (
                  <Input
                    type="text"
                    value={reference.referenceContentTitle}
                    onChange={e => reference.setReferenceContentTitle(e.target.value)}
                    label="Hlavní nadpis"
                    classLabel="!text-black"
                  />
                )}

                {/*//@ts-ignore*/}
                {reference.boxesReference.map((box, index) => (
                  <Dropdown
                    key={index}
                    label={`Reference ${index + 1}`}
                    id={`contentReferenceBox${index + 1}Toggle`}
                    checked={true} // Add any condition if necessary
                    onChange={() => {}} // Add any action if necessary
                  >
                    <div className="space-y-4">
                      <Input
                        type="text"
                        value={box.title}
                        onChange={e => reference.updateBoxReference(index, 'title', e.target.value)}
                        label="Nadpis"
                        classLabel="!text-black"
                      />

                      <Textarea
                        type="text"
                        value={box.description}
                        onChange={value => handleBoxReferenceDescriptionChange(index, value)}
                        label="Popisek"
                        classLabel="!text-black"
                        useWysiwyg
                      />

                      <button
                        type="button"
                        onClick={() => reference.removeBoxReference(index)}
                        className="w-full flex flex-row justify-end items-center text-red-500 text-xs font-bold"
                      >
                        <Icon
                          icon="material-symbols:delete-outline-rounded"
                          className="mr-1 text-base"
                        ></Icon>
                        Odebrat
                      </button>
                    </div>
                  </Dropdown>
                ))}

                <button
                  type="button"
                  onClick={reference.addBoxReference}
                  className="w-full flex flex-row justify-end items-center text-primary text-xs font-bold"
                >
                  <Icon
                    icon="material-symbols:add-circle-outline-rounded"
                    className="mr-1 text-base"
                  ></Icon>
                  Přidat referenci
                </button>
              </div>
            </Dropdown>
          </>
        )}

        {visibility.showContact && (
          <>
            <hr className="border-primary border opacity-10" />

            <Dropdown label="Kontakt" id="contentContactToggle" link="#contact" preview hideToggle>
              <div className="space-y-4">
                <Input
                  type="text"
                  value={contact.contactContentTitle}
                  onChange={e => contact.setContactContentTitle(e.target.value)}
                  label="Hlavní nadpis"
                  classLabel="!text-black"
                />

                <Input
                  type="text"
                  value={contact.contactContentSubtitle}
                  onChange={e => contact.setContactContentSubtitle(e.target.value)}
                  label="Podnadpis"
                  classLabel="!text-black"
                />

                <h3 className="text-primary text-base font-bold pt-4">Kontaktní informace</h3>

                <Input
                  type="text"
                  value={contact.contactContentInfoEmail}
                  onChange={e => contact.setContactContentInfoEmail(e.target.value)}
                  label="Emailová adresa"
                  classLabel="!text-black"
                />

                <Input
                  type="text"
                  value={contact.contactContentInfoPhone}
                  onChange={e => contact.setContactContentInfoPhone(e.target.value)}
                  label="Telefonní číslo"
                  classLabel="!text-black"
                />

                <Input
                  type="text"
                  value={contact.contactContentInfoAddress}
                  onChange={e => contact.setContactContentInfoAddress(e.target.value)}
                  label="Adresa"
                  classLabel="!text-black"
                />
              </div>
            </Dropdown>
          </>
        )}
      </div>
    </ModalView>
  )
}
