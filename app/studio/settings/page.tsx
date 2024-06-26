'use client'

import React, { useEffect, useState } from 'react'
import data from '@/app/lib/dataCustomizer.json'
import { DomainProvider } from '@/app/components/Customizer/DNSChecker/DomainContext'

export default function StudioTickets() {
  const pageData = data.settings
  return (
    <DomainProvider>
      <div className="container mt-auto mx-auto h-[85vh] px-8 py-12 bg-white rounded-tl-3xl rounded-tr-3xl flex flex-col space-y-8 overflow-hidden mb-0">
        <div className="flex flex-row justify-between items-center space-x-8">
          <h2 className="text-primary text-3xl font-bold">{pageData.title}</h2>
        </div>

        <div>Prázdné</div>
      </div>
    </DomainProvider>
  )
}
