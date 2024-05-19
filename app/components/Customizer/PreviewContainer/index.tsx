import React from 'react'
import Button from '@/app/ui/Button'
import { Download } from '@/app/ui/Icons/Download'

export default function PreviewContainer({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="basis-7/12 bg-[#F3F3F5] flex flex-col justify-center ps-12 overflow-hidden">
      <div className="border-s-[12px] border-y-[12px] border-black bg-white rounded-s-3xl overflow-y-scroll z-20">
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
        <div className="flex flex-col text-base text-gray-400">
          <span>Výsledná cena</span>
          <h4 className="text-black font-semibold text-2xl">3 000 Kč</h4>

          <span>Doba zhotovení: 3 dny</span>
        </div>

        <div className="flex flex-row space-x-4">
          <Button className="bg-[#E5E5E9] rounded-full !normal-case">
            Export <Download size={24} />
          </Button>

          <Button className="bg-[#72E790] rounded-full !normal-case">Odeslat návrh</Button>
        </div>
      </div>
    </div>
  )
}
