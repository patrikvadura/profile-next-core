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
  imageOpacity?: '80' | '50' | '30' | any
  align?: 'start' | 'center' | 'end' | any
  backgroundColor?: string | any
  accentBgColor?: string | any
  accentFgColor?: string | any
  typoColor?: string | any
  typoLgColor?: string | any
  preview?: boolean
}

export type HeroVariantProps = {
  imageOpacity?: '80' | '50' | '30' | any
  align?: 'start' | 'center' | 'end' | any
  backgroundColor?: string | any
  accentBgColor?: string | any
  accentFgColor?: string | any
  typoColor?: string | any
  typoLgColor?: string | any
  preview?: boolean
}
