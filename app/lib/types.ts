import React from 'react'

// Menu

export interface MenuItems {
  title?: string
  link?: string | undefined
}

// Service

export interface ListItem {
  label?: string
}

export interface ServiceItem {
  title: string
  icon?: string | null
  image?: string | null
  description?: string | null
  list: { listItems: ListItem[] }
}

export interface ServicesData {
  services: {
    items: ServiceItem[]
    title?: string
  }
}

// Reference

export interface ReferenceItem {
  title: string
  description?: string | null
}

export interface ReferenceItems {
  items: ReferenceItem[]
  title?: string
}

// Footer

export interface SocialItem {
  label: string
  link: string
}

export type IconComponents = {
  [key: string]: React.ComponentType<{ size?: string | number; color?: string; className?: string }>
}
