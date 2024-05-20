import React from 'react'
import Button from '@/app/ui/Button'
import { Download } from '@/app/ui/Icons/Download'
import { PreviewContainerProps } from '@/app/lib/customizer'

export default function PreviewContainer({
  children,
  totalPrice,
  totalTime,
  onExport,
}: PreviewContainerProps) {
  return (
    <div className="basis-7/12 bg-[#F3F3F5] flex flex-col justify-center ps-12 overflow-hidden">
      <div className="flex flex-col items-end justify-end bottom-0 space-y-4 right-0 py-8 px-8 bg-gray-100">
        <h2 className="text-3xl font-semibold border-r-4 border-r-[#73E790] pr-4">
          Přizpůsobte si svoji vizitku
        </h2>

        <p className="opacity-75">
          Připravte si sami dokonalé zadání, odhad ceny a trvání zhotovaní pro vaši vizitku. Je to
          snadné!
        </p>
      </div>

      <div className="border-s-[12px] border-y-[12px] border-black bg-white rounded-s-3xl overflow-x-hidden overflow-y-scroll z-20">
        <div className="overflow-hidden" style={{ width: '90vw', height: '55vh', margin: 'auto' }}>
          <div
            style={{
              transform: 'scale(0.55)',
              transformOrigin: 'top left',
              width: '100vw',
              height: '100vh',
              overflow: 'scroll',
            }}
          >
            {children}
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between bottom-0 right-0 py-8 px-8 bg-gray-100">
        <div className="flex flex-col text-base text-black text-opacity-75">
          <h4>Výsledná cena</h4>
          <h3 className="text-black font-semibold text-2xl">
            {totalPrice.toLocaleString('cs-CZ', { useGrouping: true })} Kč
          </h3>

          <h4>
            Doba zhotovení:{' '}
            <span className="font-bold">
              {totalTime.toLocaleString('cs-CZ', { useGrouping: true })} dny
            </span>
          </h4>
        </div>

        <div className="flex flex-row space-x-4">
          <Button className="bg-[#E5E5E9] rounded-full !normal-case" onClick={onExport}>
            Export <Download size={24} />
          </Button>

          <Button className="bg-[#72E790] rounded-full !normal-case">Odeslat návrh</Button>
        </div>
      </div>
    </div>
  )
}
