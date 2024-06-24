'use client'
import { useState } from 'react'
import colors from '@/app/lib/colors.json'

interface ContactState {
  contactVariant: string | undefined | any
  setContactVariant: (value: string) => void
  contactLayout: string | undefined | any
  setContactLayout: (value: string) => void
  contactAlign: string | undefined | any
  setContactAlign: (value: string) => void
  contactOrder: string | undefined | any
  setContactOrder: (value: string) => void
  contactBackground: string | undefined | any
  setContactBackground: (value: string) => void
  contactAccentBg: string | undefined | any
  setContactAccentBg: (value: string) => void
  contactAccentFg: string | undefined | any
  setContactAccentFg: (value: string) => void
  contactTypo: string | undefined | any
  setContactTypo: (value: string) => void
  contactRecipient: string | undefined | any
  setContactRecipient: (value: string) => void
  contactMapAddress: string | undefined | any
  setContactMapAddress: (value: string) => void
}

export const useContactState = (): ContactState => {
  const [contactVariant, setContactVariant] = useState<string>('01')
  const [contactLayout, setContactLayout] = useState<string>('transparent')
  const [contactAlign, setContactAlign] = useState<string>('left')
  const [contactOrder, setContactOrder] = useState<string>('asc')
  const [contactBackground, setContactBackground] = useState<string | undefined>(
    colors.contact.background,
  )
  const [contactAccentBg, setContactAccentBg] = useState<string | undefined>(
    colors.contact.accent.background,
  )
  const [contactAccentFg, setContactAccentFg] = useState<string | undefined>(
    colors.contact.accent.foreground,
  )
  const [contactTypo, setContactTypo] = useState<string | undefined>(colors.contact.typo)

  // Contact form
  const [contactRecipient, setContactRecipient] = useState<string>('hello@visiosnap.cz')

  // Contact Map
  const [contactMapAddress, setContactMapAddress] = useState<string>('Stojanova 508, Uh. Hradiště')

  return {
    contactVariant,
    setContactVariant,
    contactLayout,
    setContactLayout,
    contactAlign,
    setContactAlign,
    contactOrder,
    setContactOrder,
    contactBackground,
    setContactBackground,
    contactAccentBg,
    setContactAccentBg,
    contactAccentFg,
    setContactAccentFg,
    contactTypo,
    setContactTypo,
    contactRecipient,
    setContactRecipient,
    contactMapAddress,
    setContactMapAddress,
  }
}
