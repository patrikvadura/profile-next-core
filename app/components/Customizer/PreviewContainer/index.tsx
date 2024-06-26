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
      className={`${className} w-full bg-primary flex flex-col justify-center ps-12 overflow-hidden`}
    >
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
    </div>
  )
}
