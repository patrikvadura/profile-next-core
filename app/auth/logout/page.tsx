'use client'

import { signOut } from 'next-auth/react'
import React, { useEffect } from 'react'
import data from '@/app/lib/dataCustomizer.json'

export default function Logout() {
  const pageData = data.logOut

  useEffect(() => {
    signOut({ callbackUrl: '/' })
  }, [])

  return (
    <div className="container mt-auto mx-auto h-[85vh] flex flex-col space-y-8 overflow-hidden mb-0">
      <div className="mt-20 mx-auto w-[450px] bg-white px-8 py-12 rounded-3xl">
        <div className="flex flex-row justify-between items-center space-x-8">
          <h2 className="text-primary text-3xl font-bold">{pageData.title}</h2>
        </div>
        <p>Odhlášení...</p>
      </div>
    </div>
  )
}
