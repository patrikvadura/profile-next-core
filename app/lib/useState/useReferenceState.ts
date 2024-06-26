'use client'
import { useState } from 'react'
import colors from '@/app/lib/colors.json'
import data from '@/app/lib/data.json'

interface BoxReference {
  title: string
  description: string
}

interface ReferenceState {
  referenceVariant: string | undefined
  setReferenceVariant: (value: string) => void
  referenceLayout: string | undefined
  setReferenceLayout: (value: string) => void
  referenceAlign: string | undefined
  setReferenceAlign: (value: string) => void
  referenceBackground: string | undefined
  setReferenceBackground: (value: string | undefined) => void
  referenceAccentBg: string | undefined
  setReferenceAccentBg: (value: string | undefined) => void
  referenceTypo: string | undefined
  setReferenceTypo: (value: string | undefined) => void
  referenceTypoLg: string | undefined
  setReferenceTypoLg: (value: string | undefined) => void
  referenceContentTitle: string
  setReferenceContentTitle: (value: string) => void
  boxesReference: BoxReference[]
  addBoxReference: () => void
  removeBoxReference: (index: number) => void
  updateBoxReference: (index: number, field: string, value: string) => void
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
  const [boxesReference, setBoxesReference] = useState<BoxReference[]>([
    {
      title: 'Patrik Indra | Finanční specialista',
      description:
        'S webovou vizitkou od VisioSnap jsem velmi spokojen. Na širokém trhu jsem nenašel žádnou podobnou službu, která by byla takhle jednoduchá, rychlá a levná. Zcela mě tohle řešení vyhovuje pro můj firemní profil, respektive webovou vizitku.',
    },
    {
      title: 'Kreativní Duo | marketing a sociální sítě',
      description:
        'Jakmile jsme se dozvěděli, že VisioSnap vyšli na trh se svým řešením webových vizitek, ani vteřinu jsme neváhaly a okamžitě za jejich pomoci vytvořily webovou stránku pro prezentaci našich kreativních služeb.',
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

  const addBoxReference = () => {
    setBoxesReference([...boxesReference, { title: '', description: '' }])
  }

  const removeBoxReference = (index: number) => {
    setBoxesReference(boxesReference.filter((_, i) => i !== index))
  }

  const updateBoxReference = (index: number, field: string, value: string) => {
    setBoxesReference(
      boxesReference.map((box, i) => (i === index ? { ...box, [field]: value } : box)),
    )
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
    boxesReference,
    addBoxReference,
    removeBoxReference,
    updateBoxReference,
  }
}
