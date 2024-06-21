import React from 'react'
import { Icon } from '@iconify/react'
import { ActionWrapper } from '@/app/ui/ActionWrapper'
import { useBreakpoint } from '@/app/components/Customizer/Breakpoint/Context'

interface Props {
  state: any
  setState: (state: any) => void
}

export default function BreakpointSwitcher({ state, setState }: Props) {
  const { breakpoint, changeBreakpoint } = useBreakpoint()

  const breakpoints = [
    {
      size: '',
      icon: 'tabler:device-mobile',
    },
    {
      size: 'md',
      icon: 'tabler:device-ipad-horizontal',
    },
    {
      size: 'lg',
      icon: 'tabler:device-laptop',
    },
    {
      size: 'xl',
      icon: 'tabler:device-desktop',
    },
  ]

  const cycleBreakpoint = () => {
    const nextIndex = (state + 1) % breakpoints.length
    setState(nextIndex)
    changeBreakpoint(breakpoints[nextIndex].size)
  }

  return (
    <ActionWrapper onClick={cycleBreakpoint}>
      <Icon
        icon={breakpoints[state].icon}
        className="text-opacity-100 text-primary hover:text-opacity-100 text-2xl"
      />
    </ActionWrapper>
  )
}
