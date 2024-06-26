import React from 'react'

// Menu

export interface MenuItems {
  title: string | undefined | any
  link: string | undefined | any
  icon?: string | undefined | any
}

export interface MenuItemsLandingPage {
  title: string | undefined | any
  link: string | undefined | any
}

// About

export interface AboutItem {
  title?: string | any | undefined
  description?: string | any | undefined
}

export interface AboutData {
  about: {
    items?: AboutItem[] | any
    title?: string
  }
}

// Service

export interface ListItem {
  label?: string
}

export interface ServiceItem {
  title?: string | any
  icon?: string | any
  image?: string | any
  description?: string | any
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

// ThemeSwitcher

export interface ThemeSwitcherProps {
  previewMode?: boolean
}

// Footer

export interface SocialItem {
  label: string
  link: string
}

export type IconComponents = {
  [key: string]: React.ComponentType<{ size?: string | number; color?: string; className?: string }>
}

// LandingPage

export interface BenefitsItems {
  title?: string
  description?: string
  icon?: string | undefined | any
}

export interface DemoWebsiteItems {
  image: string | any
}
