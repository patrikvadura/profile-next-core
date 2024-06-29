import React from 'react'
import ModalView from '@/app/components/Customizer/ModalView'
import { Input } from '@/app/ui/Input'
import Dropdown from '@/app/components/Customizer/Dropdown'
import OpenGraphPreview from '@/app/components/Customizer/OpenGraphPreview'
import { useDomain } from '@/app/components/Customizer/DNSChecker/DomainContext'

interface Props {
  isModalVisible: boolean
  toggleModalVisibility: () => void
  other: any
  visibility: any
  hero: any
}

export default function SettingsSettings({
  isModalVisible,
  toggleModalVisibility,
  other,
  visibility,
  hero,
}: Props) {
  const { domain } = useDomain()

  return (
    <ModalView
      title="Nastavení"
      isVisible={isModalVisible}
      toggleVisibility={toggleModalVisibility}
    >
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

        <Dropdown label="SEO meta nastavení" id="metaToggle" hideToggle>
          <div className="flex flex-col justify-start space-y-4">
            <p className="text-black text-sm font-normal opacity-75">
              Meta nastavení slouží pro správnou definici vašich webových stránek ve výsledcích
              vyhledávání.
            </p>

            <Input
              type="text"
              value={other.metaTitle}
              onChange={e => other.setMetaTitle(e.target.value)}
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
              onChange={e => other.setMetaDescription(e.target.value)}
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

              <div className="pt-4">
                <h3 className="font-bold">{other.metaTitle}</h3>
                <p className="text-sm opacity-75">{other.metaDescription}</p>
              </div>
            </div>
          </div>
        </Dropdown>

        <Dropdown label="Custom kód" id="customCodeToggle" hideToggle>
          <div className="flex flex-col justify-start space-y-4">
            <p className="text-black text-sm font-normal opacity-75">
              Vložte svůj vlastní HTML, CSS nebo JavaScript kód do různých částí stránky.
            </p>

            <h3
              dangerouslySetInnerHTML={{ __html: 'Záhlaví "head"' }}
              className="text-primary text-sm font-semibold"
            />

            <textarea
              className="w-full h-32 border rounded p-2"
              value={other.customHeadCode}
              onChange={e => other.setCustomHeadCode(e.target.value)}
            ></textarea>

            <h3
              dangerouslySetInnerHTML={{ __html: 'Začátek tagu "body"' }}
              className="text-primary text-sm font-semibold"
            />

            <textarea
              className="w-full h-32 border rounded p-2"
              value={other.customBodyStartCode}
              onChange={e => other.setCustomBodyStartCode(e.target.value)}
            ></textarea>

            <h3
              dangerouslySetInnerHTML={{ __html: 'Konec tagu "body"' }}
              className="text-primary text-sm font-semibold"
            />

            <textarea
              className="w-full h-32 border rounded p-2"
              value={other.customFooterCode}
              onChange={e => other.setCustomFooterCode(e.target.value)}
            ></textarea>
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
            onChange={e => other.setContactName(e.target.value)}
            label="Jméno a příjmení"
            isRequired
            classLabel="!text-black"
          />

          <Input
            type="text"
            value={other.contactCompany}
            onChange={e => other.setContactCompany(e.target.value)}
            label="Firma"
            classLabel="!text-black"
          />

          <Input
            type="email"
            value={other.contactEmail}
            onChange={e => other.setContactEmail(e.target.value)}
            label="Emailová adresa"
            isRequired
            classLabel="!text-black"
          />

          <Input
            type="phone"
            value={other.contactPhone}
            onChange={e => other.setContactPhone(e.target.value)}
            label="Telefonní číslo"
            isRequired
            classLabel="!text-black"
          />
        </div>
      </div>
    </ModalView>
  )
}
