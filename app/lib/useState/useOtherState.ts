'use client'
import { useState } from 'react'

interface OtherState {
  currentStep: number
  setCurrentStep: (value: number) => void
  fontName: string
  setFontName: (value: React.SetStateAction<string>) => void
  fontWeights: string
  setFontWeights: (value: React.SetStateAction<string>) => void
  domain: string | any
  setDomain: (value: React.SetStateAction<any>) => void
  dnsTransferCode: string
  setDnsTransferCode: (value: React.SetStateAction<string>) => void
}

export const useOtherState = (): OtherState => {
  const [currentStep, setCurrentStep] = useState<number>(2)
  const [fontName, setFontName] = useState<string>('Hind')
  const [fontWeights, setFontWeights] = useState<string>('400;700')
  const [domain, setDomain] = useState<string>('')
  const [dnsTransferCode, setDnsTransferCode] = useState<string>('')

  return {
    currentStep,
    setCurrentStep,
    fontName,
    setFontName,
    fontWeights,
    setFontWeights,
    domain,
    setDomain,
    dnsTransferCode,
    setDnsTransferCode,
  }
}
