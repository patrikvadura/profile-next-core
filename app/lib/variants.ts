// About

export type AboutProps = {
  variant: '01' | '02' | '03' | '04' | '05' | any
  layout: 'transparent' | 'background' | 'border' | any
  align: 'left' | 'right' | 'full' | any
  order: 'asc' | 'desc' | any
  backgroundColor?: string | any
  accentBgColor?: string | any
  accentFgColor?: string | any
  typoColor?: string | any
  contentTitle?: string
  contentDescription?: string
  contentButton?: boolean
  contentButtonText?: string
  contentButtonLink?: string | any
  breakpoint?: string | any | undefined
  preview?: boolean
}

export type AboutVariantProps = {
  layout: 'transparent' | 'background' | 'border' | any
  align: 'left' | 'right' | 'full' | any
  order: 'asc' | 'desc' | any
  backgroundColor?: string | any
  accentBgColor?: string | any
  accentFgColor?: string | any
  typoColor?: string | any
  contentTitle?: string
  contentDescription?: string
  contentButton?: boolean
  contentButtonText?: string
  contentButtonLink?: string | any
  breakpoint?: string | any | undefined
  preview?: boolean
}

// Hero

export type HeroProps = {
  variant: '01' | '02' | '03' | '04' | '05' | any
  imageOpacity?: '100' | '80' | '50' | '30' | any
  align?: 'start' | 'center' | 'end' | any
  backgroundColor?: string | any
  accentBgColor?: string | any
  accentFgColor?: string | any
  typoColor?: string | any
  typoLgColor?: string | any
  contentTitle?: string
  contentSubtitle?: string
  contentLargeTitle?: string
  contentButtonPrimary?: boolean
  contentButtonPrimaryText?: string
  contentButtonPrimaryLink?: string | any
  contentButtonSecondary?: boolean
  contentButtonSecondaryText?: string
  contentButtonSecondaryLink?: string | any
  imageMainUrl?: string | any
  imageMainWidth?: string | any
  imageMainHeight?: string | any
  imageBackgroundUrl?: string | undefined | any
  setImageBackgroundUrl?: (value: React.SetStateAction<string | undefined>) => void
  imageBackgroundHeight?: number | undefined | any
  setImageBackgroundHeight?: (value: React.SetStateAction<number | undefined>) => void
  imageBackgroundWidth?: number | undefined | any
  setImageBackgroundWidth?: (value: React.SetStateAction<number | undefined>) => void
  breakpoint?: string | any | undefined
  preview?: boolean
}

export type HeroVariantProps = {
  imageOpacity?: '100' | '80' | '50' | '30' | any
  align?: 'start' | 'center' | 'end' | any
  backgroundColor?: string | any
  accentBgColor?: string | any
  accentFgColor?: string | any
  typoColor?: string | any
  typoLgColor?: string | any
  contentTitle?: string
  contentSubtitle?: string
  contentLargeTitle?: string
  contentButtonPrimary?: boolean
  contentButtonPrimaryText?: string
  contentButtonPrimaryLink?: string | any
  contentButtonSecondary?: boolean
  contentButtonSecondaryText?: string
  contentButtonSecondaryLink?: string | any
  imageMainUrl?: string | any
  imageMainWidth?: string | any
  imageMainHeight?: string | any
  imageBackgroundUrl?: string | undefined | any
  setImageBackgroundUrl?: (value: React.SetStateAction<string | undefined>) => void
  imageBackgroundHeight?: number | undefined | any
  setImageBackgroundHeight?: (value: React.SetStateAction<number | undefined>) => void
  imageBackgroundWidth?: number | undefined | any
  setImageBackgroundWidth?: (value: React.SetStateAction<number | undefined>) => void
  breakpoint?: string | any | undefined
  preview?: boolean
}

// Service

export type ServiceProps = {
  variant: '01' | '02' | '03' | any
  layout: 'transparent' | 'background' | 'border' | any
  align: 'left' | 'right' | 'full' | any
  radius: 'none' | 'rounded' | any
  backgroundColor?: string | any
  accentBgColor?: string | any
  accentFgColor?: string | any
  typoColor?: string | any
  boxBackgroundColor?: string | any
  boxTypoColor?: string | any
  boxIconColor?: string | any
  servicesContentTitle?: string | undefined | any
  boxes?: any
  servicesContentBoxSpecial: boolean
  servicesContentBoxSpecialTitle: string | undefined | any
  servicesContentBoxSpecialLink: string | undefined | any
  breakpoint?: string | any | undefined
  preview?: boolean
}

export type ServiceVariantProps = {
  layout: 'transparent' | 'background' | 'border' | any
  align: 'left' | 'right' | 'full' | any
  radius: 'none' | 'rounded' | any
  backgroundColor?: string | any
  accentBgColor?: string | any
  accentFgColor?: string | any
  typoColor?: string | any
  boxBackgroundColor?: string | any
  boxTypoColor?: string | any
  boxIconColor?: string | any
  servicesContentTitle?: string | undefined | any
  boxes?: any
  servicesContentBoxSpecial?: boolean
  servicesContentBoxSpecialTitle?: string | undefined | any
  servicesContentBoxSpecialLink?: string | undefined | any
  breakpoint?: string | any | undefined
  preview?: boolean
}

export type ReferenceProps = {
  variant: '01' | '02' | '03' | any
  layout: 'transparent' | 'background' | any
  align: 'left' | 'right' | 'full' | any
  backgroundColor?: string | any
  accentBgColor?: string | any
  typoColor?: string | any
  typoLgColor?: string | any
  referenceContentTitle?: string | any
  boxes?: any
  breakpoint?: string | any | undefined
  preview?: boolean
}

export type ReferenceVariantProps = {
  layout: 'transparent' | 'background' | any
  align: 'left' | 'right' | 'full' | any
  backgroundColor?: string | any
  accentBgColor?: string | any
  typoColor?: string | any
  typoLgColor?: string | any
  referenceContentTitle?: string | any
  boxes?: any
  breakpoint?: string | any | undefined
  preview?: boolean
}

// Contact

export type ContactProps = {
  variant: '01' | '02' | '03' | '04' | '05' | any
  layout: 'transparent' | 'background' | 'border' | any
  align: 'left' | 'right' | 'full' | any
  order: 'asc' | 'desc' | any
  backgroundColor?: string | any
  accentBgColor?: string | any
  accentFgColor?: string | any
  typoColor?: string | any
  contactForm?: boolean
  contactMap?: boolean
  contactRecipient?: string | any
  contactMapAddress?: string | any
  contactContentTitle?: string | any
  contactContentSubtitle?: string | any
  contactContentInfoEmail?: string | any
  contactContentInfoPhone?: string | any
  contactContentInfoAddress?: string | any
  breakpoint?: string | any | undefined
  preview?: boolean
}

export type ContactVariantProps = {
  layout: 'transparent' | 'background' | 'border' | any
  align: 'left' | 'right' | 'full' | any
  order: 'asc' | 'desc' | any
  backgroundColor?: string | any
  accentBgColor?: string | any
  accentFgColor?: string | any
  typoColor?: string | any
  contactForm?: boolean
  contactMap?: boolean
  contactRecipient?: string | any
  contactMapAddress?: string | any
  contactContentTitle?: string | any
  contactContentSubtitle?: string | any
  contactContentInfoEmail?: string | any
  contactContentInfoPhone?: string | any
  contactContentInfoAddress?: string | any
  breakpoint?: string | any | undefined
  preview?: boolean
}
