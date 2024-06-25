'use client'
import { useState } from 'react'
import colors from '@/app/lib/colors.json'

interface BoxAbout {
  title: string
  description: string
}

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
  boxesAbout: BoxAbout[]
  addBoxAbout: () => void
  removeBoxAbout: (index: number) => void
  updateBoxAbout: (index: number, key: string, value: string) => void
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
    'Vytvoření webové vizitky nikdy nebylo jednodušší',
  )
  const [aboutContentDescription, setAboutContentDescription] = useState<string>(
    'Pomocí našeho VisoSnap Studia si můžete sami snadno a rychle nakonfigurovat svoji vlastní webovou vizitku, stránku pro prezentaci eventu, svatební pozvánku či jakýkoliv jiný jednoduchý web. Vytvoření je snadné a zvládne to úplně každý. Nejedná se o tradiční lety přežité vizitky, ale o moderní a nekompromisně rychlé řešení využívající nejnovějších trendů a moderních technologií.',
  )
  const [aboutContentButtonTitle, setAboutContentButtonTitle] =
    useState<string>('Nezávazná konzultace')
  const [aboutContentButtonLink, setAboutContentButtonLink] = useState<string>('#contact')
  const [aboutContentButtonCustomLink, setAboutContentButtonCustomLink] =
    useState<string>('https://vaseadresa.cz')

  // Boxes
  const [boxesAbout, setBoxesAbout] = useState<BoxAbout[]>([
    {
      title: 'Rychlost',
      description: 'Vysoce optimalizovaný s výsledky PageInsight testů 99%',
    },
    {
      title: 'Vlastní rozvržení',
      description: 'Svoji vizitku si můžete přizpůsobit svému vlastnímu stylu.',
    },
    {
      title: 'Bezpečnost',
      description: 'Špičkové moderní technologie a zabezpečení s vlastním SSL certifikátem.',
    },
  ])

  const addBoxAbout = () => {
    setBoxesAbout([...boxesAbout, { title: '', description: '' }])
  }

  const removeBoxAbout = (index: number) => {
    setBoxesAbout(boxesAbout.filter((_, i) => i !== index))
  }

  const updateBoxAbout = (index: number, key: string, value: string) => {
    setBoxesAbout(boxesAbout.map((box, i) => (i === index ? { ...box, [key]: value } : box)))
  }

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
    boxesAbout,
    addBoxAbout,
    removeBoxAbout,
    updateBoxAbout,
  }
}
