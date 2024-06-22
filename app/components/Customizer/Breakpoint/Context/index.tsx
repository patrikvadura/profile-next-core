'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

interface BreakpointContextProps {
  breakpoint: string
  changeBreakpoint: (bp: string) => void
}

const BreakpointContext = createContext<BreakpointContextProps | undefined>(undefined)

export const BreakpointProvider = ({ children }: { children: ReactNode }) => {
  const [breakpoint, setBreakpoint] = useState<string>('xl')

  const changeBreakpoint = (bp: string) => {
    setBreakpoint(bp)
  }

  return (
    <BreakpointContext.Provider value={{ breakpoint, changeBreakpoint }}>
      {children}
    </BreakpointContext.Provider>
  )
}

export const useBreakpoint = (): BreakpointContextProps => {
  const context = useContext(BreakpointContext)
  if (!context) {
    throw new Error('useBreakpoint must be used within a BreakpointProvider')
  }
  return context
}
