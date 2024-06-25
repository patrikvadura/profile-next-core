'use client'
import React from 'react'
import dynamic from 'next/dynamic'
import colors from '@/app/lib/colors.json'
import { ContactProps } from '@/app/lib/variants'
import ColorUpdaterContact from '@/app/components/Customizer/ColorUpdater/Contact'

const variantComponents = {
  '01': dynamic(() =>
    import('@/app/components/Contact/Variant01').then(mod => mod.ContactVariant01),
  ),
  '02': dynamic(() =>
    import('@/app/components/Contact/Variant02').then(mod => mod.ContactVariant02),
  ),
  '03': dynamic(() =>
    import('@/app/components/Contact/Variant03').then(mod => mod.ContactVariant03),
  ),
  '04': dynamic(() =>
    import('@/app/components/Contact/Variant04').then(mod => mod.ContactVariant04),
  ),
}

export function Contact({
  variant = '01',
  layout = 'transparent',
  align = 'left',
  order = 'asc',
  backgroundColor = colors.about.background,
  accentBgColor = colors.about.accent.background,
  accentFgColor = colors.about.accent.foreground,
  typoColor = colors.about.typo,
  contactForm,
  contactMap,
  contactRecipient,
  contactMapAddress,
  contactContentTitle,
  contactContentSubtitle,
  contactContentInfoEmail,
  contactContentInfoPhone,
  contactContentInfoAddress,
  breakpoint,
  preview,
}: ContactProps) {
  // @ts-ignore
  const VariantComponent = variantComponents[variant]

  return (
    <>
      <ColorUpdaterContact
        backgroundColor={backgroundColor}
        accentBgColor={accentBgColor}
        accentFgColor={accentFgColor}
        typoColor={typoColor}
      />
      <VariantComponent
        layout={layout}
        align={align}
        order={order}
        contactForm={contactForm}
        contactMap={contactMap}
        contactRecipient={contactRecipient}
        contactMapAddress={contactMapAddress}
        contactContentTitle={contactContentTitle}
        contactContentSubtitle={contactContentSubtitle}
        contactContentInfoEmail={contactContentInfoEmail}
        contactContentInfoPhone={contactContentInfoPhone}
        contactContentInfoAddress={contactContentInfoAddress}
        breakpoint={breakpoint}
        preview={preview}
      />
    </>
  )
}
