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
  siteName: string
  setSiteName: (value: React.SetStateAction<string>) => void
  siteNameClaim: string
  setSiteNameClaim: (value: React.SetStateAction<string>) => void
  logoImage: boolean | null
  setLogoImage: (value: any) => void
  logoImageUrl: string
  setLogoImageUrl: (value: React.SetStateAction<string>) => void
  logoImageHeight: number | undefined | any
  setLogoImageHeight: (value: React.SetStateAction<number | undefined>) => void
  logoImageWidth: number | undefined | any
  setLogoImageWidth: (value: React.SetStateAction<number | undefined>) => void
  logoImageSize: number | undefined | any
  setLogoImageSize: (value: React.SetStateAction<number | undefined>) => void
  navigationItems: {
    title: string | any
    href: string | any
    visibilityState: string | any
    setTitle: (value: string) => void | any
  }[]
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

  // Identity
  const [siteName, setSiteName] = useState<string>('Patrik Indra')
  const [siteNameClaim, setSiteNameClaim] = useState<string>('Finanční specialista')
  const [logoImage, setLogoImage] = useState<boolean | null>(false)
  const [logoImageUrl, setLogoImageUrl] = useState<string>(
    'https://profile-next-core.s3.eu-north-1.amazonaws.com/next-s3-uploads/default/visiosnap.svg',
  )
  const [logoImageHeight, setLogoImageHeight] = useState<number | undefined>(undefined)
  const [logoImageWidth, setLogoImageWidth] = useState<number | undefined>(undefined)
  const [logoImageSize, setLogoImageSize] = useState<number | undefined>(160)

  // Navigation items
  const [navigationItems, setNavigationItems] = useState([
    {
      title: 'O nás',
      href: '#about',
      visibilityState: 'showAbout',
      setTitle: (value: string) =>
        setNavigationItems(prevState => updateNavItem(prevState, 0, value)),
    },
    {
      title: 'Služby',
      href: '#services',
      visibilityState: 'showServices',
      setTitle: (value: string) =>
        setNavigationItems(prevState => updateNavItem(prevState, 1, value)),
    },
    {
      title: 'Reference',
      href: '#reference',
      visibilityState: 'showReference',
      setTitle: (value: string) =>
        setNavigationItems(prevState => updateNavItem(prevState, 2, value)),
    },
    {
      title: 'Portfolio',
      href: '#portfolio',
      visibilityState: 'showPortfolio',
      setTitle: (value: string) =>
        setNavigationItems(prevState => updateNavItem(prevState, 3, value)),
    },
    {
      title: 'Kontakt',
      href: '#contact',
      visibilityState: 'showContact',
      setTitle: (value: string) =>
        setNavigationItems(prevState => updateNavItem(prevState, 4, value)),
    },
  ])

  //@ts-ignore
  const updateNavItem = (items, index, value) => {
    const newItems = [...items]
    newItems[index].title = value
    return newItems
  }

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
    siteName,
    setSiteName,
    siteNameClaim,
    setSiteNameClaim,
    logoImage,
    setLogoImage,
    logoImageUrl,
    setLogoImageUrl,
    logoImageHeight,
    setLogoImageHeight,
    logoImageWidth,
    setLogoImageWidth,
    logoImageSize,
    setLogoImageSize,
    navigationItems,
  }
}
