import { ReactNode } from 'react'

export interface ModalViewProps {
  children?: ReactNode
  title?: string
  isVisible?: boolean
  toggleVisibility?: any
  steps?: any
}

export interface ActionBarProps {
  children?: ReactNode
}

export interface PreviewContainerProps {
  children?: ReactNode
  totalPrice: number
  totalTime: number
  onExport: any
  className?: string
  classPreview?: string
}

export interface OptionContainerProps {
  children?: ReactNode
  className?: string | undefined | null
  style?: any | undefined | null
}

export interface ToggleDropdownProps {
  id: string
  label: string
  link?: string | undefined
  checked?: boolean | undefined
  toggled?: boolean
  hideToggle?: boolean
  onChange?: any
  preview?: boolean
  children?: ReactNode
}

export interface Option {
  value: string
  label: string
  image?: string | any
}

export interface OptionContent {
  value: string
  label: string
}

export interface CustomizerOptions {
  variant?: Option[] | any
  layout?: Option[] | any
  imageOpacity?: Option[] | any
  align?: Option[] | any
  order?: Option[] | any
  radius?: Option[] | any
}

export interface CustomizerOptionsContent {
  buttonLink?: OptionContent[] | any
}

export interface OptionSelectorProps {
  title?: string
  options?: Option[] | any
  selectedOption: string
  onChange: (value: string) => void
  visual?: boolean
}

export interface ColorPickerProps {
  primaryGlobalColor?: (color: string | any) => void
  secondaryGlobalColor?: (color: string | any) => void
  accentGlobalColor?: (color: string | any) => void
  backgroundColor?: (color: string | any) => void
  accentBgColor?: (color: string | any) => void
  accentFgColor?: (color: string | any) => void
  typoColor?: (color: string | any) => void
  typoLgColor?: (color: string | any) => void
  boxBackgroundColor?: (color: string | any) => void
  boxTypoColor?: (color: string | any) => void
  boxIconColor?: (color: string | any) => void
}

export interface ColorUpdaterProps {
  primaryGlobalColor?: string | any | undefined
  secondaryGlobalColor?: string | any | undefined
  accentGlobalColor?: string | any | undefined
  backgroundColor?: string | any | undefined
  accentBgColor?: string | any | undefined
  accentFgColor?: string | any | undefined
  typoColor?: string | any | undefined
  typoLgColor?: string | any | undefined
  boxBackgroundColor?: string | any | undefined
  boxTypoColor?: string | any | undefined
  boxIconColor?: string | any | undefined
}

export const optionsHero: CustomizerOptions = {
  variant: [
    { value: '01', label: 'Varianta 01', image: 'hero/hero_01' },
    { value: '02', label: 'Varianta 02', image: 'hero/hero_02' },
    { value: '03', label: 'Varianta 03', image: 'hero/hero_03' },
    { value: '04', label: 'Varianta 04', image: 'hero/hero_04' },
    { value: '05', label: 'Varianta 05', image: 'hero/hero_05' },
  ],
  imageOpacity: [
    { value: '100', label: 'Neprůhledné' },
    { value: '80', label: 'Málo průhledné' },
    { value: '50', label: 'Mírně průhledné' },
    { value: '30', label: 'Silně průhledné' },
  ],
  align: [
    { value: 'start', label: 'Začátek' },
    { value: 'center', label: 'Střed' },
    { value: 'end', label: 'Konec' },
  ],
}

export const optionsHeroContent: CustomizerOptionsContent = {
  buttonLink: [
    { value: null, label: 'Vlastní odkaz' },
    { value: '#hero', label: 'Hero' },
    { value: '#about', label: 'O nás' },
    { value: '#services', label: 'Služby' },
    { value: '#reference', label: 'Reference' },
    { value: '#portfolio', label: 'Portfolio' },
    { value: '#contact', label: 'Kontakt' },
  ],
}

export const optionsAbout: CustomizerOptions = {
  variant: [
    { value: '01', label: 'Varianta 01', image: 'about/about_01' },
    { value: '02', label: 'Varianta 02', image: 'about/about_02' },
    { value: '03', label: 'Varianta 03', image: 'about/about_03' },
    { value: '04', label: 'Varianta 04', image: 'about/about_04' },
    { value: '05', label: 'Varianta 05', image: 'about/about_05' },
  ],
  layout: [
    { value: 'transparent', label: 'Transparent' },
    { value: 'background', label: 'Background' },
    { value: 'border', label: 'Border' },
  ],
  align: [
    { value: 'left', label: 'Left' },
    { value: 'full', label: 'Full' },
    { value: 'right', label: 'Right' },
  ],
  order: [
    { value: 'asc', label: 'Ascending' },
    { value: 'desc', label: 'Descending' },
  ],
}

export const optionsService: CustomizerOptions = {
  variant: [
    { value: '01', label: 'Varianta 01', image: 'service/service_01' },
    { value: '02', label: 'Varianta 02', image: 'service/service_02' },
    { value: '03', label: 'Varianta 03', image: 'service/service_03' },
  ],
  layout: [
    { value: 'transparent', label: 'Transparent' },
    { value: 'background', label: 'Background' },
    { value: 'border', label: 'Border' },
  ],
  align: [
    { value: 'left', label: 'Left' },
    { value: 'center', label: 'Center' },
    { value: 'right', label: 'Right' },
  ],
  radius: [
    { value: 'none', label: 'Rovné' },
    { value: 'rounded', label: 'Radius' },
  ],
}

export const optionsReference: CustomizerOptions = {
  variant: [
    { value: '01', label: 'Varianta 01', image: 'reference/reference_01' },
    { value: '02', label: 'Varianta 02', image: 'reference/reference_02' },
    { value: '03', label: 'Varianta 03', image: 'reference/reference_03' },
    { value: '04', label: 'Varianta 04', image: 'reference/reference_04' },
  ],
  layout: [
    { value: 'transparent', label: 'Transparent' },
    { value: 'background', label: 'Background' },
  ],
  align: [
    { value: 'left', label: 'Left' },
    { value: 'center', label: 'Center' },
    { value: 'right', label: 'Right' },
  ],
}

export const optionsContact: CustomizerOptions = {
  variant: [
    { value: '01', label: 'Varianta 01', image: 'contact/contact_01' },
    { value: '02', label: 'Varianta 02', image: 'contact/contact_02' },
    { value: '03', label: 'Varianta 03', image: 'contact/contact_03' },
    { value: '04', label: 'Varianta 04', image: 'contact/contact_04' },
  ],
  layout: [
    { value: 'transparent', label: 'Transparent' },
    { value: 'background', label: 'Background' },
    { value: 'border', label: 'Border' },
  ],
  align: [
    { value: 'left', label: 'Left' },
    { value: 'full', label: 'Full' },
    { value: 'right', label: 'Right' },
  ],
  order: [
    { value: 'asc', label: 'Ascending' },
    { value: 'desc', label: 'Descending' },
  ],
}
