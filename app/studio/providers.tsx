import * as React from 'react'

import { BreakpointProvider } from '@/app/components/Customizer/Breakpoint/Context'
import { DomainProvider } from '@/app/components/Customizer/DNSChecker/DomainContext'

interface Props {
  children?: React.ReactNode
}

export default function Providers({ children }: Props) {
  // 2. Wrap NextUIProvider at the root of your app
  return (
    <DomainProvider>
      <BreakpointProvider>{children}</BreakpointProvider>
    </DomainProvider>
  )
}
