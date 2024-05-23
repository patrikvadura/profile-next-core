'use client'
import { useState } from 'react'
import colors from '@/app/lib/colors.json'
import data from '@/app/lib/data.json'

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
  servicesContentBox1: boolean
  setServicesContentBox1: (value: boolean) => void
  servicesContentBox1Title: string | undefined | any
  setServicesContentBox1Title: (value: React.SetStateAction<string>) => void
  servicesContentBox1Content: string | undefined | any
  setServicesContentBox1Content: (value: React.SetStateAction<string>) => void
  servicesContentBox1Icon: string | undefined | any
  setServicesContentBox1Icon: (value: React.SetStateAction<string>) => void
  servicesContentBox1IconShow: boolean
  setServicesContentBox1IconShow: (value: boolean) => void
  servicesContentBox2: boolean
  setServicesContentBox2: (value: boolean) => void
  servicesContentBox2Title: string | undefined | any
  setServicesContentBox2Title: (value: React.SetStateAction<string>) => void
  servicesContentBox2Content: string | undefined | any
  setServicesContentBox2Content: (value: React.SetStateAction<string>) => void
  servicesContentBox2Icon: string | undefined | any
  setServicesContentBox2Icon: (value: React.SetStateAction<string>) => void
  servicesContentBox2IconShow: boolean
  setServicesContentBox2IconShow: (value: boolean) => void
  servicesContentBox3: boolean
  setServicesContentBox3: (value: boolean) => void
  servicesContentBox3Title: string | undefined | any
  setServicesContentBox3Title: (value: React.SetStateAction<string>) => void
  servicesContentBox3Content: string | undefined | any
  setServicesContentBox3Content: (value: React.SetStateAction<string>) => void
  servicesContentBox3Icon: string | undefined | any
  setServicesContentBox3Icon: (value: React.SetStateAction<string>) => void
  servicesContentBox3IconShow: boolean
  setServicesContentBox3IconShow: (value: boolean) => void
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
  const [servicesContentBox1, setServicesContentBox1] = useState<boolean>(true)
  const [servicesContentBox1Title, setServicesContentBox1Title] = useState<string>('Úvěry')
  const [servicesContentBox1Content, setServicesContentBox1Content] = useState<string>(
    data.services.description,
  )
  const [servicesContentBox1Icon, setServicesContentBox1Icon] = useState<string>(
    'streamline:money-bank-institution-money-saving-bank-payment-finance',
  )
  const [servicesContentBox1IconShow, setServicesContentBox1IconShow] = useState<boolean>(true)
  const [servicesContentBox2, setServicesContentBox2] = useState<boolean>(true)
  const [servicesContentBox2Title, setServicesContentBox2Title] = useState<string>('Investice')
  const [servicesContentBox2Content, setServicesContentBox2Content] = useState<string>(
    data.services.description,
  )
  const [servicesContentBox2Icon, setServicesContentBox2Icon] = useState<string>(
    'material-symbols:finance-mode-rounded',
  )
  const [servicesContentBox2IconShow, setServicesContentBox2IconShow] = useState<boolean>(true)
  const [servicesContentBox3, setServicesContentBox3] = useState<boolean>(true)
  const [servicesContentBox3Title, setServicesContentBox3Title] = useState<string>('Pojištění')
  const [servicesContentBox3Content, setServicesContentBox3Content] = useState<string>(
    data.services.description,
  )
  const [servicesContentBox3Icon, setServicesContentBox3Icon] = useState<string>(
    'material-symbols:ecg-heart-outline-sharp',
  )
  const [servicesContentBox3IconShow, setServicesContentBox3IconShow] = useState<boolean>(true)

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
    servicesContentBox1,
    setServicesContentBox1,
    servicesContentBox1Title,
    setServicesContentBox1Title,
    servicesContentBox1Content,
    setServicesContentBox1Content,
    servicesContentBox1Icon,
    setServicesContentBox1Icon,
    servicesContentBox1IconShow,
    setServicesContentBox1IconShow,
    servicesContentBox2,
    setServicesContentBox2,
    servicesContentBox2Title,
    setServicesContentBox2Title,
    servicesContentBox2Content,
    setServicesContentBox2Content,
    servicesContentBox2Icon,
    setServicesContentBox2Icon,
    servicesContentBox2IconShow,
    setServicesContentBox2IconShow,
    servicesContentBox3,
    setServicesContentBox3,
    servicesContentBox3Title,
    setServicesContentBox3Title,
    servicesContentBox3Content,
    setServicesContentBox3Content,
    servicesContentBox3Icon,
    setServicesContentBox3Icon,
    servicesContentBox3IconShow,
    setServicesContentBox3IconShow,
  }
}
