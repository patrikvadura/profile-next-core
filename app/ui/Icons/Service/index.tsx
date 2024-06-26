'use client'
import React from 'react'
import { Icon } from '@iconify/react'

interface Props {
  icon?: string | any
  className?: string
}

export const ServiceIcon: React.FC<Props> = ({ icon, className }) => {
  return <Icon icon={icon} className={className} />
}
