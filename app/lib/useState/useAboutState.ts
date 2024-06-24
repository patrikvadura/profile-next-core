'use client'
import { useState } from 'react'
import colors from '@/app/lib/colors.json'

interface AboutState {
  aboutVariant: string | undefined | any
  setAboutVariant: (value: string) => void
  aboutLayout: string | undefined | any
  setAboutLayout: (value: string) => void
  aboutAlign: string | undefined | any
  setAboutAlign: (value: string) => void
  aboutOrder: string | undefined | any
  setAboutOrder: (value: string) => void
  aboutBackground: string | undefined | any
  setAboutBackground: (value: string) => void
  aboutAccentBg: string | undefined | any
  setAboutAccentBg: (value: string) => void
  aboutAccentFg: string | undefined | any
  setAboutAccentFg: (value: string) => void
  aboutTypo: string | undefined | any
  setAboutTypo: (value: string) => void
  aboutContentTitle: string | undefined | any
  setAboutContentTitle: (value: string) => void
  aboutContentDescription: string | undefined | any
  setAboutContentDescription: (value: string) => void
  aboutContentButtonTitle: string | undefined | any
  setAboutContentButtonTitle: (value: string) => void
  aboutContentButtonLink: string | undefined | any
  setAboutContentButtonLink: (value: React.SetStateAction<string>) => void
  aboutContentButtonCustomLink: string | undefined | any
  setAboutContentButtonCustomLink: (value: React.SetStateAction<string>) => void
}

export const useAboutState = (): AboutState => {
  const [aboutVariant, setAboutVariant] = useState<string>('01')
  const [aboutLayout, setAboutLayout] = useState<string>('transparent')
  const [aboutAlign, setAboutAlign] = useState<string>('left')
  const [aboutOrder, setAboutOrder] = useState<string>('asc')
  const [aboutBackground, setAboutBackground] = useState<string | undefined>(
    colors.about.background,
  )
  const [aboutAccentBg, setAboutAccentBg] = useState<string | undefined>(
    colors.about.accent.background,
  )
  const [aboutAccentFg, setAboutAccentFg] = useState<string | undefined>(
    colors.about.accent.foreground,
  )
  const [aboutTypo, setAboutTypo] = useState<string | undefined>(colors.about.typo)

  // Content
  const [aboutContentTitle, setAboutContentTitle] = useState<string>(
    'Pomůžu zajistit vaši budoucnost a cíle',
  )
  const [aboutContentDescription, setAboutContentDescription] = useState<string>(
    'Již více než 10 let pomáhám klientům v řešení finančního zázemí, zajištění příjmu v případě nemoci / úrazu a dále v přípravě na jejich budoucnost a cíle. Spolupráci si zakládám na fér jednání, zodpovědném přístupu a na kvalitě předávaných informací. Věřím, že jen poctivě odvedená práce může naši spolupráci posunout dále. Pokud právě tyto hodnoty ve financích hledáte, už víte, na koho se obrátit.',
  )
  const [aboutContentButtonTitle, setAboutContentButtonTitle] =
    useState<string>('Nezávazná konzultace')
  const [aboutContentButtonLink, setAboutContentButtonLink] = useState<string>('#contact')
  const [aboutContentButtonCustomLink, setAboutContentButtonCustomLink] =
    useState<string>('https://vaseadresa.cz')

  return {
    aboutVariant,
    setAboutVariant,
    aboutLayout,
    setAboutLayout,
    aboutAlign,
    setAboutAlign,
    aboutOrder,
    setAboutOrder,
    aboutBackground,
    setAboutBackground,
    aboutAccentBg,
    setAboutAccentBg,
    aboutAccentFg,
    setAboutAccentFg,
    aboutTypo,
    setAboutTypo,
    aboutContentTitle,
    setAboutContentTitle,
    aboutContentDescription,
    setAboutContentDescription,
    aboutContentButtonTitle,
    setAboutContentButtonTitle,
    aboutContentButtonLink,
    setAboutContentButtonLink,
    aboutContentButtonCustomLink,
    setAboutContentButtonCustomLink,
  }
}
