'use client'

import React, { useEffect } from 'react'
import data from '@/app/lib/data.json'
import * as CookieConsent from 'vanilla-cookieconsent'
import getConfig from './Config'
import addEventListeners from './Listeners'
import { Cookie } from '@/app/ui/Icons/Cookie'

if (typeof window !== 'undefined' && data.profile.cookie) {
  // @ts-ignore
  import('vanilla-cookieconsent/dist/cookieconsent.css')
  // @ts-ignore
  import('@/app/components/CookieConsent/cookieConsent.css')
}

const ResetCookieConsent = () => {
  CookieConsent.reset(true)
  CookieConsent.run(getConfig())
}

const CookieConsentComponent = () => {
  useEffect(() => {
    addEventListeners()
    CookieConsent.run(getConfig())
  }, [])

  return (
    <>
      <div onClick={CookieConsent.showPreferences}>
        <Cookie className="cursor-pointer mr-1 text-light-footer-text text-opacity-50 hover:text-opacity-100 text-2xl transition duration-300 ease-in-out" />
      </div>

      {/*<button type="button" onClick={ResetCookieConsent}>*/}
      {/*  Reset cookie consent*/}
      {/*</button>*/}
    </>
  )
}

export default CookieConsentComponent
