import React from 'react'
import Link from 'next/link'
import CustomizerLogo from '@/app/components/Customizer/Logo'
import ThemeSwitcher from '@/app/ui/ThemeSwitcher'
import { OptionContainerProps } from '@/app/lib/customizer'

export default function PreviewContainer({ children, className, style }: OptionContainerProps) {
  return (
    <div className={`${className} basis-5/12`}>
      <div className="p-8 w-[600px] h-screen text-black space-y-8 overflow-y-scroll overflow-x-hidden">
        <div className="flex flex-row justify-between">
          <CustomizerLogo />

          <div className="flex flex-row items-center space-x-4">
            <Link href="#" className="text-sm underline">
              Požádat o pomoc
            </Link>
            <ThemeSwitcher previewMode />
          </div>
        </div>

        <div className="flex flex-col space-y-4">{children}</div>
      </div>
    </div>
  )
}
