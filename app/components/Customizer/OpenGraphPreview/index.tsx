'use client'
import React from 'react'
import data from '@/app/lib/data.json'

interface Props {
  title?: string
  subtitle?: string
  name?: string
}

const OpenGraphPreview: React.FC<Props> = ({ title, subtitle, name }) => {
  return (
    <div className="mx-auto">
      <div className="fontDefault">
        <div className="relative bg-[var(--global-secondary)] w-full h-[180px] flex flex-row justify-start items-end">
          <div
            className="absolute bg-cover w-full h-full opacity-20 p-2 flex flex-col items-start justify-end"
            style={{
              backgroundImage: `url(${data.meta.openGraph.image})`,
            }}
          />
          <div className="w-full h-full p-4 flex flex-col items-start justify-between">
            <h3 className="text-[8px] invert">{name}</h3>

            <div className="w-full h-full flex flex-col items-start justify-end">
              <h3 className="text-xs invert opacity-75">{subtitle}</h3>

              <h2 className="text-lg font-semibold invert">{title}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OpenGraphPreview
