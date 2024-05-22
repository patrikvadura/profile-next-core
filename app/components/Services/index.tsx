import React from 'react'
import dynamic from 'next/dynamic'
import colors from '@/app/lib/colors.json'
import { ServiceProps } from '@/app/lib/variants'
import ColorUpdaterService from '@/app/components/Customizer/ColorUpdater/Service'

const variantComponents = {
  '01': dynamic(() =>
    import('@/app/components/Services/Variant01').then(mod => mod.ServicesVariant01),
  ),
  '02': dynamic(() =>
    import('@/app/components/Services/Variant02').then(mod => mod.ServicesVariant02),
  ),
}

export function Services({
  variant = '01',
  layout = 'background',
  align = 'left',
  radius = 'asc',
  backgroundColor = colors.service.background,
  accentBgColor = colors.service.accent.background,
  accentFgColor = colors.service.accent.foreground,
  typoColor = colors.service.typo,
  boxBackgroundColor = colors.service.box.background,
  boxTypoColor = colors.service.box.typo,
  boxIconColor = colors.service.box.icon,
  preview,
}: ServiceProps) {
  // @ts-ignore
  const VariantComponent = variantComponents[variant]

  return (
    <>
      <ColorUpdaterService
        backgroundColor={backgroundColor}
        accentBgColor={accentBgColor}
        accentFgColor={accentFgColor}
        typoColor={typoColor}
        boxBackgroundColor={boxBackgroundColor}
        boxTypoColor={boxTypoColor}
        boxIconColor={boxIconColor}
      />
      <VariantComponent layout={layout} align={align} radius={radius} preview={preview} />
    </>
  )
}
