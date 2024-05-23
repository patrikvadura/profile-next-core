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
  heroContentTitle: string | undefined | any
  setHeroContentTitle: (value: React.SetStateAction<string>) => void
  heroContentSubtitle: string | undefined | any
  setHeroContentSubtitle: (value: React.SetStateAction<string>) => void
  heroContentLargeTitle: string | undefined | any
  setHeroContentLargeTitle: (value: React.SetStateAction<string>) => void
  heroContentButtonPrimaryText: string | undefined | any
  setHeroContentButtonPrimaryText: (value: React.SetStateAction<string>) => void
  heroContentButtonPrimaryLink: string | undefined | any
  setHeroContentButtonPrimaryLink: (value: React.SetStateAction<string>) => void
  heroContentButtonPrimaryCustomLink: string | undefined | any
  setHeroContentButtonPrimaryCustomLink: (value: React.SetStateAction<string>) => void
  heroContentButtonSecondaryText: string | undefined | any
  setHeroContentButtonSecondaryText: (value: React.SetStateAction<string>) => void
  heroContentButtonSecondaryLink: string | undefined | any
  setHeroContentButtonSecondaryLink: (value: React.SetStateAction<string>) => void
  heroContentButtonSecondaryCustomLink: string | undefined | any
  setHeroContentButtonSecondaryCustomLink: (value: React.SetStateAction<string>) => void
  imageMainUrl: string | undefined | any
  setImageMainUrl: (value: React.SetStateAction<string | undefined>) => void
  imageMainAlternativeUrl: string | undefined | any
  setImageMainAlternativeUrl: (value: React.SetStateAction<string | undefined>) => void
  imageMainHeight: number | undefined | any
  setImageMainHeight: (value: React.SetStateAction<number | undefined>) => void
  imageMainWidth: number | undefined | any
  setImageMainWidth: (value: React.SetStateAction<number | undefined>) => void
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
    'Ve financích se na mě můžete spolehnout',
  )
  const [heroContentSubtitle, setHeroContentSubtitle] = useState<string>('Finanční specialista')
  const [heroContentLargeTitle, setHeroContentLargeTitle] = useState<string>('Finance')
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
    'https://profile-next-core.s3.eu-north-1.amazonaws.com/next-s3-uploads/default/profileImage.webp',
  )
  const [imageMainAlternativeUrl, setImageMainAlternativeUrl] = useState<string | undefined>(
    'https://profile-next-core.s3.eu-north-1.amazonaws.com/next-s3-uploads/default/image_without-bg.webp',
  )
  const [imageMainHeight, setImageMainHeight] = useState<number | undefined>(undefined)
  const [imageMainWidth, setImageMainWidth] = useState<number | undefined>(undefined)

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
    imageMainAlternativeUrl,
    setImageMainAlternativeUrl,
    imageMainHeight,
    setImageMainHeight,
    imageMainWidth,
    setImageMainWidth,
  }
}
