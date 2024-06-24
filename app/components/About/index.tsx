import React from 'react'
import dynamic from 'next/dynamic'
import colors from '@/app/lib/colors.json'
import { AboutProps } from '@/app/lib/variants'
import ColorUpdaterAbout from '@/app/components/Customizer/ColorUpdater/About'

const variantComponents = {
  '01': dynamic(() => import('@/app/components/About/Variant01').then(mod => mod.AboutVariant01)),
  '02': dynamic(() => import('@/app/components/About/Variant02').then(mod => mod.AboutVariant02)),
  '03': dynamic(() => import('@/app/components/About/Variant03').then(mod => mod.AboutVariant03)),
  '04': dynamic(() => import('@/app/components/About/Variant04').then(mod => mod.AboutVariant04)),
  '05': dynamic(() => import('@/app/components/About/Variant05').then(mod => mod.AboutVariant05)),
}

export function About({
  variant = '01',
  layout = 'background',
  align = 'left',
  order = 'asc',
  backgroundColor = colors.about.background,
  accentBgColor = colors.about.accent.background,
  accentFgColor = colors.about.accent.foreground,
  typoColor = colors.about.typo,
  contentTitle,
  contentDescription,
  contentButton,
  contentButtonText,
  contentButtonLink,
  breakpoint,
  preview,
}: AboutProps) {
  // @ts-ignore
  const VariantComponent = variantComponents[variant]

  return (
    <>
      <ColorUpdaterAbout
        backgroundColor={backgroundColor}
        accentBgColor={accentBgColor}
        accentFgColor={accentFgColor}
        typoColor={typoColor}
      />
      <VariantComponent
        layout={layout}
        align={align}
        order={order}
        contentTitle={contentTitle}
        contentDescription={contentDescription}
        contentButton={contentButton}
        contentButtonText={contentButtonText}
        contentButtonLink={contentButtonLink}
        breakpoint={breakpoint}
        preview={preview}
      />
    </>
  )
}
