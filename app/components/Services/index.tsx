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
  '03': dynamic(() =>
    import('@/app/components/Services/Variant03').then(mod => mod.ServicesVariant03),
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
  servicesContentTitle,
  servicesContentBox1,
  servicesContentBox1Title,
  servicesContentBox1Content,
  servicesContentBox1Icon,
  servicesContentBox1IconShow,
  servicesContentBox2,
  servicesContentBox2Title,
  servicesContentBox2Content,
  servicesContentBox2Icon,
  servicesContentBox2IconShow,
  servicesContentBox3,
  servicesContentBox3Title,
  servicesContentBox3Content,
  servicesContentBox3Icon,
  servicesContentBox3IconShow,
  servicesContentBoxSpecial,
  servicesContentBoxSpecialTitle,
  servicesContentBoxSpecialLink,
  breakpoint,
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
      <VariantComponent
        layout={layout}
        align={align}
        radius={radius}
        servicesContentTitle={servicesContentTitle}
        servicesContentBox1={servicesContentBox1}
        servicesContentBox1Title={servicesContentBox1Title}
        servicesContentBox1Content={servicesContentBox1Content}
        servicesContentBox1Icon={servicesContentBox1Icon}
        servicesContentBox1IconShow={servicesContentBox1IconShow}
        servicesContentBox2={servicesContentBox2}
        servicesContentBox2Title={servicesContentBox2Title}
        servicesContentBox2Content={servicesContentBox2Content}
        servicesContentBox2Icon={servicesContentBox2Icon}
        servicesContentBox2IconShow={servicesContentBox2IconShow}
        servicesContentBox3={servicesContentBox3}
        servicesContentBox3Title={servicesContentBox3Title}
        servicesContentBox3Content={servicesContentBox3Content}
        servicesContentBox3Icon={servicesContentBox3Icon}
        servicesContentBox3IconShow={servicesContentBox3IconShow}
        servicesContentBoxSpecial={servicesContentBoxSpecial}
        servicesContentBoxSpecialTitle={servicesContentBoxSpecialTitle}
        servicesContentBoxSpecialLink={servicesContentBoxSpecialLink}
        breakpoint={breakpoint}
        preview={preview}
      />
    </>
  )
}
