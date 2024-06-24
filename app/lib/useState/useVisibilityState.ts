'use client'
import { useState } from 'react'

interface VisibilityState {
  showHero: boolean
  setShowHero: (value: boolean) => void
  showAbout: boolean
  setShowAbout: (value: boolean) => void
  showServices: boolean
  setShowServices: (value: boolean) => void
  showReference: boolean
  setShowReference: (value: boolean) => void
  showPortfolio: boolean
  setShowPortfolio: (value: boolean) => void
  showContact: boolean
  setShowContact: (value: boolean) => void
  showContactFormOrMap: boolean
  setShowContactFormOrMap: (value: boolean) => void
  showAnalytics: boolean
  setShowAnalytics: (value: boolean) => void
  showAnalyticsCode: boolean
  setShowAnalyticsCode: (value: boolean) => void
  showAnalyticsSetup: boolean
  setShowAnalyticsSetup: (value: boolean) => void
  showCookie: boolean
  setShowCookie: (value: boolean) => void
  showDnsTransfer: boolean
  setShowDnsTransfer: (value: boolean) => void
  showDnsSelf: boolean
  setShowDnsSelf: (value: boolean) => void
  showDnsHelp: boolean
  setShowDnsHelp: (value: boolean) => void
  selectedDnsOption: string
  setSelectedDnsOption: (value: string) => void
  selectedBuyInfoAccept: string
  setSelectedBuyInfoAccept: (value: string) => void
  selectedBuyInfoAccepted: boolean
  setSelectedBuyInfoAccepted: (value: boolean) => void
  showHeroContentButtonPrimary: boolean
  setShowHeroContentButtonPrimary: (value: boolean) => void
  showHeroContentButtonSecondary: boolean
  setShowHeroContentButtonSecondary: (value: boolean) => void
  showAboutContentButton: boolean
  setShowAboutContentButton: (value: boolean) => void
}

export const useVisibilityState = (): VisibilityState => {
  const [showHero, setShowHero] = useState<boolean>(true)
  const [showAbout, setShowAbout] = useState<boolean>(true)
  const [showServices, setShowServices] = useState<boolean>(true)
  const [showReference, setShowReference] = useState<boolean>(true)
  const [showPortfolio, setShowPortfolio] = useState<boolean>(false)
  const [showContact, setShowContact] = useState<boolean>(true)
  const [showContactFormOrMap, setShowContactFormOrMap] = useState<boolean>(false)
  const [showAnalytics, setShowAnalytics] = useState<boolean>(false)
  const [showAnalyticsCode, setShowAnalyticsCode] = useState<boolean>(false)
  const [showAnalyticsSetup, setShowAnalyticsSetup] = useState<boolean>(false)
  const [showCookie, setShowCookie] = useState<boolean>(false)
  const [showDnsTransfer, setShowDnsTransfer] = useState<boolean>(false)
  const [showDnsSelf, setShowDnsSelf] = useState<boolean>(false)
  const [showDnsHelp, setShowDnsHelp] = useState<boolean>(false)
  const [selectedDnsOption, setSelectedDnsOption] = useState<string>('')
  const [selectedBuyInfoAccept, setSelectedBuyInfoAccept] = useState<string>('')
  const [selectedBuyInfoAccepted, setSelectedBuyInfoAccepted] = useState<boolean>(false)
  // Hero content
  const [showHeroContentButtonPrimary, setShowHeroContentButtonPrimary] = useState<boolean>(true)
  const [showHeroContentButtonSecondary, setShowHeroContentButtonSecondary] =
    useState<boolean>(true)
  const [showAboutContentButton, setShowAboutContentButton] = useState<boolean>(true)

  return {
    showHero,
    setShowHero,
    showAbout,
    setShowAbout,
    showServices,
    setShowServices,
    showReference,
    setShowReference,
    showPortfolio,
    setShowPortfolio,
    showContact,
    setShowContact,
    showContactFormOrMap,
    setShowContactFormOrMap,
    showAnalytics,
    setShowAnalytics,
    showAnalyticsCode,
    setShowAnalyticsCode,
    showAnalyticsSetup,
    setShowAnalyticsSetup,
    showCookie,
    setShowCookie,
    showDnsTransfer,
    setShowDnsTransfer,
    showDnsSelf,
    setShowDnsSelf,
    showDnsHelp,
    setShowDnsHelp,
    selectedDnsOption,
    setSelectedDnsOption,
    selectedBuyInfoAccept,
    setSelectedBuyInfoAccept,
    selectedBuyInfoAccepted,
    setSelectedBuyInfoAccepted,
    showHeroContentButtonPrimary,
    setShowHeroContentButtonPrimary,
    showHeroContentButtonSecondary,
    setShowHeroContentButtonSecondary,
    showAboutContentButton,
    setShowAboutContentButton,
  }
}
