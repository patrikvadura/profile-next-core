// About

export type AboutProps = {
  variant: '01' | '02' | '03' | '04' | any
  layout?: 'transparent' | 'background' | 'border' | any
  align?: 'left' | 'right' | 'full' | any
  order?: 'asc' | 'desc' | any
  backgroundColor: string | any
  accentBgColor: string | any
  accentFgColor: string | any
  typoColor: string | any
}

export type AboutVariant01Props = {
  layout: 'transparent' | 'background' | 'border'
  align: 'left' | 'right' | 'full'
  backgroundColor: string | any
  accentBgColor: string | any
  accentFgColor: string | any
  typoColor: string | any
}

export type AboutVariant02Props = {
  layout: 'transparent' | 'background' | 'border'
  align: 'left' | 'right' | 'full'
  order?: 'asc' | 'desc' | any
  backgroundColor: string | any
  accentBgColor: string | any
  accentFgColor: string | any
  typoColor: string | any
}
