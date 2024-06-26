'use client'
import { useState } from 'react'
import colors from '@/app/lib/colors.json'

interface ContactState {
  contactVariant: string | undefined
  setContactVariant: (value: string) => void
  contactLayout: string | undefined
  setContactLayout: (value: string) => void
  contactAlign: string | undefined
  setContactAlign: (value: string) => void
  contactOrder: string | undefined
  setContactOrder: (value: string) => void
  contactBackground: string | undefined
  setContactBackground: (value: string | undefined) => void
  contactAccentBg: string | undefined
  setContactAccentBg: (value: string | undefined) => void
  contactAccentFg: string | undefined
  setContactAccentFg: (value: string | undefined) => void
  contactTypo: string | undefined
  setContactTypo: (value: string | undefined) => void
  contactRecipient: string
  setContactRecipient: (value: string) => void
  contactMapAddress: string
  setContactMapAddress: (value: string) => void
  contactContentTitle: string
  setContactContentTitle: (value: React.SetStateAction<string>) => void
  contactContentSubtitle: string
  setContactContentSubtitle: (value: React.SetStateAction<string>) => void
  contactContentInfoEmail: string
  setContactContentInfoEmail: (value: React.SetStateAction<string>) => void
  contactContentInfoPhone: string
  setContactContentInfoPhone: (value: React.SetStateAction<string>) => void
  contactContentInfoAddress: string
  setContactContentInfoAddress: (value: React.SetStateAction<string>) => void
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

  // Content
  const [contactContentTitle, setContactContentTitle] = useState<string>(
    'Kontaktujte nás a vytvořme společně web dle vašich potřeb',
  )
  const [contactContentSubtitle, setContactContentSubtitle] = useState<string>(
    'Pojďme vytvořit váš vysněný web',
  )
  const [contactContentInfoEmail, setContactContentInfoEmail] =
    useState<string>('hello@visiosnap.cz')
  const [contactContentInfoPhone, setContactContentInfoPhone] = useState<string>('+420 725 007 655')
  const [contactContentInfoAddress, setContactContentInfoAddress] = useState<string>(
    'Stojanova 508, Uh. Hradiště',
  )

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
    contactContentTitle,
    setContactContentTitle,
    contactContentSubtitle,
    setContactContentSubtitle,
    contactContentInfoEmail,
    setContactContentInfoEmail,
    contactContentInfoPhone,
    setContactContentInfoPhone,
    contactContentInfoAddress,
    setContactContentInfoAddress,
  }
}
