'use client'
import React from 'react'
import Customizer from '@/app/components/Customizer'
import Link from 'next/link'
// import { useSession, signOut } from 'next-auth/react'

export default function Preview() {
  // const { data: session, status } = useSession()

  return (
    <>
      {/*<div className="absolute top-0 left-0 p-8 z–[9999]">*/}
      {/*  {session ? (*/}
      {/*    <div className="flex flex-row items-center text-white text-sm text-opacity-50 border-l-2 border-white border-opacity-10 pl-4 space-x-4">*/}
      {/*      <span>{session.user.name ?? session.user.email}</span>*/}
      {/*      <button onClick={() => signOut()}>Sign Out</button>*/}
      {/*    </div>*/}
      {/*  ) : (*/}
      {/*    <Link href="/auth/signin" className="text-white">*/}
      {/*      Sign In*/}
      {/*    </Link>*/}
      {/*  )}*/}
      {/*</div>*/}

      <Customizer />
    </>
  )
}
