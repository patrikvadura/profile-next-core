import React from 'react'
import CustomizerLogo from '@/app/components/Customizer/Logo'
import ThemeSwitcher from '@/app/ui/ThemeSwitcher'
import Button from '@/app/ui/Button'

export default function OptionsContainer({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="basis-5/12">
      <div className="p-8 w-[600px] h-screen text-black space-y-8 overflow-y-scroll overflow-x-hidden">
        <div className="flex flex-row justify-between">
          <CustomizerLogo />

          <div className="">
            <ThemeSwitcher />
          </div>
        </div>

        <h2 className="text-4xl font-semibold">Přizpůsobte si svoji vizitku</h2>

        <div className="flex flex-col space-y-4">{children}</div>
      </div>
    </div>
  )
}
