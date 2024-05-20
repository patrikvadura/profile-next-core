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
  }
}
