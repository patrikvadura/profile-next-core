'use client'
import { useState } from 'react'
import colors from '@/app/lib/colors.json'
import data from '@/app/lib/data.json'

interface Box {
  title: string
  content: string
  icon: string
  iconShow: boolean
}

interface ServiceState {
  serviceVariant: string | undefined | any
  setServiceVariant: (value: string) => void
  serviceLayout: string | undefined | any
  setServiceLayout: (value: string) => void
  serviceAlign: string | undefined | any
  setServiceAlign: (value: string) => void
  serviceRadius: string | undefined | any
  setServiceRadius: (value: string) => void
  serviceBackground: string | undefined | any
  setServiceBackground: (value: string) => void
  serviceAccentBg: string | undefined | any
  setServiceAccentBg: (value: string) => void
  serviceAccentFg: string | undefined | any
  setServiceAccentFg: (value: string) => void
  serviceTypo: string | undefined | any
  setServiceTypo: (value: string) => void
  serviceBoxBackground: string | undefined | any
  setServiceBoxBackground: (value: string) => void
  serviceBoxTypo: string | undefined | any
  setServiceBoxTypo: (value: string) => void
  serviceBoxIcon: string | undefined | any
  setServiceBoxIcon: (value: string) => void
  servicesContentTitle: string | undefined | any
  setServicesContentTitle: (value: React.SetStateAction<string>) => void
  boxes: Box[]
  addBox: () => void
  removeBox: (index: number) => void
  updateBox: (index: number, field: string, value: any) => void
  servicesContentBoxSpecial: boolean
  setServicesContentBoxSpecial: (value: boolean) => void
  servicesContentBoxSpecialTitle: string | undefined | any
  setServicesContentBoxSpecialTitle: (value: React.SetStateAction<string>) => void
  servicesContentBoxSpecialLink: string | undefined | any
  setServicesContentBoxSpecialLink: (value: React.SetStateAction<string>) => void
  servicesContentBoxSpecialCustomLink: string | undefined | any
  setServicesContentBoxSpecialCustomLink: (value: React.SetStateAction<string>) => void
}

export const useServiceState = (): ServiceState => {
  const [serviceVariant, setServiceVariant] = useState<string>('01')
  const [serviceLayout, setServiceLayout] = useState<string>('transparent')
  const [serviceAlign, setServiceAlign] = useState<string>('left')
  const [serviceRadius, setServiceRadius] = useState<string>('none')
  const [serviceBackground, setServiceBackground] = useState<string | undefined>(
    colors.service.background,
  )
  const [serviceAccentBg, setServiceAccentBg] = useState<string | undefined>(
    colors.service.accent.background,
  )
  const [serviceAccentFg, setServiceAccentFg] = useState<string | undefined>(
    colors.service.accent.foreground,
  )
  const [serviceTypo, setServiceTypo] = useState<string | undefined>(colors.service.typo)
  const [serviceBoxBackground, setServiceBoxBackground] = useState<string | undefined>(
    colors.service.box.background,
  )
  const [serviceBoxTypo, setServiceBoxTypo] = useState<string | undefined>(colors.service.box.typo)
  const [serviceBoxIcon, setServiceBoxIcon] = useState<string | undefined>(colors.service.box.icon)

  // Content
  const [servicesContentTitle, setServicesContentTitle] = useState<string>('Nabídka mých služeb')

  // Boxes
  const [boxes, setBoxes] = useState<Box[]>([
    {
      title: 'Úvěry',
      content: data.services.description,
      icon: 'streamline:money-bank-institution-money-saving-bank-payment-finance',
      iconShow: true,
    },
    {
      title: 'Investice',
      content: data.services.description,
      icon: 'material-symbols:finance-mode-rounded',
      iconShow: true,
    },
    {
      title: 'Pojištění',
      content: data.services.description,
      icon: 'material-symbols:ecg-heart-outline-sharp',
      iconShow: true,
    },
  ])

  const addBox = () => {
    setBoxes([...boxes, { title: '', content: '', icon: '', iconShow: false }])
  }

  const removeBox = (index: number) => {
    setBoxes(boxes.filter((_, i) => i !== index))
  }

  const updateBox = (index: number, field: string, value: any) => {
    setBoxes(boxes.map((box, i) => (i === index ? { ...box, [field]: value } : box)))
  }

  // Box - special
  const [servicesContentBoxSpecial, setServicesContentBoxSpecial] = useState<boolean>(true)
  const [servicesContentBoxSpecialTitle, setServicesContentBoxSpecialTitle] = useState<string>(
    'Máte zájem o nezávaznou poptávku?',
  )
  const [servicesContentBoxSpecialLink, setServicesContentBoxSpecialLink] =
    useState<string>('#contact')
  const [servicesContentBoxSpecialCustomLink, setServicesContentBoxSpecialCustomLink] =
    useState<string>('#contact')

  return {
    serviceVariant,
    setServiceVariant,
    serviceLayout,
    setServiceLayout,
    serviceAlign,
    setServiceAlign,
    serviceRadius,
    setServiceRadius,
    serviceBackground,
    setServiceBackground,
    serviceAccentBg,
    setServiceAccentBg,
    serviceAccentFg,
    setServiceAccentFg,
    serviceTypo,
    setServiceTypo,
    serviceBoxBackground,
    setServiceBoxBackground,
    serviceBoxTypo,
    setServiceBoxTypo,
    serviceBoxIcon,
    setServiceBoxIcon,
    servicesContentTitle,
    setServicesContentTitle,
    boxes,
    addBox,
    removeBox,
    updateBox,
    servicesContentBoxSpecial,
    setServicesContentBoxSpecial,
    servicesContentBoxSpecialTitle,
    setServicesContentBoxSpecialTitle,
    servicesContentBoxSpecialLink,
    setServicesContentBoxSpecialLink,
    servicesContentBoxSpecialCustomLink,
    setServicesContentBoxSpecialCustomLink,
  }
}
