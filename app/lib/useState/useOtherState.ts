'use client'
import { useState } from 'react'
import colors from '@/app/lib/colors.json'

export interface OtherState {
  currentStep: number
  setCurrentStep: (value: number) => void
  currentBreakpoint: number
  setCurrentBreakpoint: (value: number) => void
  fontName: string
  setFontName: (value: React.SetStateAction<string>) => void
  fontWeights: string
  setFontWeights: (value: React.SetStateAction<string>) => void
  globalPrimary: string | undefined | any
  setGlobalPrimary: (value: string) => void
  globalSecondary: string | undefined | any
  setGlobalSecondary: (value: string) => void
  globalAccent: string | undefined | any
  setGlobalAccent: (value: string) => void
  domain: string | any
  setDomain: (value: React.SetStateAction<any>) => void
  availability: boolean | null
  setAvailability: (value: any) => void
  dnsTransferCode: string
  setDnsTransferCode: (value: React.SetStateAction<string>) => void
  contactName: string
  setContactName: (value: React.SetStateAction<string>) => void
  contactCompany: string
  setContactCompany: (value: React.SetStateAction<string>) => void
  contactEmail: string
  setContactEmail: (value: React.SetStateAction<string>) => void
  contactPhone: string
  setContactPhone: (value: React.SetStateAction<string>) => void
  domainBuyName: string
  setDomainBuyName: (value: React.SetStateAction<string>) => void
  domainBuyEmail: string
  setDomainBuyEmail: (value: React.SetStateAction<string>) => void
  domainBuyAddress: string
  setDomainBuyAddress: (value: React.SetStateAction<string>) => void
  domainBuyVAT: string
  setDomainBuyVAT: (value: React.SetStateAction<string>) => void
  metaTitle: string
  setMetaTitle: (value: React.SetStateAction<string>) => void
  metaDescription: string
  setMetaDescription: (value: React.SetStateAction<string>) => void
}

export const useOtherState = (): OtherState => {
  const [currentStep, setCurrentStep] = useState<number>(0)
  const [currentBreakpoint, setCurrentBreakpoint] = useState<number>(2)
  // Typography
  const [fontName, setFontName] = useState<string>('Hind')
  const [fontWeights, setFontWeights] = useState<string>('400;700')
  // Global colors
  const [globalPrimary, setGlobalPrimary] = useState<string | undefined>(colors.global.primary)
  const [globalSecondary, setGlobalSecondary] = useState<string | undefined>(
    colors.global.secondary,
  )
  const [globalAccent, setGlobalAccent] = useState<string | undefined>(colors.global.accent)
  // Domain
  const [domain, setDomain] = useState<string>('')
  const [availability, setAvailability] = useState<boolean | null>(null)
  const [dnsTransferCode, setDnsTransferCode] = useState<string>('')
  // Contact Info
  const [contactName, setContactName] = useState<string>('')
  const [contactCompany, setContactCompany] = useState<string>('')
  const [contactEmail, setContactEmail] = useState<string>('')
  const [contactPhone, setContactPhone] = useState<string>('')
  // Buy domain
  const [domainBuyName, setDomainBuyName] = useState<string>('')
  const [domainBuyEmail, setDomainBuyEmail] = useState<string>('')
  const [domainBuyAddress, setDomainBuyAddress] = useState<string>('')
  const [domainBuyVAT, setDomainBuyVAT] = useState<string>('')
  // Meta
  const [metaTitle, setMetaTitle] = useState<string>(
    'Patrik Indra - Saroli | Finanční specialista a poradce',
  )
  const [metaDescription, setMetaDescription] = useState<string>(
    'Již více než 10 let pomáhám klientům v řešení finančního zázemí, zajištění příjmu v případě nemoci / úrazu a dále v přípravě na jejich budoucnost a cíle.',
  )

  return {
    currentStep,
    setCurrentStep,
    currentBreakpoint,
    setCurrentBreakpoint,
    fontName,
    setFontName,
    fontWeights,
    setFontWeights,
    globalPrimary,
    setGlobalPrimary,
    globalSecondary,
    setGlobalSecondary,
    globalAccent,
    setGlobalAccent,
    domain,
    setDomain,
    availability,
    setAvailability,
    dnsTransferCode,
    setDnsTransferCode,
    contactName,
    setContactName,
    contactCompany,
    setContactCompany,
    contactEmail,
    setContactEmail,
    contactPhone,
    setContactPhone,
    domainBuyName,
    setDomainBuyName,
    domainBuyEmail,
    setDomainBuyEmail,
    domainBuyAddress,
    setDomainBuyAddress,
    domainBuyVAT,
    setDomainBuyVAT,
    metaTitle,
    setMetaTitle,
    metaDescription,
    setMetaDescription,
  }
}
