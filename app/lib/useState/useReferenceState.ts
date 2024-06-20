'use client'
import { useState } from 'react'
import colors from '@/app/lib/colors.json'
import data from '@/app/lib/data.json'

interface ReferenceState {
  referenceVariant: string | undefined | any
  setReferenceVariant: (value: string) => void
  referenceLayout: string | undefined | any
  setReferenceLayout: (value: string) => void
  referenceAlign: string | undefined | any
  setReferenceAlign: (value: string) => void
  referenceBackground: string | undefined | any
  setReferenceBackground: (value: string) => void
  referenceAccentBg: string | undefined | any
  setReferenceAccentBg: (value: string) => void
  referenceTypo: string | undefined | any
  setReferenceTypo: (value: string) => void
  referenceTypoLg: string | undefined | any
  setReferenceTypoLg: (value: string) => void
}

export const useReferenceState = (): ReferenceState => {
  const [referenceVariant, setReferenceVariant] = useState<string>('01')
  const [referenceLayout, setReferenceLayout] = useState<string>('background')
  const [referenceAlign, setReferenceAlign] = useState<string>('center')
  const [referenceBackground, setReferenceBackground] = useState<string | undefined>(
    colors.reference.background,
  )
  const [referenceAccentBg, setReferenceAccentBg] = useState<string | undefined>(
    colors.reference.accent.background,
  )
  const [referenceTypo, setReferenceTypo] = useState<string | undefined>(colors.reference.typo)
  const [referenceTypoLg, setReferenceTypoLg] = useState<string | undefined>(
    colors.reference.typoLg,
  )

  return {
    referenceVariant,
    setReferenceVariant,
    referenceLayout,
    setReferenceLayout,
    referenceAlign,
    setReferenceAlign,
    referenceBackground,
    setReferenceBackground,
    referenceAccentBg,
    setReferenceAccentBg,
    referenceTypo,
    setReferenceTypo,
    referenceTypoLg,
    setReferenceTypoLg,
  }
}
