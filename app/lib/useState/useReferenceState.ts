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
      title: 'Patrik Indra | Finanční specialista',
      description:
        'S webovou vizitkou od VisioSnap jsem velmi spokojen. Na širokém trhu jsem nenašel žádnou podobnou službu, která by byla takhle jednoduchá, rychlá a levná. Zcela mě tohle řešení vyhouje pro můj firemní profil, respektive webovou vizitku.',
    },
    {
      title: 'Kreativní Duo | marketing a sociální sítě',
      description:
        'Jakmile jsme se dozvěděli, že VisioSnap vyšli na trh se svým řešením webových vizitek, ani vteřinu jsme neváhaly a okamžitě za jejich pomoci vytvořily webovou stránku pro prezentaci našich kreaktivních služeb.',
    },
    {
      title: 'Kavárna La Dolce Vita',
      description:
        'Jsem nadšený z naší nové webové vizitky od VisioSnap. Proces byl neuvěřitelně rychlý a jednoduchý, a výsledná stránka perfektně reflektuje atmosféru naší kavárny. Doporučujeme všem podnikům, které hledají efektivní a cenově dostupné řešení pro svou online prezentaci.',
    },
    {
      title: 'Svatební agentura',
      description:
        'VisioSnap nám vytvořili nádhernou webovou vizitku, která elegantně představuje naše svatební služby. Celý proces byl hladký a rychlý, a výsledná stránka je přesně to, co jsme hledali. Moc děkujeme za skvělou spolupráci!',
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
