'use client'
import { useState } from 'react'
import colors from '@/app/lib/colors.json'
import data from '@/app/lib/data.json'

interface Box {
  title: string
  description: string
}

interface ReferenceState {
  referenceVariant: string | undefined | any
  setReferenceVariant: (value: string) => void
  referenceLayout: string | undefined | any
  setReferenceLayout: (value: string) => void
  referenceAlign: string | undefined | any
  setReferenceAlign: (value: string) => void
  referenceBackground: string | undefined | any
  setReferenceBackground: (value: string) => void
  referenceAccentBg: string | undefined | any
  setReferenceAccentBg: (value: string) => void
  referenceTypo: string | undefined | any
  setReferenceTypo: (value: string) => void
  referenceTypoLg: string | undefined | any
  setReferenceTypoLg: (value: string) => void
  referenceContentTitle: string | undefined | any
  setReferenceContentTitle: (value: string) => void
  boxes: Box[]
  addBox: () => void
  removeBox: (index: number) => void
  updateBox: (index: number, field: string, value: any) => void
}

export const useReferenceState = (): ReferenceState => {
  const [referenceVariant, setReferenceVariant] = useState<string>('01')
  const [referenceLayout, setReferenceLayout] = useState<string>('background')
  const [referenceAlign, setReferenceAlign] = useState<string>('center')
  const [referenceBackground, setReferenceBackground] = useState<string | undefined>(
    colors.reference.background,
  )
  const [referenceAccentBg, setReferenceAccentBg] = useState<string | undefined>(
    colors.reference.accent.background,
  )
  const [referenceTypo, setReferenceTypo] = useState<string | undefined>(colors.reference.typo)
  const [referenceTypoLg, setReferenceTypoLg] = useState<string | undefined>(
    colors.reference.typoLg,
  )

  // Content
  const [referenceContentTitle, setReferenceContentTitle] = useState<string>('Reference')

  // Boxes
  const [boxes, setBoxes] = useState<Box[]>([
    {
      title: 'Manželé V. | Brno',
      description:
        'S Patrikem jsme se setkali kvůli pojištění nemovitosti. V jednoduchosti nám vysvětlil rozdíly mezi pojišťovnami a vybral pro nás nejlepší variantu. Od té doby s ním konzultujeme životní pojištění a veškeré investice. Jeho celkový přehled a upřímné jednání jsme ve financích hledali.',
    },
    {
      title: 'Libor N. | Uherský Brod',
      description:
        'S Patrikem se známe už řadu let a naši spolupráci si nemohu vynachválit. Vím, že potřeby klienta jsou pro něj na prvním místě. V oblasti financí vždy dokáže věci srozumitelně vysvětlit a následně poradit s výběrem ideálního řešení. K mé velké spokojenosti spolu řešíme také otázky ohledně povinného ručení, životního pojištění, investic i penze.',
    },
    {
      title: 'Libor O. | Uherský Brod',
      description:
        'S Patrikem se známe od malička a řeším s ním všechny své pojištění i investice. O všechno se mi skvěle stará, dokázal pro mě najít nejvhodnější finanční nástroje a vždy se na něj můžu obrátit. Mohu jedině doporučit.',
    },
    {
      title: 'Manželé J. | Uherský Brod',
      description:
        'Před několika lety jsme se potkali přes doporučení s panem Indrou kvůli hypotéce. Od první schůzky byla jeho práce profesionální a efektivní. Během 3 týdnů bylo vše vyřešeno a my mohli čerpat peníze. Navíc připravil finanční plán, díky kterému můžeme hypotéku splatit dříve a tím pádem ušetřit nemalé peníze. Spolupráci s panem Indrou jen doporučujeme.',
    },
  ])

  const addBox = () => {
    setBoxes([...boxes, { title: '', description: '' }])
  }

  const removeBox = (index: number) => {
    setBoxes(boxes.filter((_, i) => i !== index))
  }

  const updateBox = (index: number, field: string, value: any) => {
    setBoxes(boxes.map((box, i) => (i === index ? { ...box, [field]: value } : box)))
  }

  return {
    referenceVariant,
    setReferenceVariant,
    referenceLayout,
    setReferenceLayout,
    referenceAlign,
    setReferenceAlign,
    referenceBackground,
    setReferenceBackground,
    referenceAccentBg,
    setReferenceAccentBg,
    referenceTypo,
    setReferenceTypo,
    referenceTypoLg,
    setReferenceTypoLg,
    referenceContentTitle,
    setReferenceContentTitle,
    boxes,
    addBox,
    removeBox,
    updateBox,
  }
}
