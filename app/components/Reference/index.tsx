import React from 'react'
import dynamic from 'next/dynamic'
import colors from '@/app/lib/colors.json'
import { ReferenceProps } from '@/app/lib/variants'
import ColorUpdaterService from '@/app/components/Customizer/ColorUpdater/Reference'

const variantComponents = {
  '01': dynamic(() =>
    import('@/app/components/Reference/Variant01').then(mod => mod.ReferenceVariant01),
  ),
}

export function Reference({
  variant = '01',
  layout = 'background',
  align = 'left',
  backgroundColor = colors.service.background,
  accentBgColor = colors.service.accent.background,
  typoColor = colors.service.typo,
  typoLgColor = colors.reference.typoLg,
  preview,
}: ReferenceProps) {
  // @ts-ignore
  const VariantComponent = variantComponents[variant]

  return (
    <>
      <ColorUpdaterService
        backgroundColor={backgroundColor}
        accentBgColor={accentBgColor}
        typoColor={typoColor}
        typoLgColor={typoLgColor}
      />
      <VariantComponent layout={layout} align={align} preview={preview} />
    </>
  )
}
