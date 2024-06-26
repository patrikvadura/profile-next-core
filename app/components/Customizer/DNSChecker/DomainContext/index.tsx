'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react'
import { OtherState, useOtherState } from '@/app/lib/useState/useOtherState'

const DomainContext = createContext<OtherState | undefined>(undefined)

export const DomainProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const other = useOtherState()

  const stateData = {
    ...other,
  }

  const domain = other.domain
  const setDomain = other.setDomain
  const availability = other.availability
  const setAvailability = other.setAvailability

  return (
    //@ts-ignore
    <DomainContext.Provider value={{ domain, setDomain, availability, setAvailability }}>
      {children}
    </DomainContext.Provider>
  )
}

export const useDomain = () => {
  const context = useContext(DomainContext)
  if (context === undefined) {
    throw new Error('useDomain must be used within a DomainProvider')
  }
  return context
}
