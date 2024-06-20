import React from 'react'
import dynamic from 'next/dynamic'
import colors from '@/app/lib/colors.json'
import { ReferenceProps } from '@/app/lib/variants'
import ColorUpdaterService from '@/app/components/Customizer/ColorUpdater/Reference'

const variantComponents = {
  '01': dynamic(() =>
    import('@/app/components/Reference/Variant01').then(mod => mod.ReferenceVariant01),
  ),
  '02': dynamic(() =>
    import('@/app/components/Reference/Variant02').then(mod => mod.ReferenceVariant02),
  ),
  '03': dynamic(() =>
    import('@/app/components/Reference/Variant03').then(mod => mod.ReferenceVariant03),
  ),
  '04': dynamic(() =>
    import('@/app/components/Reference/Variant04').then(mod => mod.ReferenceVariant04),
  ),
}

export function Reference({
  variant = '01',
  layout = 'background',
  align = 'left',
  backgroundColor = colors.reference.background,
  accentBgColor = colors.reference.accent.background,
  typoColor = colors.reference.typo,
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
