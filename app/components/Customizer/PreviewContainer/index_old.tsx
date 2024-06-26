'use client'
import React from 'react'
import Button from '@/app/ui/Button'
import { Download } from '@/app/ui/Icons/Download'
import { PreviewContainerProps } from '@/app/lib/customizer'
import { useOtherState } from '@/app/lib/useState/useOtherState'
import { Icon } from '@iconify/react'

export default function PreviewContainer({
  children,
  totalPrice,
  totalTime,
  onExport,
  className,
  classPreview,
}: PreviewContainerProps) {
  const other = useOtherState()
  const breakpoints = [
    {
      size: 'sm',
      icon: 'tabler:device-mobile',
    },
    {
      size: 'md',
      icon: 'tabler:device-ipad-horizontal',
    },
    {
      size: 'lg',
      icon: 'tabler:device-laptop',
    },
  ]

  return (
    <div
      className={`${className} basis-7/12 bg-[#F3F3F5] flex flex-col justify-center ps-12 overflow-hidden`}
    >
      <div className="flex align-middle justify-end space-y-4 right-0 py-6 px-8 bg-gray-100">
        <h2 className="text-2xl font-semibold border-r-4 border-r-[#73E790] pe-4">
          Přizpůsobte si svoji vizitku
        </h2>
      </div>

      <div className="flex flex-row justify-end items-center space-x-3 py-4 px-8 w-full">
        {breakpoints.map((breakpoint, index) => (
          <button
            key={index}
            className={`flex flex-row items-center text-base pt-4 ${
              other.currentBreakpoint === index
                ? 'text-black font-bold'
                : 'text-black text-opacity-50'
            }`}
            onClick={() => other.setCurrentBreakpoint(index)}
          >
            <Icon
              icon={breakpoint.icon}
              className={`${
                other.currentBreakpoint === index ? 'text-opacity-100' : 'text-opacity-30'
              } text-black hover:text-opacity-100 text-2xl`}
            />
          </button>
        ))}
      </div>

      <div className="mx-auto border-[12px] border-black bg-white rounded-3xl overflow-x-hidden overflow-y-scroll z-20">
        <div
          className="overflow-hidden"
          style={{
            width:
              other.currentBreakpoint === 0
                ? '15vw'
                : other.currentBreakpoint === 1
                ? '40vw'
                : '90vw',
            height: '55vh',
            margin: 'auto',
          }}
        >
          <div
            className={classPreview}
            style={{
              transform: 'scale(0.55)',
              transformOrigin: 'top left',
              width:
                other.currentBreakpoint === 0
                  ? '28vw'
                  : other.currentBreakpoint === 1
                  ? '73vw'
                  : '100vw',
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
