'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react'

interface DomainContextProps {
  domain: string
  setDomain: (domain: string) => void
}

const DomainContext = createContext<DomainContextProps | undefined>(undefined)

export const DomainProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [domain, setDomain] = useState<string>('')

  return <DomainContext.Provider value={{ domain, setDomain }}>{children}</DomainContext.Provider>
}

export const useDomain = () => {
  const context = useContext(DomainContext)
  if (context === undefined) {
    throw new Error('useDomain must be used within a DomainProvider')
  }
  return context
}
