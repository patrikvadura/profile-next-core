'use client'
import { useState } from 'react'
import colors from '@/app/lib/colors.json'

interface HeroState {
  heroVariant: string | undefined
  setHeroVariant: (value: string) => void
  heroImageOpacity: string | undefined
  setHeroImageOpacity: (value: string) => void
  heroAlign: string | undefined
  setHeroAlign: (value: string) => void
  heroBackground: string | undefined
  setHeroBackground: (value: string | undefined) => void
  heroAccentBg: string | undefined
  setHeroAccentBg: (value: string | undefined) => void
  heroAccentFg: string | undefined
  setHeroAccentFg: (value: string | undefined) => void
  heroTypo: string | undefined
  setHeroTypo: (value: string | undefined) => void
  heroTypoLg: string | undefined
  setHeroTypoLg: (value: string | undefined) => void
  heroContentTitle: string
  setHeroContentTitle: (value: React.SetStateAction<string>) => void
  heroContentSubtitle: string
  setHeroContentSubtitle: (value: React.SetStateAction<string>) => void
  heroContentLargeTitle: string
  setHeroContentLargeTitle: (value: React.SetStateAction<string>) => void
  heroContentButtonPrimaryText: string
  setHeroContentButtonPrimaryText: (value: React.SetStateAction<string>) => void
  heroContentButtonPrimaryLink: string
  setHeroContentButtonPrimaryLink: (value: React.SetStateAction<string>) => void
  heroContentButtonPrimaryCustomLink: string
  setHeroContentButtonPrimaryCustomLink: (value: React.SetStateAction<string>) => void
  heroContentButtonSecondaryText: string
  setHeroContentButtonSecondaryText: (value: React.SetStateAction<string>) => void
  heroContentButtonSecondaryLink: string
  setHeroContentButtonSecondaryLink: (value: React.SetStateAction<string>) => void
  heroContentButtonSecondaryCustomLink: string
  setHeroContentButtonSecondaryCustomLink: (value: React.SetStateAction<string>) => void
  imageMainUrl: string | undefined
  setImageMainUrl: (value: React.SetStateAction<string | undefined>) => void
  imageMainHeight: number | undefined
  setImageMainHeight: (value: React.SetStateAction<number | undefined>) => void
  imageMainWidth: number | undefined
  setImageMainWidth: (value: React.SetStateAction<number | undefined>) => void
  imageBackgroundUrl: string | undefined
  setImageBackgroundUrl: (value: React.SetStateAction<string | undefined>) => void
  imageBackgroundHeight: number | undefined
  setImageBackgroundHeight: (value: React.SetStateAction<number | undefined>) => void
  imageBackgroundWidth: number | undefined
  setImageBackgroundWidth: (value: React.SetStateAction<number | undefined>) => void
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

  // Content
  const [heroContentTitle, setHeroContentTitle] = useState<string>(
    'Pomůžu vám vytvořit vysněnou vizitku',
  )
  const [heroContentSubtitle, setHeroContentSubtitle] = useState<string>(
    'Specialista na webové vizitky',
  )
  const [heroContentLargeTitle, setHeroContentLargeTitle] = useState<string>('Webovky')
  const [heroContentButtonPrimaryText, setHeroContentButtonPrimaryText] =
    useState<string>('Nezávazná konzultace')
  const [heroContentButtonPrimaryLink, setHeroContentButtonPrimaryLink] =
    useState<string>('#contact')
  const [heroContentButtonPrimaryCustomLink, setHeroContentButtonPrimaryCustomLink] =
    useState<string>('https://vaseadresa.cz')
  const [heroContentButtonSecondaryText, setHeroContentButtonSecondaryText] =
    useState<string>('O mně')
  const [heroContentButtonSecondaryLink, setHeroContentButtonSecondaryLink] =
    useState<string>('#about')
  const [heroContentButtonSecondaryCustomLink, setHeroContentButtonSecondaryCustomLink] =
    useState<string>('https://vaseadresa.cz')

  // Image
  const [imageMainUrl, setImageMainUrl] = useState<string | undefined>(
    'https://profile-next-core.s3.eu-north-1.amazonaws.com/next-s3-uploads/default/visiosnap_hero_image_01.webp',
  )
  const [imageMainHeight, setImageMainHeight] = useState<number | undefined>(undefined)
  const [imageMainWidth, setImageMainWidth] = useState<number | undefined>(undefined)

  // Image - background
  const [imageBackgroundUrl, setImageBackgroundUrl] = useState<string | undefined>(
    'https://profile-next-core.s3.eu-north-1.amazonaws.com/next-s3-uploads/default/visiosnap_hero_background_01.webp',
  )
  const [imageBackgroundHeight, setImageBackgroundHeight] = useState<number | undefined>(undefined)
  const [imageBackgroundWidth, setImageBackgroundWidth] = useState<number | undefined>(undefined)

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
    heroContentTitle,
    setHeroContentTitle,
    heroContentSubtitle,
    setHeroContentSubtitle,
    heroContentLargeTitle,
    setHeroContentLargeTitle,
    heroContentButtonPrimaryText,
    setHeroContentButtonPrimaryText,
    heroContentButtonPrimaryLink,
    setHeroContentButtonPrimaryLink,
    heroContentButtonPrimaryCustomLink,
    setHeroContentButtonPrimaryCustomLink,
    heroContentButtonSecondaryText,
    setHeroContentButtonSecondaryText,
    heroContentButtonSecondaryLink,
    setHeroContentButtonSecondaryLink,
    heroContentButtonSecondaryCustomLink,
    setHeroContentButtonSecondaryCustomLink,
    imageMainUrl,
    setImageMainUrl,
    imageMainHeight,
    setImageMainHeight,
    imageMainWidth,
    setImageMainWidth,
    imageBackgroundUrl,
    setImageBackgroundUrl,
    imageBackgroundHeight,
    setImageBackgroundHeight,
    imageBackgroundWidth,
    setImageBackgroundWidth,
  }
}
