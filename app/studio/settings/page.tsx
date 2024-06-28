'use client'

import React from 'react'
import data from '@/app/lib/dataCustomizer.json'
import { DomainProvider } from '@/app/components/Customizer/DNSChecker/DomainContext'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'

export default function StudioTickets() {
  const pageData = data.settings
  const { data: session, status } = useSession()

  return (
    <DomainProvider>
      <div className="container mt-auto mx-auto h-[85vh] px-8 py-12 bg-white rounded-tl-3xl rounded-tr-3xl flex flex-col space-y-8 overflow-hidden mb-0">
        <div className="flex flex-row justify-between items-center space-x-8">
          <h2 className="text-primary text-3xl font-bold">{pageData.title}</h2>
        </div>

        <span>{status && status}</span>

        {/*{session ? (*/}
        {/*  <div className="flex flex-row items-center text-white text-sm text-opacity-50 border-l-2 border-white border-opacity-10 pl-4 space-x-4">*/}
        {/*    <span className="text-primary">{session.user.name ?? session.user.email}</span>*/}
        {/*    <button onClick={() => signOut()}>Sign Out</button>*/}
        {/*  </div>*/}
        {/*) : (*/}
        {/*  <Link href="/auth/signin" className="text-white">*/}
        {/*    Sign In*/}
        {/*  </Link>*/}
        {/*)}*/}

        <div>Prázdné</div>
      </div>
    </DomainProvider>
  )
}
