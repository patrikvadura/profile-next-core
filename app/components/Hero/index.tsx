import React from 'react'
import dynamic from 'next/dynamic'
import colors from '@/app/lib/colors.json'
import { HeroProps } from '@/app/lib/variants'
import ColorUpdaterHero from '@/app/components/Customizer/ColorUpdater/Hero'

const variantComponents = {
  '01': dynamic(() => import('@/app/components/Hero/Variant01').then(mod => mod.HeroVariant01)),
  '02': dynamic(() => import('@/app/components/Hero/Variant02').then(mod => mod.HeroVariant02)),
  '03': dynamic(() => import('@/app/components/Hero/Variant03').then(mod => mod.HeroVariant03)),
}

export function Hero({
  variant = '01',
  imageOpacity = '80',
  align = 'center',
  backgroundColor = colors.hero.background,
  accentBgColor = colors.hero.accent.background,
  accentFgColor = colors.hero.accent.foreground,
  typoColor = colors.hero.typo,
  typoLgColor = colors.hero.typoLg,
  preview,
}: HeroProps) {
  // @ts-ignore
  const VariantComponent = variantComponents[variant]

  return (
    <>
      <ColorUpdaterHero
        backgroundColor={backgroundColor}
        accentBgColor={accentBgColor}
        accentFgColor={accentFgColor}
        typoColor={typoColor}
        typoLgColor={typoLgColor}
      />
      <VariantComponent imageOpacity={imageOpacity} align={align} preview={preview} />
    </>
  )
}
