import React from 'react'
import Dropdown from '@/app/components/Customizer/Dropdown'
import { Input } from '@/app/ui/Input'
import { Textarea } from '@/app/ui/Textarea'
import Select from '@/app/ui/Select'
import Link from 'next/link'
import UploadComponent from '@/app/components/Customizer/UploadComponent'
import ModalView from '@/app/components/Customizer/ModalView'

interface Props {
  isModalVisible: boolean
  toggleModalVisibility: () => void
  other: any
  visibility: any
  hero: any
  service: any
  optionsHeroContent: any
}

export default function SettingsContent({
  isModalVisible,
  toggleModalVisibility,
  visibility,
  hero,
  service,
  optionsHeroContent,
}: Props) {
  return (
    <ModalView title="Obsah" isVisible={isModalVisible} toggleVisibility={toggleModalVisibility}>
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
                <div className="grid grid-cols-2 gap-4">
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
                onChange={e => service.setServicesContentTitle(e.target.value)}
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
                    onChange={e => service.setServicesContentBox1Title(e.target.value)}
                    label="Nadpis"
                    classLabel="!text-black"
                  />

                  <Textarea
                    type="text"
                    value={service.servicesContentBox1Content}
                    onChange={e => service.setServicesContentBox1Content(e.target.value)}
                    label="Popisek"
                    classLabel="!text-black"
                  />

                  <Dropdown
                    label="Chci zobrazit ikonku"
                    id="contentServicesIcon1Toggle"
                    checked={service.servicesContentBox1IconShow}
                    onChange={() =>
                      service.setServicesContentBox1IconShow(!service.servicesContentBox1IconShow)
                    }
                  >
                    <div className="space-y-4">
                      <Input
                        type="text"
                        value={service.servicesContentBox1Icon}
                        onChange={e => service.setServicesContentBox1Icon(e.target.value)}
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
                    onChange={e => service.setServicesContentBox2Title(e.target.value)}
                    label="Nadpis"
                    classLabel="!text-black"
                  />

                  <Textarea
                    type="text"
                    value={service.servicesContentBox2Content}
                    onChange={e => service.setServicesContentBox2Content(e.target.value)}
                    label="Popisek"
                    classLabel="!text-black"
                  />

                  <Dropdown
                    label="Chci zobrazit ikonku"
                    id="contentServicesIcon2Toggle"
                    checked={service.servicesContentBox2IconShow}
                    onChange={() =>
                      service.setServicesContentBox2IconShow(!service.servicesContentBox2IconShow)
                    }
                  >
                    <div className="space-y-4">
                      <Input
                        type="text"
                        value={service.servicesContentBox1Icon}
                        onChange={e => service.setServicesContentBox1Icon(e.target.value)}
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
                    onChange={e => service.setServicesContentBox3Title(e.target.value)}
                    label="Nadpis"
                    classLabel="!text-black"
                  />

                  <Textarea
                    type="text"
                    value={service.servicesContentBox3Content}
                    onChange={e => service.setServicesContentBox3Content(e.target.value)}
                    label="Popisek"
                    classLabel="!text-black"
                  />

                  <Dropdown
                    label="Chci zobrazit ikonku"
                    id="contentServicesIcon3Toggle"
                    checked={service.servicesContentBox3IconShow}
                    onChange={() =>
                      service.setServicesContentBox3IconShow(!service.servicesContentBox3IconShow)
                    }
                  >
                    <div className="space-y-4">
                      <Input
                        type="text"
                        value={service.servicesContentBox3Icon}
                        onChange={e => service.setServicesContentBox3Icon(e.target.value)}
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

              {['03'].includes(service.serviceVariant) && (
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
              )}
            </div>
          </Dropdown>
        )}
      </div>
    </ModalView>
  )
}
