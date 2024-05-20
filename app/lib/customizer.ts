import { ReactNode } from 'react'

export interface PreviewContainerProps {
  children?: ReactNode
  totalPrice: number
  totalTime: number
  onExport: any
}

export interface ToggleDropdownProps {
  id: string
  label: string
  link?: string | undefined
  checked: boolean | undefined
  toggled?: boolean
  onChange?: any
  preview?: boolean
  children?: ReactNode
}

export interface Option {
  value: string
  label: string
  image?: string | any
}

export interface CustomizerOptions {
  variant?: Option[] | any
  layout?: Option[] | any
  imageOpacity?: Option[] | any
  align?: Option[] | any
  order?: Option[] | any
  radius?: Option[] | any
}

export interface OptionSelectorProps {
  title?: string
  options?: Option[] | any
  selectedOption: string
  onChange: (value: string) => void
  visual?: boolean
}

export interface ColorPickerProps {
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
    { value: '04', label: 'Varianta 04', image: 'service/service_04' },
    { value: '05', label: 'Varianta 05', image: 'service/service_05' },
  ],
  layout: [
    { value: 'transparent', label: 'Transparent' },
    { value: 'background', label: 'Background' },
    { value: 'border', label: 'Border' },
  ],
  align: [
    { value: 'left', label: 'Left' },
    { value: 'center', label: 'center' },
    { value: 'right', label: 'Right' },
  ],
  radius: [
    { value: 'none', label: 'Rovné' },
    { value: 'rounded', label: 'Radius' },
  ],
}
