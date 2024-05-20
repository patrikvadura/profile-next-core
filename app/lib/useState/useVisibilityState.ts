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
  showAnalytics: boolean
  setShowAnalytics: (value: boolean) => void
  showAnalyticsCode: boolean
  setShowAnalyticsCode: (value: boolean) => void
  showAnalyticsSetup: boolean
  setShowAnalyticsSetup: (value: boolean) => void
  showCookie: boolean
  setShowCookie: (value: boolean) => void
}

export const useVisibilityState = (): VisibilityState => {
  const [showHero, setShowHero] = useState<boolean>(true)
  const [showAbout, setShowAbout] = useState<boolean>(true)
  const [showServices, setShowServices] = useState<boolean>(true)
  const [showReference, setShowReference] = useState<boolean>(true)
  const [showPortfolio, setShowPortfolio] = useState<boolean>(false)
  const [showContact, setShowContact] = useState<boolean>(true)
  const [showAnalytics, setShowAnalytics] = useState<boolean>(false)
  const [showAnalyticsCode, setShowAnalyticsCode] = useState<boolean>(false)
  const [showAnalyticsSetup, setShowAnalyticsSetup] = useState<boolean>(false)
  const [showCookie, setShowCookie] = useState<boolean>(false)

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
    showAnalytics,
    setShowAnalytics,
    showAnalyticsCode,
    setShowAnalyticsCode,
    showAnalyticsSetup,
    setShowAnalyticsSetup,
    showCookie,
    setShowCookie,
  }
}
