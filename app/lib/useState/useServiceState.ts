'use client'
import { useState } from 'react'
import colors from '@/app/lib/colors.json'

interface ServiceState {
  serviceVariant: string | undefined | any
  setServiceVariant: (value: string) => void
  serviceLayout: string | undefined | any
  setServiceLayout: (value: string) => void
  serviceAlign: string | undefined | any
  setServiceAlign: (value: string) => void
  serviceRadius: string | undefined | any
  setServiceRadius: (value: string) => void
  serviceBackground: string | undefined | any
  setServiceBackground: (value: string) => void
  serviceAccentBg: string | undefined | any
  setServiceAccentBg: (value: string) => void
  serviceAccentFg: string | undefined | any
  setServiceAccentFg: (value: string) => void
  serviceTypo: string | undefined | any
  setServiceTypo: (value: string) => void
  serviceBoxBackground: string | undefined | any
  setServiceBoxBackground: (value: string) => void
  serviceBoxTypo: string | undefined | any
  setServiceBoxTypo: (value: string) => void
  serviceBoxIcon: string | undefined | any
  setServiceBoxIcon: (value: string) => void
}

export const useServiceState = (): ServiceState => {
  const [serviceVariant, setServiceVariant] = useState<string>('01')
  const [serviceLayout, setServiceLayout] = useState<string>('transparent')
  const [serviceAlign, setServiceAlign] = useState<string>('left')
  const [serviceRadius, setServiceRadius] = useState<string>('none')
  const [serviceBackground, setServiceBackground] = useState<string | undefined>(
    colors.service.background,
  )
  const [serviceAccentBg, setServiceAccentBg] = useState<string | undefined>(
    colors.service.accent.background,
  )
  const [serviceAccentFg, setServiceAccentFg] = useState<string | undefined>(
    colors.service.accent.foreground,
  )
  const [serviceTypo, setServiceTypo] = useState<string | undefined>(colors.service.typo)
  const [serviceBoxBackground, setServiceBoxBackground] = useState<string | undefined>(
    colors.service.box.background,
  )
  const [serviceBoxTypo, setServiceBoxTypo] = useState<string | undefined>(colors.service.box.typo)
  const [serviceBoxIcon, setServiceBoxIcon] = useState<string | undefined>(colors.service.box.icon)

  return {
    serviceVariant,
    setServiceVariant,
    serviceLayout,
    setServiceLayout,
    serviceAlign,
    setServiceAlign,
    serviceRadius,
    setServiceRadius,
    serviceBackground,
    setServiceBackground,
    serviceAccentBg,
    setServiceAccentBg,
    serviceAccentFg,
    setServiceAccentFg,
    serviceTypo,
    setServiceTypo,
    serviceBoxBackground,
    setServiceBoxBackground,
    serviceBoxTypo,
    setServiceBoxTypo,
    serviceBoxIcon,
    setServiceBoxIcon,
  }
}
