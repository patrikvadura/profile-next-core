// About

export type AboutProps = {
  variant: '01' | '02' | '03' | '04' | any
  layout: 'transparent' | 'background' | 'border' | any
  align: 'left' | 'right' | 'full' | any
  order: 'asc' | 'desc' | any
  backgroundColor?: string | any
  accentBgColor?: string | any
  accentFgColor?: string | any
  typoColor?: string | any
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
  preview?: boolean
}

// Hero

export type HeroProps = {
  variant: '01' | '02' | '03' | '04' | any
  imageOpacity?: '100' | '80' | '50' | '30' | any
  align?: 'start' | 'center' | 'end' | any
  backgroundColor?: string | any
  accentBgColor?: string | any
  accentFgColor?: string | any
  typoColor?: string | any
  typoLgColor?: string | any
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
  preview?: boolean
}

// Service

export type ServiceProps = {
  variant: '01' | '02' | '03' | '04' | any
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
  preview?: boolean
}
