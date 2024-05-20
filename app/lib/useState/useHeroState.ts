'use client'
import { useState } from 'react'
import colors from '@/app/lib/colors.json'

interface HeroState {
  heroVariant: string | undefined | any
  setHeroVariant: (value: string) => void
  heroImageOpacity: string | undefined | any
  setHeroImageOpacity: (value: string) => void
  heroAlign: string | undefined | any
  setHeroAlign: (value: string) => void
  heroBackground: string | undefined | any
  setHeroBackground: (value: string) => void
  heroAccentBg: string | undefined | any
  setHeroAccentBg: (value: string) => void
  heroAccentFg: string | undefined | any
  setHeroAccentFg: (value: string) => void
  heroTypo: string | undefined | any
  setHeroTypo: (value: string) => void
  heroTypoLg: string | undefined | any
  setHeroTypoLg: (value: string) => void
}

export const useHeroState = (): HeroState => {
  const [heroVariant, setHeroVariant] = useState<string>('01')
  const [heroImageOpacity, setHeroImageOpacity] = useState<string>('30')
  const [heroAlign, setHeroAlign] = useState<string>('center')
  const [heroBackground, setHeroBackground] = useState<string | undefined>(colors.hero.background)
  const [heroAccentBg, setHeroAccentBg] = useState<string | undefined>(
    colors.hero.accent.background,
  )
  const [heroAccentFg, setHeroAccentFg] = useState<string | undefined>(
    colors.hero.accent.foreground,
  )
  const [heroTypo, setHeroTypo] = useState<string | undefined>(colors.hero.typo)
  const [heroTypoLg, setHeroTypoLg] = useState<string | undefined>(colors.hero.typoLg)

  return {
    heroVariant,
    setHeroVariant,
    heroImageOpacity,
    setHeroImageOpacity,
    heroAlign,
    setHeroAlign,
    heroBackground,
    setHeroBackground,
    heroAccentBg,
    setHeroAccentBg,
    heroAccentFg,
    setHeroAccentFg,
    heroTypo,
    setHeroTypo,
    heroTypoLg,
    setHeroTypoLg,
  }
}
