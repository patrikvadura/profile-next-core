export interface Option {
  value: string
  label: string
  image?: string
}

export interface CustomizerOptions {
  variant: Option[]
  layout: Option[]
  align: Option[]
  order: Option[]
}

export interface ColorPickerProps {
  primaryColor?: (color: string | any) => void
  secondaryColor?: (color: string | any) => void
  accentColor?: (color: string | any) => void
}

export interface ColorPickerAboutProps {
  backgroundColor?: (color: string | any) => void
  accentBgColor?: (color: string | any) => void
  accentFgColor?: (color: string | any) => void
  typoColor?: (color: string | any) => void
}

export interface ColorUpdaterProps {
  backgroundColor?: string | any | undefined
  accentBgColor?: string | any | undefined
  accentFgColor?: string | any | undefined
  typoColor?: string | any | undefined
}

export const options: CustomizerOptions = {
  variant: [
    { value: '01', label: 'Varianta 01', image: 'about/about_01' },
    { value: '02', label: 'Varianta 02', image: 'about/about_02' },
    { value: '03', label: 'Varianta 03', image: 'about/about_03' },
    { value: '04', label: 'Varianta 04', image: 'about/about_04' },
    { value: '05', label: 'Varianta 05', image: 'about/about_05' },
  ],
  layout: [
    { value: 'transparent', label: 'Transparent', image: '' },
    { value: 'background', label: 'Background', image: '' },
    { value: 'border', label: 'Border', image: '' },
  ],
  align: [
    { value: 'left', label: 'Left', image: '' },
    { value: 'full', label: 'Full', image: '' },
    { value: 'right', label: 'Right', image: '' },
  ],
  order: [
    { value: 'asc', label: 'Ascending', image: '' },
    { value: 'desc', label: 'Descending', image: '' },
  ],
}
